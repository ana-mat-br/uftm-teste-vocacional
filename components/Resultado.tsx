"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useSessao } from "@/lib/use-sessao";
import { SPRITES_POR_EIXO } from "@/data/bixinhos";
import { topCursos, precisaDesempate, type EixoSigla } from "@/lib/matching";
import type { Campus } from "@/data/cursos";

type CursoResultado = {
  nome: string;
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
    // Não chama o endpoint enquanto pode ter desempate pendente
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

  const sprite = useMemo(
    () => (resultado ? SPRITES_POR_EIXO[resultado.eixoDominante] : null),
    [resultado],
  );

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
          o bixinho-IA tá organizando os pensamentos…
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
  if (erro || !resultado || !sprite) {
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
          {erro ?? "resposta vazia do servidor"}
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

  const top1 = resultado.top3[0];
  const alts = resultado.top3.slice(1);

  return (
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col items-center px-5 py-6 text-center">

      <div
        className="font-terminal text-sm tracking-widest uppercase anim-flicker"
        style={{ color: "var(--grid-cyan)" }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full mr-2 anim-pulse"
          style={{ background: "var(--sun-pink)" }}
        />
        TRANSMISSÃO FINAL
      </div>

      <h1
        className="font-pixel-title text-xs leading-relaxed mt-6 mb-2"
        style={{
          color: "var(--sun-yellow)",
          textShadow: "0 0 10px var(--sun-orange)",
        }}
      >
        COMISSÃO<br />INTERESTELAR UFTM
      </h1>

      {/* Bloco: VOCÊ */}
      <div
        className="w-full px-3 py-2 mb-5 flex items-center justify-center gap-2"
        style={{
          background: "rgba(255, 204, 0, 0.08)",
          border: "1px dashed rgba(255, 204, 0, 0.3)",
        }}
      >
        <span className="text-xl">👤</span>
        <div className="text-left">
          <div
            className="font-terminal text-xs tracking-widest uppercase"
            style={{ color: "var(--text-dim)" }}
          >
            // você
          </div>
          <div
            className="font-pixel-title text-xs"
            style={{ color: "var(--sun-yellow)", textShadow: "0 0 8px var(--sun-orange)" }}
          >
            {sessao.codinome}
          </div>
        </div>
      </div>

      {/* Bloco: SEU COMPANHEIRO DE BORDO */}
      <p
        className="font-terminal text-xs uppercase tracking-widest mb-2"
        style={{ color: "var(--text-dim)" }}
      >
        🤖 // seu companheiro de bordo
      </p>

      <div className="my-2">
        <Image
          src={sprite}
          alt={`Bixinho do eixo ${resultado.eixoDominante}`}
          width={180}
          height={180}
          className="pixel-sprite anim-float"
          style={{
            filter:
              "drop-shadow(0 0 12px var(--sun-yellow)) drop-shadow(0 0 20px var(--sun-pink))",
          }}
        />
      </div>

      <p
        className="font-pixel-title text-xs mb-2"
        style={{ color: "var(--grid-cyan)", textShadow: "0 0 10px var(--grid-cyan)" }}
      >
        {resultado.bixinho.bixinho_nome}
      </p>
      <p
        className="font-pixel-body text-base italic mb-6 max-w-xs"
        style={{ color: "var(--text-dim)" }}
      >
        “{resultado.bixinho.personalidade}”
      </p>

      {/* Resultado principal */}
      <div
        className="w-full px-4 py-4 border-2 mb-4"
        style={{
          borderColor: "var(--sun-pink)",
          background: "rgba(26, 6, 51, 0.7)",
          boxShadow: "0 0 25px rgba(255, 46, 147, 0.4)",
        }}
      >
        <p
          className="font-terminal text-xs uppercase tracking-widest mb-1"
          style={{ color: "var(--text-dim)" }}
        >
          // papel na missão
        </p>
        <p
          className="font-pixel-title text-xs mb-3"
          style={{ color: "var(--sun-pink)", textShadow: "0 0 10px var(--sun-pink)" }}
        >
          {top1.papelMissao.toUpperCase()}
        </p>
        <p
          className="font-terminal text-xs uppercase tracking-widest mb-1"
          style={{ color: "var(--text-dim)" }}
        >
          // no séc. XXI
        </p>
        <p
          className="font-pixel-body text-3xl font-bold"
          style={{
            color: "var(--sun-yellow)",
            textShadow: "0 0 16px var(--sun-orange), 0 2px 0 var(--sun-pink)",
          }}
        >
          {top1.nome}
        </p>
        <p
          className="font-terminal text-xs mt-1 uppercase tracking-widest"
          style={{ color: "var(--text-dim)" }}
        >
          campus · {top1.campus}
        </p>
      </div>

      {/* Top 2 e 3 */}
      {alts.length > 0 && (
        <div className="w-full text-left mb-6">
          <p
            className="font-terminal text-xs uppercase tracking-widest mb-2"
            style={{ color: "var(--text-dim)" }}
          >
            // funções compatíveis também observadas
          </p>
          <ul className="font-pixel-body text-base">
            {alts.map((c) => (
              <li key={c.nome} className="py-1">
                <span style={{ color: "var(--grid-cyan)" }}>▸</span> {c.nome}{" "}
                <span
                  className="font-terminal text-xs px-2 py-0.5 ml-1"
                  style={{
                    background: "rgba(255, 204, 0, 0.15)",
                    color: "var(--sun-yellow)",
                  }}
                >
                  {c.campus.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>
          <p
            className="font-terminal text-xs mt-3 italic"
            style={{ color: "var(--text-dim)" }}
          >
            → visite os estandes correspondentes na feira
          </p>
        </div>
      )}

      {/* Mensagem final do bixinho */}
      <div
        className="w-full px-3 py-3 mb-6 text-left"
        style={{
          background: "rgba(0, 240, 255, 0.06)",
          borderLeft: "3px solid var(--grid-cyan)",
        }}
      >
        <p
          className="font-pixel-body text-base italic leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          <span style={{ color: "var(--grid-cyan)" }}>&gt; </span>
          {resultado.bixinho.msg_despedida}
        </p>
      </div>

      {/* Botão de compartilhar (placeholder D4) */}
      <p
        className="font-terminal text-xs uppercase tracking-widest mb-3 mt-2"
        style={{ color: "var(--text-dim)" }}
      >
        // compartilhamento chega no D4
      </p>

      {/* Refazer */}
      <button
        onClick={() => {
          reset();
          router.push("/");
        }}
        className="font-pixel-body text-sm underline opacity-70 hover:opacity-100"
        style={{ color: "var(--sun-yellow)" }}
      >
        ↻ refazer protocolo
      </button>

      {/* Debug colapsável */}
      <details
        className="w-full mt-8 font-terminal text-xs"
        style={{ color: "var(--text-dim)" }}
      >
        <summary className="cursor-pointer">debug</summary>
        <div className="mt-2 px-3 py-2 text-left" style={{ background: "rgba(0,0,0,0.3)" }}>
          <div>sessão salva: {resultado.sessaoId ?? "(falha)"}</div>
          <div>fonte bixinho: {resultado.bixinhoFonte}</div>
          <div>eixo dominante: {resultado.eixoDominante}</div>
          <div>vetor: [{sessao.vetor.join(", ")}]</div>
          <div>respondeu: {sessao.respostas.length} cenas</div>
        </div>
      </details>

      <footer
        className="font-terminal text-xs mt-10 opacity-70"
        style={{ color: "var(--text-dim)" }}
      >
        UFTM · Feira de Profissões 2026
      </footer>
    </main>
  );
}
