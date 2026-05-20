"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/motion";
import WrappedScene from "@/components/WrappedScene";

type Props = {
  active: boolean;
  sprite: string;
  bixinhoNome: string;
  codinome: string;
};

export default function PetHeroScene({
  active,
  sprite,
  bixinhoNome,
  codinome,
}: Props) {
  const spriteRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!active) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        spriteRef.current,
        { scale: 0.4, opacity: 0, rotate: -8 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.7 },
      )
        .fromTo(
          nameRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 },
          "-=0.1",
        )
        .fromTo(
          captionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.2",
        );

      if (spriteRef.current) {
        gsap.to(spriteRef.current, {
          y: -8,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.8,
        });
      }
    });

    return () => mm.revert();
  }, [active]);

  return (
    <WrappedScene active={active} label={`03 // CO-PILOTO DESIGNADO`}>
      <div className="flex flex-col items-center">
        <div ref={spriteRef} className="my-2">
          <Image
            src={sprite}
            alt={bixinhoNome}
            width={240}
            height={240}
            className="pixel-sprite"
            priority
            style={{
              filter:
                "drop-shadow(0 0 18px var(--sun-yellow)) drop-shadow(0 0 32px var(--sun-pink))",
            }}
          />
        </div>

        <p
          ref={nameRef}
          className="font-pixel-title text-lg mt-4"
          style={{
            color: "var(--grid-cyan)",
            textShadow: "0 0 14px var(--grid-cyan)",
          }}
        >
          {bixinhoNome}
        </p>

        <p
          ref={captionRef}
          className="font-pixel-body text-base mt-6 max-w-xs"
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
