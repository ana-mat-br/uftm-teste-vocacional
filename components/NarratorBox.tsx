"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/motion";
import { isMuted, playNarratorBlip } from "@/lib/audio";

type Variant = "intro" | "cena" | "desempate" | "resultado";

type Props = {
  /** Caminho do sprite do portrait (SVG). */
  portrait: string;
  /** Texto a ser digitado. */
  text: string;
  /** Influencia o glow do entrance. */
  variant?: Variant;
  onComplete?: () => void;
  /** Velocidade do typewriter em chars/segundo. Default 32. */
  cps?: number;
  /** Label opcional (ex: "co-piloto"). */
  speaker?: string;
};

const DEFAULT_CPS = 32;

export default function NarratorBox({
  portrait,
  text,
  variant = "cena",
  onComplete,
  cps = DEFAULT_CPS,
  speaker = "co-piloto",
}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);
  const reducedRef = useRef(false);

  // Detecta reduced-motion uma vez
  useEffect(() => {
    if (typeof window === "undefined") return;
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Entrance animation
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!boxRef.current) return;
      const intensity = variant === "resultado" ? 0.45 : 0.3;
      gsap.fromTo(
        boxRef.current,
        { y: 22, opacity: 0, boxShadow: "0 0 0 rgba(0, 240, 255, 0)" },
        {
          y: 0,
          opacity: 1,
          boxShadow: `0 0 18px rgba(0, 240, 255, ${intensity})`,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    });
    return () => mm.revert();
  }, [variant]);

  // Reset quando o texto muda
  useEffect(() => {
    setShown("");
    setDone(false);
  }, [text]);

  // Typewriter
  useEffect(() => {
    if (done) return;

    if (reducedRef.current) {
      setShown(text);
      setDone(true);
      onComplete?.();
      return;
    }

    let cancelled = false;
    let i = 0;
    const interval = 1000 / cps;
    let lastT = performance.now();
    let raf = 0;

    function tick(t: number) {
      if (cancelled) return;
      const elapsed = t - lastT;
      if (elapsed >= interval) {
        const advance = Math.max(1, Math.floor(elapsed / interval));
        const nextI = Math.min(text.length, i + advance);
        // dispara um blip por char não-vazio adicionado (no máx ~2 por frame)
        for (let k = i; k < nextI; k++) {
          const ch = text[k];
          if (ch && ch.trim() && !isMuted()) {
            playNarratorBlip();
            break; // 1 blip por frame já é suficiente, não pulveriza
          }
        }
        i = nextI;
        setShown(text.slice(0, i));
        lastT = t;
        if (i >= text.length) {
          setDone(true);
          onComplete?.();
          return;
        }
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [text, cps, done, onComplete]);

  function handleSkip() {
    if (done) return;
    setShown(text);
    setDone(true);
    onComplete?.();
  }

  return (
    <div
      ref={boxRef}
      onClick={handleSkip}
      onTouchStart={handleSkip}
      role="dialog"
      aria-label={speaker}
      className="flex items-stretch gap-3 px-3 py-3 mb-5 cursor-pointer select-none"
      style={{
        background: "rgba(0, 240, 255, 0.08)",
        borderLeft: "3px solid var(--grid-cyan)",
      }}
    >
      <div
        className="flex-shrink-0 self-start flex items-center justify-center"
        style={{
          width: 56,
          height: 56,
          background: "rgba(13, 2, 33, 0.6)",
          border: "1px solid var(--grid-cyan)",
          padding: 4,
        }}
      >
        <Image
          src={portrait}
          alt={speaker}
          width={48}
          height={48}
          className="pixel-sprite"
          style={{
            filter: "drop-shadow(0 0 6px var(--grid-cyan))",
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="font-terminal text-xs uppercase tracking-widest mb-1"
          style={{ color: "var(--grid-cyan)" }}
        >
          &gt; {speaker}
        </div>
        <p
          className="font-pixel-body text-base italic leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          {shown}
          {!done && (
            <span
              className="ml-1 inline-block anim-pulse"
              style={{ color: "var(--grid-cyan)" }}
            >
              ▌
            </span>
          )}
        </p>
        {!done && (
          <div
            className="font-terminal text-xs uppercase tracking-widest mt-2 opacity-60"
            style={{ color: "var(--text-dim)" }}
          >
            // tap pra pular
          </div>
        )}
      </div>
    </div>
  );
}
