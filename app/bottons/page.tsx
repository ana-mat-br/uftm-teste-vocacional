"use client";

/**
 * Template de bottons 40mm pra prensa de lapela.
 *
 * Layout: A4 com grid 3×5 (15 bottons por folha), cada um com sprite + curso
 * + eixo + handle. O círculo impresso tem 46mm (40mm visíveis + 3mm
 * de sangria dobrável pela prensa).
 *
 * Botão "BAIXAR PDF" gera o arquivo via html2canvas + jsPDF — não depende
 * do diálogo de impressão do browser (que costuma cortar as cores de fundo).
 */

import { useState } from "react";
import { SPRITES_POR_EIXO, NOME_EIXO_LONGO } from "@/data/bixinhos";
import { CURSOS } from "@/data/cursos";
import { eixoDominante, type EixoSigla } from "@/lib/matching";
import {
  tintAndOutline,
  useSpriteWithBorder,
} from "@/lib/use-sprite-with-border";
import { accentFromCodinome } from "@/lib/sprite-accent";

type Botton = {
  codinome: string;
  bixinhoNome: string;
  curso: string;
  eixo: EixoSigla;
};

function abreviarCurso(nome: string): string {
  return nome
    .replace(/\bEngenharia(?:\s+de)?\s+/gi, "Eng.")
    .replace(/\bLicenciatura(?:\s+em)?\s+/gi, "Lic.")
    .replace(/\bEducação(?:\s+(?:do|da|de))?\s+/gi, "Edu.")
    .replace(/\bEspecial(?:\s+e)?\s+/gi, "Esp.\n")
    .replace(/\bTerapia\s+/gi, "Terapia\n")
    .replace(/\bCiências\s+/gi, "Ciências\n")
    .replace(/\bInteligência\s+/gi, "Inteligência\n");
}

// 1 botton por curso UFTM. Cursos com mesmo `grupo` (ex: Letras PT/ESP e PT/ING)
// viram 1 só botton, com o nome do grupo. O eixo dominante define o sprite;
// o label é seed do hash de acento.
const gruposVistos = new Set<string>();
const TODOS_BOTTONS: Botton[] = CURSOS.filter((c) => {
  if (!c.grupo) return true;
  if (gruposVistos.has(c.grupo)) return false;
  gruposVistos.add(c.grupo);
  return true;
}).map((c) => {
  const label = c.grupo ?? c.nome;
  return {
    codinome: label,
    bixinhoNome: label,
    curso: label,
    eixo: eixoDominante(c.vetor),
  };
});

const POR_PAGINA = 15;
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
const PAGINAS = chunk(TODOS_BOTTONS, POR_PAGINA);

