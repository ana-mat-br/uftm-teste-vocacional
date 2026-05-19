/**
 * Script de smoke test pras conexões externas (Supabase + Anthropic).
 * Roda com: npx tsx scripts/test-connections.ts
 */

import { createClient } from "@supabase/supabase-js";
import Anthropic from "@anthropic-ai/sdk";
import { config } from "dotenv";
import { resolve } from "node:path";

// Carrega .env.local manualmente (Next.js faz isso automaticamente em runtime)
config({ path: resolve(process.cwd(), ".env.local") });

async function testSupabase() {
  console.log("→ Testando Supabase...");
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SECRET_KEY!;

  if (!url || !key || key.includes("COLE_AQUI")) {
    console.log("  ❌ SUPABASE_SECRET_KEY não preenchida");
    return false;
  }

  const sb = createClient(url, key, { auth: { persistSession: false } });

  // Tenta inserir uma sessão de teste
  const { data: inserted, error: insertErr } = await sb
    .from("sessoes")
    .insert({ codinome: "TESTE-001", respostas: { teste: true } })
    .select()
    .single();

  if (insertErr) {
    console.log("  ❌ Insert falhou:", insertErr.message);
    return false;
  }
  console.log("  ✅ Insert OK — id:", inserted.id);

  // Limpa o registro de teste
  const { error: delErr } = await sb.from("sessoes").delete().eq("id", inserted.id);
  if (delErr) {
    console.log("  ⚠️  Não consegui limpar o teste:", delErr.message);
  } else {
    console.log("  ✅ Cleanup OK");
  }

  return true;
}

async function testAnthropic() {
  console.log("\n→ Testando Anthropic (Claude Haiku 4.5)...");
  const key = process.env.ANTHROPIC_API_KEY;

  if (!key || key.includes("COLE_AQUI")) {
    console.log("  ⏳ ANTHROPIC_API_KEY ainda não preenchida (pula)");
    return null;
  }

  const client = new Anthropic({ apiKey: key });

  try {
    const resp = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 50,
      messages: [{ role: "user", content: 'Responda em UMA palavra: "ok"' }],
    });
    const block = resp.content.find((b) => b.type === "text");
    const txt = block && block.type === "text" ? block.text.trim() : "";
    console.log("  ✅ Resposta recebida:", JSON.stringify(txt));
    console.log("  ✅ Tokens usados — input:", resp.usage.input_tokens, "output:", resp.usage.output_tokens);
    return true;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    console.log("  ❌ Falhou:", msg);
    return false;
  }
}

async function main() {
  const sbOk = await testSupabase();
  const anthOk = await testAnthropic();
  console.log("\n=== Resultado ===");
  console.log("  Supabase :", sbOk ? "✅" : "❌");
  console.log("  Anthropic:", anthOk === null ? "⏳ pendente" : anthOk ? "✅" : "❌");
  process.exit(sbOk && (anthOk === null || anthOk) ? 0 : 1);
}

main();
