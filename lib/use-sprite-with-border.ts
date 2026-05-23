"use client";

import { useEffect, useState } from "react";
import { ACCENT_SENTINEL, accentFromCodinome } from "./sprite-accent";

const SPRITE_VIEWBOX = 16; // px no viewBox dos SVGs
const SCALE = 16; // 16 canvas-pixels por sprite-pixel → 256×256 final
const SIZE = SPRITE_VIEWBOX * SCALE;
const BORDER = Math.round(SCALE / 2); // borda branca de meio sprite-pixel
const FINAL = SIZE + BORDER * 2;

const cache = new Map<string, Promise<string>>();

async function tintAndOutline(
  spriteUrl: string,
  accent: string,
): Promise<string> {
  const key = `${spriteUrl}::${accent}`;
  const existing = cache.get(key);
  if (existing) return existing;

  const pending = (async () => {
    // 1) Fetch o SVG e aplica tint do acento
    const svgText = await fetch(spriteUrl).then((r) => r.text());
    const tintedSvg = svgText.replaceAll(ACCENT_SENTINEL, accent);
    const tintedUrl = `data:image/svg+xml;utf8,${encodeURIComponent(tintedSvg)}`;

    // 2) Carrega como Image
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const i = new Image();
      i.crossOrigin = "anonymous";
      i.onload = () => resolve(i);
      i.onerror = reject;
      i.src = tintedUrl;
    });

    // 3) Renderiza o sprite numa "silhueta branca" (off-canvas auxiliar)
    const silh = document.createElement("canvas");
    silh.width = SIZE;
    silh.height = SIZE;
    const sctx = silh.getContext("2d")!;
    sctx.imageSmoothingEnabled = false;
    sctx.drawImage(img, 0, 0, SIZE, SIZE);
    sctx.globalCompositeOperation = "source-in";
    sctx.fillStyle = "#ffffff";
    sctx.fillRect(0, 0, SIZE, SIZE);

    // 4) Canvas final: pinta a silhueta branca 8 vezes deslocada (borda)
    //    e depois o sprite original por cima
    const final = document.createElement("canvas");
    final.width = FINAL;
    final.height = FINAL;
    const fctx = final.getContext("2d")!;
    fctx.imageSmoothingEnabled = false;
    const offsets: Array<[number, number]> = [
      [-BORDER, 0],
      [BORDER, 0],
      [0, -BORDER],
      [0, BORDER],
      [-BORDER, -BORDER],
      [BORDER, -BORDER],
      [-BORDER, BORDER],
      [BORDER, BORDER],
    ];
    for (const [dx, dy] of offsets) {
      fctx.drawImage(silh, BORDER + dx, BORDER + dy);
    }
    fctx.drawImage(img, BORDER, BORDER, SIZE, SIZE);

    return final.toDataURL("image/png");
  })();

  cache.set(key, pending);
  return pending;
}

/**
 * Rasteriza o sprite com a cor de acento aplicada E uma borda branca de
 * 1 sprite-pixel ao redor. Pensado pra impressão (botton) — sem drop-shadow,
 * sem efeitos CSS que borrem na hora do print.
 */
export function useSpriteWithBorder(
  spriteUrl: string,
  codinome: string | null | undefined,
): string | null {
  const accent = accentFromCodinome(codinome);
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    tintAndOutline(spriteUrl, accent).then((u) => {
      if (!cancelled) setUrl(u);
    });
    return () => {
      cancelled = true;
    };
  }, [spriteUrl, accent]);
  return url;
}