function BottonCard({ b }: { b: Botton }) {
  const sprite = SPRITES_POR_EIXO[b.eixo];
  const bordered = useSpriteWithBorder(sprite, b.codinome);
  return (
    <div className="botton-wrap">
      {/* Círculo impresso (com sangria) */}
      <div className="botton-circle">
        {/* Sprite */}
        <div className="botton-sprite">
          {bordered && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={bordered}
              alt={b.bixinhoNome}
              className="pixel-sprite"
            />
          )}
        </div>
        {/* Textos */}
        <div className="botton-texts">
          <div className="botton-line botton-eixo">
            {NOME_EIXO_LONGO[b.eixo]}
          </div>
          <div className="botton-line botton-curso">
            {abreviarCurso(b.curso)}
          </div>
          <div className="botton-line botton-handle">
            <span className="botton-handle-at">@</span>proppg.uftm
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Geração de PDF vetorial via jsPDF nativo ───────────────────────────────
//
// Pra cada botton:
//  1) Círculo de fundo (vetorial, cor sólida — gradient só rasterizado)
//  2) Sprite com borda (PNG embeddado, pixel art)
//  3) Bloco de textos pré-renderizado num canvas em alta res (PNG embeddado,
//     preserva fontes pixel — Pixelify Sans, VT323 — sem precisar carregar
//     TTFs no jsPDF)

const BOTTON_R_MM = 23; // raio do círculo impresso (46mm diâmetro)
const SPRITE_MM = 13;
const TEXTO_CANVAS_PX_PER_MM = 12; // alta resolução pra textos
const FUNDO_PX_PER_MM = 10; // alta resolução pro gradient de fundo

type CanvasTexto = { dataUrl: string; widthMm: number; heightMm: number };

// Cache do fundo (igual pra todos os bottons)
let fundoCache: string | null = null;
function renderFundoCircular(): string {
  if (fundoCache) return fundoCache;
  const px = FUNDO_PX_PER_MM;
  const size = Math.round(BOTTON_R_MM * 2 * px); // 460px @ 10px/mm
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  // Gradient radial centrado em (30%, 30%) — igual ao CSS do preview
  const cx = size * 0.3;
  const cy = size * 0.3;
  const grad = ctx.createRadialGradient(cx, cy, 0, size / 2, size / 2, size);
  grad.addColorStop(0, "#4a1078");
  grad.addColorStop(0.6, "#2d0a4a");
  grad.addColorStop(1, "#1a0633");
  // Recorta no círculo
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  fundoCache = canvas.toDataURL("image/png");
  return fundoCache;
}

function renderTextosBotton(b: Botton): CanvasTexto {
  const px = TEXTO_CANVAS_PX_PER_MM;
  const widthMm = 36;

  const linhasCurso = abreviarCurso(b.curso).toUpperCase().split("\n");
  // Altura calculada: eixo (2.8) + gap (0.3) + curso (6 × linhas) + gap (0.3) + handle (3.8)
  const heightMm =
    2.8 + 0.3 + 6 * linhasCurso.length + 0.3 + 3.8 + 0.4; /* sangria sombra */

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(widthMm * px);
  canvas.height = Math.round(heightMm * px);
  const ctx = canvas.getContext("2d")!;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  const cx = canvas.width / 2;
  let y = 0;

  // 1) Eixo (Pixelify Sans, rosa, lowercase, 2.8mm)
  ctx.font = `400 ${2.8 * px}px "Pixelify Sans", monospace`;
  ctx.fillStyle = "#ff8fc8";
  ctx.fillText(NOME_EIXO_LONGO[b.eixo].toLowerCase(), cx, y);
  y += 2.8 * px + 0.3 * px;

  // 2) Curso (VT323, amarelo, uppercase, 6mm, drop-shadow rosa, multi-linha)
  ctx.font = `400 ${6 * px}px "VT323", monospace`;
  for (const linha of linhasCurso) {
    // Sombra rosa: mesmo texto deslocado pra baixo
    ctx.fillStyle = "#ff2e93";
    ctx.fillText(linha, cx, y + 0.4 * px);
    // Texto amarelo por cima
    ctx.fillStyle = "#fff700";
    ctx.fillText(linha, cx, y);
    y += 6 * px;
  }
  y += 0.3 * px;

  // 3) @proppg.uftm — branco, @ maior
  ctx.fillStyle = "#ffffff";
  const atSize = 3.8 * px;
  const restSize = 2.6 * px;
  ctx.font = `400 ${atSize}px "Pixelify Sans", monospace`;
  const wAt = ctx.measureText("@").width;
  ctx.font = `400 ${restSize}px "Pixelify Sans", monospace`;
  const wRest = ctx.measureText("proppg.uftm").width;
  const totalW = wAt + wRest;
  const xStart = cx - totalW / 2;
  ctx.font = `400 ${atSize}px "Pixelify Sans", monospace`;
  ctx.textAlign = "left";
  ctx.fillText("@", xStart, y - 0.4 * px);
  ctx.font = `400 ${restSize}px "Pixelify Sans", monospace`;
  ctx.fillText("proppg.uftm", xStart + wAt, y + 0.6 * px);

  return {
    dataUrl: canvas.toDataURL("image/png"),
    widthMm,
    heightMm,
  };
}

async function gerarPdf(): Promise<void> {
  const { default: jsPDF } = await import("jspdf");
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const A4_W = 210;
  const PADDING = 10;
  const COLS = 3;
  const ROWS = 5;
  const GAP = 5;
  const BOTTON_D = BOTTON_R_MM * 2; // 46mm
  const GRID_W = COLS * BOTTON_D + (COLS - 1) * GAP;
  const X_OFFSET = (A4_W - GRID_W) / 2;

  for (let i = 0; i < TODOS_BOTTONS.length; i++) {
    const b = TODOS_BOTTONS[i];
    const idxNaPagina = i % POR_PAGINA;
    if (i > 0 && idxNaPagina === 0) pdf.addPage();
    const col = idxNaPagina % COLS;
    const row = Math.floor(idxNaPagina / COLS);

    const cx = X_OFFSET + col * (BOTTON_D + GAP) + BOTTON_R_MM;
    const cy = PADDING + row * (BOTTON_D + GAP) + BOTTON_R_MM;

    // 1) Círculo de fundo com gradient radial (PNG pré-rasterizado, cacheado)
    const fundo = renderFundoCircular();
    pdf.addImage(
      fundo,
      "PNG",
      cx - BOTTON_R_MM,
      cy - BOTTON_R_MM,
      BOTTON_R_MM * 2,
      BOTTON_R_MM * 2,
    );

    // 2) Sprite com borda + 3) Textos — centralizados verticalmente como conjunto
    const spriteUrl = SPRITES_POR_EIXO[b.eixo];
    const accent = accentFromCodinome(b.codinome);
    const spritePng = await tintAndOutline(spriteUrl, accent);
    const txt = renderTextosBotton(b);
    const gapSpriteTextos = 1; // mm
    const totalH = SPRITE_MM + gapSpriteTextos + txt.heightMm;
    const topY = cy - totalH / 2;
    pdf.addImage(
      spritePng,
      "PNG",
      cx - SPRITE_MM / 2,
      topY,
      SPRITE_MM,
      SPRITE_MM,
    );
    pdf.addImage(
      txt.dataUrl,
      "PNG",
      cx - txt.widthMm / 2,
      topY + SPRITE_MM + gapSpriteTextos,
      txt.widthMm,
      txt.heightMm,
    );
  }

  pdf.save("bottons-uftm.pdf");
}

export default function BottonsPage() {
  const [gerando, setGerando] = useState(false);
  async function handleBaixar(): Promise<void> {
    if (gerando) return;
    setGerando(true);
    try {
      await gerarPdf();
    } catch (e) {
      console.error("[bottons] falha ao gerar PDF:", e);
      alert("Falha ao gerar PDF. Veja o console.");
    } finally {
      setGerando(false);
    }
  }
  return (
    <>
      {/* Estilos: usa unidades em mm pra fidelidade na impressão */}
      <style jsx global>{`
        @page {
          size: A4;
          margin: 10mm;
        }

        body {
          background: #2a2a2a;
        }

        .bottons-screen {
          padding: 24px;
          color: #fff;
          font-family: monospace;
          text-align: center;
        }

        .bottons-screen h1 {
          margin: 0 0 8px;
          font-size: 16px;
          letter-spacing: 2px;
        }

        .bottons-screen p {
          margin: 0 0 24px;
          font-size: 12px;
          opacity: 0.8;
        }

        .a4-sheet {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto 16px;
          padding: 10mm;
          background: #fff;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: repeat(3, 46mm);
          grid-template-rows: repeat(5, 46mm);
          gap: 5mm;
          justify-content: center;
          align-content: center;
          break-after: page;
          page-break-after: always;
        }
        .a4-sheet:last-child {
          break-after: auto;
          page-break-after: auto;
        }

        .botton-wrap {
          position: relative;
          width: 46mm;
          height: 46mm;
        }

        /* Círculo de 46mm (40mm visíveis + 3mm de sangria de cada lado).
           Padding maior pra criar "área segura" — a curvatura da prensa de
           botton deforma o que fica perto da borda visível. */
        .botton-circle {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            #4a1078 0%,
            #2d0a4a 60%,
            #1a0633 100%
          );
          color: #fff8e7;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 6mm 7mm;
          box-sizing: border-box;
          overflow: hidden;
        }

        .botton-sprite {
          width: 13mm;
          height: 13mm;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }


        .botton-sprite img {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          image-rendering: pixelated;
        }

        .botton-texts {
          margin-top: 0;
          width: 100%;
          text-align: center;
          line-height: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3mm;
        }

        .botton-line {
          font-family: "Pixelify Sans", "Press Start 2P", monospace;
        }

        .botton-curso {
          font-family: "VT323", monospace;
          font-size: 6mm;
          color: #fff700;
          margin: 0;
          letter-spacing: 0.05mm;
          line-height: 1;
          text-transform: uppercase;
          text-shadow: 0 0.4mm 0 #ff2e93;
          white-space: pre-line;
        }

        .botton-eixo {
          font-size: 2.8mm;
          color: #ff8fc8;
          margin: 0;
          text-transform: lowercase;
        }

        .botton-handle {
          font-size: 2.6mm;
          color: #ffffff;
          margin: 0;
          letter-spacing: 0.3mm;
        }
        .botton-handle-at {
          font-size: 3.8mm;
          vertical-align: -0.4mm;
        }

        @media print {
          body {
            background: #fff;
          }
          .bottons-screen > h1,
          .bottons-screen > p,
          .print-hide {
            display: none;
          }
          .a4-sheet {
            margin: 0;
            padding: 10mm;
            box-shadow: none;
          }
        }
      `}</style>

      <div className="bottons-screen">
        <h1>▸ BOTTONS 40mm — TODOS OS CURSOS UFTM</h1>
        <p>
          {TODOS_BOTTONS.length} cursos · {PAGINAS.length} páginas A4 · 15 por
          página.
        </p>

        <div className="print-hide" style={{ marginBottom: 16 }}>
          <button
            onClick={handleBaixar}
            disabled={gerando}
            style={{
              padding: "8px 16px",
              background: "#ff2e93",
              color: "#fff",
              border: "2px solid #fff700",
              fontFamily: "monospace",
              cursor: gerando ? "wait" : "pointer",
              letterSpacing: 1,
              opacity: gerando ? 0.6 : 1,
            }}
          >
            {gerando ? "GERANDO…" : "BAIXAR PDF"}
          </button>
        </div>

        {PAGINAS.map((pagina, i) => (
          <div className="a4-sheet" key={i}>
            {pagina.map((b) => (
              <BottonCard key={b.codinome} b={b} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
