/**
 * Agrupamento de cursos UFTM em 7 áreas pra agregação no painel/relatórios.
 * Ordem dos cursos dentro de cada área segue ordem alfabética por afinidade.
 */

export const AREAS = {
  saude: {
    titulo: "Saúde",
    emoji: "🩺",
    cor: "var(--sun-pink)",
    cursos: ["Medicina", "Enfermagem", "Psicologia", "Fisioterapia", "Terapia Ocupacional", "Nutrição", "Serviço Social", "Educação Especial e Inclusiva"],
  },
  investigacao: {
    titulo: "Ciências Naturais",
    emoji: "🔬",
    cor: "var(--grid-cyan)",
    cursos: ["Biomedicina", "Ciências Biológicas", "Física", "Química"],
  },
  engenharias: {
    titulo: "Engenharias",
    emoji: "🔧",
    cor: "var(--sun-yellow)",
    cursos: ["Engenharia Civil", "Engenharia Mecânica", "Engenharia Elétrica", "Engenharia Química", "Engenharia de Produção", "Engenharia Ambiental", "Engenharia de Alimentos"],
  },
  tech: {
    titulo: "Tech",
    emoji: "💻",
    cor: "var(--grid-cyan)",
    cursos: ["Banco de Dados", "Inteligência Artificial", "Matemática"],
  },
  comunicacao: {
    titulo: "Comunicação/Educação",
    emoji: "📢",
    cor: "var(--sun-orange)",
    cursos: ["Letras (PT/ESP)", "Letras (PT/ING)", "Pedagogia"],
  },
  humanidades: {
    titulo: "Humanidades",
    emoji: "⚡",
    cor: "var(--sun-pink)",
    cursos: ["História", "Geografia", "Educação Física", "Licenciatura em Educação do Campo"],
  },
  cultivo: {
    titulo: "Natureza",
    emoji: "🌱",
    cor: "var(--grid-cyan)",
    cursos: ["Agronomia", "Zootecnia"],
  },
} as const;

export type AreaKey = keyof typeof AREAS;

/** Encontra a área de um curso dado seu nome. Letras agrupa as duas variantes. */
export function areaDoCurso(nomeCurso: string): AreaKey | null {
  for (const [key, area] of Object.entries(AREAS) as [AreaKey, typeof AREAS[AreaKey]][]) {
    if ((area.cursos as readonly string[]).includes(nomeCurso)) return key;
  }
  return null;
}
