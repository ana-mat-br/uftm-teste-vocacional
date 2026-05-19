"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import Image from "next/image";
import { useSessao } from "@/lib/use-sessao";
import { topCursos, eixoDominante, EIXOS } from "@/lib/matching";
import { SPRITES_POR_EIXO, NOME_EIXO_LONGO } from "@/data/bixinhos";

/**
 * Tela de resultado simplificada — placeholder até D4.
 * Calcula tudo no client com os dados do localStorage e exibe.
 */
export default function ResultadoMock() {
  const router = useRouter();
  const { sessao, carregando, reset } = useSessao();

  // Se não tem sessão, manda pra home
  useEffect(() => {
    if (!carregando && !sessao) {
      router.replace("/");
    }
  }, [carregando, sessao, router]);

  const calculado = useMemo(() => {
    if (!sessao) return null;
    const top3 = topCursos(sessao.vetor, 3);
    const eixo = eixoDominante(sessao.vetor);
    return { top3, eixo };
  }, [sessao]);

  if (carregando || !sessao || !calculado) {
    return (
      <main className="mx-auto flex min-h-screen max-w-[480px] items-center justify-center px-6 text-center">
        <p className="font-terminal text-base" style={{ color: "var(--text-dim)" }}>
          processando protocolo…
        </p>
      </main>
    );
  }

  const { top3, eixo } = calculado;
  const top1 = top3[0];
  const spritePath = SPRITES_POR_EIXO[eixo];

  return (
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col items-center px-5 py-6 text-center">

      <div
        className="font-terminal text-sm tracking-widest uppercase anim-flicker"
        style={{ color: "var(--grid-cyan)" }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full mr-2 anim-pulse"
          style={{ background: "var(--sun-pink)" }}
        />
        TRANSMISSÃO FINAL
      </div>

      <h1
        className="font-pixel-title text-xs leading-relaxed mt-6 mb-2"
        style={{
          color: "var(--sun-yellow)",
          textShadow: "0 0 10px var(--sun-orange)",
        }}
      >
        COMISSÃO<br />INTERESTELAR UFTM
      </h1>

      <p
        className="font-terminal text-xs tracking-widest uppercase mb-6"
        style={{ color: "var(--text-dim)" }}
      >
        // candidate <span style={{ color: "var(--sun-yellow)" }}>{sessao.codinome}</span>
      </p>

      {/* Bixinho */}
      <div className="my-4">
        <Image
          src={spritePath}
          alt={`Bixinho do eixo ${eixo}`}
          width={180}
          height={180}
          className="pixel-sprite anim-float"
          style={{
            filter:
              "drop-shadow(0 0 12px var(--sun-yellow)) drop-shadow(0 0 20px var(--sun-pink))",
          }}
        />
      </div>

      <p
        className="font-terminal text-xs uppercase tracking-widest mb-1"
        style={{ color: "var(--text-dim)" }}
      >
        // companheiro de bordo
      </p>
      <p
        className="font-pixel-title text-xs mb-6"
        style={{ color: "var(--grid-cyan)", textShadow: "0 0 10px var(--grid-cyan)" }}
      >
        bixinho-{NOME_EIXO_LONGO[eixo].toLowerCase()}
      </p>

      {/* Resultado principal */}
      <div
        className="w-full px-4 py-4 border-2 mb-4"
        style={{
          borderColor: "var(--sun-pink)",
          background: "rgba(26, 6, 51, 0.7)",
          boxShadow: "0 0 25px rgba(255, 46, 147, 0.4)",
        }}
      >
        <p
          className="font-terminal text-xs uppercase tracking-widest mb-1"
          style={{ color: "var(--text-dim)" }}
        >
          // papel
        </p>
        <p
          className="font-pixel-title text-xs mb-3"
          style={{ color: "var(--sun-pink)", textShadow: "0 0 10px var(--sun-pink)" }}
        >
          {top1.papelMissao.toUpperCase()}
        </p>
        <p
          className="font-terminal text-xs uppercase tracking-widest mb-1"
          style={{ color: "var(--text-dim)" }}
        >
          // no séc. XXI
        </p>
        <p
          className="font-pixel-body text-3xl font-bold"
          style={{
            color: "var(--sun-yellow)",
            textShadow: "0 0 16px var(--sun-orange), 0 2px 0 var(--sun-pink)",
          }}
        >
          {top1.nome}
        </p>
        <p
          className="font-terminal text-xs mt-1"
          style={{ color: "var(--text-dim)" }}
        >
          campus: {top1.campus}
        </p>
      </div>

      {/* Top 2 e 3 */}
      <div className="w-full text-left mb-6">
        <p
          className="font-terminal text-xs uppercase tracking-widest mb-2"
          style={{ color: "var(--text-dim)" }}
        >
          // funções compatíveis também observadas
        </p>
        <ul className="font-pixel-body text-base">
          {top3.slice(1).map((c) => (
            <li key={c.nome} className="py-1">
              <span style={{ color: "var(--grid-cyan)" }}>▸</span> {c.nome}{" "}
              <span
                className="font-terminal text-xs px-2 py-0.5 ml-1"
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

      {/* Debug: vetor pontuação (em D4 vai ser removido) */}
      <details
        className="w-full mb-6 font-terminal text-xs"
        style={{ color: "var(--text-dim)" }}
      >
        <summary className="cursor-pointer">debug · vetor de pontuação</summary>
        <div className="mt-2 px-3 py-2" style={{ background: "rgba(0,0,0,0.3)" }}>
          {EIXOS.map((e, i) => (
            <div key={e}>
              {e}: <span style={{ color: "var(--sun-yellow)" }}>{sessao.vetor[i]}</span>
              {e === eixo && (
                <span style={{ color: "var(--sun-pink)" }}> ← dominante</span>
              )}
            </div>
          ))}
          <div className="mt-2 opacity-70">
            respondeu {sessao.respostas.length} cenas
          </div>
        </div>
      </details>

      <button
        onClick={() => {
          reset();
          router.push("/");
        }}
        className="font-pixel-body text-sm underline opacity-70 hover:opacity-100"
        style={{ color: "var(--sun-yellow)" }}
      >
        ↻ refazer protocolo
      </button>

      <footer
        className="font-terminal text-xs mt-10 opacity-70"
        style={{ color: "var(--text-dim)" }}
      >
        UFTM · Feira de Profissões 2026
      </footer>
    </main>
  );
}
