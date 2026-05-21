"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/motion";

/**
 * Cena Wrapped — primitiva que cobre tela cheia, faz fade-in com GSAP e
 * desaparece quando vira a próxima. Children carregam o conteúdo da cena.
 */
type Props = {
  active: boolean;
  /** Label do header (ex: "01 // EIXO DOMINANTE"). */
  label?: string;
  children: ReactNode;
};

export default function WrappedScene({ active, label, children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!contentRef.current) return;
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      if (contentRef.current) {
        gsap.set(contentRef.current, { opacity: 1, y: 0 });
      }
    });

    return () => mm.revert();
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
    >
      {label && (
        <div
          className="font-terminal text-xs tracking-widest uppercase mb-6 anim-flicker"
          style={{ color: "var(--grid-cyan)" }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full mr-2 anim-pulse"
            style={{ background: "var(--sun-pink)" }}
          />
          {label}
        </div>
      )}
      <div ref={contentRef} className="w-full max-w-[420px]">
        {children}
      </div>
    </div>
  );
}
