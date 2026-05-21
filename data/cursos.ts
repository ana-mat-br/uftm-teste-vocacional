/**
 * Matriz curso × eixo (v0.2 — adicionado eixo TEC, Matemática movida pra TEC).
 * Pesos 0-3 em cada eixo. Ver docs/MATRIZ-EIXOS.md para rationale.
 *
 * Ordem do vetor: [CUI, INV, CON, COM, TRA, CUL, TEC]
 */

import type { VetorEixos } from "@/lib/matching";

export type Campus = "Uberaba" | "Iturama" | "Uberaba/Iturama";

export type Curso = {
  nome: string;
  papelMissao: string;
  vetor: VetorEixos;
  campus: Campus;
  /** Quando preenchido, cursos com mesmo grupo são tratados como UM no resultado.
   *  Ex: Letras (PT/ESP) e Letras (PT/ING) têm grupo:"Letras" — só aparece um no top 3.
   *  Usado pelo display (mostrar curso.grupo ?? curso.nome). */
  grupo?: string;
};

export const CURSOS: Curso[] = [
  // === Saúde / Cuidado ===
  { nome: "Medicina", papelMissao: "Posto Médico de Bordo", vetor: [3, 3, 1, 2, 2, 1, 0], campus: "Uberaba" },
  { nome: "Enfermagem", papelMissao: "Especialista em Cuidado Vital", vetor: [3, 1, 1, 2, 1, 1, 0], campus: "Uberaba" },
  { nome: "Psicologia", papelMissao: "Posto Psíquico de Bordo", vetor: [3, 2, 0, 3, 1, 2, 0], campus: "Uberaba" },
  { nome: "Fisioterapia", papelMissao: "Posto de Reabilitação Motora", vetor: [3, 1, 2, 1, 1, 0, 0], campus: "Uberaba" },
  { nome: "Terapia Ocupacional", papelMissao: "Posto de Adaptação Funcional", vetor: [3, 1, 2, 2, 1, 1, 0], campus: "Uberaba" },
  { nome: "Nutrição", papelMissao: "Posto de Sustento Vital", vetor: [3, 2, 1, 1, 2, 2, 0], campus: "Uberaba" },
  { nome: "Serviço Social", papelMissao: "Defesa de Direitos da Tripulação", vetor: [3, 1, 0, 2, 3, 0, 0], campus: "Uberaba" },
  { nome: "Educação Especial e Inclusiva", papelMissao: "Especialista em Inclusão", vetor: [3, 1, 1, 2, 2, 0, 0], campus: "Iturama" },

  // === Investigação / Ciências Naturais ===
  { nome: "Biomedicina", papelMissao: "Pesquisa de Vida Alienígena", vetor: [2, 3, 1, 0, 0, 1, 1], campus: "Uberaba/Iturama" },
  { nome: "Ciências Biológicas", papelMissao: "Cientista de Ecossistemas", vetor: [1, 3, 0, 1, 1, 3, 0], campus: "Uberaba/Iturama" },
  { nome: "Física", papelMissao: "Analista de Anomalias Espaciais", vetor: [0, 3, 2, 0, 0, 0, 1], campus: "Uberaba" },
  { nome: "Química", papelMissao: "Especialista em Atmosferas", vetor: [1, 3, 2, 0, 0, 1, 0], campus: "Uberaba/Iturama" },

  // === Construção / Engenharias físicas ===
  { nome: "Engenharia Civil", papelMissao: "Arquitetura de Bases Planetárias", vetor: [0, 1, 3, 1, 1, 0, 0], campus: "Uberaba" },
  { nome: "Engenharia Mecânica", papelMissao: "Engenharia Mecânica de Bordo", vetor: [0, 2, 3, 0, 0, 0, 1], campus: "Uberaba" },
  { nome: "Engenharia Elétrica", papelMissao: "Engenharia de Sistemas Vitais", vetor: [0, 2, 3, 0, 0, 0, 2], campus: "Uberaba" },
  { nome: "Engenharia Química", papelMissao: "Engenharia de Processos", vetor: [0, 3, 3, 0, 0, 1, 0], campus: "Uberaba" },
  { nome: "Engenharia de Produção", papelMissao: "Coordenação Logística da Nave", vetor: [0, 1, 2, 2, 1, 0, 2], campus: "Uberaba" },
  { nome: "Engenharia Ambiental", papelMissao: "Posto Ambiental da Nave", vetor: [1, 2, 3, 1, 2, 3, 0], campus: "Uberaba" },
  { nome: "Engenharia de Alimentos", papelMissao: "Engenharia de Suprimentos", vetor: [1, 2, 3, 0, 0, 2, 0], campus: "Uberaba" },

  // === Decifrador / Computação + Dados + Matemática ===
  { nome: "Banco de Dados", papelMissao: "Posto de Arquivo de Bordo", vetor: [0, 0, 0, 2, 0, 0, 3], campus: "Uberaba" },
  { nome: "Inteligência Artificial", papelMissao: "Posto de IA da Missão", vetor: [0, 3, 2, 0, 1, 0, 3], campus: "Uberaba" },
  { nome: "Matemática", papelMissao: "Estrategista de Rotas", vetor: [0, 3, 0, 1, 0, 0, 3], campus: "Uberaba" },

  // === Comunicação / Educação ===
  { nome: "Letras (PT/ESP)", grupo: "Letras", papelMissao: "Linguista Interestelar", vetor: [1, 2, 1, 3, 1, 0, 0], campus: "Uberaba" },
  { nome: "Letras (PT/ING)", grupo: "Letras", papelMissao: "Linguista Interestelar", vetor: [1, 2, 1, 3, 1, 0, 0], campus: "Uberaba" },
  { nome: "Pedagogia", papelMissao: "Educação da Próxima Geração", vetor: [3, 1, 1, 3, 2, 0, 0], campus: "Uberaba" },

  // === Transformação / Humanidades ===
  { nome: "História", papelMissao: "Cronista da Expedição", vetor: [1, 2, 0, 2, 3, 0, 0], campus: "Uberaba" },
  { nome: "Geografia", papelMissao: "Cartografia de Mundos Novos", vetor: [1, 2, 1, 1, 3, 2, 1], campus: "Uberaba" },
  { nome: "Educação Física", papelMissao: "Treinamento da Tripulação", vetor: [2, 1, 2, 1, 2, 1, 0], campus: "Uberaba" },
  { nome: "Licenciatura em Educação do Campo", papelMissao: "Educação de Colônia Agrária", vetor: [2, 1, 1, 2, 3, 3, 0], campus: "Uberaba" },

  // === Cultivo / Natureza ===
  { nome: "Agronomia", papelMissao: "Cultivo de Vida Planetária", vetor: [1, 3, 3, 1, 1, 3, 0], campus: "Uberaba/Iturama" },
  { nome: "Zootecnia", papelMissao: "Criação de Vida Animal", vetor: [3, 3, 2, 1, 0, 3, 0], campus: "Iturama" },
];
