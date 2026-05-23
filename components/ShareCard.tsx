"use client";

import { forwardRef, useEffect, useState } from "react";
import { hueFromCodinome } from "@/lib/hue-codinome";

type Props = {
  codinome: string;
  sprite: string;
  bixinhoNome: string;
  eixoLongo: string;
  cursoNome: string;
  papelMissao: string;
  campus: string;
};

const SPRITE_PX = 560;

/**
 * Pre-rasteriza o SVG do sprite num <canvas> 560×560 e devolve um
 * data URL PNG. html2canvas v1.4 ignora width/height inline em <img> de
 * SVGs sem dimensões intrínsecas (nosso caso: viewBox 16×16, sem width/height),
 * então renderiza no tamanho do viewBox. Pintando no canvas a gente garante
 * o tamanho final antes do snapshot.
 */
function useRasterizedSprite(spriteUrl: string, hueDeg: number): string | null {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (cancelled) return;
      const canvas = document.createElement("canvas");
      canvas.width = SPRITE_PX;
      canvas.height = SPRITE_PX;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.imageSmoothingEnabled = false;
      if (hueDeg !== 0) {
        ctx.filter = `hue-rotate(${hueDeg}deg)`;
      }
      ctx.drawImage(img, 0, 0, SPRITE_PX, SPRITE_PX);
      try {
        setDataUrl(canvas.toDataURL("image/png"));
      } catch {
        setDataUrl(spriteUrl); // fallback pro src original
      }
    };
    img.onerror = () => {
      if (!cancelled) setDataUrl(spriteUrl);
    };
    img.src = spriteUrl;
    return () => {
      cancelled = true;
    };
  }, [spriteUrl, hueDeg]);

  return dataUrl;
}

/**
 * Card 1080×1920 (9:16) renderizado offscreen e capturado via html2canvas.
 * Sem animação, sem next/image — html2canvas precisa de <img> nativo
 * com mesma origem.
 */
const ShareCard = forwardRef<HTMLDivElement, Props>(function ShareCard(
  { codinome, sprite, bixinhoNome, eixoLongo, cursoNome, papelMissao, campus },
  ref,
) {
  const spritePng = useRasterizedSprite(sprite, hueFromCodinome(codinome));

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: -99999,
        top: 0,
        width: 1080,
        height: 1920,
        // Gradiente menos violento: dark stays longer no topo, magenta
        // passa rápido pelo meio, base volta pro escuro pro footer respirar
        background:
          "linear-gradient(180deg, #0d0221 0%, #1a0a40 30%, #2d1b69 55%, #4a1078 72%, #6f1a91 85%, #2d1b69 100%)",
        color: "#fff8e7",
        fontFamily: "'Pixelify Sans', monospace",
        overflow: "hidden",
        padding: 64,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
      aria-hidden
    >
      {/* Grid neon ao fundo */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 720,
          backgroundImage:
            "linear-gradient(rgba(1,205,254,0.45) 2px, transparent 2px), linear-gradient(90deg, rgba(1,205,254,0.45) 2px, transparent 2px)",
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
          opacity: 0.55,
          pointerEvents: "none",
        }}
      />

      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent 0 4px, rgba(255,255,255,0.04) 4px 6px)",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* Header — marca */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 36,
            letterSpacing: 6,
            color: "#d4a8ff",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          // UFTM-Kepler · 2087
        </p>
        <h1
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 52,
            color: "#fff700",
            textShadow: "0 0 22px #ff71ce, 0 4px 0 #ff2e93",
            margin: "12px 0 0 0",
            letterSpacing: 2,
          }}
        >
          PROTOCOLO VOCAÇÃO
        </h1>
      </div>

      {/* Codinome */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 32,
            color: "#d4a8ff",
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          // codinome
        </p>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 44,
            color: "#01cdfe",
            textShadow: "0 0 18px #01cdfe",
            letterSpacing: 1,
            margin: "8px 0 0 0",
          }}
        >
          {codinome}
        </p>
      </div>

      {/* Sprite gigante — usa PNG pré-rasterizado (canvas) pra evitar
          o html2canvas renderizar o SVG no tamanho do viewBox */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 600,
          flexShrink: 0,
          margin: "24px 0",
          display: "block",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 600,
            height: 600,
            marginLeft: -300,
            marginTop: -300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,247,0,0.35) 0%, rgba(255,46,147,0.25) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        {spritePng && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={spritePng}
            alt={bixinhoNome}
            width={SPRITE_PX}
            height={SPRITE_PX}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: SPRITE_PX,
              height: SPRITE_PX,
              marginLeft: -SPRITE_PX / 2,
              marginTop: -SPRITE_PX / 2,
              imageRendering: "pixelated",
              filter:
                "drop-shadow(0 0 24px #fff700) drop-shadow(0 0 48px #ff2e93)",
            }}
          />
        )}
      </div>

      {/* Eu sou X */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: 28,
        }}
      >
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 32,
            color: "#d4a8ff",
            textTransform: "uppercase",
            letterSpacing: 4,
            margin: 0,
          }}
        >
          // eu sou
        </p>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 48,
            color: "#fff700",
            textShadow: "0 0 18px #ff2e93",
            margin: "10px 0 0 0",
            letterSpacing: 1,
          }}
        >
          {bixinhoNome.toUpperCase()}
        </p>
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 36,
            color: "#05ffa1",
            textShadow: "0 0 10px #05ffa1",
            letterSpacing: 3,
            margin: "12px 0 0 0",
            textTransform: "uppercase",
          }}
        >
          eixo · {eixoLongo}
        </p>
      </div>

      {/* Papel + Curso — backdrop sólido escuro pra texto não brigar
          com o gradiente. Mantém moldura amarela. */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "28px 32px",
          borderTop: "2px solid #fff700",
          borderBottom: "2px solid #fff700",
          background: "rgba(13, 2, 33, 0.78)",
          marginBottom: 24,
        }}
      >
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 30,
            color: "#fff8e7",
            textTransform: "uppercase",
            letterSpacing: 4,
            margin: 0,
            opacity: 0.85,
          }}
        >
          // meu papel na missão
        </p>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 26,
            color: "#05ffa1",
            textShadow: "0 0 12px #05ffa1, 0 2px 0 #0d0221",
            margin: "12px 0 24px 0",
            letterSpacing: 1,
            lineHeight: 1.4,
          }}
        >
          {papelMissao.toUpperCase()}
        </p>
        <p
          style={{
            fontFamily: "'Pixelify Sans', monospace",
            fontSize: 56,
            color: "#fff700",
            textShadow: "0 0 22px #ff71ce, 0 4px 0 #0d0221",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {cursoNome}
        </p>
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 32,
            color: "#01cdfe",
            textShadow: "0 0 8px #01cdfe",
            letterSpacing: 4,
            margin: "16px 0 0 0",
            textTransform: "uppercase",
          }}
        >
          campus · {campus}
        </p>
      </div>

      {/* Backdrop escuro pro footer */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 220,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(13,2,33,0.92) 50%, rgba(13,2,33,0.98) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Footer — ancorado ao bottom com backdrop garantindo contraste */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 48,
          textAlign: "center",
          padding: "0 64px",
        }}
      >
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 32,
            color: "#fff8e7",
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          // feira de profissões UFTM · 2026
        </p>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 28,
            color: "#fff700",
            textShadow:
              "0 0 14px #ff71ce, 0 0 28px #ff2e93, 0 2px 0 #0d0221",
            margin: "16px 0 0 0",
            letterSpacing: 2,
          }}
        >
          #protocolovocacaouftm
        </p>
      </div>
    </div>
  );
});

export default ShareCard;
