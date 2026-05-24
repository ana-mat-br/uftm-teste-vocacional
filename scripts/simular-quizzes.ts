/**
 * Simula N quizzes sintéticos e insere no Supabase pra popular painel/galeria.
 * Cada aluno escolhe opções via softmax (T=1.0 — aluno típico) sobre o vetor
 * de um curso "alvo" aleatório, gerando trajetórias realistas.
 *
 * Uso: npx tsx scripts/simular-quizzes.ts [N]   (default N=10)
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { resolve } from "node:path";

config({ path: resolve(process.cwd(), ".env.local") });

import { CURSOS } from "@/data/cursos";
import { CENAS } from "@/data/cenas";
import { topCursos, eixoDominante, type VetorEixos } from "@/lib/matching";
import { gerarBixinhoFallback } from "@/data/bixinhos-fallback";
import { gerarCodinomeCandidato } from "@/lib/codinome";

const TEMP = 1.0; // softmax — aluno "típico"
const UA_POOL = ["mobile-ios", "mobile-android", "desktop"] as const;

function escolherOpcao(cenaIdx: number, vetorCurso: VetorEixos): number {
  const cena = CENAS[cenaIdx];
  const scores = cena.opcoes.map((opc) =>
    opc.pontos.reduce((s, p, i) => s + p * vetorCurso[i], 0),
  );
  const max = Math.max(...scores);
  const expScores = scores.map((s) => Math.exp((s - max) / TEMP));
  const total = expScores.reduce((a, b) => a + b, 0);
  const r = Math.random() * total;
  let acc = 0;
  for (let i = 0; i < expScores.length; i++) {
    acc += expScores[i];
    if (r <= acc) return i;
  }
  return expScores.length - 1;
}

function simularAluno() {
  // Escolhe curso "alvo" aleatório
  const alvo = CURSOS[Math.floor(Math.random() * CURSOS.length)];

  const respostas: Record<number, number> = {};
  const vetor: VetorEixos = [0, 0, 0, 0, 0, 0, 0];

  CENAS.forEach((cena, idx) => {
    const opIdx = escolherOpcao(idx, alvo.vetor);
    respostas[cena.id] = opIdx;
    cena.opcoes[opIdx].pontos.forEach((p, i) => {
      vetor[i] += p;
    });
  });

  const top3 = topCursos(vetor, 3);
  const codinome = gerarCodinomeCandidato();
  const eixo = eixoDominante(vetor);
  const bixinho = gerarBixinhoFallback(eixo, codinome);

  const userAgentTipo = UA_POOL[Math.floor(Math.random() * UA_POOL.length)];

  // Datas: iniciado_em entre 0-30min atrás, finalizado_em alguns segundos depois
  const agora = Date.now();
  const iniciadoMs = agora - Math.floor(Math.random() * 30 * 60 * 1000);
  const duracaoMs = (5 + Math.random() * 4) * 60 * 1000; // 5-9 min
  const finalizadoMs = iniciadoMs + duracaoMs;

  return {
    codinome,
    iniciado_em: new Date(iniciadoMs).toISOString(),
    finalizado_em: new Date(finalizadoMs).toISOString(),
    respostas,
    vetor,
    curso_top: top3[0]?.grupo ?? top3[0]?.nome,
    curso_alt1: top3[1] ? (top3[1].grupo ?? top3[1].nome) : null,
    curso_alt2: top3[2] ? (top3[2].grupo ?? top3[2].nome) : null,
    bixinho_nome: bixinho.bixinho_nome,
    user_agent_tipo: userAgentTipo,
    _alvo: alvo.nome,
  };
}

async function main() {
  const N = parseInt(process.argv[2] ?? "10", 10);
  const sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    { auth: { persistSession: false } },
  );

  console.log(`Simulando ${N} quizzes…\n`);
  const sessoes = Array.from({ length: N }, simularAluno);

  // Mostra preview
  for (const s of sessoes) {
    const acerto = s.curso_top === s._alvo ? "✅" : `🔀 (alvo ${s._alvo})`;
    console.log(
      `${s.codinome.padEnd(14)} → ${(s.curso_top ?? "—").padEnd(28)} bixinho:${s.bixinho_nome.padEnd(16)} ${s.user_agent_tipo}  ${acerto}`,
    );
  }

  // Insere (remove _alvo antes)
  const rows = sessoes.map((s) => {
    const { _alvo: _, ...rest } = s;
    return rest;
  });
  const { error } = await sb.from("sessoes").insert(rows);
  if (error) {
    console.error("\nerro:", error);
    process.exit(1);
  }

  console.log(`\n✅ ${N} sessões inseridas no banco`);
}

main();
