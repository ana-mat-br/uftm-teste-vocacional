"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/motion";
import WrappedScene from "@/components/WrappedScene";
import NarratorBox from "@/components/NarratorBox";
import Icon from "@/components/Icon";
import SplitText from "@/components/SplitText";

type Alt = {
  nome: string;
  campus: string;
};

type Props = {
  active: boolean;
  sprite: string;
  bixinhoNome: string;
  papelMissao: string;
  cursoNome: string;
  campus: string;
  alts: Alt[];
  despedida: string;
  onReset: () => void;
};

export default function CursoRevealScene({
  active,
  sprite,
  bixinhoNome,
  papelMissao,
  cursoNome,
  campus,
  alts,
  despedida,
  onReset,
}: Props) {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const papelRef = useRef<HTMLParagraphElement>(null);
  const cursoRef = useRef<HTMLParagraphElement>(null);
  const cursoBgRef = useRef<HTMLDivElement>(null);
  const slamRef = useRef<HTMLDivElement>(null);
  const campusRef = useRef<HTMLParagraphElement>(null);
  const petRef = useRef<HTMLDivElement>(null);
  const altsRef = useRef<HTMLDivElement>(null);
  const narratorWrapRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const altsItems =
        altsRef.current?.querySelectorAll<HTMLLIElement>(".alt-item") ?? [];
      const cursoLetters =
        cursoRef.current?.querySelectorAll<HTMLSpanElement>(".curso-letter") ?? [];

      gsap.set(slamRef.current, { opacity: 0, scale: 0.4 });
      gsap.set(cursoLetters, {
        y: 30,
        opacity: 0,
        rotateX: 80,
        transformOrigin: "center bottom",
      });
      gsap.set(cursoBgRef.current, { opacity: 0, scaleX: 0 });
      gsap.set(campusRef.current, { opacity: 0, y: 8 });
      gsap.set(papelRef.current, { opacity: 0, y: -8 });
      gsap.set(labelRef.current, { opacity: 0 });
      gsap.set(petRef.current, { x: 60, opacity: 0, rotate: 15 });
      gsap.set(altsItems, { x: -20, opacity: 0 });
      gsap.set(narratorWrapRef.current, { opacity: 0, y: 16 });
      gsap.set(resetRef.current, { opacity: 0, y: 8 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(labelRef.current, { opacity: 1, duration: 0.35 })
        .to(papelRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.15");

      tl.to(
        slamRef.current,
        { opacity: 0.85, scale: 1.2, duration: 0.18, ease: "power2.out" },
        "-=0.05",
      ).to(slamRef.current, { opacity: 0, duration: 0.55, ease: "power2.in" });

      tl.to(
        cursoBgRef.current,
        { opacity: 1, scaleX: 1, duration: 0.45, ease: "expo.out" },
        "-=0.55",
      );

      tl.to(
        cursoLetters,
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "back.out(2.4)",
        },
        "-=0.3",
      );

      // Camera shake — yoyo na posição original pra não deslocar o layout.
      tl.to(cursoRef.current, {
        x: -4,
        duration: 0.06,
        repeat: 5,
        yoyo: true,
        ease: "none",
      }).set(cursoRef.current, { x: 0 });

      tl.to(campusRef.current, { opacity: 1, y: 0, duration: 0.35 }, "-=0.15");

      tl.to(
        petRef.current,
        { x: 0, opacity: 1, rotate: 0, duration: 0.55, ease: "back.out(2)" },
        "-=0.35",
      );

      if (altsItems.length > 0) {
        tl.to(
          altsItems,
          { x: 0, opacity: 1, duration: 0.35, stagger: 0.1, ease: "power2.out" },
          "-=0.2",
        );
      }

      tl.to(narratorWrapRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1");
      tl.to(resetRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");

      if (petRef.current) {
        gsap.to(petRef.current, {
          y: -6,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }
      if (cursoRef.current) {
        gsap.to(cursoRef.current, {
          textShadow:
            "0 0 28px var(--sun-yellow), 0 0 56px var(--sun-pink), 0 4px 0 var(--sun-orange)",
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        [
          labelRef.current,
          papelRef.current,
          cursoRef.current,
          cursoBgRef.current,
          campusRef.current,
          petRef.current,
          narratorWrapRef.current,
          resetRef.current,
        ],
        { opacity: 1, x: 0, y: 0, scale: 1, scaleX: 1, rotate: 0 },
      );
      const items =
        altsRef.current?.querySelectorAll<HTMLLIElement>(".alt-item") ?? [];
      gsap.set(items, { opacity: 1, x: 0 });
      const letters =
        cursoRef.current?.querySelectorAll<HTMLSpanElement>(".curso-letter") ?? [];
      gsap.set(letters, { opacity: 1, y: 0, rotateX: 0 });
    });

    return () => mm.revert();
  }, [active]);

  return (
    <WrappedScene active={active} label="05 // PAPEL NA MISSÃO">
      <div className="relative flex flex-col items-center w-full">
        <div
          ref={petRef}
          className="absolute -right-1 bottom-2 z-0 pointer-events-none"
          aria-hidden
        >
          <Image
            src={sprite}
            alt={bixinhoNome}
            width={88}
            height={88}
            className="pixel-sprite opacity-90"
            style={{
              filter:
                "drop-shadow(0 0 12px var(--sun-yellow)) drop-shadow(0 0 24px var(--sun-pink))",
            }}
          />
        </div>

        <div
          ref={slamRef}
          className="absolute pointer-events-none"
          style={{
            top: 110,
            left: "50%",
            width: 360,
            height: 120,
            marginLeft: -180,
            background:
              "radial-gradient(ellipse at center, var(--sun-yellow) 0%, var(--sun-pink) 50%, transparent 80%)",
            filter: "blur(4px)",
            transformOrigin: "center center",
          }}
          aria-hidden
        />

        <p
          ref={labelRef}
          className="font-terminal text-base uppercase tracking-widest mb-2 relative z-10"
          style={{ color: "var(--text-dim)" }}
        >
          // teu papel na nave é
        </p>

        <p
          ref={papelRef}
          className="font-pixel-title text-sm md:text-base mb-3 relative z-10"
          style={{
            color: "var(--sun-pink)",
            textShadow: "0 0 10px var(--sun-pink)",
            letterSpacing: 1.5,
          }}
        >
          {papelMissao.toUpperCase()}
        </p>

        <div className="relative w-full flex justify-center mb-2">
          <div
            ref={cursoBgRef}
            className="absolute inset-0 mx-2"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 247, 0, 0.15) 50%, transparent 100%)",
              borderTop: "1px solid var(--sun-yellow)",
              borderBottom: "1px solid var(--sun-yellow)",
              transformOrigin: "center center",
            }}
            aria-hidden
          />
          <p
            ref={cursoRef}
            className="font-pixel-body text-2xl sm:text-3xl md:text-4xl font-bold py-2 px-3 relative z-10 text-center leading-tight"
            style={{
              color: "var(--sun-yellow)",
              textShadow: "0 0 16px var(--sun-orange), 0 2px 0 var(--sun-pink)",
            }}
            aria-label={cursoNome}
          >
            <SplitText text={cursoNome} letterClass="curso-letter" />
          </p>
        </div>

        <p
          ref={campusRef}
          className="font-terminal text-base uppercase tracking-widest mb-5 inline-flex items-center gap-2 relative z-10"
          style={{ color: "var(--text-dim)" }}
        >
          <Icon name="pin" size="1em" color="var(--grid-cyan)" />
          campus · {campus}
        </p>

        {alts.length > 0 && (
          <div ref={altsRef} className="w-full text-left mb-5 relative z-10">
            <p
              className="font-terminal text-sm uppercase tracking-widest mb-2 inline-flex items-center gap-2"
              style={{ color: "var(--text-dim)" }}
            >
              <Icon name="sparkles" size="1em" color="var(--sun-yellow)" />
              // também compatíveis
            </p>
            <ul className="font-pixel-body text-lg">
              {alts.map((c) => (
                <li key={c.nome} className="alt-item py-1 flex items-center gap-2 flex-wrap">
                  <span style={{ color: "var(--grid-cyan)" }}>▸</span>
                  <span>{c.nome}</span>
                  <span
                    className="font-terminal text-sm px-2 py-0.5"
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

        <div ref={narratorWrapRef} className="w-full text-left relative z-10">
          <NarratorBox
            portrait={sprite}
            text={despedida}
            variant="resultado"
            speaker={bixinhoNome}
          />
        </div>

        <button
          ref={resetRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onReset();
          }}
          className="font-pixel-body text-base underline opacity-70 hover:opacity-100 mt-2 inline-flex items-center gap-2 relative z-10"
          style={{ color: "var(--sun-yellow)" }}
        >
          <Icon name="repeat" size="1em" />
          refazer protocolo
        </button>
      </div>
    </WrappedScene>
  );
}
