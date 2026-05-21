"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSessao } from "@/lib/use-sessao";
import { topCursos, precisaDesempate, type EixoSigla } from "@/lib/matching";
import type { Campus } from "@/data/cursos";
import WrappedSequence from "@/components/WrappedSequence";

type CursoResultado = {
  nome: string;
  grupo?: string;
  papelMissao: string;
  campus: Campus;
  score: number;
};

type FinalizarResposta = {
  sessaoId: string | null;
  eixoDominante: EixoSigla;
  top3: CursoResultado[];
  bixinho: {
    bixinho_nome: string;
    personalidade: string;
    msg_despedida: string;
  };
  bixinhoFonte: "llm" | "fallback";
};

function detectarUserAgent(): string {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "mobile-ios";
  if (/Android/i.test(ua)) return "mobile-android";
  return "desktop";
}

export default function Resultado() {
  const router = useRouter();
  const { sessao, carregando: carregandoSessao, reset, finalizar } = useSessao();

  const [resultado, setResultado] = useState<FinalizarResposta | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregandoLLM, setCarregandoLLM] = useState(false);
  const chamouRef = useRef(false);

  // Se não tem sessão, manda pra home. Se precisa desempatar primeiro,
  // manda pra /desempate (ele volta pra cá depois).
  useEffect(() => {
    if (carregandoSessao) return;
    if (!sessao) {
      router.replace("/");
      return;
    }
    if (!sessao.desempateAplicado) {
      const top3 = topCursos(sessao.vetor, 3);
      if (precisaDesempate(top3)) {
        router.replace("/desempate");
      }
    }
  }, [carregandoSessao, sessao, router]);

  // Quando a sessão carregar, chama /api/finalizar (1x só, mesmo com re-renders)
  useEffect(() => {
    if (!sessao || chamouRef.current) return;
    if (!sessao.desempateAplicado) {
      const top3 = topCursos(sessao.vetor, 3);
      if (precisaDesempate(top3)) return;
    }
    chamouRef.current = true;
    setCarregandoLLM(true);

    fetch("/api/finalizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        codinome: sessao.codinome,
        vetor: sessao.vetor,
        respostas: sessao.respostas,
        iniciadoEm: sessao.iniciadoEm,
        userAgentTipo: detectarUserAgent(),
      }),
    })
      .then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return (await r.json()) as FinalizarResposta;
      })
      .then((data) => {
        setResultado(data);
        finalizar();
      })
      .catch((e) => {
        console.error("falha em /api/finalizar:", e);
        setErro(e instanceof Error ? e.message : "erro desconhecido");
      })
      .finally(() => {
        setCarregandoLLM(false);
      });
  }, [sessao, finalizar]);

  // Loading state
  if (carregandoSessao || !sessao || carregandoLLM || (!resultado && !erro)) {
    return (
      <main className="mx-auto flex min-h-screen max-w-[480px] flex-col items-center justify-center px-6 text-center">
        <div
          className="font-terminal text-base tracking-widest uppercase anim-flicker"
          style={{ color: "var(--grid-cyan)" }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full mr-2 anim-pulse"
            style={{ background: "var(--sun-pink)" }}
          />
          PROCESSANDO PROTOCOLO
        </div>
        <p
          className="font-pixel-body text-base mt-6"
          style={{ color: "var(--text-dim)" }}
        >
          o co-piloto tá organizando os pensamentos…
        </p>
        <div
          className="mt-8 h-1 w-48"
          style={{ background: "rgba(255, 46, 147, 0.15)" }}
        >
          <div
            className="h-1 anim-pulse"
            style={{
              background: "var(--sun-pink)",
              width: "100%",
              boxShadow: "0 0 8px var(--sun-pink)",
            }}
          />
        </div>
      </main>
    );
  }

  // Erro
  if (erro || !resultado) {
    return (
      <main className="mx-auto flex min-h-screen max-w-[480px] flex-col items-center justify-center px-6 text-center">
        <p
          className="font-terminal text-base"
          style={{ color: "var(--sun-pink)" }}
        >
          // erro de transmissão
        </p>
        <p
          className="font-pixel-body text-base mt-4"
          style={{ color: "var(--text-dim)" }}
        >
          {erro ?? "resposta vazia do sistema"}
        </p>
        <button
          onClick={() => {
            chamouRef.current = false;
            window.location.reload();
          }}
          className="font-pixel-body text-sm mt-6 underline"
          style={{ color: "var(--sun-yellow)" }}
        >
          ↻ tentar de novo
        </button>
      </main>
    );
  }

  return (
    <WrappedSequence
      resultado={resultado}
      sessao={sessao}
      onReset={reset}
    />
  );
}
