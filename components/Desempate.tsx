"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useSessao } from "@/lib/use-sessao";
import { topCursos, aplicarBonusDesempate, precisaDesempate } from "@/lib/matching";
import { CURSOS } from "@/data/cursos";

/**
 * Cena de desempate: aparece SOMENTE quando o top 1 venceu por margem
 * apertada (< 5%). Mostra os 3 melhores cursos como cards e pede pro
 * aluno escolher qual jornada mais o puxou. A escolha adiciona um bonus
 * (vetor do curso × 2) ao vetor do aluno antes do resultado final.
 */
export default function Desempate() {
  const router = useRouter();
  const { sessao, carregando, marcarDesempate } = useSessao();
  const [enviando, setEnviando] = useState(false);

  const top3 = useMemo(() => {
    if (!sessao) return [];
    return topCursos(sessao.vetor, 3);
  }, [sessao]);

  // Se chegou aqui sem sessão, sem motivo, ou já passou: redireciona
  useEffect(() => {
    if (carregando) return;
    if (!sessao) {
      router.replace("/");
      return;
    }
    if (sessao.desempateAplicado) {
      router.replace("/resultado");
      return;
    }
    if (top3.length > 0 && !precisaDesempate(top3)) {
      // Não precisava de desempate — pula direto
      marcarDesempate();
      router.replace("/resultado");
    }
  }, [carregando, sessao, top3, router, marcarDesempate]);

  function handleEscolher(nomeCurso: string) {
    if (enviando || !sessao) return;
    setEnviando(true);
    const curso = CURSOS.find((c) => c.nome === nomeCurso);
    if (!curso) {
      // fallback seguro
      marcarDesempate();
      router.replace("/resultado");
      return;
    }
    const novoVetor = aplicarBonusDesempate(sessao.vetor, curso.vetor);
    marcarDesempate(novoVetor);
    setTimeout(() => router.push("/resultado"), 200);
  }

  if (carregando || !sessao || top3.length < 2) {
    return (
      <main className="mx-auto flex min-h-screen max-w-[480px] items-center justify-center px-6 text-center">
        <p className="font-terminal text-base" style={{ color: "var(--text-dim)" }}>
          processando…
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col px-5 py-6">

      {/* Header */}
      <div
        className="font-terminal text-sm tracking-widest uppercase mb-3"
        style={{ color: "var(--grid-cyan)" }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full mr-2 anim-pulse"
          style={{ background: "var(--sun-pink)" }}
        />
        UFTM-KEPLER · DESEMPATE
      </div>

      <div
        className="font-terminal text-xs tracking-widest uppercase mb-4 opacity-90"
        style={{ color: "var(--text-dim)" }}
      >
        👤 // você: <span style={{ color: "var(--sun-yellow)" }}>{sessao.codinome}</span>
      </div>

      {/* Título + contexto */}
      <h1
        className="font-pixel-title text-xs sm:text-sm leading-relaxed mt-2 mb-4 uppercase"
        style={{
          color: "var(--sun-yellow)",
          textShadow: "0 0 10px var(--sun-orange)",
          letterSpacing: 1,
        }}
      >
        ▸ DEU EMPATE
      </h1>

      <div
        className="px-4 py-3 border-l-2 backdrop-blur-sm mb-4"
        style={{
          borderColor: "var(--sun-pink)",
          background: "rgba(26, 6, 51, 0.6)",
        }}
      >
        <p className="font-pixel-body text-base leading-relaxed">
          Acabou. Mas seu perfil ficou muito próximo entre 3 jornadas diferentes.
          Antes da decisão final, me diz: qual dessas três te puxou mais?
        </p>
      </div>

      <div
        className="px-3 py-2 mb-5"
        style={{
          background: "rgba(0, 240, 255, 0.08)",
          borderLeft: "3px solid var(--grid-cyan)",
        }}
      >
        <p
          className="font-pixel-body text-sm italic"
          style={{ color: "var(--text)" }}
        >
          <span style={{ color: "var(--grid-cyan)" }}>&gt; </span>
          escolhe com a barriga, não com a cabeça.
        </p>
      </div>

      {/* Cards das 3 opções */}
      <div className="flex flex-col gap-3">
        {top3.map((curso, idx) => (
          <button
            key={curso.nome}
            onClick={() => handleEscolher(curso.nome)}
            disabled={enviando}
            className="text-left px-4 py-4 border-2 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              borderColor: "var(--sun-pink)",
              background: "rgba(26, 6, 51, 0.7)",
              color: "var(--text)",
              boxShadow: "0 0 12px rgba(255, 46, 147, 0.25)",
            }}
          >
            <div
              className="font-terminal text-xs uppercase tracking-widest mb-1"
              style={{ color: "var(--text-dim)" }}
            >
              // jornada {idx + 1}
            </div>
            <div
              className="font-pixel-title text-xs mb-2"
              style={{
                color: "var(--sun-pink)",
                textShadow: "0 0 8px var(--sun-pink)",
              }}
            >
              {curso.papelMissao.toUpperCase()}
            </div>
            <div
              className="font-pixel-body text-xl font-bold"
              style={{ color: "var(--sun-yellow)" }}
            >
              {curso.grupo ?? curso.nome}
            </div>
            <div
              className="font-terminal text-xs mt-1 uppercase tracking-widest"
              style={{ color: "var(--text-dim)" }}
            >
              campus · {curso.campus}
            </div>
          </button>
        ))}
      </div>

    </main>
  );
}
