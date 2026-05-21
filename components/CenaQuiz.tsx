"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Cena } from "@/data/cenas";
import { useSessao } from "@/lib/use-sessao";
import { CENAS, TOTAL_CENAS_PONTUAVEIS } from "@/data/cenas";

type Props = {
  cena: Cena;
  /** ID da próxima cena (null se for a última pontuável). */
  proximoId: number | null;
};

export default function CenaQuiz({ cena, proximoId }: Props) {
  const router = useRouter();
  const { sessao, carregando, responder } = useSessao();
  const [enviando, setEnviando] = useState(false);

  // Se o aluno cair direto numa cena sem ter iniciado a sessão na home,
  // mandamos pra raiz pra começar do início.
  useEffect(() => {
    if (!carregando && !sessao) {
      router.replace("/");
    }
  }, [carregando, sessao, router]);

  function handleEscolher(opcaoIndex: number) {
    if (enviando || !sessao) return;
    setEnviando(true);
    const opcao = cena.opcoes[opcaoIndex];
    responder(cena.id, opcaoIndex, opcao.pontos);
    // pequeno delay pra dar sensação de "processando"
    setTimeout(() => {
      if (proximoId !== null) {
        router.push(`/cena/${proximoId}`);
      } else {
        router.push("/resultado");
      }
    }, 200);
  }

  if (carregando || !sessao) {
    return (
      <main className="mx-auto flex min-h-screen max-w-[480px] items-center justify-center px-6 text-center">
        <p className="font-terminal text-base" style={{ color: "var(--text-dim)" }}>
          carregando sessão…
        </p>
      </main>
    );
  }

  // Progresso = posição da cena no array CENAS (desacoplado do id)
  const progresso = CENAS.findIndex((c) => c.id === cena.id) + 1;
  const total = TOTAL_CENAS_PONTUAVEIS;

  return (
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col px-5 py-6">

      {/* Header terminal */}
      <div
        className="font-terminal text-sm tracking-widest uppercase mb-3"
        style={{ color: "var(--grid-cyan)" }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full mr-2 anim-pulse"
          style={{ background: "var(--sun-pink)" }}
        />
        UFTM-KEPLER · CENA {progresso}/{total}
      </div>

      {/* Codinome do aluno */}
      <div
        className="font-terminal text-xs tracking-widest uppercase mb-4 opacity-90"
        style={{ color: "var(--text-dim)" }}
      >
        👤 // você: <span style={{ color: "var(--sun-yellow)" }}>{sessao.codinome}</span>
      </div>

      {/* Título da cena */}
      <h1
        className="font-pixel-title text-xs sm:text-sm leading-relaxed mt-2 mb-4 uppercase"
        style={{
          color: "var(--sun-yellow)",
          textShadow: "0 0 10px var(--sun-orange)",
          letterSpacing: 1,
        }}
      >
        ▸ {cena.titulo}
      </h1>

      {/* Narrativa */}
      <div
        className="px-4 py-3 border-l-2 backdrop-blur-sm mb-4"
        style={{
          borderColor: "var(--sun-pink)",
          background: "rgba(26, 6, 51, 0.6)",
        }}
      >
        <p className="font-pixel-body text-base leading-relaxed">{cena.narrativa}</p>
      </div>

      {/* Fala do bixinho */}
      {cena.falaBixinho && (
        <div
          className="px-3 py-2 mb-5"
          style={{
            background: "rgba(0, 240, 255, 0.08)",
            borderLeft: "3px solid var(--grid-cyan)",
          }}
        >
          <p
            className="font-pixel-body text-sm italic"
            style={{ color: "var(--text-bright, var(--text))" }}
          >
            <span style={{ color: "var(--grid-cyan)" }}>&gt; </span>
            {cena.falaBixinho}
          </p>
        </div>
      )}

      {/* Opções */}
      <div className="flex flex-col gap-3">
        {cena.opcoes.map((opcao, idx) => (
          <button
            key={idx}
            onClick={() => handleEscolher(idx)}
            disabled={enviando}
            className="text-left px-4 py-3 border-2 transition-all font-pixel-body text-base hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              borderColor: "var(--sun-pink)",
              background: "rgba(26, 6, 51, 0.7)",
              color: "var(--text)",
              boxShadow: "0 0 12px rgba(255, 46, 147, 0.25)",
            }}
          >
            <span className="text-xl mr-2">{opcao.emoji}</span>
            <span>{opcao.texto}</span>
          </button>
        ))}
      </div>

      {/* Barra de progresso */}
      <div
        className="mt-8 h-1 w-full"
        style={{ background: "rgba(255, 46, 147, 0.15)" }}
      >
        <div
          className="h-1 transition-all"
          style={{
            background: "var(--sun-pink)",
            width: `${(progresso / total) * 100}%`,
            boxShadow: "0 0 8px var(--sun-pink)",
          }}
        />
      </div>
    </main>
  );
}
