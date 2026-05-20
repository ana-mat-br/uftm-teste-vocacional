"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSessao } from "@/lib/use-sessao";
import { CENAS } from "@/data/cenas";
import { gsap } from "@/lib/motion";

/**
 * Botão "EMBARCAR" da home. Antes de navegar, inicia uma nova sessão
 * (gera codinome + zera vetor) no localStorage.
 */
export default function BotaoEmbarcar() {
  const router = useRouter();
  const { iniciar, reset } = useSessao();
  const [embarcando, setEmbarcando] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!btnRef.current) return;
      gsap.to(btnRef.current, {
        boxShadow:
          "0 0 35px rgba(255, 46, 147, 0.9), 0 4px 0 var(--sun-orange)",
        duration: 1.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
    return () => mm.revert();
  }, []);

  function handleEmbarcar() {
    if (embarcando) return;
    setEmbarcando(true);
    reset(); // limpa qualquer sessão pendente
    iniciar(); // gera codinome novo
    const primeira = CENAS[0]; // cena 2
    router.push(`/cena/${primeira.id}`);
  }

  return (
    <button
      ref={btnRef}
      onClick={handleEmbarcar}
      disabled={embarcando}
      className="font-pixel-title text-sm px-8 py-4 border-2 tracking-widest hover:scale-105 transition-transform disabled:opacity-60"
      style={{
        background: "var(--sun-pink)",
        color: "var(--bg-deep)",
        borderColor: "var(--sun-yellow)",
        boxShadow: "0 0 25px rgba(255, 46, 147, 0.6), 0 4px 0 var(--sun-orange)",
      }}
    >
      {embarcando ? "▸ EMBARCANDO…" : "▸ EMBARCAR"}
    </button>
  );
}
