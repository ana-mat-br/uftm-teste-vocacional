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
