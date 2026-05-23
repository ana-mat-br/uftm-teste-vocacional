"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { NOME_EIXO_LONGO, SPRITES_POR_EIXO } from "@/data/bixinhos";
import type { EixoSigla } from "@/lib/matching";
import Icon from "@/components/Icon";
import SceneHeader from "@/components/SceneHeader";
import { useTintedSprite } from "@/lib/use-tinted-sprite";
import { PageNav } from "@/components/PageNav";

function TintedSprite({
  sprite,
  codinome,
  alt,
}: {
  sprite: string;
  codinome: string;
  alt: string;
}) {
  const tinted = useTintedSprite(sprite, codinome);
  return (
    <Image
      src={tinted}
      alt={alt}
      width={84}
      height={84}
      unoptimized
      className="pixel-sprite"
      style={{
        filter:
          "drop-shadow(0 0 6px var(--sun-yellow)) drop-shadow(0 0 12px var(--sun-pink))",
      }}
    />
  );
}

type Item = {
  id: string;
  codinome: string;
  bixinhoNome: string;
  cursoTop: string;
  eixo: EixoSigla | null;
};

type Page = {
  page: number;
  size: number;
  total: number;
  itens: Item[];
};

const PAGE_SIZE = 24;

export default function GaleriaPage() {
  const [itens, setItens] = useState<Item[]>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState<number | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const carregar = useCallback(async (p: number) => {
    setCarregando(true);
    setErro(null);
    try {
      const r = await fetch(`/api/galeria?page=${p}&size=${PAGE_SIZE}`, {
        cache: "no-store",
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = (await r.json()) as Page;
      setItens((prev) => (p === 0 ? data.itens : [...prev, ...data.itens]));
      setTotal(data.total);
      setPage(p);
    } catch (e) {
      console.error("[galeria]", e);
      setErro("Falha ao carregar a galeria. Tenta de novo.");
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    void carregar(0);
  }, [carregar]);

  const podeCarregarMais = total !== null && itens.length < total;

  return (
    <main className="mx-auto max-w-5xl px-5 py-8 md:px-10 md:py-12">
      <SceneHeader icon="radar" className="mb-3">
        UFTM-KEPLER · GALERIA DE COPILOTOS
      </SceneHeader>

      <Link
        href="/"
        className="font-terminal text-sm uppercase tracking-widest inline-flex items-center gap-2 mb-6 opacity-80 hover:opacity-100"
        style={{ color: "var(--text-dim)" }}
      >
        <Icon name="rocket" size="1em" />
        // voltar ao hangar
      </Link>

      <h1
        className="font-pixel-title text-xl sm:text-2xl mb-2"
        style={{
          color: "var(--sun-yellow)",
          textShadow: "0 0 14px var(--sun-orange)",
        }}
      >
        TRIPULAÇÃO REGISTRADA
      </h1>
      <p
        className="font-pixel-body text-base mb-6"
        style={{ color: "var(--text-dim)" }}
      >
        {total !== null
          ? `${total} copilotos já passaram pelo protocolo. cada um com seu papel.`
          : "carregando o manifesto da tripulação..."}
      </p>

      {erro && (
        <p
          className="font-terminal text-base mb-4"
          style={{ color: "var(--sun-pink)" }}
        >
          {erro}
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {itens.map((it) => {
          const sprite = it.eixo ? SPRITES_POR_EIXO[it.eixo] : null;
          const eixoLongo = it.eixo ? NOME_EIXO_LONGO[it.eixo] : null;
          return (
            <article
              key={it.id}
              className="border-2 p-3 flex flex-col items-center text-center transition-transform hover:scale-[1.03]"
              style={{
                borderColor: "var(--sun-pink)",
                background: "rgba(13, 2, 33, 0.55)",
                boxShadow: "0 0 14px rgba(255, 46, 147, 0.2)",
              }}
            >
              <div
                className="w-full flex items-center justify-center mb-2"
                style={{ height: 92 }}
              >
                {sprite ? (
                  <TintedSprite
                    sprite={sprite}
                    codinome={it.codinome}
                    alt={it.bixinhoNome}
                  />
                ) : (
                  <div
                    style={{
                      width: 84,
                      height: 84,
                      background: "rgba(255,255,255,0.04)",
                    }}
                  />
                )}
              </div>
              <p
                className="font-pixel-title text-xs leading-tight mb-1"
                style={{
                  color: "var(--sun-yellow)",
                  textShadow: "0 0 8px var(--sun-pink)",
                }}
              >
                {it.bixinhoNome.toUpperCase()}
              </p>
              <p
                className="font-terminal text-xs uppercase tracking-widest mb-2"
                style={{ color: "var(--grid-cyan)" }}
              >
                {it.codinome}
              </p>
              <p
                className="font-pixel-body text-sm leading-snug"
                style={{ color: "var(--text)" }}
              >
                {it.cursoTop}
              </p>
              {eixoLongo && (
                <p
                  className="font-terminal text-xs uppercase tracking-widest mt-1"
                  style={{ color: "var(--text-dim)" }}
                >
                  {eixoLongo}
                </p>
              )}
            </article>
          );
        })}
      </div>

      {itens.length === 0 && !carregando && !erro && (
        <p
          className="font-terminal text-base mt-6 text-center"
          style={{ color: "var(--text-dim)" }}
        >
          // ninguém embarcou ainda. seja o primeiro.
        </p>
      )}

      {podeCarregarMais && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => carregar(page + 1)}
            disabled={carregando}
            className="font-pixel-title text-base uppercase tracking-widest px-5 py-3 border-2 inline-flex items-center gap-3 transition-transform hover:scale-[1.03] disabled:opacity-60 disabled:cursor-wait"
            style={{
              borderColor: "var(--sun-yellow)",
              background: "rgba(255, 247, 0, 0.1)",
              color: "var(--sun-yellow)",
              boxShadow: "0 0 14px rgba(255, 247, 0, 0.3)",
            }}
          >
            <Icon name="sparkles" size="1em" />
            {carregando ? "carregando…" : "carregar mais"}
          </button>
        </div>
      )}

      <PageNav current="galeria" />
    </main>
  );
}
