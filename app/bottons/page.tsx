"use client";

/**
 * Template de bottons 40mm pra prensa de lapela.
 *
 * Layout: A4 com grid 2×3 (6 bottons por folha), cada um com sprite + codinome
 * + curso + eixo + handle. O círculo impresso tem 46mm (40mm visíveis + 3mm
 * de sangria dobrável pela prensa).
 *
 * Fluxo: abra essa página, Cmd/Ctrl+P → "Salvar como PDF" → manda imprimir.
 */

import { SPRITES_POR_EIXO, NOME_EIXO_LONGO } from "@/data/bixinhos";
import { CURSOS } from "@/data/cursos";
import { eixoDominante, type EixoSigla } from "@/lib/matching";
import { useSpriteWithBorder } from "@/lib/use-sprite-with-border";

type Botton = {
  codinome: string;
  bixinhoNome: string;
  curso: string;
  eixo: EixoSigla;
};

function abreviarCurso(nome: string): string {
  return nome
    .replace(/\bEngenharia(\s+de)?\b/gi, "Eng.")
    .replace(/\bLicenciatura(\s+em)?\b/gi, "Lic.")
    .replace(/\bEducação\b/gi, "Edu.")
    .replace(/\bEspecial\b/gi, "Esp.")
    .replace(/\bEdu\.\s+do\b/gi, "Edu.")
    .replace(/\bEsp\.\s+e\s+/gi, "Esp. ");
}

// 1 botton por curso UFTM. O eixo dominante define o sprite; o nome do curso
// é seed do hash de acento, então cada curso tem uma cor de bochecha fixa.
const TODOS_BOTTONS: Botton[] = CURSOS.map((c) => ({
  codinome: c.nome,
  bixinhoNome: c.nome,
  curso: c.nome,
  eixo: eixoDominante(c.vetor),
}));

const POR_PAGINA = 20;
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

export default function BottonsPage() {
  return (
    <>
      {/* Estilos: usa unidades em mm pra fidelidade na impressão */}
      <style jsx global>{`
        @page {
          size: A4;
          margin: 5mm;
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
          padding: 5mm;
          background: #fff;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: repeat(4, 46mm);
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

        /* Círculo de 46mm (40mm visíveis + 3mm de sangria de cada lado) */
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
          padding: 3mm 4mm;
          box-sizing: border-box;
          overflow: hidden;
        }

        .botton-sprite {
          width: 16mm;
          height: 16mm;
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
          line-height: 1.15;
        }

        .botton-line {
          font-family: "Pixelify Sans", "Press Start 2P", monospace;
        }

        .botton-curso {
          font-family: "VT323", monospace;
          font-size: 6mm;
          color: #fff700;
          margin-top: -0.5mm;
          letter-spacing: 0.05mm;
          line-height: 1;
          text-transform: uppercase;
          text-shadow: 0 0.4mm 0 #ff2e93;
        }

        .botton-eixo {
          font-size: 2.8mm;
          color: #ff8fc8;
          margin-top: -1mm;
          text-transform: lowercase;
        }

        .botton-handle {
          font-size: 2.2mm;
          color: #ffffff;
          margin-top: 0;
          letter-spacing: 0.3mm;
        }
        .botton-handle-at {
          font-size: 3.2mm;
          vertical-align: -0.3mm;
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
            padding: 5mm;
            box-shadow: none;
          }
        }
      `}</style>

      <div className="bottons-screen">
        <h1>▸ BOTTONS 40mm — TODOS OS CURSOS UFTM</h1>
        <p>
          {TODOS_BOTTONS.length} cursos · {PAGINAS.length} páginas A4 · 6 por
          página. Cmd/Ctrl+P → &quot;Salvar como PDF&quot;.
        </p>

        <div className="print-hide" style={{ marginBottom: 16 }}>
          <button
            onClick={() => window.print()}
            style={{
              padding: "8px 16px",
              background: "#ff2e93",
              color: "#fff",
              border: "2px solid #fff700",
              fontFamily: "monospace",
              cursor: "pointer",
              letterSpacing: 1,
            }}
          >
            IMPRIMIR / SALVAR PDF
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
