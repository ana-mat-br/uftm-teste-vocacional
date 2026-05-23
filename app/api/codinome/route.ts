/**
 * POST /api/codinome
 *
 * Gera um codinome único — checa o Supabase pra evitar colisão entre alunos.
 * Tenta até 5x no espaço base (PREFIXO-NÚMERO). Se ainda colidir (espaço
 * saturado), cai pro espaço expandido (PREFIXO-NÚMERO-SUFIXO).
 */

import { NextResponse } from "next/server";
import {
  gerarCodinomeCandidato,
  gerarCodinomeExpandido,
} from "@/lib/codinome";
import { getSupabaseAdmin } from "@/lib/supabase";

const MAX_TENTATIVAS_BASE = 5;
const MAX_TENTATIVAS_EXPANDIDO = 10;

async function jaExiste(codinome: string): Promise<boolean> {
  const sb = getSupabaseAdmin();
  const { data, error } = await sb
    .from("sessoes")
    .select("id")
    .eq("codinome", codinome)
    .limit(1);
  if (error) throw error;
  return (data?.length ?? 0) > 0;
}

export async function POST() {
  try {
    for (let i = 0; i < MAX_TENTATIVAS_BASE; i++) {
      const c = gerarCodinomeCandidato();
      if (!(await jaExiste(c))) {
        return NextResponse.json({ codinome: c });
      }
    }
    for (let i = 0; i < MAX_TENTATIVAS_EXPANDIDO; i++) {
      const c = gerarCodinomeExpandido();
      if (!(await jaExiste(c))) {
        return NextResponse.json({ codinome: c });
      }
    }
    // Espaço esgotado mesmo expandido — improvável. Devolve um sem garantir.
    return NextResponse.json({ codinome: gerarCodinomeExpandido() });
  } catch (e) {
    console.error("[codinome] falha ao gerar:", e);
    // Fallback: devolve candidato sem checagem. Risco mínimo de colisão.
    return NextResponse.json({ codinome: gerarCodinomeExpandido() });
  }
}
