/**
 * Mapa eixo dominante → sprite do bixinho.
 * O sprite é escolhido pelo eixo com maior pontuação no vetor do aluno.
 */

import type { EixoSigla } from "@/lib/matching";

export const SPRITES_POR_EIXO: Record<EixoSigla, string> = {
  CUI: "/sprites/cuidador.svg",
  INV: "/sprites/investigador.svg",
  CON: "/sprites/construtor.svg",
  COM: "/sprites/comunicador.svg",
  TRA: "/sprites/transformador.svg",
  CUL: "/sprites/cultivador.svg",
};

export const NOME_EIXO_LONGO: Record<EixoSigla, string> = {
  CUI: "Cuidador",
  INV: "Investigador",
  CON: "Construtor",
  COM: "Comunicador",
  TRA: "Transformador",
  CUL: "Cultivador",
};
