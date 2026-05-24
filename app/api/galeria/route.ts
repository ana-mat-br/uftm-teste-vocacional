/**
 * GET /api/galeria?page=0&size=24
 *
 * Lista paginada de copilotos finalizados, mais recentes primeiro.
 * Retorna só dados anônimos: codinome, bixinho_nome, curso_top, eixo.
 * Zero PII.
 */

import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { eixoDominante, type VetorEixos } from "@/lib/matching";

const PAGE_SIZE_DEFAULT = 24;
const PAGE_SIZE_MAX = 60;

type Row = {
  id: string;
  codinome: string;
  bixinho_nome: string | null;
  curso_top: string | null;
  vetor: VetorEixos | null;
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = Math.max(0, parseInt(url.searchParams.get("page") ?? "0", 10) || 0);
  const sizeRaw = parseInt(
    url.searchParams.get("size") ?? String(PAGE_SIZE_DEFAULT),
    10,
  );
  const size = Math.min(
    PAGE_SIZE_MAX,
    Math.max(1, Number.isFinite(sizeRaw) ? sizeRaw : PAGE_SIZE_DEFAULT),
  );

  const from = page * size;
  const to = from + size - 1;

  try {
    const sb = getSupabaseAdmin();
    const { data, error, count } = await sb
      .from("sessoes")
      .select("id, codinome, bixinho_nome, curso_top, vetor", { count: "exact" })
      .not("finalizado_em", "is", null)
      .not("bixinho_nome", "is", null)
      .order("finalizado_em", { ascending: false, nullsFirst: false })
      .range(from, to);

    if (error) throw error;

    const itens = (data as Row[]).map((r) => ({
      id: r.id,
      codinome: r.codinome,
      bixinhoNome: r.bixinho_nome ?? "—",
      cursoTop: r.curso_top ?? "—",
      eixo: r.vetor ? eixoDominante(r.vetor) : null,
    }));

    return NextResponse.json(
      { page, size, total: count ?? itens.length, itens },
      {
        headers: {
          "Cache-Control": "public, s-maxage=20, stale-while-revalidate=120",
        },
      },
    );
  } catch (e) {
    console.error("[galeria]", e);
    return NextResponse.json({ erro: "falha ao listar" }, { status: 500 });
  }
}
