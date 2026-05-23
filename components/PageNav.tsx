/**
 * Footer-nav com 3 botões, escolhidos rotacionando entre 4 destinos
 * (EMBARCAR / TRIPULAÇÃO / ESTATÍSTICAS / MANUAL). O destino correspondente
 * à página atual é omitido, sobrando exatamente 3 botões.
 *
 * Uso: <PageNav current="painel" /> (em /painel)
 */

import Link from "next/link";

type Destino = "home" | "galeria" | "painel" | "manual";

const ITENS: Record<Destino, { href: string; label: string; color: string }> = {
  home: {
    href: "/",
    label: "▸ EMBARCAR",
    color: "var(--sun-yellow)",
  },
  galeria: {
    href: "/galeria",
    label: "▸ TRIPULAÇÃO",
    color: "var(--grid-cyan)",
  },
  painel: {
    href: "/painel",
    label: "▸ ESTATÍSTICAS",
    color: "var(--sun-pink)",
  },
  manual: {
    href: "/manual",
    label: "▸ MANUAL",
    color: "var(--mint)",
  },
};

const ORDEM: Destino[] = ["home", "galeria", "painel", "manual"];

function bgFromColor(color: string): string {
  if (color === "var(--sun-yellow)") return "rgba(255,247,0,0.08)";
  if (color === "var(--grid-cyan)") return "rgba(1,205,254,0.08)";
  if (color === "var(--sun-pink)") return "rgba(255,46,147,0.08)";
  if (color === "var(--mint)") return "rgba(5,255,161,0.08)";
  return "rgba(255,255,255,0.05)";
}

export function PageNav({ current }: { current: Destino }) {
  const visiveis = ORDEM.filter((d) => d !== current);
  return (
    <div
      className="mt-12 flex flex-wrap gap-4 justify-center border-t pt-8"
      style={{ borderColor: "var(--sun-pink)" }}
    >
      {visiveis.map((d) => {
        const it = ITENS[d];
        return (
          <Link
            key={d}
            href={it.href}
            className="font-pixel-title text-xs sm:text-sm uppercase tracking-widest px-5 py-3 border-2 transition-transform hover:scale-105"
            style={{
              borderColor: it.color,
              color: it.color,
              background: bgFromColor(it.color),
              textShadow: `0 0 8px ${it.color}`,
            }}
          >
            {it.label}
          </Link>
        );
      })}
    </div>
  );
}
