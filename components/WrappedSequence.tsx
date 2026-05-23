"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import WrappedScene from "@/components/WrappedScene";
import PetHeroScene from "@/components/PetHeroScene";
import CursoRevealScene from "@/components/CursoRevealScene";
import AssinaturaScene from "@/components/AssinaturaScene";
import Icon, { type IconName } from "@/components/Icon";
import {
  playCursoReveal,
  playPetReveal,
  playTransitionSwell,
  playWrappedFinale,
  releaseMusic,
  requestMusic,
} from "@/lib/audio";
import { NOME_EIXO_LONGO, SPRITES_POR_EIXO } from "@/data/bixinhos";
import { TOTAL_CENAS_PONTUAVEIS } from "@/data/cenas";
import {
  nivelConfianca,
  vetorParaPct,
  type EixoSigla,
  type NivelConfianca,
  type VetorEixos,
} from "@/lib/matching";
import type { Sessao } from "@/lib/sessao";
import type { Campus } from "@/data/cursos";

type CursoResultado = {
  nome: string;
  grupo?: string;
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

const AUTO_ADVANCE_MS = 6500;
const SCENE_COUNT = 6;
const FINAL_SCENE = SCENE_COUNT - 1;
const PET_REVEAL_SCENE = 3;
const SWIPE_THRESHOLD = 50;

const CONFIANCA_META: Record<
  NivelConfianca,
  { icon: IconName; color: string; label: string }
> = {
  alta: { icon: "target", color: "var(--mint)", label: "ALTA AFINIDADE" },
  hibrido: { icon: "shuffle", color: "var(--sun-yellow)", label: "PERFIL HÍBRIDO" },
  exploratorio: { icon: "warning", color: "var(--violet)", label: "EXPLORATÓRIO" },
};

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

function gerarInsightPerfil(vetor: VetorEixos, eixoDom: EixoSigla): string {
  const dist = vetorParaPct(vetor);
  const maxPct = Math.max(...dist.map((d) => d.pct));
  const nonZero = dist.filter((d) => d.pct > 5).length;
  const nomeDom = NOME_EIXO_LONGO[eixoDom].toLowerCase();

  if (maxPct >= 45) {
    return `seu perfil é cristalino — quase metade das suas escolhas foram pro lado ${nomeDom}.`;
  }
  if (nonZero >= 5) {
    return `você transita entre mundos — escolhe pelo contexto, não por uma identidade fixa. raro.`;
  }
  if (nonZero >= 4) {
    return `você equilibra ${nonZero} forças diferentes. o ${nomeDom} lidera, mas não sozinho.`;
  }
  if (nonZero <= 2) {
    return `você sabe quem é. duas linhas dominam, sem ruído. clareza vocacional.`;
  }
  return `o ${nomeDom} puxa a frente, mas duas outras correntes andam logo atrás.`;
}

export default function WrappedSequence({ resultado, sessao, onReset }: Props) {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartY = useRef<number | null>(null);

  const sprite = SPRITES_POR_EIXO[resultado.eixoDominante];
  const eixoLongo = NOME_EIXO_LONGO[resultado.eixoDominante];
  const top1 = resultado.top3[0];
  const alts = resultado.top3.slice(1);
  const tempoTotal = useMemo(
    () => formatarTempo(Date.now() - sessao.iniciadoEm),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const opcaoTop = useMemo(() => opcaoMaisEscolhida(sessao), [sessao]);
  const insight = useMemo(
    () => gerarInsightPerfil(sessao.vetor, resultado.eixoDominante),
    [sessao.vetor, resultado.eixoDominante],
  );

  const confianca = useMemo<NivelConfianca>(
    () => nivelConfianca(resultado.top3),
    [resultado.top3],
  );
  const confiancaMeta = CONFIANCA_META[confianca];

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaused(true);
    }
  }, []);

  useEffect(() => {
    // Troca a trilha de fundo do quiz pela "Secret Area" no wrapped — o crossfade
    // é tratado pelo engine de áudio quando duas trilhas têm ref ativa.
    requestMusic("secret");
    return () => {
      releaseMusic("secret");
    };
  }, []);

  const firstSceneRef = useRef(true);
  useEffect(() => {
    if (firstSceneRef.current) {
      firstSceneRef.current = false;
      return;
    }
    if (idx === PET_REVEAL_SCENE) {
      playPetReveal();
    } else if (idx === FINAL_SCENE) {
      playCursoReveal();
      // Atraso pra fanfarra entrar depois do impacto do slam, não em cima.
      window.setTimeout(() => playWrappedFinale(), 700);
    } else {
      playTransitionSwell();
    }
  }, [idx]);

  const next = useCallback(() => {
    setIdx((i) => Math.min(SCENE_COUNT - 1, i + 1));
  }, []);

  const prev = useCallback(() => {
    setIdx((i) => Math.max(0, i - 1));
  }, []);

  useEffect(() => {
    if (paused || idx >= FINAL_SCENE) return;
    // Cena climáctica do pet ganha mais tempo pra animação respirar.
    const delay = idx === PET_REVEAL_SCENE ? AUTO_ADVANCE_MS + 1500 : AUTO_ADVANCE_MS;
    const t = setTimeout(next, delay);
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
    else next();
  }

  function onClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.closest("button, a")) return;
    next();
  }

  function handleReset() {
    onReset();
    router.push("/");
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
        className="absolute top-3 right-3 font-terminal text-sm px-2 py-1 z-10 inline-flex items-center gap-1.5"
        style={{
          background: "rgba(13, 2, 33, 0.6)",
          border: "1px solid var(--text-dim)",
          color: "var(--text-dim)",
        }}
        aria-label={paused ? "retomar" : "pausar"}
      >
        <Icon name={paused ? "play" : "pause"} size="0.95em" />
        {paused ? "play" : "pause"}
      </button>

      <div className="relative flex-1 min-h-screen">
        {/* Cena 1 — Eixo dominante */}
        <WrappedScene active={idx === 0} label="01 // EIXO DOMINANTE">
          <p
            className="font-terminal text-lg uppercase tracking-widest mb-3"
            style={{ color: "var(--text-dim)" }}
          >
            // seu eixo é
          </p>
          <h1
            className="font-pixel-title text-xl sm:text-3xl md:text-4xl leading-tight whitespace-nowrap"
            style={{
              color: "var(--sun-yellow)",
              textShadow: "0 0 18px var(--sun-orange), 0 0 36px var(--sun-pink)",
            }}
          >
            {eixoLongo.toUpperCase()}
          </h1>
          <p
            className="font-terminal text-base uppercase tracking-widest mt-6"
            style={{ color: "var(--grid-cyan)" }}
          >
            // {resultado.eixoDominante}
          </p>
        </WrappedScene>

        {/* Cena 2 — Profile phrase */}
        <WrappedScene active={idx === 1} label="02 // PERFIL">
          <p
            className="font-terminal text-lg uppercase tracking-widest mb-5"
            style={{ color: "var(--text-dim)" }}
          >
            // sobre seu copiloto
          </p>
          <p
            className="font-pixel-body text-xl md:text-2xl italic leading-relaxed"
            style={{
              color: "var(--text)",
              textShadow: "0 0 12px rgba(255, 46, 147, 0.4)",
            }}
          >
            “{resultado.bixinho.personalidade}”
          </p>
        </WrappedScene>

        {/* Cena 3 — Assinatura (bars + insight) */}
        <AssinaturaScene
          active={idx === 2}
          vetor={sessao.vetor}
          eixoDominante={resultado.eixoDominante}
          insight={insight}
        />

        {/* Cena 4 — Pet hero (dramatic reveal) */}
        <PetHeroScene
          active={idx === 3}
          sprite={sprite}
          bixinhoNome={resultado.bixinho.bixinho_nome}
          codinome={sessao.codinome}
        />

        {/* Cena 5 — Stats da missão */}
        <WrappedScene active={idx === 4} label="04 // STATS DA MISSÃO">
          <div className="w-full flex flex-col">
            {/* Header HUD */}
            <div className="flex items-center justify-between mb-3 px-1">
              <p
                className="font-terminal text-[11px] sm:text-xs uppercase tracking-widest"
                style={{ color: "var(--text-dim)" }}
              >
                // MISSION_REPORT
              </p>
              <p
                className="font-terminal text-[11px] sm:text-xs"
                style={{ color: "var(--grid-cyan)" }}
              >
                STATUS: ✓ COMPLETE
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Stat 1: Tempo */}
              <div
                className="flex items-center gap-3 sm:gap-4 px-3 py-3 border-2 relative"
                style={{
                  borderColor: "var(--grid-cyan)",
                  background:
                    "linear-gradient(90deg, rgba(1, 205, 254, 0.14) 0%, rgba(1, 205, 254, 0.03) 100%)",
                  boxShadow:
                    "0 0 16px rgba(1, 205, 254, 0.25), inset 0 0 12px rgba(1, 205, 254, 0.08)",
                }}
              >
                <span
                  className="font-terminal text-[10px] sm:text-xs opacity-70 shrink-0"
                  style={{ color: "var(--grid-cyan)" }}
                >
                  [01]
                </span>
                <Icon name="clock" size={26} color="var(--grid-cyan)" />
                <p
                  className="font-terminal text-xs sm:text-sm uppercase tracking-widest flex-1 text-left"
                  style={{ color: "var(--grid-cyan)" }}
                >
                  TEMPO
                </p>
                <p
                  className="font-terminal text-2xl sm:text-3xl whitespace-nowrap leading-none"
                  style={{
                    color: "var(--grid-cyan)",
                    textShadow: "0 0 12px var(--grid-cyan)",
                  }}
                >
                  {tempoTotal}
                </p>
              </div>

              {/* Stat 2: Opção top */}
              {opcaoTop && (
                <div
                  className="flex items-center gap-3 sm:gap-4 px-3 py-3 border-2 relative"
                  style={{
                    borderColor: "var(--sun-pink)",
                    background:
                      "linear-gradient(90deg, rgba(255, 46, 147, 0.14) 0%, rgba(255, 46, 147, 0.03) 100%)",
                    boxShadow:
                      "0 0 16px rgba(255, 46, 147, 0.25), inset 0 0 12px rgba(255, 46, 147, 0.08)",
                  }}
                >
                  <span
                    className="font-terminal text-[10px] sm:text-xs opacity-70 shrink-0"
                    style={{ color: "var(--sun-pink)" }}
                  >
                    [02]
                  </span>
                  <Icon name="trophy" size={26} color="var(--sun-pink)" />
                  <p
                    className="font-terminal text-xs sm:text-sm uppercase tracking-widest flex-1 text-left"
                    style={{ color: "var(--sun-pink)" }}
                  >
                    OPÇÃO TOP
                  </p>
                  <p
                    className="font-terminal text-2xl sm:text-3xl leading-none whitespace-nowrap"
                    style={{
                      color: "var(--sun-pink)",
                      textShadow: "0 0 12px var(--sun-pink)",
                    }}
                  >
                    {opcaoTop.letra}
                    <span
                      className="text-base sm:text-lg ml-1.5"
                      style={{ color: "var(--sun-pink)" }}
                    >
                      ×{opcaoTop.count}
                    </span>
                  </p>
                </div>
              )}

              {/* Stat 3: Confiança */}
              <div
                className="flex items-center gap-3 sm:gap-4 px-3 py-3 border-2 relative"
                style={{
                  borderColor: confiancaMeta.color,
                  background: `linear-gradient(90deg, ${confiancaMeta.color}24 0%, ${confiancaMeta.color}07 100%)`,
                  boxShadow: `0 0 16px ${confiancaMeta.color}40, inset 0 0 12px ${confiancaMeta.color}14`,
                }}
              >
                <span
                  className="font-terminal text-[10px] sm:text-xs opacity-70 shrink-0"
                  style={{ color: confiancaMeta.color }}
                >
                  [03]
                </span>
                <Icon name={confiancaMeta.icon} size={26} color={confiancaMeta.color} />
                <p
                  className="font-terminal text-xs sm:text-sm uppercase tracking-widest flex-1 text-left"
                  style={{ color: confiancaMeta.color }}
                >
                  CONFIANÇA
                </p>
                <p
                  className="font-terminal text-xl sm:text-2xl uppercase leading-none text-right whitespace-nowrap"
                  style={{
                    color: confiancaMeta.color,
                    textShadow: `0 0 10px ${confiancaMeta.color}`,
                  }}
                >
                  {confiancaMeta.label}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between px-1">
              <span
                className="font-terminal text-[10px] uppercase tracking-widest opacity-60"
                style={{ color: "var(--text-dim)" }}
              >
                ▸ END_OF_TRANSMISSION
              </span>
              <span
                className="font-terminal text-[10px] opacity-60"
                style={{ color: "var(--text-dim)" }}
              >
                {TOTAL_CENAS_PONTUAVEIS}/{TOTAL_CENAS_PONTUAVEIS} CENAS
              </span>
            </div>
          </div>
        </WrappedScene>

        {/* Cena 6 — Curso reveal (finale dramático com pet) */}
        <CursoRevealScene
          active={idx === 5}
          sprite={sprite}
          bixinhoNome={resultado.bixinho.bixinho_nome}
          codinome={sessao.codinome}
          eixoLongo={eixoLongo}
          papelMissao={top1.papelMissao}
          cursoNome={top1.nome}
          campus={top1.campus}
          alts={alts.map((a) => ({ nome: a.nome, campus: a.campus }))}
          despedida={resultado.bixinho.msg_despedida}
          onReset={handleReset}
        />
      </div>

      {/* Hint de navegação */}
      {idx < SCENE_COUNT - 1 && (
        <div
          className="fixed bottom-6 left-0 right-0 text-center font-terminal text-sm uppercase tracking-widest opacity-60 pointer-events-none"
          style={{ color: "var(--text-dim)" }}
        >
          tap · swipe ↓ · → pra avançar
        </div>
      )}
    </main>
  );
}

