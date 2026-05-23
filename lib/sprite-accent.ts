/**
 * Pinta um detalhe do sprite (bochechas) com cor única por codinome.
 *
 * O sprite-base preserva a cor do arquétipo (cuidador rosa, decifrador ciano…)
 * — só o acento muda. Identidade visual do eixo continua legível, e o aluno
 * percebe o bixinho como "o meu".
 */

export const ACCENT_SENTINEL = "#ff00fe";

const PALETTE = [
  "#00f0ff", // cyan
  "#fff95e", // amarelo neon
  "#7ee787", // verde neon
  "#d4a8ff", // lilás
  "#ff8c5a", // laranja quente
  "#fff8e7", // branco quente
];

export function accentFromCodinome(codinome: string | null | undefined): string {
  if (!codinome) return PALETTE[0];
  let h = 0;
  for (let i = 0; i < codinome.length; i++) {
    h = (h * 31 + codinome.charCodeAt(i)) | 0;
  }
  return PALETTE[Math.abs(h) % PALETTE.length];
}
