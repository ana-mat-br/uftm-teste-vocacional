"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/motion";
import BotaoEmbarcar from "@/components/BotaoEmbarcar";
import SceneHeader from "@/components/SceneHeader";

const TITLE_TOP = "COMISSÃO INTERESTELAR";
const TITLE_BIG = "UFTM";

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
      <SceneHeader
        ref={headerRef}
        icon="rocket"
        className="glow-cyan anim-flicker"
      >
        UFTM-KEPLER • OS v2087.5
      </SceneHeader>

      <h1
        ref={titleRef}
        className="font-pixel-title mt-10 text-center"
        aria-label={`${TITLE_TOP} ${TITLE_BIG}`}
      >
        {/* Linha 1: "Comissão Interestelar" — flex-wrap pra cada palavra centralizar
            independentemente quando quebra em mobile (sem &nbsp; arrastando alinhamento) */}
        <span
          className="flex flex-wrap justify-center gap-x-3 text-base sm:text-lg leading-relaxed glow-yellow"
          style={{ color: "var(--sun-yellow)" }}
        >
          {TITLE_TOP.split(" ").map((word, wi) => (
            <span key={wi} className="whitespace-nowrap">
              {word.split("").map((char, ci) => (
                <span key={ci} className="hero-letter inline-block">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </span>

        {/* Linha 2: "UFTM" — protagonista em verde neon */}
        <span
          className="block text-4xl sm:text-5xl leading-none mt-3 glow-mint"
          style={{
            color: "var(--mint)",
            textShadow: "0 0 14px var(--mint), 0 0 28px var(--mint)",
          }}
        >
          {TITLE_BIG.split("").map((char, ci) => (
            <span key={ci} className="hero-letter inline-block">
              {char}
            </span>
          ))}
        </span>
      </h1>

      <p
        ref={subtitleRef}
        className="font-terminal text-xl tracking-wide uppercase mt-3"
        style={{ color: "var(--text-dim)" }}
      >
        // protocolo vocação
      </p>

      <p
        ref={taglineRef}
        className="font-pixel-body text-lg md:text-xl mt-10 max-w-sm leading-relaxed"
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
        className="font-terminal text-base mt-8 max-w-xs"
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
