// TODO D4: endpoint que:
// 1. recebe vetor + respostas do client
// 2. calcula top 3 cursos (via lib/matching.ts)
// 3. chama Claude Haiku pra gerar { bixinho_nome, personalidade, msg_despedida }
// 4. salva sessão no Supabase (anônima)
// 5. retorna o payload completo pra UI montar a Carta

import { NextResponse } from "next/server";

export async function POST(_request: Request) {
  return NextResponse.json({
    todo: "implementar em D4",
  });
}
