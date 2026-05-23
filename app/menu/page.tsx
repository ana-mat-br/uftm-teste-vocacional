/**
 * Hub/lobby do Protocolo Vocação — 4 acessos principais em layout HUD.
 * URL exclusiva pra divulgação (cards, banners, QR codes).
 */

import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";

export const metadata = {
  title: "Hub · Protocolo Vocação UFTM",
  description:
    "Hub central da expedição Kepler — manual, embarque, tripulação, transmissões.",
};

type Acesso = {
  num: string;
  titulo: string;
  desc: string;
  href: string;
  icon: IconName;
  cor: string;
  bg: string;
  glow: string;
};

const ACESSOS: Acesso[] = [
  {
    num: "01",
    titulo: "MANUAL",
    desc: "como funciona o protocolo, os 7 eixos, como foi construído e testado.",
    href: "/manual",
    icon: "thinking",
    cor: "#01cdfe",
    bg: "rgba(1, 205, 254, 0.12)",
    glow: "rgba(1, 205, 254, 0.4)",
  },
  {
    num: "02",
    titulo: "EMBARCAR",
    desc: "começar a missão — 13 cenas, 7 eixos, 1 curso revelado no fim.",
    href: "/",
    icon: "rocket",
    cor: "#fff700",
    bg: "rgba(255, 247, 0, 0.12)",
    glow: "rgba(255, 247, 0, 0.4)",
  },
  {
    num: "03",
    titulo: "TRIPULAÇÃO",
    desc: "todos os copilotos já designados — galeria pública anônima.",
    href: "/galeria",
    icon: "sparkles",
    cor: "#ff2e93",
    bg: "rgba(255, 46, 147, 0.12)",
    glow: "rgba(255, 46, 147, 0.4)",
  },
  {
    num: "04",
    titulo: "ESTATÍSTICAS",
    desc: "transmissões agregadas — cursos mais escolhidos, áreas, eixos.",
    href: "/painel",
    icon: "chart",
    cor: "#05ffa1",
    bg: "rgba(5, 255, 161, 0.12)",
    glow: "rgba(5, 255, 161, 0.4)",
  },
];

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      {/* Header HUD */}
      <header className="mb-10 border-b-2 pb-6" style={{ borderColor: "var(--sun-pink)" }}>
        <div className="flex items-center justify-between mb-3">
          <span
            className="font-terminal text-xs uppercase tracking-widest"
            style={{ color: "var(--grid-cyan)" }}
          >
            // UFTM-KEPLER · OS v2087.5
          </span>
          <span
            className="font-terminal text-xs uppercase tracking-widest"
            style={{ color: "var(--sun-yellow)" }}
          >
            HUB_PRINCIPAL
          </span>
        </div>
        <h1
          className="font-pixel-title text-base sm:text-xl md:text-2xl uppercase mb-3"
          style={{
            color: "var(--sun-yellow)",
            textShadow: "0 0 12px var(--sun-orange), 0 2px 0 var(--sun-pink)",
          }}
        >
          PROTOCOLO VOCAÇÃO
        </h1>
        <p className="font-pixel-body text-base text-[var(--text-dim)]">
          ▸ comissão interestelar · acesso liberado · escolha sua rota.
        </p>
      </header>

      {/* Grid de 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ACESSOS.map((a) => (
          <Link
            key={a.num}
            href={a.href}
            className="group relative block p-5 border-2 transition-all hover:scale-[1.02] hover:translate-y-[-2px]"
            style={{
              borderColor: a.cor,
              background: a.bg,
              boxShadow: `0 0 16px ${a.glow}, inset 0 0 12px ${a.glow.replace("0.4", "0.08")}`,
            }}
          >
            {/* Index no canto */}
            <span
              className="absolute top-2 left-3 font-terminal text-[10px] opacity-70"
              style={{ color: a.cor }}
            >
              [{a.num}]
            </span>

            {/* Ícone + título */}
            <div className="flex items-center gap-3 mb-3 pt-4">
              <Icon name={a.icon} size={32} color={a.cor} />
              <h2
                className="font-pixel-title text-sm sm:text-base uppercase tracking-widest"
                style={{
                  color: a.cor,
                  textShadow: `0 0 10px ${a.cor}`,
                }}
              >
                {a.titulo}
              </h2>
            </div>

            {/* Descrição */}
            <p
              className="font-pixel-body text-sm sm:text-base leading-snug mb-3 opacity-90"
              style={{ color: a.cor }}
            >
              {a.desc}
            </p>

            {/* CTA → */}
            <div
              className="font-terminal text-xs uppercase tracking-widest mt-2"
              style={{ color: a.cor }}
            >
              ▸ acessar →
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p
          className="font-terminal text-xs uppercase tracking-widest opacity-60"
          style={{ color: "var(--text-dim)" }}
        >
          // OPERAÇÃO 7 · HEBERT × ANA · PROPPG-UFTM · 2026
        </p>
      </footer>
    </main>
  );
}
