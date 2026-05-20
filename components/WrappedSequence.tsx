"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import WrappedScene from "@/components/WrappedScene";
import PetHeroScene from "@/components/PetHeroScene";
import NarratorBox from "@/components/NarratorBox";
import { NOME_EIXO_LONGO, SPRITES_POR_EIXO } from "@/data/bixinhos";
import { nivelConfianca, type EixoSigla, type NivelConfianca } from "@/lib/matching";
import type { Sessao } from "@/lib/sessao";
import type { Campus } from "@/data/cursos";

type CursoResultado = {
  nome: string;
  papelMissao: string;
  campus: Campus;
  score: number;
};

type Resultado = {
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

type Props = {
  resultado: Resultado;
  sessao: Sessao;
  onReset: () => void;
};

const AUTO_ADVANCE_MS = 6000;
const SCENE_COUNT = 5;
const SWIPE_THRESHOLD = 50;

function formatarTempo(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}m ${s.toString().padStart(2, "0")}s`;
}

function opcaoMaisEscolhida(sessao: Sessao): { letra: string; count: number } | null {
  if (sessao.respostas.length === 0) return null;
  const contagem = new Map<number, number>();
  for (const r of sessao.respostas) {
    contagem.set(r.opcao, (contagem.get(r.opcao) ?? 0) + 1);
  }
  let topIdx = 0;
  let topN = 0;
  contagem.forEach((n, idx) => {
    if (n > topN) {
      topN = n;
      topIdx = idx;
    }
  });
  return { letra: String.fromCharCode(65 + topIdx), count: topN };
}

export default function WrappedSequence({ resultado, sessao, onReset }: Props) {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  const sprite = SPRITES_POR_EIXO[resultado.eixoDominante];
  const eixoLongo = NOME_EIXO_LONGO[resultado.eixoDominante];
  const top1 = resultado.top3[0];
  const alts = resultado.top3.slice(1);
  const tempoTotal = formatarTempo(Date.now() - sessao.iniciadoEm);
  const opcaoTop = opcaoMaisEscolhida(sessao);

  const confianca = useMemo<NivelConfianca>(
    () =>
      nivelConfianca(
        resultado.top3.map((c) => ({ ...c, vetor: [0, 0, 0, 0, 0, 0, 0] })) as never,
      ),
    [resultado],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion.current) setPaused(true);
  }, []);

  const next = useCallback(() => {
    setIdx((i) => Math.min(SCENE_COUNT - 1, i + 1));
  }, []);

  const prev = useCallback(() => {
    setIdx((i) => Math.max(0, i - 1));
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    if (idx >= SCENE_COUNT - 1) return;
    const t = setTimeout(next, AUTO_ADVANCE_MS);
    return () => clearTimeout(t);
  }, [idx, paused, next]);

  // Keyboard
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartY.current = e.touches[0]?.clientY ?? null;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStartY.current;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientY ?? start;
    const dy = end - start;
    touchStartY.current = null;
    if (dy > SWIPE_THRESHOLD) next();
    else if (dy < -SWIPE_THRESHOLD) prev();
    else next(); // tap puro = avança
  }

  function onClick(e: React.MouseEvent) {
    // Não consome clicks em botões internos
    const target = e.target as HTMLElement;
    if (target.closest("button, a")) return;
    next();
  }

  return (
    <main
      className="relative mx-auto flex min-h-screen max-w-[480px] flex-col"
      onClick={onClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Progress dots */}
      <div className="absolute top-4 left-0 right-0 flex justify-center gap-2 z-10">
        {Array.from({ length: SCENE_COUNT }).map((_, i) => (
          <span
            key={i}
            className="h-1 transition-all"
            style={{
              width: i === idx ? 24 : 10,
              background:
                i === idx
                  ? "var(--sun-yellow)"
                  : i < idx
                    ? "var(--sun-pink)"
                    : "rgba(212, 168, 255, 0.3)",
              boxShadow: i === idx ? "0 0 6px var(--sun-yellow)" : "none",
            }}
          />
        ))}
      </div>

      {/* Pause toggle */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setPaused((p) => !p);
        }}
        className="absolute top-3 right-3 font-terminal text-xs px-2 py-1 z-10"
        style={{
          background: "rgba(13, 2, 33, 0.6)",
          border: "1px solid var(--text-dim)",
          color: "var(--text-dim)",
        }}
        aria-label={paused ? "retomar" : "pausar"}
      >
        {paused ? "▶ play" : "❚❚ pause"}
      </button>

      <div className="relative flex-1 min-h-screen">
        {/* Cena 1 — Eixo dominante */}
        <WrappedScene active={idx === 0} label="01 // EIXO DOMINANTE">
          <p
            className="font-terminal text-base uppercase tracking-widest mb-3"
            style={{ color: "var(--text-dim)" }}
          >
            // teu eixo é
          </p>
          <h1
            className="font-pixel-title text-2xl sm:text-3xl leading-tight"
            style={{
              color: "var(--sun-yellow)",
              textShadow: "0 0 18px var(--sun-orange), 0 0 36px var(--sun-pink)",
            }}
          >
            {eixoLongo.toUpperCase()}
          </h1>
          <p
            className="font-terminal text-sm uppercase tracking-widest mt-6"
            style={{ color: "var(--grid-cyan)" }}
          >
            // {resultado.eixoDominante}
          </p>
        </WrappedScene>

        {/* Cena 2 — Profile phrase */}
        <WrappedScene active={idx === 1} label="02 // PERFIL">
          <p
            className="font-terminal text-base uppercase tracking-widest mb-5"
            style={{ color: "var(--text-dim)" }}
          >
            // sobre você
          </p>
          <p
            className="font-pixel-body text-xl italic leading-relaxed"
            style={{
              color: "var(--text)",
              textShadow: "0 0 12px rgba(255, 46, 147, 0.4)",
            }}
          >
            “{resultado.bixinho.personalidade}”
          </p>
        </WrappedScene>

        {/* Cena 3 — Pet hero */}
        <PetHeroScene
          active={idx === 2}
          sprite={sprite}
          bixinhoNome={resultado.bixinho.bixinho_nome}
          codinome={sessao.codinome}
        />

        {/* Cena 4 — Personal stats */}
        <WrappedScene active={idx === 3} label="04 // STATS DA MISSÃO">
          <div className="flex flex-col gap-5 items-center">
            <div>
              <p
                className="font-terminal text-xs uppercase tracking-widest"
                style={{ color: "var(--text-dim)" }}
              >
                // tempo decorrido
              </p>
              <p
                className="font-pixel-title text-xl mt-1"
                style={{
                  color: "var(--grid-cyan)",
                  textShadow: "0 0 12px var(--grid-cyan)",
                }}
              >
                {tempoTotal}
              </p>
            </div>

            {opcaoTop && (
              <div>
                <p
                  className="font-terminal text-xs uppercase tracking-widest"
                  style={{ color: "var(--text-dim)" }}
                >
                  // opção mais escolhida
                </p>
                <p
                  className="font-pixel-title text-xl mt-1"
                  style={{
                    color: "var(--sun-pink)",
                    textShadow: "0 0 12px var(--sun-pink)",
                  }}
                >
                  {opcaoTop.letra}{" "}
                  <span
                    className="font-terminal text-base"
                    style={{ color: "var(--text-dim)" }}
                  >
                    × {opcaoTop.count}
                  </span>
                </p>
              </div>
            )}

            <div>
              <p
                className="font-terminal text-xs uppercase tracking-widest"
                style={{ color: "var(--text-dim)" }}
              >
                // confiança
              </p>
              <p
                className="font-pixel-title text-base mt-1"
                style={{
                  color:
                    confianca === "alta"
                      ? "var(--mint)"
                      : confianca === "hibrido"
                        ? "var(--sun-yellow)"
                        : "var(--violet)",
                  textShadow:
                    confianca === "alta"
                      ? "0 0 10px var(--mint)"
                      : confianca === "hibrido"
                        ? "0 0 10px var(--sun-yellow)"
                        : "0 0 10px var(--violet)",
                }}
              >
                {confianca === "alta" && "🎯 ALTA AFINIDADE"}
                {confianca === "hibrido" && "🔀 PERFIL HÍBRIDO"}
                {confianca === "exploratorio" && "⚠️ EXPLORATÓRIO"}
              </p>
            </div>
          </div>
        </WrappedScene>

        {/* Cena 5 — Curso + CTA + despedida + reset */}
        <WrappedScene active={idx === 4} label="05 // PAPEL NA MISSÃO">
          <div className="flex flex-col items-center">
            <p
              className="font-terminal text-xs uppercase tracking-widest mb-2"
              style={{ color: "var(--text-dim)" }}
            >
              // {top1.papelMissao}
            </p>
            <p
              className="font-pixel-body text-3xl font-bold mb-1"
              style={{
                color: "var(--sun-yellow)",
                textShadow: "0 0 16px var(--sun-orange), 0 2px 0 var(--sun-pink)",
              }}
            >
              {top1.nome}
            </p>
            <p
              className="font-terminal text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--text-dim)" }}
            >
              campus · {top1.campus}
            </p>

            {alts.length > 0 && (
              <div className="w-full text-left mb-5">
                <p
                  className="font-terminal text-xs uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-dim)" }}
                >
                  // compatíveis também
                </p>
                <ul className="font-pixel-body text-base">
                  {alts.map((c) => (
                    <li key={c.nome} className="py-0.5">
                      <span style={{ color: "var(--grid-cyan)" }}>▸</span> {c.nome}{" "}
                      <span
                        className="font-terminal text-xs px-1.5 py-0.5 ml-1"
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
              </div>
            )}

            <div className="w-full text-left">
              <NarratorBox
                portrait={sprite}
                text={resultado.bixinho.msg_despedida}
                variant="resultado"
                speaker={resultado.bixinho.bixinho_nome}
              />
            </div>

            <p
              className="font-terminal text-xs uppercase tracking-widest mb-3 mt-2"
              style={{ color: "var(--text-dim)" }}
            >
              // compartilhamento chega no D4
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onReset();
                router.push("/");
              }}
              className="font-pixel-body text-sm underline opacity-70 hover:opacity-100"
              style={{ color: "var(--sun-yellow)" }}
            >
              ↻ refazer protocolo
            </button>
          </div>
        </WrappedScene>
      </div>

      {/* Hint de navegação */}
      {idx < SCENE_COUNT - 1 && (
        <div
          className="fixed bottom-6 left-0 right-0 text-center font-terminal text-xs uppercase tracking-widest opacity-60 pointer-events-none"
          style={{ color: "var(--text-dim)" }}
        >
          tap · swipe ↓ · → pra avançar
        </div>
      )}
    </main>
  );
}
