"use client";

import { useEffect, useState } from "react";
import { ACCENT_SENTINEL, accentFromCodinome } from "./sprite-accent";

const cache = new Map<string, Promise<string>>();

async function fetchAndTint(url: string, accent: string): Promise<string> {
  const key = `${url}::${accent}`;
  let pending = cache.get(key);
  if (!pending) {
    pending = fetch(url)
      .then((r) => r.text())
      .then((svg) => {
        const replaced = svg.replaceAll(ACCENT_SENTINEL, accent);
        return `data:image/svg+xml;utf8,${encodeURIComponent(replaced)}`;
      });
    cache.set(key, pending);
  }
  return pending;
}

/**
 * Devolve uma data URL do sprite com a cor de acento (bochechas) pintada
 * a partir do codinome. Enquanto carrega, devolve a URL original — o sprite
 * só aparece com a bochecha "sentinela" magenta por alguns ms.
 */
export function useTintedSprite(
  spriteUrl: string,
  codinome: string | null | undefined,
): string {
  const accent = accentFromCodinome(codinome);
  const [url, setUrl] = useState(spriteUrl);
  useEffect(() => {
    let cancelled = false;
    fetchAndTint(spriteUrl, accent).then((u) => {
      if (!cancelled) setUrl(u);
    });
    return () => {
      cancelled = true;
    };
  }, [spriteUrl, accent]);
  return url;
}
