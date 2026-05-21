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

  return (
    <WrappedScene active={active} label="03 // ASSINATURA">
      <div ref={wrapRef} className="w-full flex flex-col gap-2">
        <p
          className="font-terminal text-base uppercase tracking-widest mb-2 text-center"
          style={{ color: "var(--text-dim)" }}
        >
          // o que tuas escolhas revelam
        </p>

        <div className="flex flex-col gap-2.5">
          {dist.map((d) => (
            <div key={d.sigla} className="bar-row flex items-center gap-3">
              <div
                className="font-terminal text-sm uppercase tracking-widest text-right shrink-0"
                style={{
                  width: 78,
                  color: d.dominante ? "var(--sun-yellow)" : "var(--text-dim)",
                  textShadow: d.dominante ? "0 0 8px var(--sun-orange)" : "none",
                }}
              >
                {d.nome}
              </div>
              <div
                className="relative flex-1 h-3"
                style={{
                  background: "rgba(255, 46, 147, 0.12)",
                  border: "1px solid rgba(212, 168, 255, 0.2)",
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
              </div>
              <span
                className="bar-pct font-terminal text-sm w-12 text-right shrink-0"
                style={{
                  color: d.dominante ? "var(--sun-yellow)" : "var(--text-dim)",
                }}
              >
                0%
              </span>
            </div>
          ))}
        </div>

        <p
          ref={insightRef}
          className="font-pixel-body text-base md:text-lg mt-4 text-center px-2"
          style={{ color: "var(--text)" }}
        >
          {insight}
        </p>
      </div>
    </WrappedScene>
  );
}
