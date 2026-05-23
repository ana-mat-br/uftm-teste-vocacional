"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSessao } from "@/lib/use-sessao";
import { CENAS } from "@/data/cenas";
import { gsap } from "@/lib/motion";
import Icon from "@/components/Icon";

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

  async function handleEmbarcar() {
    if (embarcando) return;
    setEmbarcando(true);
    reset(); // limpa qualquer sessão pendente
    await iniciar(); // pede codinome único ao server
    const primeira = CENAS[0]; // cena 2
    router.push(`/cena/${primeira.id}`);
  }

  return (
    <button
      ref={btnRef}
      onClick={handleEmbarcar}
      disabled={embarcando}
      className="font-pixel-title text-base md:text-lg px-9 py-5 border-2 tracking-widest hover:scale-105 transition-transform disabled:opacity-60 inline-flex items-center gap-3"
      style={{
        background: "var(--sun-pink)",
        color: "var(--bg-deep)",
        borderColor: "var(--sun-yellow)",
        boxShadow: "0 0 25px rgba(255, 46, 147, 0.6), 0 4px 0 var(--sun-orange)",
      }}
    >
      <Icon name="rocket" size="1.1em" strokeWidth={2.5} />
      {embarcando ? "EMBARCANDO…" : "EMBARCAR"}
    </button>
  );
}
