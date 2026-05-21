"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/motion";
import WrappedScene from "@/components/WrappedScene";
import NarratorBox from "@/components/NarratorBox";
import Icon from "@/components/Icon";
import SplitText from "@/components/SplitText";
import ShareCard from "@/components/ShareCard";
import { shareOrDownload } from "@/lib/share";

type Alt = {
  nome: string;
  campus: string;
};

type Props = {
  active: boolean;
  sprite: string;
  bixinhoNome: string;
  codinome: string;
  eixoLongo: string;
  papelMissao: string;
  cursoNome: string;
  campus: string;
  alts: Alt[];
  despedida: string;
  onReset: () => void;
};

type ShareState = "idle" | "rendering" | "shared" | "downloaded" | "error";

const SHARE_LABELS: Record<ShareState, string> = {
  idle: "compartilhar",
  rendering: "gerando…",
  shared: "compartilhado ✓",
  downloaded: "baixado ✓",
  error: "tenta de novo",
};

export default function CursoRevealScene({
  active,
  sprite,
  bixinhoNome,
  codinome,
  eixoLongo,
  papelMissao,
  cursoNome,
  campus,
  alts,
  despedida,
  onReset,
}: Props) {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const papelRef = useRef<HTMLParagraphElement>(null);
  const cursoRef = useRef<HTMLParagraphElement>(null);
  const cursoBgRef = useRef<HTMLDivElement>(null);
  const slamRef = useRef<HTMLDivElement>(null);
  const campusRef = useRef<HTMLParagraphElement>(null);
  const petRef = useRef<HTMLDivElement>(null);
  const altsRef = useRef<HTMLDivElement>(null);
  const narratorWrapRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);
  const shareCardRef = useRef<HTMLDivElement>(null);
  const shareBtnRef = useRef<HTMLButtonElement>(null);

  const [shareState, setShareState] = useState<ShareState>("idle");

  async function handleShare(e: React.MouseEvent) {
    e.stopPropagation();
    if (!shareCardRef.current || shareState === "rendering") return;
    setShareState("rendering");
    const result = await shareOrDownload(shareCardRef.current, {
      filename: `protocolo-vocacao-${codinome.toLowerCase()}.png`,
      title: `Eu sou ${bixinhoNome}!`,
      text: `Acabei de descobrir meu curso na UFTM: ${cursoNome}. #protocolovocacaouftm`,
    });
    if (result === "shared") setShareState("shared");
    else if (result === "downloaded") setShareState("downloaded");
    else if (result === "error") setShareState("error");
    else setShareState("idle"); // cancelado
  }

  useEffect(() => {
    if (!active) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const altsItems =
        altsRef.current?.querySelectorAll<HTMLLIElement>(".alt-item") ?? [];
      const cursoLetters =
        cursoRef.current?.querySelectorAll<HTMLSpanElement>(".curso-letter") ?? [];

      gsap.set(slamRef.current, { opacity: 0, scale: 0.4 });
      gsap.set(cursoLetters, {
        y: 30,
        opacity: 0,
        rotateX: 80,
        transformOrigin: "center bottom",
      });
      gsap.set(cursoBgRef.current, { opacity: 0, scaleX: 0 });
      gsap.set(campusRef.current, { opacity: 0, y: 8 });
      gsap.set(papelRef.current, { opacity: 0, y: -8 });
      gsap.set(labelRef.current, { opacity: 0 });
      gsap.set(petRef.current, { x: 60, opacity: 0, rotate: 15 });
      gsap.set(altsItems, { x: -20, opacity: 0 });
      gsap.set(narratorWrapRef.current, { opacity: 0, y: 16 });
      gsap.set(shareBtnRef.current, { opacity: 0, y: 12 });
      gsap.set(resetRef.current, { opacity: 0, y: 8 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(labelRef.current, { opacity: 1, duration: 0.35 })
        .to(papelRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.15");

      tl.to(
        slamRef.current,
        { opacity: 0.85, scale: 1.2, duration: 0.18, ease: "power2.out" },
        "-=0.05",
      ).to(slamRef.current, { opacity: 0, duration: 0.55, ease: "power2.in" });

      tl.to(
        cursoBgRef.current,
        { opacity: 1, scaleX: 1, duration: 0.45, ease: "expo.out" },
        "-=0.55",
      );

      tl.to(
        cursoLetters,
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "back.out(2.4)",
        },
        "-=0.3",
      );

      // Camera shake — yoyo na posição original pra não deslocar o layout.
      tl.to(cursoRef.current, {
        x: -4,
        duration: 0.06,
        repeat: 5,
        yoyo: true,
        ease: "none",
      }).set(cursoRef.current, { x: 0 });

      tl.to(campusRef.current, { opacity: 1, y: 0, duration: 0.35 }, "-=0.15");

      tl.to(
        petRef.current,
        { x: 0, opacity: 1, rotate: 0, duration: 0.55, ease: "back.out(2)" },
        "-=0.35",
      );

      if (altsItems.length > 0) {
        tl.to(
          altsItems,
          { x: 0, opacity: 1, duration: 0.35, stagger: 0.1, ease: "power2.out" },
          "-=0.2",
        );
      }

      tl.to(narratorWrapRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1");
      tl.to(shareBtnRef.current, { opacity: 1, y: 0, duration: 0.45 }, "-=0.25");
      tl.to(resetRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");

      if (petRef.current) {
        gsap.to(petRef.current, {
          y: -6,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }
      if (cursoRef.current) {
        gsap.to(cursoRef.current, {
          textShadow:
            "0 0 28px var(--sun-yellow), 0 0 56px var(--sun-pink), 0 4px 0 var(--sun-orange)",
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        [
          labelRef.current,
          papelRef.current,
          cursoRef.current,
          cursoBgRef.current,
          campusRef.current,
          petRef.current,
          narratorWrapRef.current,
          shareBtnRef.current,
          resetRef.current,
        ],
        { opacity: 1, x: 0, y: 0, scale: 1, scaleX: 1, rotate: 0 },
      );
      const items =
        altsRef.current?.querySelectorAll<HTMLLIElement>(".alt-item") ?? [];
      gsap.set(items, { opacity: 1, x: 0 });
      const letters =
        cursoRef.current?.querySelectorAll<HTMLSpanElement>(".curso-letter") ?? [];
      gsap.set(letters, { opacity: 1, y: 0, rotateX: 0 });
    });

    return () => mm.revert();
  }, [active]);

  return (
    <WrappedScene active={active} label="05 // PAPEL NA MISSÃO">
      <div className="relative flex flex-col items-center w-full">
        <div
          ref={petRef}
          className="absolute -right-1 bottom-2 z-0 pointer-events-none"
          aria-hidden
        >
          <Image
            src={sprite}
            alt={bixinhoNome}
            width={88}
            height={88}
            className="pixel-sprite opacity-90"
            style={{
              filter:
                "drop-shadow(0 0 12px var(--sun-yellow)) drop-shadow(0 0 24px var(--sun-pink))",
            }}
          />
        </div>

        <div
          ref={slamRef}
          className="absolute pointer-events-none"
          style={{
            top: 110,
            left: "50%",
            width: 360,
            height: 120,
            marginLeft: -180,
            background:
              "radial-gradient(ellipse at center, var(--sun-yellow) 0%, var(--sun-pink) 50%, transparent 80%)",
            filter: "blur(4px)",
            transformOrigin: "center center",
          }}
          aria-hidden
        />

        <p
          ref={labelRef}
          className="font-terminal text-base uppercase tracking-widest mb-2 relative z-10"
          style={{ color: "var(--text-dim)" }}
        >
          // teu papel na nave é
        </p>

        <p
          ref={papelRef}
          className="font-pixel-title text-sm md:text-base mb-3 relative z-10"
          style={{
            color: "var(--sun-pink)",
            textShadow: "0 0 10px var(--sun-pink)",
            letterSpacing: 1.5,
          }}
        >
          {papelMissao.toUpperCase()}
        </p>

        <div className="relative w-full flex justify-center mb-2">
          <div
            ref={cursoBgRef}
            className="absolute inset-0 mx-2"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 247, 0, 0.15) 50%, transparent 100%)",
              borderTop: "1px solid var(--sun-yellow)",
              borderBottom: "1px solid var(--sun-yellow)",
              transformOrigin: "center center",
            }}
            aria-hidden
          />
          <p
            ref={cursoRef}
            className="font-pixel-body text-2xl sm:text-3xl md:text-4xl font-bold py-2 px-3 relative z-10 text-center leading-tight"
            style={{
              color: "var(--sun-yellow)",
              textShadow: "0 0 16px var(--sun-orange), 0 2px 0 var(--sun-pink)",
            }}
            aria-label={cursoNome}
          >
            <SplitText text={cursoNome} letterClass="curso-letter" />
          </p>
        </div>

        <p
          ref={campusRef}
          className="font-terminal text-base uppercase tracking-widest mb-5 inline-flex items-center gap-2 relative z-10"
          style={{ color: "var(--text-dim)" }}
        >
          <Icon name="pin" size="1em" color="var(--grid-cyan)" />
          campus · {campus}
        </p>

        {alts.length > 0 && (
          <div ref={altsRef} className="w-full text-left mb-5 relative z-10">
            <p
              className="font-terminal text-sm uppercase tracking-widest mb-2 inline-flex items-center gap-2"
              style={{ color: "var(--text-dim)" }}
            >
              <Icon name="sparkles" size="1em" color="var(--sun-yellow)" />
              // também compatíveis
            </p>
            <ul className="font-pixel-body text-lg">
              {alts.map((c) => (
                <li key={c.nome} className="alt-item py-1 flex items-center gap-2 flex-wrap">
                  <span style={{ color: "var(--grid-cyan)" }}>▸</span>
                  <span>{c.nome}</span>
                  <span
                    className="font-terminal text-sm px-2 py-0.5"
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
        )}

        <div ref={narratorWrapRef} className="w-full text-left relative z-10">
          <NarratorBox
            portrait={sprite}
            text={despedida}
            variant="resultado"
            speaker={bixinhoNome}
          />
        </div>

        <button
          ref={shareBtnRef}
          type="button"
          onClick={handleShare}
          disabled={shareState === "rendering"}
          className="font-pixel-title text-base sm:text-lg uppercase tracking-widest mt-4 px-5 py-3 inline-flex items-center gap-3 relative z-10 transition-transform hover:scale-[1.03] disabled:opacity-60 disabled:cursor-wait"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,46,147,0.35) 0%, rgba(255,247,0,0.25) 100%)",
            border: "2px solid var(--sun-yellow)",
            color: "var(--sun-yellow)",
            textShadow: "0 0 10px var(--sun-pink)",
            boxShadow:
              "0 0 18px rgba(255,247,0,0.45), inset 0 0 12px rgba(255,46,147,0.3)",
          }}
        >
          <Icon name="sparkles" size="1.1em" />
          {SHARE_LABELS[shareState]}
        </button>

        {shareState === "downloaded" && (
          <p
            className="font-terminal text-sm uppercase tracking-widest mt-2 relative z-10"
            style={{ color: "var(--mint)" }}
          >
            // imagem salva nos downloads
          </p>
        )}

        <Link
          href="/galeria"
          onClick={(e) => e.stopPropagation()}
          className="font-terminal text-base uppercase tracking-widest mt-4 inline-flex items-center gap-2 relative z-10 opacity-80 hover:opacity-100"
          style={{ color: "var(--grid-cyan)" }}
        >
          <Icon name="rocket" size="1em" />
          // ver toda a tripulação
        </Link>

        <button
          ref={resetRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onReset();
          }}
          className="font-pixel-body text-base underline opacity-70 hover:opacity-100 mt-3 inline-flex items-center gap-2 relative z-10"
          style={{ color: "var(--sun-yellow)" }}
        >
          <Icon name="repeat" size="1em" />
          refazer protocolo
        </button>
      </div>

      {/* Card offscreen pra captura via html2canvas — só monta quando a cena
          ativa pra não rodar a rasterização SVG→PNG em quem nunca chega aqui */}
      {active && (
        <ShareCard
          ref={shareCardRef}
          codinome={codinome}
          sprite={sprite}
          bixinhoNome={bixinhoNome}
          eixoLongo={eixoLongo}
          cursoNome={cursoNome}
          papelMissao={papelMissao}
          campus={campus}
        />
      )}
    </WrappedScene>
  );
}
