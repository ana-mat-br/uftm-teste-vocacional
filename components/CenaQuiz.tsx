"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Cena } from "@/data/cenas";
import { useSessao } from "@/lib/use-sessao";
import { CENAS, TOTAL_CENAS_PONTUAVEIS } from "@/data/cenas";
import NarratorBox from "@/components/NarratorBox";
import Icon from "@/components/Icon";
import SceneHeader from "@/components/SceneHeader";
import StatsBar from "@/components/StatsBar";
import {
  playChoiceSelect,
  playQuestionTransition,
  startAmbientPad,
  stopAmbientPad,
} from "@/lib/audio";

// Copiloto ainda misterioso durante o quiz — só olhos cyan piscando no escuro.
// A identidade real (1 dos 7 bixinhos) é revelada no /resultado.
const NARRATOR_PORTRAIT = "/sprites/copiloto-misterio.svg";

type Props = {
  cena: Cena;
  /** ID da próxima cena (null se for a última pontuável). */
  proximoId: number | null;
};

type StatsPayload = {
  cena: number;
  total: number;
  opcoes: { opcao: number; n: number; pct: number }[];
};

const STATS_FETCH_TIMEOUT_MS = 1500;
const STATS_REVEAL_MS = 1800;

export default function CenaQuiz({ cena, proximoId }: Props) {
  const router = useRouter();
  const { sessao, carregando, responder } = useSessao();
  const [enviando, setEnviando] = useState(false);
  const [pickedIdx, setPickedIdx] = useState<number | null>(null);
  const [stats, setStats] = useState<StatsPayload | null>(null);

  // Se o aluno cair direto numa cena sem ter iniciado a sessão na home,
  // mandamos pra raiz pra começar do início.
  useEffect(() => {
    if (!carregando && !sessao) {
      router.replace("/");
    }
  }, [carregando, sessao, router]);

  useEffect(() => {
    startAmbientPad();
    return () => {
      stopAmbientPad();
    };
  }, []);

  function navegar() {
    if (proximoId !== null) {
      router.push(`/cena/${proximoId}`);
    } else {
      router.push("/resultado");
    }
  }

  async function handleEscolher(opcaoIndex: number) {
    if (enviando || !sessao) return;
    setEnviando(true);
    setPickedIdx(opcaoIndex);
    playChoiceSelect();
    const opcao = cena.opcoes[opcaoIndex];
    responder(cena.id, opcaoIndex, opcao.pontos);

    // Prefetch do próximo destino enquanto stats carrega / revela
    if (proximoId !== null) router.prefetch(`/cena/${proximoId}`);
    else router.prefetch("/resultado");

    // Busca stats em paralelo com timeout — se demorar, segue sem mostrar.
    const statsPromise = fetch(`/api/stats/cena/${cena.id}`, { cache: "no-store" })
      .then((r) => (r.ok ? (r.json() as Promise<StatsPayload>) : null))
      .catch(() => null);

    const timeout = new Promise<null>((resolve) =>
      setTimeout(() => resolve(null), STATS_FETCH_TIMEOUT_MS),
    );

    const resolved = await Promise.race([statsPromise, timeout]);

    if (resolved && resolved.total > 0) {
      setStats(resolved);
      await new Promise((r) => setTimeout(r, STATS_REVEAL_MS));
    } else {
      // sem stats, mantém o feel de "processando" curto
      await new Promise((r) => setTimeout(r, 200));
    }

    playQuestionTransition();
    navegar();
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
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col px-5 py-6 md:max-w-6xl md:px-10 md:py-10">

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
      <div className="md:grid md:grid-cols-[5fr_6fr] md:gap-10 md:items-start">

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
            <p className="font-pixel-body text-lg md:text-base lg:text-lg leading-relaxed md:leading-snug lg:leading-normal">{cena.narrativa}</p>
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
          {cena.opcoes.map((opcao, idx) => {
            const isPick = pickedIdx === idx;
            const dimmed = pickedIdx !== null && !isPick;
            return (
              <button
                key={idx}
                onClick={() => handleEscolher(idx)}
                disabled={enviando}
                className="text-left px-4 py-4 border-2 transition-all font-pixel-body text-lg md:text-xl hover:scale-[1.02] disabled:cursor-not-allowed flex items-center gap-4"
                style={{
                  borderColor: isPick ? "var(--sun-yellow)" : "var(--sun-pink)",
                  background: isPick
                    ? "rgba(255, 247, 0, 0.12)"
                    : "rgba(26, 6, 51, 0.7)",
                  color: "var(--text)",
                  boxShadow: isPick
                    ? "0 0 18px rgba(255, 247, 0, 0.5)"
                    : "0 0 12px rgba(255, 46, 147, 0.25)",
                  opacity: dimmed ? 0.4 : 1,
                }}
              >
                <span
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(13, 2, 33, 0.7)",
                    border: `1px solid ${isPick ? "var(--sun-yellow)" : "var(--grid-cyan)"}`,
                    color: isPick ? "var(--sun-yellow)" : "var(--grid-cyan)",
                    boxShadow: isPick
                      ? "0 0 12px rgba(255, 247, 0, 0.5), inset 0 0 8px rgba(255, 247, 0, 0.2)"
                      : "0 0 10px rgba(1, 205, 254, 0.35), inset 0 0 8px rgba(1, 205, 254, 0.15)",
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
            );
          })}

          {stats && pickedIdx !== null && (
            <StatsBar
              opcoes={cena.opcoes.map((_, idx) => {
                const row = stats.opcoes.find((o) => o.opcao === idx);
                return { pct: row?.pct ?? 0, n: row?.n ?? 0 };
              })}
              userPick={pickedIdx}
              total={stats.total}
            />
          )}
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
