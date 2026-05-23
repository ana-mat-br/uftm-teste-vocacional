"use client";

/**
 * Moldura HUD estilo cockpit pra desktop. Só aparece em lg+ via `hidden lg:block`.
 * Posicionada em `fixed inset-0` com pointer-events:none, então não interfere
 * com cliques no conteúdo central.
 *
 * Componentes:
 *  - Topbar: LEDs piscando (CMD/NAV/TLM/GRV/COM) + relógio UTC ao vivo
 *  - Sidebars verticais (esq mint, dir pink)
 *  - Mini-radar SVG com sweep + 3 blips animados
 *  - Bottombar com barras O2 / PWR / HULL
 *  - Scanline cyan descendo
 */

import { useEffect, useState } from "react";

export default function HudFrame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
    >
      <Topbar />
      <SidebarLeft />
      <SidebarRight />
      <Radar />
      <Credits />
      <Bottombar />

      <style>{`
        @keyframes hudLedPulse {
          0%, 100% { opacity: 0.45; }
          50%      { opacity: 1; }
        }
        @keyframes hudRadarSweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes hudBlip {
          0%, 70%, 100% { opacity: 0; }
          85%           { opacity: 1; }
        }
        @keyframes hudBarPulse {
          0%, 100% { filter: brightness(0.95); }
          50%      { filter: brightness(1.15); }
        }
        .hud-led { animation: hudLedPulse 1.6s ease-in-out infinite; }
        .hud-radar-sweep { transform-origin: 50% 50%; animation: hudRadarSweep 4s linear infinite; }
        .hud-blip { animation: hudBlip 2.2s ease-in-out infinite; }
        .hud-blip-2 { animation-delay: 0.6s; }
        .hud-blip-3 { animation-delay: 1.2s; }
        .hud-bar { animation: hudBarPulse 2.4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

/* === TOPBAR — LEDs + relógio UTC ao vivo === */

const SYSTEMS = [
  { label: "CMD", color: "var(--mint)" },
  { label: "NAV", color: "var(--grid-cyan)" },
  { label: "TLM", color: "var(--sun-yellow)" },
  { label: "GRV", color: "var(--sun-orange)" },
  { label: "COM", color: "var(--sun-pink)" },
];

function Topbar() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, "0");
      const m = String(now.getUTCMinutes()).padStart(2, "0");
      const s = String(now.getUTCSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute top-3 left-4 right-4 flex items-center justify-between font-terminal text-[10px] uppercase tracking-widest opacity-80">
      <span className="flex items-center gap-3">
        {SYSTEMS.map((s) => (
          <span key={s.label} className="inline-flex items-center gap-1.5">
            <Led color={s.color} />
            <span style={{ color: s.color }}>{s.label}</span>
          </span>
        ))}
      </span>

      <span style={{ color: "var(--sun-yellow)" }}>
        // UFTM-KEPLER · OS v2087.5
      </span>

      <span style={{ color: "var(--grid-cyan)" }}>
        {time} UTC
      </span>
    </div>
  );
}

function Led({ color }: { color: string }) {
  return (
    <span
      className="hud-led inline-block w-1.5 h-1.5 rounded-full"
      style={{ background: color, boxShadow: `0 0 6px ${color}` }}
    />
  );
}

/* === SIDEBARS verticais === */

function SidebarLeft() {
  return (
    <div
      className="absolute left-4 top-1/2 font-terminal text-[10px] uppercase tracking-[0.4em] opacity-50"
      style={{
        color: "var(--mint)",
        writingMode: "vertical-rl",
        transform: "translateY(-50%) rotate(180deg)",
      }}
    >
      ▸ SISTEMA · OK · TELEMETRIA · 100%
    </div>
  );
}

function SidebarRight() {
  return (
    <div
      className="absolute right-4 top-1/2 -translate-y-1/2 font-terminal text-[10px] uppercase tracking-[0.4em] opacity-50"
      style={{
        color: "var(--sun-pink)",
        writingMode: "vertical-rl",
      }}
    >
      ▸ TRANSMISSÃO · LIVE · 2087-05-23
    </div>
  );
}

/* === RADAR no canto sup direito === */

function Radar() {
  return (
    <div className="absolute top-14 right-10 w-56 h-56 xl:w-72 xl:h-72 opacity-75">
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <defs>
          <linearGradient id="sweep" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="var(--mint)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--mint)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Anéis */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="var(--mint)" strokeWidth="0.8" opacity="0.5" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="var(--mint)" strokeWidth="0.5" opacity="0.35" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="var(--mint)" strokeWidth="0.5" opacity="0.35" />

        {/* Cruz */}
        <line x1="2" y1="50" x2="98" y2="50" stroke="var(--mint)" strokeWidth="0.3" opacity="0.3" />
        <line x1="50" y1="2" x2="50" y2="98" stroke="var(--mint)" strokeWidth="0.3" opacity="0.3" />

        {/* Sweep cone */}
        <g className="hud-radar-sweep">
          <path d="M 50 50 L 50 2 A 48 48 0 0 1 84 16 Z" fill="url(#sweep)" opacity="0.6" />
          <line x1="50" y1="50" x2="50" y2="2" stroke="var(--mint)" strokeWidth="1" />
        </g>

        {/* Blips */}
        <circle cx="35" cy="40" r="1.5" fill="var(--sun-yellow)" className="hud-blip" />
        <circle cx="65" cy="62" r="1.5" fill="var(--sun-pink)" className="hud-blip hud-blip-2" />
        <circle cx="56" cy="28" r="1.5" fill="var(--grid-cyan)" className="hud-blip hud-blip-3" />

        {/* Centro */}
        <circle cx="50" cy="50" r="1.5" fill="var(--mint)" />
      </svg>
    </div>
  );
}

/* === BOTTOMBAR com 3 barras de status === */

const STATUS = [
  { label: "O2", base: 87, amp: 2, color: "var(--mint)" },
  { label: "PWR", base: 99, amp: 1, color: "var(--sun-yellow)" },
  { label: "CASCO", base: 65, amp: 3, color: "var(--sun-orange)" },
];

function Bottombar() {
  return (
    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-center gap-8 font-terminal text-sm uppercase tracking-widest opacity-80">
      {STATUS.map((s) => (
        <StatusBar key={s.label} {...s} />
      ))}
    </div>
  );
}

function StatusBar({
  label,
  base,
  amp,
  color,
}: {
  label: string;
  base: number;
  amp: number;
  color: string;
}) {
  // Oscila o valor levemente em torno do base (±amp), atualizando a cada ~1.5s
  // pra dar vibe de telemetria viva sem distrair.
  const [value, setValue] = useState(base);
  useEffect(() => {
    const tick = () => {
      const delta = (Math.random() * 2 - 1) * amp;
      const next = Math.max(0, Math.min(100, Math.round(base + delta)));
      setValue(next);
    };
    tick();
    const id = setInterval(tick, 1500);
    return () => clearInterval(id);
  }, [base, amp]);

  return (
    <span className="inline-flex items-center gap-2" style={{ color }}>
      <span className="w-12 text-right">{label}</span>
      <span
        className="inline-block w-32 h-2.5 border"
        style={{ borderColor: color }}
      >
        <span
          className="hud-bar block h-full transition-[width] duration-700 ease-out"
          style={{
            width: `${value}%`,
            background: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      </span>
      <span className="w-10 text-left tabular-nums">{value}%</span>
    </span>
  );
}

/* === CRÉDITOS (acima das barras) === */

function Credits() {
  return (
    <div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 font-terminal text-sm uppercase tracking-widest opacity-75 whitespace-nowrap"
      style={{ color: "var(--text-dim)" }}
    >
      <span style={{ color: "var(--grid-cyan)" }}>UFTM</span>
      {" · "}
      Feira de Profissões 2026
      {" · "}
      <span style={{ color: "var(--sun-yellow)" }}>// OPERAÇÃO 7</span>
      {" · "}
      HEBERT × ANA
      {" · "}
      <span style={{ color: "var(--sun-pink)" }}>PROPPG-UFTM</span>
    </div>
  );
}

