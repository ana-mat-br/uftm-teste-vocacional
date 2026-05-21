/**
 * Simulação Monte Carlo: dado N alunos escolhendo opções uniformemente
 * aleatórias em cada cena, quais cursos aparecem como top 1 e com que
 * frequência? Ajuda a detectar se o sistema é "balanceado" — todos os
 * cursos têm chance razoável de sair — ou se alguns dominam por
 * propriedades estruturais da matriz.
 *
 * Uso: npx tsx scripts/probabilidades.ts [N]
 */

import { CENAS } from "@/data/cenas";
import { CURSOS } from "@/data/cursos";
import { topCursos, type VetorEixos } from "@/lib/matching";
import { AREAS, areaDoCurso } from "@/lib/areas";

const N = Number(process.argv[2] ?? 20000);

function simularAluno(): VetorEixos {
  const vetor: VetorEixos = [0, 0, 0, 0, 0, 0, 0];
  for (const cena of CENAS) {
    const idx = Math.floor(Math.random() * cena.opcoes.length);
    cena.opcoes[idx].pontos.forEach((p, i) => {
      vetor[i] += p;
    });
  }
  return vetor;
}

function rodarSimulacao(n: number) {
  const cursosCount = new Map<string, number>();
  // Inicializa com 0 pra cada curso (assim cursos com 0% aparecem)
  for (const c of CURSOS) {
    const display = c.grupo ?? c.nome;
    cursosCount.set(display, 0);
  }

  for (let i = 0; i < n; i++) {
    const vetor = simularAluno();
    const top1 = topCursos(vetor, 1)[0];
    const display = top1.grupo ?? top1.nome;
    cursosCount.set(display, (cursosCount.get(display) ?? 0) + 1);
  }

  return cursosCount;
}

function main() {
  console.log(`\n🎲 Simulação Monte Carlo · ${N.toLocaleString("pt-BR")} alunos aleatórios\n`);
  const t0 = Date.now();
  const counts = rodarSimulacao(N);
  const dt = Date.now() - t0;

  const totalCursosUnicos = counts.size;
  const esperadoUniforme = 100 / totalCursosUnicos;
  const ordenado = [...counts.entries()].sort((a, b) => b[1] - a[1]);

  console.log(`Cursos únicos (Letras agrupado): ${totalCursosUnicos}`);
  console.log(`Esperado se totalmente equilibrado: ${esperadoUniforme.toFixed(2)}% (${(N / totalCursosUnicos).toFixed(0)}/aluno)\n`);

  // Tabela ordenada
  console.log("Curso                                    %      n      barra");
  console.log("─".repeat(75));
  for (const [nome, count] of ordenado) {
    const pct = (count / N) * 100;
    const barraLen = Math.round(pct * 2);
    const barra = "█".repeat(Math.min(barraLen, 40));
    const status =
      count === 0 ? "❌" : pct >= esperadoUniforme * 2 ? "🔥" : pct < esperadoUniforme / 2 ? "🟡" : "✅";
    console.log(
      `${status} ${nome.padEnd(38)} ${pct.toFixed(2).padStart(5)}%  ${String(count).padStart(5)}  ${barra}`,
    );
  }

  // Métricas de equilíbrio
  console.log("");
  const percentuais = ordenado.map(([, c]) => (c / N) * 100);
  const media = percentuais.reduce((a, b) => a + b, 0) / percentuais.length;
  const variancia = percentuais.reduce((s, p) => s + (p - media) ** 2, 0) / percentuais.length;
  const desvio = Math.sqrt(variancia);
  const cv = (desvio / media) * 100;
  const zerados = percentuais.filter((p) => p === 0).length;
  const dominantes = ordenado.filter(([, c]) => (c / N) * 100 >= esperadoUniforme * 2).length;
  const subRep = ordenado.filter(([, c]) => (c / N) * 100 < esperadoUniforme / 2 && c > 0).length;

  console.log("─".repeat(75));
  console.log(`📊 Métricas:`);
  console.log(`   média:               ${media.toFixed(2)}%`);
  console.log(`   desvio padrão:       ${desvio.toFixed(2)} pp`);
  console.log(`   coef. variação (CV): ${cv.toFixed(1)}% ${cv < 50 ? "(bom)" : cv < 100 ? "(médio)" : "(alto — desbalanceado)"}`);
  console.log(`   ❌ cursos com 0%:    ${zerados}`);
  console.log(`   🔥 dominantes (≥2x):  ${dominantes}`);
  console.log(`   🟡 sub-representados: ${subRep}`);
  console.log("");

  // Distribuição por área
  console.log("Por área:");
  const areaCount: Record<string, number> = {};
  for (const [nome, count] of counts.entries()) {
    const a = areaDoCurso(nome === "Letras" ? "Letras (PT/ESP)" : nome);
    if (a) areaCount[a] = (areaCount[a] ?? 0) + count;
  }
  const areasOrd = Object.entries(areaCount).sort((a, b) => b[1] - a[1]);
  const areaTotal = Object.values(areaCount).reduce((a, b) => a + b, 0);
  for (const [k, c] of areasOrd) {
    const area = AREAS[k as keyof typeof AREAS];
    const pct = (c / areaTotal) * 100;
    const expectedAreaPct = 100 / Object.keys(AREAS).length;
    const status =
      pct >= expectedAreaPct * 1.5 ? "🔥" : pct < expectedAreaPct / 1.5 ? "🟡" : "✅";
    console.log(`   ${status} ${area.emoji} ${area.titulo.padEnd(22)} ${pct.toFixed(1).padStart(5)}%  (${c})`);
  }

  console.log(`\n⏱️  ${dt}ms\n`);
}

main();
