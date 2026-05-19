/**
 * Algoritmo de matching: vetor de eixos do aluno → top 3 cursos.
 * Usa similaridade de cosseno (mede direção, não magnitude).
 *
 * Eixos: [CUI, INV, CON, COM, TRA, CUL]
 */

import { CURSOS, type Curso } from "@/data/cursos";

export type VetorEixos = [number, number, number, number, number, number];

export const EIXOS = ["CUI", "INV", "CON", "COM", "TRA", "CUL"] as const;
export type EixoSigla = typeof EIXOS[number];

export function similaridadeCosseno(a: VetorEixos, b: VetorEixos): number {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
}

export type CursoComScore = Curso & { score: number };

export function topCursos(vetorAluno: VetorEixos, limite = 3): CursoComScore[] {
  return CURSOS
    .map((curso) => ({
      ...curso,
      score: similaridadeCosseno(vetorAluno, curso.vetor),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limite);
}

/** Retorna a sigla do eixo dominante no vetor (maior valor). */
export function eixoDominante(vetor: VetorEixos): EixoSigla {
  let maxIdx = 0;
  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > vetor[maxIdx]) maxIdx = i;
  }
  return EIXOS[maxIdx];
}

/**
 * Detecta se o top 1 venceu por uma margem apertada sobre o top 2.
 * Se sim, indicamos disparar a cena de desempate.
 *
 * Threshold = 0.05 (5%) de gap de similaridade cosseno.
 */
export function precisaDesempate(top3: CursoComScore[], threshold = 0.05): boolean {
  if (top3.length < 2) return false;
  const gap = top3[0].score - top3[1].score;
  return gap < threshold;
}

/**
 * Aplica bonus do desempate ao vetor do aluno: adiciona o vetor do curso
 * escolhido (×2) ao vetor atual. Isso "puxa" o resultado pra família de
 * cursos similares, em vez de só boostar 1 eixo.
 */
export function aplicarBonusDesempate(vetor: VetorEixos, vetorCurso: VetorEixos): VetorEixos {
  const FATOR = 2;
  return [
    vetor[0] + vetorCurso[0] * FATOR,
    vetor[1] + vetorCurso[1] * FATOR,
    vetor[2] + vetorCurso[2] * FATOR,
    vetor[3] + vetorCurso[3] * FATOR,
    vetor[4] + vetorCurso[4] * FATOR,
    vetor[5] + vetorCurso[5] * FATOR,
  ];
}
