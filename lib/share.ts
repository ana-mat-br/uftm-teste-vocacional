"use client";

/**
 * Captura DOM offscreen via html2canvas e dispara Web Share API ou,
 * em fallback, download. Importa html2canvas dinamicamente pra não
 * arrastar ~50kb pro bundle inicial.
 */

export async function captureNodeAsBlob(node: HTMLElement): Promise<Blob> {
  // Espera fontes pra evitar capturar com fallback de fonte
  if (typeof document !== "undefined" && document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {
      // ignora
    }
  }

  const { default: html2canvas } = await import("html2canvas");
  const canvas = await html2canvas(node, {
    width: 1080,
    height: 1920,
    scale: 1,
    backgroundColor: null,
    useCORS: true,
    logging: false,
  });

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) =>
        blob ? resolve(blob) : reject(new Error("toBlob retornou null")),
      "image/png",
      0.95,
    );
  });
}

export type ShareResult = "shared" | "downloaded" | "cancelled" | "error";

type ShareOpts = {
  filename: string;
  title: string;
  text: string;
};

export async function shareOrDownload(
  node: HTMLElement,
  opts: ShareOpts,
): Promise<ShareResult> {
  let blob: Blob;
  try {
    blob = await captureNodeAsBlob(node);
  } catch (e) {
    console.error("[share] falha ao capturar", e);
    return "error";
  }

  const file = new File([blob], opts.filename, { type: "image/png" });

  // Web Share API com arquivos (Android Chrome, iOS Safari 16+)
  if (
    typeof navigator !== "undefined" &&
    typeof navigator.canShare === "function" &&
    typeof navigator.share === "function" &&
    navigator.canShare({ files: [file] })
  ) {
    try {
      await navigator.share({
        files: [file],
        title: opts.title,
        text: opts.text,
      });
      return "shared";
    } catch (err) {
      if ((err as DOMException)?.name === "AbortError") return "cancelled";
      // qualquer outro erro → fallback download
    }
  }

  // Fallback desktop: força download
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = opts.filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return "downloaded";
}
