"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/motion";

type OpcaoStat = {
  /** % (0-100) — vinda do agregado server-side */
  pct: number;
  /** contagem absoluta de respostas pra essa opção */
  n: number;
};

type Props = {
  /** N opções na cena, mesmo se algumas tiveram 0 respostas */
  opcoes: OpcaoStat[];
  /** Índice da opção escolhida pelo usuário (pra destacar) */
  userPick: number;
  /** Total de respostas na cena */
  total: number;
};

/**
 * Mostra distribuição de respostas da cena depois que o aluno escolheu.
 * Cada opção vira uma barra horizontal animada (GSAP) com o pct,
 * destacando a escolha do usuário. Reduced-motion vai direto pro valor final.
 */
export default function StatsBar({ opcoes, userPick, total }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const bars = root.querySelectorAll<HTMLDivElement>(".stats-bar-fill");
    const nums = root.querySelectorAll<HTMLSpanElement>(".stats-bar-num");

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(bars, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(bars, {
        scaleX: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });
      nums.forEach((el, i) => {
        const target = opcoes[i]?.pct ?? 0;
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power2.out",
            snap: { textContent: 1 },
          },
        );
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(bars, { scaleX: 1 });
      nums.forEach((el, i) => {
        el.textContent = String(opcoes[i]?.pct ?? 0);
      });
    });

    return () => mm.revert();
  }, [opcoes]);

  return (
    <div ref={rootRef} className="flex flex-col gap-2 mt-3">
      <p
        className="font-terminal text-sm uppercase tracking-widest"
        style={{ color: "var(--text-dim)" }}
      >
        // assim votou a tripulação ({total} {total === 1 ? "resposta" : "respostas"})
      </p>
      {opcoes.map((op, idx) => {
        const isPick = idx === userPick;
        return (
          <div
            key={idx}
            className="flex items-center gap-3"
            style={{ opacity: isPick ? 1 : 0.7 }}
          >
            <span
              className="font-pixel-title text-xs w-6 text-center"
              style={{
                color: isPick ? "var(--sun-yellow)" : "var(--text-dim)",
              }}
            >
              {String.fromCharCode(65 + idx)}
            </span>
            <div
              className="flex-1 h-3 relative"
              style={{
                background: "rgba(13, 2, 33, 0.6)",
                border: "1px solid var(--text-dim)",
              }}
            >
              <div
                className="stats-bar-fill h-full"
                style={{
                  width: `${op.pct}%`,
                  background: isPick
                    ? "linear-gradient(90deg, var(--sun-yellow) 0%, var(--sun-pink) 100%)"
                    : "linear-gradient(90deg, var(--grid-cyan) 0%, var(--violet) 100%)",
                  boxShadow: isPick
                    ? "0 0 10px var(--sun-yellow)"
                    : "0 0 6px var(--grid-cyan)",
                }}
              />
            </div>
            <span
              className="font-pixel-title text-sm w-12 text-right"
              style={{
                color: isPick ? "var(--sun-yellow)" : "var(--text-dim)",
                textShadow: isPick ? "0 0 8px var(--sun-yellow)" : "none",
              }}
            >
              <span className="stats-bar-num">{op.pct}</span>%
            </span>
          </div>
        );
      })}
    </div>
  );
}
