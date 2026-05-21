"use client";

import { useState } from "react";

type FeedbackTipo = "positivo" | "neutro" | "negativo";

/**
 * Bloco "esse resultado te representa? 👍/🤔/👎" + envio pro
 * /api/feedback. Otimista: marca a escolha assim que clica e silencia
 * falha de rede (UX > perfeição).
 */
export default function FeedbackBlock({ sessaoId }: { sessaoId: string | null }) {
  const [escolha, setEscolha] = useState<FeedbackTipo | null>(null);
  const [enviando, setEnviando] = useState(false);

  if (!sessaoId) return null;

  async function enviar(tipo: FeedbackTipo) {
    if (enviando || escolha) return;
    setEnviando(true);
    setEscolha(tipo);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessaoId, feedback: tipo }),
      });
    } catch (e) {
      console.error("falha ao enviar feedback:", e);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="w-full mt-6 mb-2">
      <p
        className="font-terminal text-xs uppercase tracking-widest mb-3 text-center"
        style={{ color: "var(--text-dim)" }}
      >
        // esse resultado te representa?
      </p>
      <div className="flex justify-center gap-2">
        {(
          [
            { tipo: "positivo" as const, emoji: "👍", label: "sim" },
            { tipo: "neutro" as const, emoji: "🤔", label: "mais ou menos" },
            { tipo: "negativo" as const, emoji: "👎", label: "não" },
          ]
        ).map(({ tipo, emoji, label }) => {
          const ativo = escolha === tipo;
          const desativado = escolha !== null && !ativo;
          return (
            <button
              key={tipo}
              onClick={(e) => {
                e.stopPropagation();
                enviar(tipo);
              }}
              disabled={escolha !== null}
              className="font-pixel-body text-sm flex-1 px-3 py-2 border-2 transition-all disabled:cursor-default"
              style={{
                borderColor: ativo
                  ? "var(--sun-yellow)"
                  : desativado
                    ? "rgba(212, 168, 255, 0.2)"
                    : "rgba(212, 168, 255, 0.5)",
                background: ativo
                  ? "rgba(255, 204, 0, 0.15)"
                  : "rgba(26, 6, 51, 0.4)",
                color: ativo ? "var(--sun-yellow)" : "var(--text)",
                opacity: desativado ? 0.4 : 1,
                boxShadow: ativo ? "0 0 14px rgba(255, 204, 0, 0.5)" : "none",
              }}
            >
              <span className="text-xl mr-1">{emoji}</span>
              <span className="text-xs">{label}</span>
            </button>
          );
        })}
      </div>
      {escolha && (
        <p
          className="font-terminal text-xs text-center mt-3 italic"
          style={{ color: "var(--text-dim)" }}
        >
          // valeu pelo feedback{escolha === "negativo" ? " — vou melhorar o sistema" : ""}
        </p>
      )}
    </div>
  );
}
