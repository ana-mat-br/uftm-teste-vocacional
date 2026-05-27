/**
 * Gera card-whatsapp.png (QR no cantinho + URL) e card-impresso.png (QR grande, sem URL).
 * Uso: npx tsx scripts/gerar-cards-divulgacao.ts
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import QRCode from "qrcode";
import { chromium } from "playwright";

const URL_ALVO = "https://uftm-teste-vocacional.vercel.app";
const DIR = join(process.cwd(), "public", "divulgacao");

async function main() {
  // 1) Gera QR SVG (dark modules em #0d0221, fundo branco, quiet zone)
  const qrSvg = await QRCode.toString(URL_ALVO, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 2,
    color: { dark: "#0d0221", light: "#ffffff" },
  });
  writeFileSync(join(DIR, "qr.svg"), qrSvg);
  console.log("✓ qr.svg gerado");

  // 2) Renderiza cards via Playwright
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 1,
  });

  for (const nome of ["card", "card-impresso"]) {
    const page = await ctx.newPage();
    const fileUrl = pathToFileURL(join(DIR, `${nome}.html`)).href;
    await page.goto(fileUrl, { waitUntil: "networkidle" });
    // Aguarda fontes carregarem
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);

    const outName = nome === "card" ? "card-whatsapp.png" : "card-impresso.png";
    await page.screenshot({
      path: join(DIR, outName),
      type: "png",
      omitBackground: false,
      clip: { x: 0, y: 0, width: 1080, height: 1080 },
    });
    console.log(`✓ ${outName} gerado`);
    await page.close();
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
