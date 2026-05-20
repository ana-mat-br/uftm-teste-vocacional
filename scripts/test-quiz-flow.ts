/**
 * Smoke test end-to-end do quiz: roda 2 personas críticas via Playwright
 * e verifica o curso do topo. Útil pra pegar regressões no fluxo (cenas,
 * matching, dedupe de grupos, desempate, resultado).
 *
 * Pré-requisitos:
 *   1. npm run dev (em outro terminal)
 *   2. npx tsx scripts/test-quiz-flow.ts
 *
 * Personas:
 *   - "medicina"   → escolhe o caminho 🧬 CUI+INV; espera top1 = Medicina
 *   - "comunicador" → escolhe COM puro; espera top1 = Letras (sem duplicar)
 */

import { chromium, type Page } from "playwright";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

type Persona = {
  nome: string;
  /** Índice (0-based) da opção a clicar em cada uma das 9 cenas (id 2..10). */
  escolhas: number[];
  /** Substring esperada no nome do curso top 1. */
  topEsperado: string;
  /** Se true, o fluxo deve passar por /desempate. */
  esperaDesempate?: boolean;
};

const PERSONAS: Persona[] = [
  {
    // Medicina-leaning: 🤔, 🧬*NOVA*, 🛡️, 🫂, 📊, 🧠, 🌊, 🍞, 🩺
    // Vetor esperado: [10, 10, 0, 4, 3, 2, 4] → top Medicina
    // Gap 2.4% e top1 92% → "híbrido", NÃO dispara desempate (v0.2.1)
    nome: "medicina-leaning",
    escolhas: [0, 1, 3, 0, 1, 2, 2, 1, 0],
    topEsperado: "Medicina",
  },
  {
    // Comunicador puro: 😅, 📡, 🗣️, 🫂, 🚨, 📝, 🏕️, 📡, 🗣️
    // Vetor esperado: [5, 2, 2, 16, 4, 0, 0] → Letras top 1
    // Gap 2.5% e top1 90% → "híbrido", NÃO dispara desempate (v0.2.1)
    nome: "comunicador-puro",
    escolhas: [1, 3, 2, 0, 2, 1, 3, 3, 3],
    topEsperado: "Letras",
  },
];

const IDS_CENAS = [2, 3, 4, 5, 6, 7, 8, 9, 10];

async function rodarPersona(page: Page, p: Persona): Promise<void> {
  console.log(`\n▸ ${p.nome}`);

  await page.goto(BASE_URL);
  await page.getByRole("button", { name: /EMBARCAR/i }).click();

  for (let i = 0; i < IDS_CENAS.length; i++) {
    const cenaId = IDS_CENAS[i];
    const idx = p.escolhas[i];
    await page.waitForURL(new RegExp(`/cena/${cenaId}$`));
    // Espera o título carregar antes de contar opções (useSessao tem fase carregando)
    await page.getByRole("heading", { level: 1 }).waitFor({ timeout: 10_000 });
    const opcoes = page.locator("main > div.flex.flex-col.gap-3 > button");
    await opcoes.first().waitFor({ timeout: 10_000 });
    const total = await opcoes.count();
    if (idx >= total) {
      throw new Error(`Cena ${cenaId}: índice ${idx} fora do range (tem ${total} opções)`);
    }
    await opcoes.nth(idx).click();
    process.stdout.write(`  c${cenaId}[${idx}] `);
  }
  process.stdout.write("\n");

  // Depois da última cena: vai pra /resultado, que pode redirecionar pra
  // /desempate internamente. Espera estabilizar (até 5s pra detectar redirect).
  await page.waitForURL(/\/(resultado|desempate)$/);
  await page.waitForTimeout(500); // dá tempo do useEffect do Resultado fazer router.replace
  const passouDesempate = page.url().includes("/desempate");

  if (passouDesempate) {
    console.log("  → /desempate (clica primeiro card)");
    if (!p.esperaDesempate) {
      console.warn(`  ⚠️ não esperado: persona não previa desempate`);
    }
    await page.locator("main > div.flex.flex-col.gap-3 > button").first().click();
    await page.waitForURL(/\/resultado$/);
  } else if (p.esperaDesempate) {
    console.warn(`  ⚠️ esperava desempate, foi direto pro resultado`);
  }

  // Aguarda LLM/fallback responder (até 30s)
  await page.getByText("TRANSMISSÃO FINAL").waitFor({ timeout: 30_000 });

  // Top 1: <p> com classe text-3xl no Resultado.tsx
  const topNome = await page.locator("main p.text-3xl").first().textContent();
  const trimmed = (topNome ?? "").trim();
  const ok = trimmed.includes(p.topEsperado);
  console.log(`  → top 1: "${trimmed}" ${ok ? "✅" : "❌ esperava ~" + p.topEsperado}`);

  if (!ok) {
    throw new Error(`Persona ${p.nome}: esperava "${p.topEsperado}", veio "${trimmed}"`);
  }

  // Comunicador: verifica que Letras aparece sem "(PT/ESP)" nem "(PT/ING)"
  if (p.nome === "comunicador-puro") {
    if (trimmed.includes("(PT/")) {
      throw new Error(`Letras não foi deduplicado: "${trimmed}"`);
    }
    console.log("  → dedupe Letras ok (sem PT/ESP|PT/ING no display)");
  }
}

async function main() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext();
  let falhas = 0;

  for (const p of PERSONAS) {
    const page = await ctx.newPage();
    try {
      await rodarPersona(page, p);
    } catch (e) {
      falhas++;
      console.error(`  ❌ ${e instanceof Error ? e.message : e}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  if (falhas > 0) {
    console.error(`\n${falhas}/${PERSONAS.length} persona(s) falharam`);
    process.exit(1);
  }
  console.log(`\n✅ todas as ${PERSONAS.length} personas passaram`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
