"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/motion";
import { startAmbientPad, stopAmbientPad } from "@/lib/audio";
import Link from "next/link";
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
    startAmbientPad();
    return () => {
      stopAmbientPad();
    };
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const letters = titleRef.current?.querySelectorAll<HTMLElement>(".hero-letter") ?? [];
      const taglineLetters =
        taglineRef.current?.querySelectorAll<HTMLElement>(".tagline-letter") ?? [];
      // Captura o texto final ANTES da animação começar (vai ser sobrescrito por chars random)
      const finalChars = Array.from(taglineLetters).map((el) => el.textContent ?? "");

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
        .from(subtitleRef.current, { opacity: 0, duration: 0.4 }, "-=0.1");

      // Slot-machine reveal na tagline (mesmo efeito da revelação do curso).
      // Cada letra começa invisível (CSS visibility:hidden) e só aparece quando
      // o seu próprio tick começa — já com char random, nunca com o texto final.
      const SLOT_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
      const SLOT_DURATION = 0.35;
      const SLOT_STAGGER = 0.018;
      taglineLetters.forEach((letter, i) => {
        const final = finalChars[i];
        if (!final || final.trim() === "") return; // pula espaços
        const obj = { tick: 0 };
        tl.to(
          obj,
          {
            tick: 12,
            duration: SLOT_DURATION,
            ease: "power2.out",
            onStart: () => {
              letter.textContent =
                SLOT_POOL[Math.floor(Math.random() * SLOT_POOL.length)];
              // Reverte o inline visibility:hidden/opacity:0 do SSR direto
              letter.style.visibility = "visible";
              letter.style.opacity = "1";
            },
            onUpdate: () => {
              letter.textContent =
                SLOT_POOL[Math.floor(Math.random() * SLOT_POOL.length)];
            },
            onComplete: () => {
              letter.textContent = final;
            },
          },
          i === 0 ? "+=0.05" : `-=${SLOT_DURATION - SLOT_STAGGER}`,
        );
      });

      tl.from(
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
    <main className="relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-10 max-w-[480px] lg:max-w-6xl lg:pr-72 xl:pr-80">
      <SceneHeader
        ref={headerRef}
        icon="rocket"
        className="glow-cyan anim-flicker lg:self-start"
      >
        UFTM-KEPLER • OS v2087.5
      </SceneHeader>

      {/* === SPLIT (lg+) — 2 colunas. Mobile: empilhado === */}
      <div className="mt-10 grid w-full grid-cols-1 lg:grid-cols-[3fr_2fr] lg:gap-12 lg:items-center text-center lg:text-left">
        {/* === COLUNA ESQUERDA — Identidade / manifesto === */}
        <section className="flex flex-col items-center lg:items-start">
          <h1
            ref={titleRef}
            className="font-pixel-title"
            aria-label={`${TITLE_TOP} ${TITLE_BIG}`}
          >
            <span
              className="flex flex-wrap justify-center lg:justify-start gap-x-3 text-base sm:text-lg lg:text-xl leading-relaxed glow-yellow"
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

            <span
              className="block text-4xl sm:text-5xl lg:text-8xl leading-none mt-3 glow-mint"
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

          {/* MENU — só em desktop (em mobile aparece na coluna direita) */}
          <Link
            href="/menu"
            className="hidden lg:inline-flex font-pixel-title text-xs uppercase tracking-widest mt-8 px-3 py-1.5 border transition-transform hover:scale-105"
            style={{
              borderColor: "var(--mint)",
              color: "var(--mint)",
              background: "rgba(5,255,161,0.06)",
              textShadow: "0 0 6px var(--mint)",
            }}
          >
            ▸ MENU
          </Link>
        </section>

        {/* === COLUNA DIREITA — Ação === */}
        <section className="mt-10 lg:mt-0 flex flex-col items-center lg:items-start">
          <p
            ref={taglineRef}
            className="font-pixel-body text-lg md:text-xl lg:text-2xl mb-8 max-w-sm lg:max-w-md leading-relaxed text-center lg:text-left tagline-decode"
            style={{ color: "var(--text)" }}
          >
            <TaglineSegment text="ano " />
            <TaglineSegment text="2087" color="var(--sun-yellow)" />
            <TaglineSegment text="." />
            <br />
            <TaglineSegment text="kepler-186f te espera." />
            <br />
            <TaglineSegment text="6 minutos" color="var(--sun-pink)" />
            <TaglineSegment text=" pra descobrir seu papel a bordo." />
          </p>

          <div ref={ctaRef}>
            <BotaoEmbarcar />
          </div>

          <p
            ref={privacyRef}
            className="font-terminal text-base mt-8 max-w-xs lg:max-w-sm text-center lg:text-left"
            style={{ color: "var(--text-dim)" }}
          >
            // nenhum dado pessoal seu é coletado.<br />nem precisa logar.
          </p>

          {/* MENU — só em mobile/tablet (em desktop aparece na coluna esquerda) */}
          <Link
            href="/menu"
            className="lg:hidden font-pixel-title text-[10px] sm:text-xs uppercase tracking-widest mt-6 px-3 py-1.5 border transition-transform hover:scale-105"
            style={{
              borderColor: "var(--mint)",
              color: "var(--mint)",
              background: "rgba(5,255,161,0.06)",
              textShadow: "0 0 6px var(--mint)",
            }}
          >
            ▸ MENU
          </Link>
        </section>
      </div>

      {/* Footer textual: só mobile/tablet (em desktop o HudFrame cobre branding) */}
      <footer
        className="font-terminal text-sm mt-16 opacity-70 text-center leading-relaxed lg:hidden"
        style={{ color: "var(--text-dim)" }}
      >
        UFTM • Feira de Profissões 2026
        <br />
        // OPERAÇÃO7 HEBERT×ANA · PROPPG-UFTM
      </footer>
    </main>
  );
}

/* === Segmento da tagline: divide texto em letras pro slot-machine GSAP === */

function TaglineSegment({ text, color }: { text: string; color?: string }) {
  return (
    <span style={color ? { color } : undefined}>
      {text.split("").map((c, i) =>
        c === " " ? (
          <span key={i}> </span>
        ) : (
          // visibility:hidden inline → garante invisibilidade desde o SSR,
          // antes do CSS carregar / antes do GSAP rodar (sem flash de hidratação)
          <span
            key={i}
            className="tagline-letter inline-block"
            style={{ visibility: "hidden", opacity: 0 }}
          >
            {c}
          </span>
        ),
      )}
    </span>
  );
}
