/**
 * GET /api/stats/cena/[id]
 *
 * Retorna a distribuição de respostas pra uma cena específica:
 *   { cena, total, opcoes: [{ opcao, n, pct }] }
 *
 * Agrega via função SQL `stats_cena` (migração 003) — barato pra rodar
 * a cada resposta. Sem PII: só conta opções.
 */

import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

type StatRow = { opcao: number; n: number };

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const cenaId = parseInt(id, 10);
  if (!Number.isFinite(cenaId) || cenaId < 2 || cenaId > 99) {
    return NextResponse.json({ erro: "id de cena inválido" }, { status: 400 });
  }

  try {
    const sb = getSupabaseAdmin();
    const { data, error } = await sb.rpc("stats_cena", { cena_id: cenaId });
    if (error) throw error;

    const rows = (data ?? []) as StatRow[];
    const total = rows.reduce((s, r) => s + Number(r.n), 0);
    const opcoes = rows.map((r) => ({
      opcao: r.opcao,
      n: Number(r.n),
      pct: total > 0 ? Math.round((Number(r.n) / total) * 100) : 0,
    }));

    return NextResponse.json(
      { cena: cenaId, total, opcoes },
      {
        headers: {
          // cache curto pra não martelar o DB; aceita refresh suave
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120",
        },
      },
    );
  } catch (e) {
    console.error("[stats/cena]", e);
    return NextResponse.json({ erro: "falha ao agregar" }, { status: 500 });
  }
}
