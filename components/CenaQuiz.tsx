"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Cena } from "@/data/cenas";
import { useSessao } from "@/lib/use-sessao";
import { CENAS, TOTAL_CENAS_PONTUAVEIS } from "@/data/cenas";
import NarratorBox from "@/components/NarratorBox";
import Icon from "@/components/Icon";
import SceneHeader from "@/components/SceneHeader";

// Co-piloto ainda misterioso durante o quiz — só olhos cyan piscando no escuro.
// A identidade real (1 dos 7 bixinhos) é revelada no /resultado.
const NARRATOR_PORTRAIT = "/sprites/co-piloto-misterio.svg";

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
        <p className="font-terminal text-lg" style={{ color: "var(--text-dim)" }}>
          carregando sessão…
        </p>
      </main>
    );
  }

  // Progresso = posição da cena no array CENAS (desacoplado do id)
  const progresso = CENAS.findIndex((c) => c.id === cena.id) + 1;
  const total = TOTAL_CENAS_PONTUAVEIS;

  return (
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col px-5 py-6 md:max-w-5xl md:px-10 md:py-10">

      <SceneHeader icon="radar" className="mb-3">
        UFTM-KEPLER · CENA {progresso}/{total}
      </SceneHeader>

      {/* Codinome do aluno */}
      <div
        className="font-terminal text-base tracking-widest uppercase mb-4 opacity-90 inline-flex items-center gap-2"
        style={{ color: "var(--text-dim)" }}
      >
        <Icon name="compass" size="1em" />
        // você: <span style={{ color: "var(--sun-yellow)" }}>{sessao.codinome}</span>
      </div>

      {/* Conteúdo em 2 colunas no desktop: pergunta à esquerda, opções à direita */}
      <div className="md:grid md:grid-cols-2 md:gap-10 md:items-start">

        {/* Coluna esquerda: pergunta */}
        <div className="md:sticky md:top-10">
          {/* Título da cena */}
          <h1
            className="font-pixel-title text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-4 uppercase"
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
            className="px-5 py-4 border-l-2 backdrop-blur-sm mb-4"
            style={{
              borderColor: "var(--sun-pink)",
              background: "rgba(26, 6, 51, 0.6)",
            }}
          >
            <p className="font-pixel-body text-lg md:text-xl leading-relaxed">{cena.narrativa}</p>
          </div>

          {/* Fala do bixinho (Star Fox narrator) */}
          {cena.falaBixinho && (
            <NarratorBox
              key={cena.id}
              portrait={NARRATOR_PORTRAIT}
              text={cena.falaBixinho}
              variant={cena.id === 2 ? "intro" : "cena"}
            />
          )}
        </div>

        {/* Coluna direita: opções */}
        <div className="flex flex-col gap-3">
          {cena.opcoes.map((opcao, idx) => (
            <button
              key={idx}
              onClick={() => handleEscolher(idx)}
              disabled={enviando}
              className="text-left px-4 py-4 border-2 transition-all font-pixel-body text-lg md:text-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4"
              style={{
                borderColor: "var(--sun-pink)",
                background: "rgba(26, 6, 51, 0.7)",
                color: "var(--text)",
                boxShadow: "0 0 12px rgba(255, 46, 147, 0.25)",
              }}
            >
              <span
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 44,
                  height: 44,
                  background: "rgba(13, 2, 33, 0.7)",
                  border: "1px solid var(--grid-cyan)",
                  color: "var(--grid-cyan)",
                  boxShadow:
                    "0 0 10px rgba(1, 205, 254, 0.35), inset 0 0 8px rgba(1, 205, 254, 0.15)",
                }}
              >
                <Icon
                  name={opcao.icon}
                  size={22}
                  strokeWidth={2}
                />
              </span>
              <span className="leading-snug">{opcao.texto}</span>
            </button>
          ))}
        </div>
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
