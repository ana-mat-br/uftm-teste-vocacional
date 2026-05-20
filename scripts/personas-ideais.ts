/**
 * Gerador de personas-ideais por curso UFTM.
 *
 * Pra cada curso, deriva "greedy" a persona ideal: em cada cena, escolhe a
 * opção cujo vetor de pontos tem MAIOR produto escalar com o vetor do
 * curso. Em seguida, valida que essa persona retorna o curso como top 1
 * pelo algoritmo de cosseno.
 *
 * Saídas:
 *   - docs/PERSONAS-IDEAIS.md (human-readable, organizado por área)
 *   - scripts/personas-ideais.data.json (consumido pelo test-quiz-flow.ts)
 *
 * Uso: npx tsx scripts/personas-ideais.ts
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { CURSOS, type Curso } from "@/data/cursos";
import { CENAS } from "@/data/cenas";
import { topCursos, type VetorEixos, type CursoComScore } from "@/lib/matching";

type PersonaIdeal = {
  curso: string;
  grupo?: string;
  papelMissao: string;
  campus: string;
  vetorCurso: VetorEixos;
  /** Índice da opção escolhida em cada cena (id 2..10), na ordem do CENAS array. */
  escolhas: number[];
  /** Soma resultante das escolhas. */
  vetorAluno: VetorEixos;
  top3: { nome: string; grupo?: string; score: number }[];
  ok: boolean;
};

/** Greedy: escolhe em cada cena a opção que mais "puxa" pro curso. */
function derivarPersona(curso: Curso): PersonaIdeal {
  const escolhas: number[] = [];
  const vetorAluno: VetorEixos = [0, 0, 0, 0, 0, 0, 0];

  for (const cena of CENAS) {
    let melhorIdx = 0;
    let melhorScore = -Infinity;
    cena.opcoes.forEach((opc, idx) => {
      const dot = opc.pontos.reduce((s, p, i) => s + p * curso.vetor[i], 0);
      if (dot > melhorScore) {
        melhorScore = dot;
        melhorIdx = idx;
      }
    });
    escolhas.push(melhorIdx);
    cena.opcoes[melhorIdx].pontos.forEach((p, i) => {
      vetorAluno[i] += p;
    });
  }

  const top3 = topCursos(vetorAluno, 3);
  const alvo = curso.grupo ?? curso.nome;
  const top1Nome = top3[0].grupo ?? top3[0].nome;

  return {
    curso: curso.nome,
    grupo: curso.grupo,
    papelMissao: curso.papelMissao,
    campus: curso.campus,
    vetorCurso: curso.vetor,
    escolhas,
    vetorAluno,
    top3: top3.map((c) => ({ nome: c.nome, grupo: c.grupo, score: c.score })),
    ok: top1Nome === alvo,
  };
}

/** Agrupa cursos em áreas pra organização do markdown. */
const AREAS: Record<string, { titulo: string; emoji: string; cursos: string[] }> = {
  saude: {
    titulo: "Saúde / Cuidado",
    emoji: "🩺",
    cursos: ["Medicina", "Enfermagem", "Psicologia", "Fisioterapia", "Terapia Ocupacional", "Nutrição", "Serviço Social", "Educação Especial e Inclusiva"],
  },
  investigacao: {
    titulo: "Investigação / Ciências Naturais",
    emoji: "🔬",
    cursos: ["Biomedicina", "Ciências Biológicas", "Física", "Química"],
  },
  construcao: {
    titulo: "Construção / Engenharias físicas",
    emoji: "🔧",
    cursos: ["Engenharia Civil", "Engenharia Mecânica", "Engenharia Elétrica", "Engenharia Química", "Engenharia de Produção", "Engenharia Ambiental", "Engenharia de Alimentos"],
  },
  decifrador: {
    titulo: "Decifrador / Computação + Dados + Matemática",
    emoji: "💻",
    cursos: ["Banco de Dados", "Inteligência Artificial", "Matemática"],
  },
  comunicacao: {
    titulo: "Comunicação / Educação",
    emoji: "📢",
    cursos: ["Letras (PT/ESP)", "Letras (PT/ING)", "Pedagogia"],
  },
  transformacao: {
    titulo: "Transformação / Humanidades",
    emoji: "⚡",
    cursos: ["História", "Geografia", "Educação Física", "Licenciatura em Educação do Campo"],
  },
  cultivo: {
    titulo: "Cultivo / Natureza",
    emoji: "🌱",
    cursos: ["Agronomia", "Zootecnia"],
  },
};

