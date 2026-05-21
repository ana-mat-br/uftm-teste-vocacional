"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/motion";
import BotaoEmbarcar from "@/components/BotaoEmbarcar";

const TITLE = "COMISSÃO INTERESTELAR UFTM";

export default function Hero() {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const privacyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const letters = titleRef.current?.querySelectorAll<HTMLElement>(".hero-letter") ?? [];

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(headerRef.current, { opacity: 0, y: -8, duration: 0.5 }, 0.1)
        .from(
          letters,
          {
            opacity: 0,
            y: 10,
            duration: 0.04,
            stagger: 0.035,
          },
          "+=0.05",
        )
        .from(subtitleRef.current, { opacity: 0, duration: 0.4 }, "-=0.1")
        .from(taglineRef.current, { opacity: 0, y: 6, duration: 0.4 }, "-=0.1")
        .from(
          ctaRef.current,
          { opacity: 0, y: 12, scale: 0.96, duration: 0.5 },
          "+=0.1",
        )
        .from(privacyRef.current, { opacity: 0, duration: 0.4 }, "-=0.2");

      // Glow loop independente do timeline
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          filter: "drop-shadow(0 0 22px rgba(255, 46, 147, 0.85))",
          duration: 1.4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col items-center justify-center px-6 py-10 text-center">
      <div
        ref={headerRef}
        className="font-terminal text-base tracking-widest uppercase glow-cyan anim-flicker"
        style={{ color: "var(--grid-cyan)" }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full mr-2 anim-pulse"
          style={{ background: "var(--sun-pink)" }}
        />
        UFTM-KEPLER • OS v2087.5
      </div>

      <h1
        ref={titleRef}
        className="font-pixel-title text-base sm:text-lg leading-relaxed mt-10 glow-yellow"
        style={{ color: "var(--sun-yellow)" }}
        aria-label={TITLE}
      >
        {TITLE.split(" ").map((word, wi, arr) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split("").map((char, ci) => (
              <span key={ci} className="hero-letter inline-block">
                {char}
              </span>
            ))}
            {wi < arr.length - 1 && (
              <span className="hero-letter inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </h1>

      <p
        ref={subtitleRef}
        className="font-terminal text-base tracking-wide uppercase mt-3"
        style={{ color: "var(--text-dim)" }}
      >
        // protocolo vocação
      </p>

      <p
        ref={taglineRef}
        className="font-pixel-body text-base mt-10 max-w-xs leading-relaxed"
        style={{ color: "var(--text)" }}
      >
        ano <span style={{ color: "var(--sun-yellow)" }}>2087</span>. kepler-186f
        te espera. <span style={{ color: "var(--sun-pink)" }}>6 minutos</span> pra
        descobrir teu papel a bordo.
      </p>

      <div ref={ctaRef} className="mt-10">
        <BotaoEmbarcar />
      </div>

      <p
        ref={privacyRef}
        className="font-terminal text-sm mt-8 max-w-xs"
        style={{ color: "var(--text-dim)" }}
      >
        // nenhum dado pessoal seu é coletado.<br />nem precisa logar.
      </p>

      <footer
        className="font-terminal text-sm mt-16 opacity-70 text-center leading-relaxed"
        style={{ color: "var(--text-dim)" }}
      >
        UFTM • Feira de Profissões 2026
        <br />
        // OPERAÇÃO HEBERT×ANA · PROPPG-UFTM
      </footer>
    </main>
  );
}
