/**
 * Monte Carlo de validação do quiz vocacional.
 *
 * Pra cada curso UFTM, simula N alunos sintéticos fazendo o quiz com
 * escolhas probabilísticas. Cada aluno, em cada cena, escolhe uma opção
 * via softmax sobre o produto escalar [pontos_opção · vetor_curso] com
 * temperatura T:
 *
 *   P(opc_i) ∝ exp(score_i / T)
 *
 * - T → 0  : determinístico (sempre a melhor) — equivale ao greedy
 * - T → ∞  : uniforme aleatório
 * - T = 1  : aluno "típico" — escolhe a melhor com viés, mas pode dispersar
 *
 * Por padrão testa T ∈ {0.5, 1.0, 2.0}, simulando o gradiente do aluno
 * "ideal-fit" até o aluno indeciso. Pra cada combinação (curso, T) calcula:
 *
 *   - top1_rate : % de alunos cuja recomendação top 1 = curso esperado
 *   - top3_rate : % de alunos cujo top 3 contém o curso esperado
 *   - top1_alt  : se errou, qual curso ganhou mais
 *
 * Metas:
 *   - T=0.5 : 100% top1 (sanity check do greedy)
 *   - T=1.0 : ≥70% top1  e ≥90% top3
 *   - T=2.0 : ≥40% top1  e ≥80% top3
 *
 * Uso:
 *   npx tsx scripts/monte-carlo.ts                 # padrão (1000 alunos, T={0.5,1,2})
 *   npx tsx scripts/monte-carlo.ts 5000 0.8 1.5    # N=5000, T={0.8, 1.5}
 */

import { CURSOS, type Curso } from "@/data/cursos";
import { CENAS } from "@/data/cenas";
import { topCursos, type VetorEixos } from "@/lib/matching";

type Resultado = {
  curso: string;
  grupo?: string;
  temp: number;
  top1Rate: number;
  top3Rate: number;
  top1Alt: { nome: string; rate: number } | null;
};

/** Escolhe uma opção da cena via softmax sobre o produto escalar opção·curso. */
function escolherOpcao(cenaIdx: number, vetorCurso: VetorEixos, temp: number, rng: () => number): number {
  const cena = CENAS[cenaIdx];
  const scores = cena.opcoes.map((opc) =>
    opc.pontos.reduce((s, p, i) => s + p * vetorCurso[i], 0)
  );
  // Softmax estável: subtrai o max
  const max = Math.max(...scores);
  const expScores = scores.map((s) => Math.exp((s - max) / temp));
  const total = expScores.reduce((a, b) => a + b, 0);

  const r = rng() * total;
  let acc = 0;
  for (let i = 0; i < expScores.length; i++) {
    acc += expScores[i];
    if (r <= acc) return i;
  }
  return expScores.length - 1;
}

/** Soma vetores in-place. */
function somar(acc: VetorEixos, add: VetorEixos): void {
  for (let i = 0; i < acc.length; i++) acc[i] += add[i];
}

/** Roda N alunos pra um curso numa temperatura, devolve % top1 e top3. */
function simularCurso(curso: Curso, n: number, temp: number, seed: number): {
  top1Rate: number;
  top3Rate: number;
  top1Alt: { nome: string; rate: number } | null;
} {
  const alvo = curso.grupo ?? curso.nome;
  let s = seed;
  const rng = () => {
    // LCG simples — só pra reproducibilidade
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };

  let top1 = 0;
  let top3 = 0;
  const alt: Record<string, number> = {};

  for (let i = 0; i < n; i++) {
    const vetorAluno: VetorEixos = [0, 0, 0, 0, 0, 0, 0];
    for (let c = 0; c < CENAS.length; c++) {
      const opIdx = escolherOpcao(c, curso.vetor, temp, rng);
      somar(vetorAluno, CENAS[c].opcoes[opIdx].pontos);
    }
    const t = topCursos(vetorAluno, 3);
    const nomes = t.map((x) => x.grupo ?? x.nome);
    if (nomes[0] === alvo) top1++;
    else alt[nomes[0]] = (alt[nomes[0]] ?? 0) + 1;
    if (nomes.includes(alvo)) top3++;
  }

  let topAlt: { nome: string; rate: number } | null = null;
  const altEntries = Object.entries(alt).sort((a, b) => b[1] - a[1]);
  if (altEntries.length > 0) {
    topAlt = { nome: altEntries[0][0], rate: altEntries[0][1] / n };
  }

  return { top1Rate: top1 / n, top3Rate: top3 / n, top1Alt: topAlt };
}

