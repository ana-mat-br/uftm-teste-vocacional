/**
 * Deriva um hue-rotate (em graus) a partir do codinome do aluno.
 * Mesmo arquétipo de co-piloto, paleta única — sensação de "meu bixinho é só meu".
 *
 * Usado como `filter: hue-rotate(Ndeg)` em cima do sprite SVG.
 */

const STEP = 24;

export function hueFromCodinome(codinome: string | null | undefined): number {
  if (!codinome) return 0;
  let h = 0;
  for (let i = 0; i < codinome.length; i++) {
    h = (h * 31 + codinome.charCodeAt(i)) | 0;
  }
  const bucket = Math.abs(h) % (360 / STEP);
  return bucket * STEP;
}

export function hueRotateFilter(codinome: string | null | undefined): string {
  const deg = hueFromCodinome(codinome);
  return deg === 0 ? "" : `hue-rotate(${deg}deg)`;
}
