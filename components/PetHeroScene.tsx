"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/motion";
import WrappedScene from "@/components/WrappedScene";
import SplitText from "@/components/SplitText";

type Props = {
  active: boolean;
  sprite: string;
  bixinhoNome: string;
  codinome: string;
};

const RAY_COUNT = 12;
const PARTICLE_COUNT = 18;

export default function PetHeroScene({
  active,
  sprite,
  bixinhoNome,
  codinome,
}: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<HTMLDivElement>(null);
  const burstRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const rays = raysRef.current?.querySelectorAll<HTMLDivElement>(".pet-ray") ?? [];
      const particles =
        burstRef.current?.querySelectorAll<HTMLDivElement>(".pet-particle") ?? [];
      const letters =
        nameRef.current?.querySelectorAll<HTMLSpanElement>(".name-letter") ?? [];

      gsap.set(rays, { scaleY: 0, opacity: 0, transformOrigin: "center top" });
      gsap.set(particles, { x: 0, y: 0, opacity: 0, scale: 0.3 });
      gsap.set(letters, { y: 18, opacity: 0, rotate: -6 });
      gsap.set(badgeRef.current, { opacity: 0, y: -10 });
      gsap.set(captionRef.current, { opacity: 0 });
      gsap.set(flashRef.current, { opacity: 0, scale: 0.3 });
      gsap.set(auraRef.current, { opacity: 0, scale: 0.6 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(rays, {
        scaleY: 1,
        opacity: 0.55,
        duration: 0.6,
        stagger: { each: 0.02, from: "random" },
        ease: "power2.out",
      });

      tl.to(
        auraRef.current,
        { opacity: 0.9, scale: 1, duration: 0.45, ease: "back.out(1.8)" },
        "-=0.4",
      );

      tl.to(
        flashRef.current,
        { opacity: 0.9, scale: 1.6, duration: 0.18, ease: "power2.out" },
        "-=0.2",
      ).to(flashRef.current, { opacity: 0, duration: 0.4, ease: "power2.in" });

      tl.fromTo(
        spriteRef.current,
        { scale: 0.2, opacity: 0, rotate: -18, y: 30 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 0.55,
          ease: "back.out(2.2)",
        },
        "-=0.55",
      );

      tl.to(
        particles,
        {
          x: (i) => Math.cos((i / PARTICLE_COUNT) * Math.PI * 2) * (140 + Math.random() * 80),
          y: (i) => Math.sin((i / PARTICLE_COUNT) * Math.PI * 2) * (140 + Math.random() * 80),
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: { each: 0.012, from: "center" },
        },
        "-=0.45",
      ).to(
        particles,
        { opacity: 0, duration: 0.5, ease: "power2.in" },
        "-=0.2",
      );

      tl.to(
        badgeRef.current,
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
        "-=0.3",
      );

      tl.to(
        letters,
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.35,
          stagger: 0.045,
          ease: "back.out(2.5)",
        },
        "-=0.15",
      );

      tl.to(captionRef.current, { opacity: 1, duration: 0.45 }, "-=0.05");

      // Loops contínuos. Estão dentro de mm.add → o context da matchMedia
      // garante que `mm.revert()` mata os tweens quando a cena desmonta.
      gsap.to(spriteRef.current, {
        y: -10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });
      gsap.to(auraRef.current, {
        scale: 1.08,
        opacity: 0.75,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });
      gsap.to(raysRef.current, {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        [spriteRef.current, nameRef.current, captionRef.current, badgeRef.current],
        { opacity: 1, y: 0, scale: 1, rotate: 0 },
      );
    });

    return () => mm.revert();
  }, [active]);

  return (
    <WrappedScene active={active} label="03 // CO-PILOTO DESIGNADO">
      <div
        ref={stageRef}
        className="relative flex flex-col items-center"
        style={{ minHeight: 380 }}
      >
        {/* Stage de efeitos atrás do sprite. Filhos são absolute com left:50%
            + margem negativa pra centralizar — flex não centraliza absolutes. */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            ref={raysRef}
            className="absolute"
            style={{
              top: 50,
              left: "50%",
              width: 280,
              height: 280,
              marginLeft: -140,
              transformOrigin: "center center",
            }}
          >
            {Array.from({ length: RAY_COUNT }).map((_, i) => (
              <div
                key={i}
                className="pet-ray absolute left-1/2 top-1/2"
                style={{
                  width: 4,
                  height: 140,
                  marginLeft: -2,
                  marginTop: 0,
                  background:
                    "linear-gradient(to bottom, rgba(255, 247, 0, 0.85) 0%, rgba(255, 46, 147, 0.35) 60%, transparent 100%)",
                  transform: `rotate(${(i / RAY_COUNT) * 360}deg)`,
                  transformOrigin: "center top",
                  filter: "blur(0.4px)",
                }}
              />
            ))}
          </div>

          <div
            ref={auraRef}
            className="absolute"
            style={{
              top: 90,
              left: "50%",
              width: 220,
              height: 220,
              marginLeft: -110,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at center, rgba(1, 205, 254, 0.45) 0%, rgba(255, 46, 147, 0.25) 50%, transparent 75%)",
              filter: "blur(8px)",
            }}
          />

          <div
            ref={flashRef}
            className="absolute"
            style={{
              top: 130,
              left: "50%",
              width: 140,
              height: 140,
              marginLeft: -70,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at center, var(--sun-yellow) 0%, var(--sun-pink) 50%, transparent 80%)",
              filter: "blur(2px)",
            }}
          />

          {/* Partículas — origem (0,0) usada como centro pelo burst GSAP. */}
          <div
            ref={burstRef}
            className="absolute"
            style={{ top: 180, left: "50%", width: 0, height: 0 }}
          >
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
              <div
                key={i}
                className="pet-particle absolute"
                style={{
                  width: 6,
                  height: 6,
                  marginLeft: -3,
                  marginTop: -3,
                  borderRadius: "50%",
                  background:
                    i % 3 === 0
                      ? "var(--sun-yellow)"
                      : i % 3 === 1
                        ? "var(--grid-cyan)"
                        : "var(--sun-pink)",
                  boxShadow: "0 0 8px currentColor",
                  color:
                    i % 3 === 0
                      ? "var(--sun-yellow)"
                      : i % 3 === 1
                        ? "var(--grid-cyan)"
                        : "var(--sun-pink)",
                }}
              />
            ))}
          </div>
        </div>

        <div
          ref={badgeRef}
          className="font-terminal text-sm uppercase tracking-widest px-3 py-1 mb-3 relative z-10"
          style={{
            color: "var(--sun-yellow)",
            background: "rgba(13, 2, 33, 0.7)",
            border: "1px solid var(--sun-yellow)",
            boxShadow: "0 0 10px var(--sun-orange)",
          }}
        >
          ✦ vínculo estabelecido ✦
        </div>

        <div ref={spriteRef} className="relative z-10 my-2">
          <Image
            src={sprite}
            alt={bixinhoNome}
            width={260}
            height={260}
            className="pixel-sprite"
            priority
            style={{
              filter:
                "drop-shadow(0 0 22px var(--sun-yellow)) drop-shadow(0 0 40px var(--sun-pink)) drop-shadow(0 0 8px var(--grid-cyan))",
            }}
          />
        </div>

        <p
          ref={nameRef}
          className="font-pixel-title text-xl md:text-2xl mt-5 relative z-10 text-center"
          style={{
            color: "var(--grid-cyan)",
            textShadow: "0 0 14px var(--grid-cyan), 0 0 28px var(--sun-pink)",
            letterSpacing: 2,
          }}
          aria-label={bixinhoNome}
        >
          <SplitText text={bixinhoNome} letterClass="name-letter" />
        </p>

        <p
          ref={captionRef}
          className="font-pixel-body text-lg md:text-xl mt-5 max-w-xs text-center relative z-10"
          style={{ color: "var(--text-dim)" }}
        >
          este é o teu co-piloto,{" "}
          <span style={{ color: "var(--sun-yellow)" }}>{codinome}</span>.
          <br />
          ele vai contigo no resto da missão.
        </p>
      </div>
    </WrappedScene>
  );
}
