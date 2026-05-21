"use client";

import { useEffect, useRef } from "react";

/**
 * Campo de estrelas em canvas: drift lento + atração pro cursor + linhas
 * entre estrelas próximas. Estilo "particles.js" clássico, custom em ~3kb.
 * Pointer-events: none — clicks passam direto pro conteúdo.
 */
type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseAlpha: number;
};

const STAR_COUNT_DESKTOP = 90;
const STAR_COUNT_MOBILE = 50;
const MOUSE_RADIUS = 140;
const MOUSE_FORCE = 0.06;
const LINK_DIST = 110;
const FRICTION = 0.985;

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
    const isMobile = window.innerWidth < 640;
    const STAR_COUNT = isMobile ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP;

    let w = 0;
    let h = 0;
    let raf = 0;
    const stars: Star[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: 0.6 + Math.random() * 1.4,
          baseAlpha: 0.35 + Math.random() * 0.45,
        });
      }
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function onTouch(e: TouchEvent) {
      const t = e.touches[0];
      if (!t) return;
      mouse.x = t.clientX;
      mouse.y = t.clientY;
      mouse.active = true;
    }

    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h);

      // Atualiza posições e desenha estrelas
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!reduced) {
          // Atração leve pro cursor (curva 1/r²-ish, cap por raio)
          if (mouse.active) {
            const dx = mouse.x - s.x;
            const dy = mouse.y - s.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < MOUSE_RADIUS * MOUSE_RADIUS && d2 > 1) {
              const d = Math.sqrt(d2);
              const force = (1 - d / MOUSE_RADIUS) * MOUSE_FORCE;
              s.vx += (dx / d) * force;
              s.vy += (dy / d) * force;
            }
          }

          s.vx *= FRICTION;
          s.vy *= FRICTION;
          // floor de drift pra nunca parar
          if (Math.abs(s.vx) < 0.02) s.vx += (Math.random() - 0.5) * 0.04;
          if (Math.abs(s.vy) < 0.02) s.vy += (Math.random() - 0.5) * 0.04;

          s.x += s.vx;
          s.y += s.vy;

          // wrap-around toroidal
          if (s.x < -10) s.x = w + 10;
          else if (s.x > w + 10) s.x = -10;
          if (s.y < -10) s.y = h + 10;
          else if (s.y > h + 10) s.y = -10;
        }

        // Estrela com glow cyan
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(1, 205, 254, ${s.baseAlpha})`;
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = "rgba(1, 205, 254, 0.9)";
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;

      // Linhas entre estrelas próximas (clássico particles.js)
      // Single pass O(n²) — ok pra ~90 stars (~4k checks/frame)
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.18;
            ctx!.strokeStyle = `rgba(255, 46, 147, ${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // Linhas do mouse pras estrelas próximas (acentua o "follow")
      if (!reduced && mouse.active) {
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const dx = mouse.x - s.x;
          const dy = mouse.y - s.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_RADIUS * MOUSE_RADIUS) {
            const alpha = (1 - Math.sqrt(d2) / MOUSE_RADIUS) * 0.55;
            ctx!.strokeStyle = `rgba(255, 247, 0, ${alpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(mouse.x, mouse.y);
            ctx!.lineTo(s.x, s.y);
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(frame);
    }

    resize();
    spawn();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