/** Descrições curtas do profissional de cada curso. */
const DESCRICOES: Record<string, string> = {
  "Medicina": "Diagnostica e trata doenças com contato direto ao paciente. Cuidador clinicamente curioso.",
  "Enfermagem": "Cuidado cotidiano, fica perto do paciente. Empatia + execução técnica.",
  "Psicologia": "Saúde mental, escuta, intervenção comportamental. Cuida via comunicação.",
  "Fisioterapia": "Reabilita o corpo. Cuidado pelo movimento e técnica física.",
  "Terapia Ocupacional": "Ajuda pessoas a recuperar autonomia em atividades cotidianas.",
  "Nutrição": "Alimentação como saúde. Ciência aplicada ao bem-estar.",
  "Serviço Social": "Defende direitos sociais, ponte com políticas públicas.",
  "Educação Especial e Inclusiva": "Ensina pessoas com necessidades específicas. Cuidado pedagógico (exclusivo Iturama).",
  "Biomedicina": "Pesquisa em saúde — lab, análises clínicas. Curiosidade científica com vocação de cuidar.",
  "Ciências Biológicas": "Estuda os seres vivos e ecossistemas. Pesquisador da vida.",
  "Física": "Estuda fenômenos físicos e teoria. Curiosidade abstrata pro mundo natural.",
  "Química": "Estuda matéria, reações e transformações. Cientista do micro.",
  "Engenharia Civil": "Projeta e constrói infraestrutura. Construtor do macroespaço urbano.",
  "Engenharia Mecânica": "Máquinas, motores, sistemas mecânicos. Construtor que entende o como.",
  "Engenharia Elétrica": "Sistemas elétricos, eletrônicos e energia. Construtor + lógica de circuitos.",
  "Engenharia Química": "Processos químicos industriais. Ponte ciência↔produção.",
  "Engenharia de Produção": "Gestão e otimização de processos. Construtor que lidera equipes.",
  "Engenharia Ambiental": "Meio ambiente com técnica de engenharia. Sustentabilidade aplicada.",
  "Engenharia de Alimentos": "Tecnologia de alimentos, processos da fazenda à mesa.",
  "Banco de Dados": "Dados, armazenamento, queries. Organiza o digital.",
  "Inteligência Artificial": "Machine learning, sistemas inteligentes. Investigador digital.",
  "Matemática": "Modelagem, teoria, abstração. Pensador puro.",
  "Letras (PT/ESP)": "Língua, literatura, ensino. Conector via palavra (espanhol).",
  "Letras (PT/ING)": "Idem, mas em inglês. Mesma essência (são agrupados como 'Letras' no resultado).",
  "Pedagogia": "Educação básica, formação de criança/jovem. Cuidado via ensino.",
  "História": "Estudo do passado, memória, contexto. Cronista crítico.",
  "Geografia": "Espaço, território, humano↔ambiente. Multidisciplinar.",
  "Educação Física": "Movimento, esporte, saúde corporal. Cuidado pelo corpo em ação.",
  "Licenciatura em Educação do Campo": "Educação no contexto rural/agrário. Justiça social + terra.",
  "Agronomia": "Agricultura técnica e científica. Investigação aplicada à terra (Uberaba/Iturama).",
  "Zootecnia": "Produção animal sustentável (exclusivo Iturama).",
};

const EIXOS_LABELS = ["CUI", "INV", "CON", "COM", "TRA", "CUL", "TEC"];

function fmtVetor(v: VetorEixos): string {
  return `[${v.join(",")}]`;
}

function fmtTop3(top3: PersonaIdeal["top3"]): string {
  return top3
    .map((c) => `${c.grupo ?? c.nome} ${(c.score * 100).toFixed(1)}%`)
    .join(" · ");
}

/** Resumo de pontos da opção escolhida na cena (pra coluna "pontos"). */
function fmtPontosEscolha(cenaIdx: number, opcaoIdx: number): string {
  const opc = CENAS[cenaIdx].opcoes[opcaoIdx];
  const parts: string[] = [];
  opc.pontos.forEach((p, i) => {
    if (p > 0) parts.push(`${EIXOS_LABELS[i]}+${p}`);
  });
  return parts.join(" ") || "—";
}

