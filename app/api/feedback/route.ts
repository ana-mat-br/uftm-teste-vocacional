/**
 * POST /api/feedback
 * Recebe { sessaoId, feedback } e atualiza a coluna feedback_resultado.
 * Não-PII. Idempotente — se chamar 2x, a 2ª escolha sobrescreve a 1ª.
 */

import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

type FeedbackPayload = {
  sessaoId: string;
  feedback: "positivo" | "neutro" | "negativo";
};

const VALIDOS = ["positivo", "neutro", "negativo"] as const;

export async function POST(request: Request) {
  let body: FeedbackPayload;
  try {
    body = (await request.json()) as FeedbackPayload;
  } catch {
    return NextResponse.json({ erro: "JSON inválido" }, { status: 400 });
  }

  if (!body.sessaoId || !VALIDOS.includes(body.feedback)) {
    return NextResponse.json({ erro: "payload inválido" }, { status: 400 });
  }

  try {
    const sb = getSupabaseAdmin();
    const { error } = await sb
      .from("sessoes")
      .update({ feedback_resultado: body.feedback })
      .eq("id", body.sessaoId);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[feedback]", e);
    return NextResponse.json({ erro: "falha ao salvar" }, { status: 500 });
  }
}
