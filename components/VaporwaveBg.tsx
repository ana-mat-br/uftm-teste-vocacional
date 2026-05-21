"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/motion";

/** Monte UMA vez no layout root — pseudo-elementos no body já dão o céu base. */
export default function VaporwaveBg() {
  const sunRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (sunRef.current) {
        gsap.to(sunRef.current, {
          scale: 1.04,
          opacity: 0.78,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (gridRef.current) {
        gsap.to(gridRef.current, {
          backgroundPositionY: "+=44",
          duration: 4,
          repeat: -1,
          ease: "none",
        });
      }

      if (particlesRef.current) {
        const parent = particlesRef.current;
        const nodes: HTMLDivElement[] = [];
        for (let i = 0; i < 8; i++) {
          const p = document.createElement("div");
          p.className = "vapor-particle";
          parent.appendChild(p);
          nodes.push(p);
          gsap.set(p, {
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + Math.random() * 80,
            opacity: 0,
          });
          gsap.to(p, {
            y: -120,
            opacity: 0.7,
            duration: 10 + Math.random() * 8,
            repeat: -1,
            delay: Math.random() * 6,
            ease: "none",
            onRepeat: () => {
              gsap.set(p, {
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + Math.random() * 80,
              });
            },
          });
        }
        return () => {
          nodes.forEach((n) => {
            gsap.killTweensOf(n);
            n.remove();
          });
        };
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <div ref={sunRef} className="vapor-sun" aria-hidden />
      <div ref={gridRef} className="vapor-grid" aria-hidden />
      <div ref={particlesRef} aria-hidden />
      <div className="vapor-scanlines" aria-hidden />
    </>
  );
}
