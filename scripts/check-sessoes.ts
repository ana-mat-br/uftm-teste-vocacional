/**
 * Inspeciona as sessões salvas no Supabase. Rode com:
 *   npx tsx scripts/check-sessoes.ts
 */
import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { resolve } from "node:path";

config({ path: resolve(process.cwd(), ".env.local") });

async function main() {
  const sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    { auth: { persistSession: false } },
  );

  const { data, error } = await sb
    .from("sessoes")
    .select("id, codinome, curso_top, bixinho_nome, user_agent_tipo, finalizado_em")
    .order("iniciado_em", { ascending: false })
    .limit(10);

  if (error) {
    console.error("erro:", error);
    process.exit(1);
  }

  console.log(`Total recentes: ${data.length}\n`);
  for (const s of data) {
    console.log(
      `${s.codinome.padEnd(12)} → ${(s.curso_top ?? "—").padEnd(20)} bixinho:${(s.bixinho_nome ?? "—").padEnd(14)} ${s.user_agent_tipo ?? "?"}`,
    );
  }
}

main();
