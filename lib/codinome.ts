/**
 * Gera codinomes anônimos pros candidatos do Protocolo Vocação.
 * Formato: PREFIXO-NÚMERO (ex: "ESTRELA-7", "COMETA-42")
 *
 * Nenhum dado pessoal é envolvido. O codinome é só pra dar charme à narrativa
 * e referenciar nas falas do bixinho-IA.
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

export function gerarCodinome(): string {
  const prefixo = PREFIXOS_ASTRONOMICOS[
    Math.floor(Math.random() * PREFIXOS_ASTRONOMICOS.length)
  ];
  const numero = Math.floor(Math.random() * 99) + 1; // 1-99
  return `${prefixo}-${numero}`;
}