function pct(x: number): string {
  return (x * 100).toFixed(1).padStart(5) + "%";
}

function badge(rate: number, meta: number): string {
  if (rate >= meta) return "✅";
  if (rate >= meta - 0.1) return "🟡";
  return "❌";
}

function main() {
  const args = process.argv.slice(2);
  const n = args[0] ? parseInt(args[0], 10) : 1000;
  const temps = args.length > 1 ? args.slice(1).map(parseFloat) : [0.5, 1.0, 2.0];

  // Metas por temperatura: (temp → [meta_top1, meta_top3])
  const METAS: Record<string, [number, number]> = {
    "0.5": [0.95, 1.0],
    "1.0": [0.7, 0.9],
    "1.5": [0.55, 0.85],
    "2.0": [0.4, 0.8],
  };
  const metaPra = (t: number): [number, number] => METAS[t.toFixed(1)] ?? [0.5, 0.85];

  console.log(`\nMonte Carlo — ${n} alunos × ${CURSOS.length} cursos × ${temps.length} temperaturas\n`);
  console.log(`Temperatura: 0 = greedy puro, 1 = aluno típico, 2 = bem disperso\n`);

  // Header
  const sep = "─".repeat(78);
  console.log(sep);
  const cabec = "Curso".padEnd(36) + temps.flatMap((t) => [`T=${t} t1`.padStart(10), `t3`.padStart(7)]).join("");
  console.log(cabec);
  console.log(sep);

  const todos: Resultado[] = [];
  let falhas = 0;

  for (const curso of CURSOS) {
    const linha: string[] = [curso.nome.slice(0, 35).padEnd(36)];
    for (let i = 0; i < temps.length; i++) {
      const t = temps[i];
      const r = simularCurso(curso, n, t, (curso.nome.charCodeAt(0) * 1000 + i) | 0);
      todos.push({
        curso: curso.nome,
        grupo: curso.grupo,
        temp: t,
        top1Rate: r.top1Rate,
        top3Rate: r.top3Rate,
        top1Alt: r.top1Alt,
      });
      const [m1, m3] = metaPra(t);
      linha.push(`${pct(r.top1Rate)}${badge(r.top1Rate, m1)}`.padStart(10));
      linha.push(`${pct(r.top3Rate)}${badge(r.top3Rate, m3)}`.padStart(7));
      if (t === 1.0 && r.top1Rate < m1) falhas++;
    }
    console.log(linha.join(""));
  }
  console.log(sep);

  console.log(`\nLegenda: ✅ atinge meta · 🟡 dentro de 10pp · ❌ abaixo`);
  console.log(`Metas — T=0.5: 95%/100% · T=1.0: 70%/90% · T=2.0: 40%/80%\n`);

  // Top alternativas pra cursos com baixa top1 em T=1
  const baixos = todos.filter((r) => r.temp === 1.0 && r.top1Rate < 0.7);
  if (baixos.length > 0) {
    console.log(`⚠️  Cursos abaixo da meta T=1.0 (70%):\n`);
    for (const b of baixos) {
      const alt = b.top1Alt ? ` (${(b.top1Alt.rate * 100).toFixed(0)}% viraram ${b.top1Alt.nome})` : "";
      console.log(`   ${b.curso.padEnd(40)} top1=${pct(b.top1Rate)} top3=${pct(b.top3Rate)}${alt}`);
    }
    console.log("");
  }

  // Resumo
  const t1 = todos.filter((r) => r.temp === 1.0);
  const mediaTop1 = t1.reduce((s, r) => s + r.top1Rate, 0) / t1.length;
  const mediaTop3 = t1.reduce((s, r) => s + r.top3Rate, 0) / t1.length;
  console.log(`📊 Resumo (T=1.0): top1 médio ${pct(mediaTop1)} · top3 médio ${pct(mediaTop3)}`);
  console.log(`   ${t1.filter((r) => r.top1Rate >= 0.7).length}/${t1.length} cursos atingem meta top1`);
  console.log(`   ${t1.filter((r) => r.top3Rate >= 0.9).length}/${t1.length} cursos atingem meta top3\n`);
}

main();
