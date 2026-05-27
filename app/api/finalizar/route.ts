/**
 * POST /api/finalizar
 *
 * Recebe os dados do quiz do client, calcula top 3 cursos via similaridade
 * cosseno, gera o bixinho (via Claude Haiku, fallback templates), salva
 * tudo ANÔNIMO no Supabase e retorna o payload completo pra UI montar
 * a Carta.
 *
 * Zero PII: só recebemos codinome gerado, vetor, respostas — nada do aluno.
 */

import { NextResponse } from "next/server";
import { topCursos, eixoDominante, type VetorEixos } from "@/lib/matching";
import { gerarBixinho, gerarNomeBixinho, type BixinhoGerado } from "@/lib/claude";
import { gerarBixinhoFallback } from "@/data/bixinhos-fallback";
import { getSupabaseAdmin } from "@/lib/supabase";

type FinalizarPayload = {
  codinome: string;
  vetor: VetorEixos;
  respostas: { cena: number; opcao: number }[];
  iniciadoEm: number;
  userAgentTipo?: string;
};

export async function POST(request: Request) {
  let body: FinalizarPayload;
  try {
    body = (await request.json()) as FinalizarPayload;
  } catch {
    return NextResponse.json({ erro: "JSON inválido" }, { status: 400 });
  }

  // Validação básica — 7 eixos: [CUI, INV, CON, COM, TRA, CUL, TEC]
  if (
    !body.codinome ||
    !Array.isArray(body.vetor) ||
    body.vetor.length !== 7 ||
    !Array.isArray(body.respostas)
  ) {
    return NextResponse.json({ erro: "payload inválido" }, { status: 400 });
  }

  // 1) Calcula top 3 cursos + eixo dominante
  const top3 = topCursos(body.vetor, 3);
  const eixo = eixoDominante(body.vetor);

  // 2) Gera nome do copiloto server-side (distribuição uniforme em ~120k combos)
  //    e checa colisão no Supabase. Loop barato — só query, sem chamar LLM.
  const sbCheck = (() => {
    try {
      return getSupabaseAdmin();
    } catch {
      return null;
    }
  })();
  async function nomeJaExiste(nome: string): Promise<boolean> {
    if (!sbCheck) return false;
    const { data, error } = await sbCheck
      .from("sessoes")
      .select("id")
      .eq("bixinho_nome", nome)
      .limit(1);
    if (error) return false;
    return (data?.length ?? 0) > 0;
  }
  let bixinhoNome = gerarNomeBixinho();
  for (let i = 0; i < 10 && (await nomeJaExiste(bixinhoNome)); i++) {
    bixinhoNome = gerarNomeBixinho();
  }

  // 3) Gera personalidade + msg_despedida (Haiku → fallback)
  let bixinho: BixinhoGerado;
  let bixinhoFonte: "llm" | "fallback" = "llm";
  try {
    bixinho = await gerarBixinho({
      codinome: body.codinome,
      bixinhoNome,
      vetor: body.vetor,
      cursoTop: top3[0].nome,
      eixoDominante: eixo,
    });
  } catch (e) {
    console.error("[finalizar] Haiku falhou, usando fallback:", e);
    bixinho = gerarBixinhoFallback(eixo, body.codinome, bixinhoNome);
    bixinhoFonte = "fallback";
  }

  // 4) Salva sessão anônima no Supabase
  let sessaoIdSalva: string | null = null;
  try {
    const sb = getSupabaseAdmin();
    const iniciadoIso = new Date(body.iniciadoEm).toISOString();
    const { data, error } = await sb
      .from("sessoes")
      .insert({
        codinome: body.codinome,
        iniciado_em: iniciadoIso,
        finalizado_em: new Date().toISOString(),
        respostas: body.respostas,
        vetor: body.vetor,
        curso_top: top3[0].nome,
        curso_alt1: top3[1]?.nome ?? null,
        curso_alt2: top3[2]?.nome ?? null,
        bixinho_nome: bixinho.bixinho_nome,
        user_agent_tipo: body.userAgentTipo ?? null,
      })
      .select("id")
      .single();
    if (error) throw error;
    sessaoIdSalva = data.id;
  } catch (e) {
    console.error("[finalizar] Falha ao salvar no Supabase:", e);
    // Não bloqueia o aluno: ainda retorna o resultado, mas sem id de sessão
  }

  return NextResponse.json({
    sessaoId: sessaoIdSalva,
    eixoDominante: eixo,
    top3: top3.map((c) => ({
      nome: c.nome,
      grupo: c.grupo,
      papelMissao: c.papelMissao,
      campus: c.campus,
      score: c.score,
    })),
    bixinho,
    bixinhoFonte,
  });
}
