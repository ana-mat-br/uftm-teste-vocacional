/**
 * Algoritmo de matching: vetor de eixos do aluno → top 3 cursos.
 * Usa similaridade de cosseno (mede direção, não magnitude).
 *
 * Eixos (7): [CUI, INV, CON, COM, TRA, CUL, TEC]
 *   CUI Cuidador     — empatia, cuidar do outro
 *   INV Investigador — curiosidade, pesquisa, "por quê"
 *   CON Construtor   — engenharias físicas (Civil, Mecânica, etc)
 *   COM Comunicador  — conectar, expressar, ensinar
 *   TRA Transformador — justiça, mudança social, contexto
 *   CUL Cultivador   — trabalhar com o vivo, sustentabilidade
 *   TEC Decifrador   — computação, dados, lógica, sistemas digitais
 */

import { CURSOS, type Curso } from "@/data/cursos";

export const EIXOS = ["CUI", "INV", "CON", "COM", "TRA", "CUL", "TEC"] as const;
export type EixoSigla = typeof EIXOS[number];

/** Vetor com pesos em cada eixo. Ordem segue EIXOS. */
export type VetorEixos = [number, number, number, number, number, number, number];

/** Cria um vetor com todos os eixos zerados (helper genérico). */
export function vetorZeradoArr(): VetorEixos {
  return EIXOS.map(() => 0) as unknown as VetorEixos;
}

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
 * Threshold = 0.05 (5%) de gap de similaridade cosseno.
 */
export function precisaDesempate(top3: CursoComScore[], threshold = 0.05): boolean {
  if (top3.length < 2) return false;
  const gap = top3[0].score - top3[1].score;
  return gap < threshold;
}

/**
 * Aplica bonus do desempate: adiciona o vetor do curso escolhido (×2) ao vetor
 * atual. Isso "puxa" o resultado pra família de cursos similares.
 */
export function aplicarBonusDesempate(vetor: VetorEixos, vetorCurso: VetorEixos): VetorEixos {
  const FATOR = 2;
  return vetor.map((v, i) => v + vetorCurso[i] * FATOR) as unknown as VetorEixos;
}

/** Níveis de confiança no resultado, baseado no gap de score. */
export type NivelConfianca = "alta" | "hibrido" | "exploratorio";

export function nivelConfianca(top3: CursoComScore[]): NivelConfianca {
  if (top3.length < 2) return "alta";
  const top1 = top3[0].score;
  const gap = top1 - top3[1].score;
  if (gap >= 0.05 && top1 >= 0.85) return "alta";
  if (gap < 0.02 || top1 < 0.80) return "exploratorio";
  return "hibrido";
}
