/**
 * Gera codinomes anônimos pros candidatos do Protocolo Vocação.
 * Formato: PREFIXO-NÚMERO (ex: "ESTRELA-7", "COMETA-42")
 *
 * Nenhum dado pessoal é envolvido. O codinome é só pra dar charme à narrativa
 * e referenciar nas falas do co-piloto.
 */

const PREFIXOS_ASTRONOMICOS = [
  "ESTRELA",
  "COMETA",
  "NEBULA",
  "PULSAR",
  "QUASAR",
  "GALÁXIA",
  "ASTEROIDE",
  "METEORO",
  "ECLIPSE",
  "NOVA",
  "SUPERNOVA",
  "ÓRION",
] as const;

/** Candidato aleatório PREFIXO-NÚMERO. Sem garantia de unicidade. */
export function gerarCodinomeCandidato(): string {
  const prefixo = PREFIXOS_ASTRONOMICOS[
    Math.floor(Math.random() * PREFIXOS_ASTRONOMICOS.length)
  ];
  const numero = Math.floor(Math.random() * 99) + 1; // 1-99
  return `${prefixo}-${numero}`;
}

/** Versão fallback: adiciona um sufixo alfanumérico curto quando o espaço base satura. */
export function gerarCodinomeExpandido(): string {
  const base = gerarCodinomeCandidato();
  const sufixo = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `${base}-${sufixo}`;
}
