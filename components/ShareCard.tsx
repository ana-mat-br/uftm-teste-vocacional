"use client";

import { forwardRef, useEffect, useMemo, useState } from "react";
import { useTintedSprite } from "@/lib/use-tinted-sprite";

type Props = {
  codinome: string;
  sprite: string;
  bixinhoNome: string;
  eixoLongo: string;
  cursoNome: string;
  papelMissao: string;
  campus: string;
};

const SPRITE_PX = 300;

/**
 * Pre-rasteriza o SVG do sprite num <canvas> 560×560 e devolve um
 * data URL PNG. html2canvas v1.4 ignora width/height inline em <img> de
 * SVGs sem dimensões intrínsecas (nosso caso: viewBox 16×16, sem width/height),
 * então renderiza no tamanho do viewBox. Pintando no canvas a gente garante
 * o tamanho final antes do snapshot.
 */
function useRasterizedSprite(spriteUrl: string): string | null {
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
  }, [spriteUrl]);

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
  const tintedSprite = useTintedSprite(sprite, codinome);
  const spritePng = useRasterizedSprite(tintedSprite);
  // Hash hex falso pra HUD — derivado do codinome
  const sigHash = useMemo(() => {
    let h = 0xcafe;
    for (let i = 0; i < codinome.length; i++) {
      h = (h * 31 + codinome.charCodeAt(i)) | 0;
    }
    return Math.abs(h).toString(16).toUpperCase().padStart(6, "0").slice(0, 6);
  }, [codinome]);
  void papelMissao;

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: -99999,
        top: 0,
        width: 1080,
        height: 1920,
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

      {/* Estrelas decorativas espalhadas (32 estrelas) */}
      {[
        { top: 60, left: 80, size: 5, color: "#fff700" },
        { top: 100, left: 320, size: 3, color: "#fff8e7" },
        { top: 140, left: 950, size: 7, color: "#01cdfe" },
        { top: 180, left: 200, size: 4, color: "#05ffa1" },
        { top: 220, left: 60, size: 4, color: "#fff8e7" },
        { top: 250, left: 700, size: 3, color: "#ff71ce" },
        { top: 280, left: 480, size: 4, color: "#fff700" },
        { top: 320, left: 990, size: 6, color: "#05ffa1" },
        { top: 360, left: 180, size: 3, color: "#01cdfe" },
        { top: 420, left: 870, size: 4, color: "#fff700" },
        { top: 480, left: 100, size: 5, color: "#ff71ce" },
        { top: 540, left: 580, size: 3, color: "#fff8e7" },
        { top: 580, left: 50, size: 5, color: "#ff71ce" },
        { top: 640, left: 920, size: 4, color: "#05ffa1" },
        { top: 720, left: 980, size: 7, color: "#fff700" },
        { top: 760, left: 140, size: 3, color: "#01cdfe" },
        { top: 820, left: 480, size: 3, color: "#fff8e7" },
        { top: 880, left: 880, size: 5, color: "#ff71ce" },
        { top: 940, left: 70, size: 6, color: "#01cdfe" },
        { top: 1000, left: 620, size: 3, color: "#fff700" },
        { top: 1080, left: 540, size: 4, color: "#01cdfe" },
        { top: 1140, left: 985, size: 5, color: "#05ffa1" },
        { top: 1200, left: 220, size: 4, color: "#fff8e7" },
        { top: 1260, left: 800, size: 3, color: "#ff71ce" },
        { top: 1320, left: 90, size: 6, color: "#fff700" },
        { top: 1380, left: 600, size: 3, color: "#01cdfe" },
        { top: 1440, left: 920, size: 4, color: "#fff8e7" },
        { top: 1480, left: 965, size: 4, color: "#fff8e7" },
        { top: 1540, left: 180, size: 5, color: "#05ffa1" },
        { top: 1600, left: 720, size: 3, color: "#fff700" },
        { top: 1650, left: 70, size: 5, color: "#ff71ce" },
        { top: 1720, left: 580, size: 4, color: "#01cdfe" },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            borderRadius: "50%",
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
            pointerEvents: "none",
          }}
        />
      ))}

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

      {/* Header HUD horizontal + sub-label COMISSÃO INTERESTELAR */}
      <div
        style={{
          position: "relative",
          marginBottom: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 30,
              color: "#01cdfe",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            // UFTM-KEPLER · OS v2087.5
          </span>
          <span
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 30,
              color: "#fff700",
              letterSpacing: 2,
            }}
          >
            0x{sigHash}
          </span>
        </div>
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 28,
            color: "#05ffa1",
            textShadow: "0 0 10px #05ffa1",
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: "12px 0 0 0",
            textAlign: "left",
          }}
        >
          // comissão interestelar · protocolo vocação
        </p>
      </div>

      {/* Narrativa em primeira pessoa: EU SOU + MEU COPILOTO */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 32,
            color: "#d4a8ff",
            letterSpacing: 6,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          // EU SOU
        </p>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 44,
            color: "#01cdfe",
            textShadow: "0 0 20px #01cdfe, 0 2px 0 #015c70",
            letterSpacing: 2,
            margin: "16px 0 0 0",
            lineHeight: 1.2,
          }}
        >
          {codinome}
        </p>
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 30,
            color: "#d4a8ff",
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: "20px 0 0 0",
          }}
        >
          // MEU COPILOTO É
        </p>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 32,
            color: "#ff71ce",
            textShadow: "0 0 16px #ff71ce, 0 2px 0 #7a0e3a",
            letterSpacing: 1.5,
            margin: "12px 0 0 0",
            lineHeight: 1.2,
          }}
        >
          {bixinhoNome}
        </p>
      </div>

      {/* Sprite com aura — logo abaixo do nome do copiloto */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 300,
          flexShrink: 0,
          margin: "8px 0 24px 0",
          display: "block",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 460,
            height: 460,
            marginLeft: -230,
            marginTop: -230,
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
              filter: "drop-shadow(0 0 24px #fff700) drop-shadow(0 0 48px #ff2e93)",
            }}
          />
        )}
      </div>

      {/* Eixo dominante — 1 linha grande */}
      <div style={{ position: "relative", textAlign: "center", marginBottom: 64 }}>
        <span
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 56,
            color: "#05ffa1",
            textShadow: "0 0 18px #05ffa1, 0 2px 0 #015c33",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          ▸ EIXO {eixoLongo.toUpperCase()}
        </span>
      </div>

      {/* CURSO — protagonista, sem fundo amarelo */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "32px 24px",
          borderTop: "2px solid #fff700",
          marginBottom: 12,
        }}
      >
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 50,
            color: "#d4a8ff",
            textTransform: "uppercase",
            letterSpacing: 5,
            margin: 0,
            opacity: 0.95,
          }}
        >
          // meu curso na UFTM é
        </p>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 52,
            color: "#fff700",
            textShadow: "0 0 22px #ff71ce, 0 3px 0 #ff2e93",
            margin: "24px 0 0 0",
            letterSpacing: 1.5,
            lineHeight: 1.25,
          }}
        >
          {cursoNome.toUpperCase()}
        </p>
      </div>

      {/* UFTM — MEGA destaque com profundidade 3D + beam de luz vertical */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: 24,
          padding: "0",
        }}
      >
        {/* Beam de luz vertical atrás do UFTM */}
        <div
          style={{
            position: "absolute",
            top: -40,
            left: "50%",
            width: 320,
            height: 280,
            marginLeft: -160,
            background:
              "radial-gradient(ellipse at center, rgba(5,255,161,0.45) 0%, rgba(5,255,161,0.15) 40%, transparent 70%)",
            filter: "blur(12px)",
            pointerEvents: "none",
          }}
        />
        {/* Glow horizontal logo abaixo (chão de luz) */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            width: 480,
            height: 12,
            marginLeft: -240,
            background:
              "radial-gradient(ellipse at center, #05ffa1 0%, transparent 70%)",
            filter: "blur(6px)",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        />
        {/* UFTM gigante com 3D extrusion */}
        <p
          style={{
            position: "relative",
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 140,
            color: "#05ffa1",
            // Multi-layer text-shadow simulando extrusão 3D + glow externo
            textShadow: [
              // Extrusão progressiva (efeito de altura)
              "0 2px 0 #04d488",
              "0 4px 0 #03b073",
              "0 6px 0 #028c5e",
              "0 8px 0 #016847",
              "0 10px 0 #014530",
              "0 12px 0 #00321f",
              // Sombra projetada
              "0 14px 30px rgba(0,0,0,0.7)",
              // Glow externo neon
              "0 0 40px #05ffa1",
              "0 0 80px rgba(5,255,161,0.6)",
            ].join(", "),
            letterSpacing: 8,
            margin: 0,
            lineHeight: 1,
            fontWeight: "normal",
          }}
        >
          UFTM
        </p>
        <p
          style={{
            position: "relative",
            fontFamily: "'VT323', monospace",
            fontSize: 48,
            color: "#fff8e7",
            letterSpacing: 8,
            textTransform: "uppercase",
            margin: "24px 0 0 0",
            textShadow: "0 0 12px rgba(255,255,255,0.5)",
          }}
        >
          ⌖ {campus}
        </p>
      </div>

      {/* Backdrop escuro pro footer */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 260,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(13,2,33,0.92) 50%, rgba(13,2,33,0.98) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 56,
          textAlign: "center",
          padding: "0 64px",
        }}
      >
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 38,
            color: "#fff700",
            textShadow:
              "0 0 14px #ff71ce, 0 0 28px #ff2e93, 0 2px 0 #0d0221",
            margin: 0,
            letterSpacing: 2,
            lineHeight: 1.25,
          }}
        >
          FEIRA DE PROFISSÕES
        </p>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 38,
            color: "#fff700",
            textShadow:
              "0 0 14px #ff71ce, 0 0 28px #ff2e93, 0 2px 0 #0d0221",
            margin: "12px 0 0 0",
            letterSpacing: 2,
            lineHeight: 1.25,
          }}
        >
          UFTM · 2026
        </p>
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 52,
            color: "#fff8e7",
            letterSpacing: 3,
            margin: "24px 0 0 0",
          }}
        >
          <span style={{ fontSize: 62, verticalAlign: "-4px" }}>@</span>
          proppg.uftm
        </p>
      </div>
    </div>
  );
});

export default ShareCard;
