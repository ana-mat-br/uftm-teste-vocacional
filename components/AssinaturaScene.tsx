"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/motion";
import WrappedScene from "@/components/WrappedScene";
import {
  vetorParaPct,
  type EixoSigla,
  type VetorEixos,
} from "@/lib/matching";
import { NOME_EIXO_LONGO } from "@/data/bixinhos";

type Props = {
  active: boolean;
  vetor: VetorEixos;
  eixoDominante: EixoSigla;
  insight: string;
};

export default function AssinaturaScene({
  active,
  vetor,
  eixoDominante,
  insight,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const insightRef = useRef<HTMLParagraphElement>(null);

  const dist = useMemo(
    () =>
      vetorParaPct(vetor).map((d) => ({
        ...d,
        nome: NOME_EIXO_LONGO[d.sigla],
        dominante: d.sigla === eixoDominante,
      })),
    [vetor, eixoDominante],
  );

  useEffect(() => {
    if (!active) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const bars = wrapRef.current?.querySelectorAll<HTMLDivElement>(".bar-fill") ?? [];
      const labels = wrapRef.current?.querySelectorAll<HTMLDivElement>(".bar-row") ?? [];
      const counters = wrapRef.current?.querySelectorAll<HTMLSpanElement>(".bar-pct") ?? [];

      gsap.set(bars, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(labels, { x: -16, opacity: 0 });
      gsap.set(insightRef.current, { opacity: 0, y: 12 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(labels, { x: 0, opacity: 1, duration: 0.35, stagger: 0.06 });
      tl.to(
        bars,
        {
          scaleX: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "expo.out",
        },
        "-=0.25",
      );

      // Counters tick
      counters.forEach((el, i) => {
        const target = dist[i].pct;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 0.9,
          delay: 0.2 + i * 0.08,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.v)}%`;
          },
        });
      });

      tl.to(insightRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.15");
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const bars = wrapRef.current?.querySelectorAll<HTMLDivElement>(".bar-fill") ?? [];
      const labels = wrapRef.current?.querySelectorAll<HTMLDivElement>(".bar-row") ?? [];
      gsap.set([bars, labels], { opacity: 1, x: 0, scaleX: 1 });
      gsap.set(insightRef.current, { opacity: 1, y: 0 });
      const counters = wrapRef.current?.querySelectorAll<HTMLSpanElement>(".bar-pct") ?? [];
      counters.forEach((el, i) => {
        el.textContent = `${dist[i].pct}%`;
      });
    });

    return () => mm.revert();
  }, [active, dist]);

  // Hash falso pra dar vibe de "decryption signature" — derivado do vetor
  const sigHash = useMemo(() => {
    const h = vetor.reduce(
      (acc, v, i) => (acc * 31 + v * 7 + i * 13) | 0,
      0xcafe,
    );
    return Math.abs(h).toString(16).toUpperCase().padStart(6, "0").slice(0, 6);
  }, [vetor]);

  return (
    <WrappedScene active={active} label="03 // ASSINATURA">
      <div ref={wrapRef} className="w-full flex flex-col">
        {/* Header HUD */}
        <div className="flex items-center justify-between mb-3 px-1">
          <p
            className="font-terminal text-[11px] sm:text-xs uppercase tracking-widest"
            style={{ color: "var(--text-dim)" }}
          >
            // SIG_DECRYPT
          </p>
          <p
            className="font-terminal text-[11px] sm:text-xs"
            style={{ color: "var(--grid-cyan)" }}
          >
            0x{sigHash}
          </p>
        </div>

        <p
          className="font-terminal text-sm sm:text-base uppercase tracking-widest mb-4 text-center"
          style={{ color: "var(--text)" }}
        >
          // sobre você
        </p>

        {/* Stats list */}
        <div className="flex flex-col gap-1.5">
          {dist.map((d, i) => (
            <div
              key={d.sigla}
              className="bar-row flex items-center gap-2 sm:gap-3 px-2 py-1.5"
              style={{
                background: d.dominante
                  ? "rgba(255, 247, 0, 0.06)"
                  : "transparent",
                border: d.dominante
                  ? "1px solid rgba(255, 247, 0, 0.35)"
                  : "1px solid transparent",
                boxShadow: d.dominante
                  ? "0 0 12px rgba(255, 46, 147, 0.18), inset 0 0 8px rgba(255, 247, 0, 0.08)"
                  : "none",
              }}
            >
              {/* Index */}
              <span
                className="font-terminal text-[10px] sm:text-xs shrink-0"
                style={{
                  color: d.dominante ? "var(--sun-yellow)" : "var(--text-dim)",
                  opacity: d.dominante ? 1 : 0.6,
                }}
              >
                {d.dominante ? "▸" : " "}
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              <div
                className="font-terminal text-[11px] sm:text-sm uppercase tracking-wider shrink-0"
                style={{
                  width: 100,
                  color: d.dominante ? "var(--sun-yellow)" : "var(--text-dim)",
                  textShadow: d.dominante ? "0 0 8px var(--sun-orange)" : "none",
                }}
              >
                {d.nome}
              </div>

              {/* Bar */}
              <div
                className="relative flex-1 h-3"
                style={{
                  background: "rgba(255, 46, 147, 0.1)",
                  border: "1px solid rgba(212, 168, 255, 0.18)",
                }}
              >
                <div
                  className="bar-fill absolute inset-y-0 left-0"
                  style={{
                    width: `${d.pct}%`,
                    background: d.dominante
                      ? "linear-gradient(90deg, var(--sun-yellow), var(--sun-pink))"
                      : "linear-gradient(90deg, var(--grid-cyan), var(--violet))",
                    boxShadow: d.dominante
                      ? "0 0 10px var(--sun-pink)"
                      : "0 0 6px rgba(1, 205, 254, 0.5)",
                  }}
                />
                {/* Tick marks segmentando a barra */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, transparent 0 9.5%, rgba(13, 2, 33, 0.5) 9.5% 10%)",
                  }}
                />
              </div>

              {/* % */}
              <span
                className="bar-pct font-terminal text-xs sm:text-sm w-12 text-right shrink-0"
                style={{
                  color: d.dominante ? "var(--sun-yellow)" : "var(--text-dim)",
                  textShadow: d.dominante ? "0 0 6px var(--sun-orange)" : "none",
                  fontWeight: d.dominante ? 700 : 400,
                }}
              >
                0%
              </span>
            </div>
          ))}
        </div>

        {/* Footer com insight em estilo terminal */}
        <div
          className="mt-5 px-3 py-3 border-l-2"
          style={{
            borderColor: "var(--grid-cyan)",
            background: "rgba(1, 205, 254, 0.05)",
          }}
        >
          <p
            className="font-terminal text-[10px] sm:text-xs uppercase tracking-widest mb-1"
            style={{ color: "var(--grid-cyan)" }}
          >
            ▸ analise.txt
          </p>
          <p
            ref={insightRef}
            className="font-pixel-body text-sm sm:text-base md:text-lg leading-snug"
            style={{ color: "var(--text)" }}
          >
            {insight}
          </p>
        </div>
      </div>
    </WrappedScene>
  );
}