function trim(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

function renderPersonaMd(p: PersonaIdeal): string {
  const status = p.ok ? "✅" : "⚠️";
  const desc = DESCRICOES[p.curso] ?? "(adicionar descrição)";
  const linhas: string[] = [];
  linhas.push(`#### ${p.curso} ${status}`);
  linhas.push("");
  linhas.push(`*${p.papelMissao}* · ${p.campus}`);
  linhas.push("");
  linhas.push(`> ${desc}`);
  linhas.push("");
  linhas.push(`**Vetor do curso:** \`${fmtVetor(p.vetorCurso)}\` (ordem: ${EIXOS_LABELS.join(", ")})`);
  linhas.push("");
  linhas.push(`**Persona ideal — escolhas por cena:**`);
  linhas.push("");
  linhas.push(`| Cena | Opção (índice) | Pontos |`);
  linhas.push(`|---|---|---|`);
  CENAS.forEach((cena, i) => {
    const idx = p.escolhas[i];
    const opc = cena.opcoes[idx];
    linhas.push(`| ${cena.id} ${cena.titulo} | ${opc.emoji} ${trim(opc.texto, 60)} *(idx ${idx})* | ${fmtPontosEscolha(i, idx)} |`);
  });
  linhas.push("");
  linhas.push(`**Vetor resultante do aluno:** \`${fmtVetor(p.vetorAluno)}\``);
  linhas.push("");
  if (p.ok) {
    linhas.push(`**✅ Top 1: ${p.top3[0].grupo ?? p.top3[0].nome}** ${(p.top3[0].score * 100).toFixed(1)}%`);
  } else {
    linhas.push(`**⚠️ Top 1 calculado: ${p.top3[0].grupo ?? p.top3[0].nome}** (esperado: ${p.grupo ?? p.curso})`);
  }
  linhas.push("");
  linhas.push(`**Top 3 completo:** ${fmtTop3(p.top3)}`);
  linhas.push("");
  return linhas.join("\n");
}

function renderDoc(personas: PersonaIdeal[]): string {
  const total = personas.length;
  const ok = personas.filter((p) => p.ok).length;
  const falhas = personas.filter((p) => !p.ok);

  const out: string[] = [];
  out.push(`# 🧪 Personas Ideais por Curso UFTM`);
  out.push("");
  out.push(`> **Geração automática** via greedy: pra cada curso, escolho em cada cena a opção cujo vetor de pontos tem maior produto escalar com o vetor do curso. Em seguida valido que essa persona retorna o curso como top 1.`);
  out.push(`>`);
  out.push(`> Use isso pra: (1) sanidade qualitativa — você lê a persona de Medicina e bate com sua intuição? (2) prova quantitativa — script verifica matematicamente que cada curso é alcançável.`);
  out.push(`>`);
  out.push(`> Regenere com: \`npx tsx scripts/personas-ideais.ts\``);
  out.push("");
  out.push(`## Resumo`);
  out.push("");
  out.push(`**${ok}/${total} cursos validados** ✅`);
  out.push("");

  if (falhas.length > 0) {
    out.push(`### ⚠️ Cursos não alcançáveis como top 1`);
    out.push("");
    for (const f of falhas) {
      out.push(`- **${f.curso}** → veio ${f.top3[0].grupo ?? f.top3[0].nome} (${(f.top3[0].score * 100).toFixed(1)}%)`);
    }
    out.push("");
    out.push(`Possíveis causas: vetor idêntico a outro curso (ex: Eng. Mec/Elétrica), vetor "redondo demais" que faz outro curso vencer por cosseno mesmo no greedy, ou gap de cobertura nas cenas. Investigar.`);
    out.push("");
  }

  out.push(`## Fundamentação do método`);
  out.push("");
  out.push(`**1. Taxonomia inspirada em RIASEC (Holland, 1959)** — 7 eixos vocacionais adaptados pro contexto UFTM. Ver [\`MATRIZ-EIXOS.md\`](MATRIZ-EIXOS.md).`);
  out.push("");
  out.push(`**2. Similaridade de cosseno** — mede direção, não magnitude. Padrão em sistemas de recomendação (Netflix, Spotify).`);
  out.push("");
  out.push(`**3. Quiz com pontuação ponderada** — formato clássico (Myers-Briggs, 16 Personalities). Cada opção pontua 1-3 eixos.`);
  out.push("");
  out.push(`**⚠️ O que ele NÃO é:** instrumento psicometricamente validado. É ferramenta de engajamento/exploração, não diagnóstico clínico. O feedback 👍🤔👎 da feira é o primeiro dataset de validação.`);
  out.push("");
  out.push(`## Personas por área`);
  out.push("");

  for (const [, area] of Object.entries(AREAS)) {
    out.push(`### ${area.emoji} ${area.titulo}`);
    out.push("");
    for (const nomeCurso of area.cursos) {
      const p = personas.find((x) => x.curso === nomeCurso);
      if (p) out.push(renderPersonaMd(p));
    }
  }

  out.push(`---`);
  out.push(`*Gerado automaticamente em ${new Date().toISOString().slice(0, 10)} pelo \`scripts/personas-ideais.ts\`*`);

  return out.join("\n");
}

function main() {
  const personas: PersonaIdeal[] = CURSOS.map(derivarPersona);

  // Console summary
  console.log(`Analisando ${personas.length} cursos…\n`);
  for (const p of personas) {
    const status = p.ok ? "✅" : "⚠️ ";
    const top1 = p.top3[0].grupo ?? p.top3[0].nome;
    const target = p.grupo ?? p.curso;
    if (p.ok) {
      console.log(`${status} ${p.curso.padEnd(38)} → ${top1} (${(p.top3[0].score * 100).toFixed(1)}%)`);
    } else {
      console.log(`${status} ${p.curso.padEnd(38)} → ${top1} (esperava ${target})`);
    }
  }

  const ok = personas.filter((p) => p.ok).length;
  console.log(`\n${ok}/${personas.length} cursos validados\n`);

  // Markdown doc
  const md = renderDoc(personas);
  const mdPath = resolve(process.cwd(), "docs/PERSONAS-IDEAIS.md");
  writeFileSync(mdPath, md);
  console.log(`📄 ${mdPath}`);

  // JSON data file (consumido pelo test-quiz-flow.ts)
  const jsonPath = resolve(process.cwd(), "scripts/personas-ideais.data.json");
  const jsonData = personas.map((p) => ({
    curso: p.curso,
    grupo: p.grupo,
    escolhas: p.escolhas,
    topEsperado: p.grupo ?? p.curso,
  }));
  writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
  console.log(`📦 ${jsonPath}`);
}

main();
