// Cliente Anthropic — gera nome+personalidade+despedida do bixinho.
// Recebe APENAS dados anônimos (codinome, vetor, curso). Nenhuma PII.

import Anthropic from "@anthropic-ai/sdk";
import type { EixoSigla, VetorEixos } from "./matching";

let client: Anthropic | null = null;

function getClient() {
  if (!client) {
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) throw new Error("Faltando ANTHROPIC_API_KEY");
    client = new Anthropic({ apiKey: key });
  }
  return client;
}

/**
 * Whitelist de prefixos permitidos pro nome do copiloto.
 * Astros, mitologia greco-romana e termos sci-fi curados — sem chance de palavra
 * inadequada (o Haiku já gerou "SÍFILIS" sem essa restrição).
 */
const PREFIXOS_COPILOTO = [
  // astros, constelações, fenômenos
  "KÉPLER", "VEGA", "NOVA", "ORION", "LYRA", "ANDRÔMEDA", "CASSIOPEIA",
  "FÊNIX", "CENTAURO", "HÉLIX", "CYGNUS", "ÍRIS", "RIGEL", "ALTAIR",
  "SIRIUS", "POLARIS", "PROCYON", "ANTARES", "CANOPUS", "ARCTURUS",
  "ALDEBARAN", "DENEB", "REGULUS", "AURORA", "NEBULA", "PULSAR",
  "QUASAR", "GAIA", "HÉLIO", "DRACO", "ECLIPSE", "ZÊNITE",
  // luas
  "EUROPA", "TITÃ", "RHEA", "TRITÃO", "GANYMEDE", "CALIXTO",
  // mitologia
  "ATLAS", "HERMES", "ÁRTEMIS", "APOLO", "ÍCARO", "EOS", "ZÉFIRO",
  // sci-fi / luz
  "SOLARIS", "ASTRA", "LUMEN", "KAIROS",
  // físicos
  "EINSTEIN", "NEWTON", "GALILEU", "HAWKING", "FEYNMAN", "BOHR", "CURIE",
  "TESLA", "FARADAY", "MAXWELL", "PLANCK", "DIRAC", "FERMI",
  // matemáticos
  "EUCLIDES", "ARQUIMEDES", "GAUSS", "EULER", "RIEMANN", "FOURIER",
  "LAPLACE", "FIBONACCI", "TURING", "NOETHER", "HIPÁTIA", "LOVELACE",
  // astronautas
  "GAGARIN", "ARMSTRONG", "ALDRIN", "TERESHKOVA", "COLLINS", "GLENN",
  // filósofos
  "SÓCRATES", "PLATÃO", "ARISTÓTELES", "DESCARTES", "KANT",
  // sondas e naves espaciais
  "VOYAGER", "PIONEER", "CASSINI", "JUNO", "HUBBLE", "JWST",
  "CURIOSITY", "PERSEVERANCE", "SPUTNIK", "SOYUZ",
  // astrônomos clássicos (HUBBLE já listado acima como sonda)
  "SAGAN", "COPÉRNICO", "HALLEY", "HERSCHEL", "BRAHE", "HIPARCO",
  // estrelas brilhantes adicionais
  "BELLATRIX", "CAPELA", "CASTOR", "POLLUX", "BETELGEUSE", "FOMALHAUT",
  "ACHERNAR", "MIZAR", "ALGOL", "MIRA",
] as const;

const LETRAS_GREGAS = ["Δ", "Ω", "θ", "π", "σ", "γ", "λ", "Φ", "α", "β", "μ", "Ψ"] as const;

/**
 * Gera nome do copiloto uniformemente aleatório no espaço PREFIXO × LETRA-GREGA × NÚMERO
 * (~120 mil combinações). Server-side, sem LLM — distribuição uniforme garantida.
 */
export function gerarNomeBixinho(): string {
  const prefixo = PREFIXOS_COPILOTO[Math.floor(Math.random() * PREFIXOS_COPILOTO.length)];
  const letra = LETRAS_GREGAS[Math.floor(Math.random() * LETRAS_GREGAS.length)];
  const numero = Math.floor(Math.random() * 999) + 1;
  return `${prefixo}-${letra}${numero}`;
}

/**
 * Blocklist de termos proibidos em personalidade/msg_despedida.
 * Público é ensino médio (14-18 anos) em evento institucional UFTM.
 * Cobre: palavrões BR, doenças/medicamentos, substâncias, ofensas,
 * sexualização, violência/morte, e termos que humilham aluno.
 * Regex com \b pra evitar falso positivo (ex: "burro" não casa "buraco").
 */
const TERMOS_PROIBIDOS = [
  // palavrões e xingamentos
  "porra","caralho","merda","foda","fodido","puta","cu","cuzão","viado","bicha",
  "buceta","piroca","pinto","pau","pauzudo","arrombado","desgraça","filho da puta",
  "fdp","krl","prr","mrd","babaca","otário","otaria","corno","corna",
  // ofensas / desumanização
  "burro","burra","idiota","imbecil","retardado","retardada","mongol","mongolóide",
  "débil","lerdo","lerda","lento","lenta","feio","feia","gordo","gorda","magrelo",
  "anão","baixinho","nerd chato","perdedor","fracasso","incompetente","inútil",
  // doenças / saúde
  "sífilis","sifilis","aids","hiv","câncer","cancer","tumor","gonorréia","gonorreia",
  "herpes","hepatite","tuberculose","lepra","hanseníase","clamídia","clamidia",
  // substâncias / drogas
  "maconha","cocaína","cocaina","crack","cigarro","cachimbo","heroína","heroina",
  "lsd","ecstasy","balinha","beck","baseado","álcool","alcool","cerveja","cachaça",
  "cachaca","whisky","vodka","tequila","bebum","bêbado","bebado","drogado","drogada",
  // sexual / corpo
  "sexo","sexual","gostosa","gostoso","tesão","tesao","orgasmo","masturbação",
  "masturbacao","pelado","pelada","nudez","nu ","peito","seio","bunda","traseiro",
  // violência / morte / autodano
  "matar","morte","morrer","suicídio","suicidio","se matar","sangue","arma","tiro",
  "facada","apunhalar","estuprar","estupro","abuso","agressão","agressao","espancar",
  // religião/política sensíveis
  "deus","jesus","cristo","alá","ala","bolsonaro","lula","pt","pl","comunista",
  "fascista","direita","esquerda","governo",
] as const;

const REGEX_BLOCKLIST = new RegExp(
  `\\b(${TERMOS_PROIBIDOS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
  "iu",
);

function textoLimpo(t: string): boolean {
  return !REGEX_BLOCKLIST.test(t.toLowerCase());
}

/** Fallbacks neutros caso o Haiku desobedeça duas vezes. */
const PERSONALIDADE_FALLBACK = [
  "curioso, atento e sempre pronto pra próxima missão",
  "calmo, observador e bom de plano em equipe",
  "animado, criativo e cheio de ideia maluca boa",
  "estratégico, paciente e firme nas decisões",
  "leve, otimista e parceiro de qualquer jornada",
];
const DESPEDIDA_FALLBACK = (codinome: string) =>
  `boa missão, ${codinome}. confia no instinto e segue explorando — o universo tem muito curso pra você descobrir`;

export type BixinhoGerado = {
  bixinho_nome: string;
  personalidade: string;
  msg_despedida: string;
};

/**
 * Gera personalidade + msg_despedida do copiloto via Haiku.
 * O nome (`bixinhoNome`) é gerado server-side antes da chamada — Claude
 * só cuida do tom narrativo.
 */
export async function gerarBixinho(input: {
  codinome: string;
  bixinhoNome: string;
  vetor: VetorEixos;
  cursoTop: string;
  eixoDominante: EixoSigla;
}): Promise<BixinhoGerado> {
  const c = getClient();

  const systemBase = [
    "Você é o motor narrativo do Protocolo Vocação UFTM 2087, uma missão sci-fi fictícia.",
    "Gera um JSON estrito sobre o copiloto-IA companheiro do candidato (que recebeu um codinome anônimo gerado pelo sistema).",
    "",
    "PÚBLICO-ALVO: alunos do ENSINO MÉDIO (14-18 anos) em evento institucional UFTM (Feira de Profissões).",
    "LINGUAGEM: clara, simples, vocabulário juvenil porém respeitoso. Sem jargão acadêmico, sem gíria pesada, sem regionalismos obscuros.",
    "Tom: leve, acolhedor, com humor seco e simpático. SEMPRE em minúsculo. Vibe cyberpunk fofo.",
    "",
    "RESPONDA APENAS ESTE JSON, exatamente nessas chaves, sem markdown, sem ```, sem prosa em volta:",
    '{ "personalidade": "...", "msg_despedida": "..." }',
    "",
    "REGRAS DE CONTEÚDO:",
    "- personalidade: máximo 12 palavras. uma frase curta, positiva, descritiva. minúsculo. SEM ponto final.",
    "- msg_despedida: máximo 25 palavras. fala direto pro candidato CITANDO o codinome dele literalmente. tom encorajador. minúsculo.",
    "",
    "PROIBIDO ABSOLUTO (gera resposta inválida — escola pode receber reclamação de pais):",
    "- palavrões, xingamentos, gírias ofensivas (porra, caralho, merda, foda, puta, viado, babaca, otário, etc.)",
    "- ofensas à inteligência, aparência ou peso do aluno (burro, idiota, retardado, gordo, feio, lerdo, etc.)",
    "- doenças, sintomas, medicamentos, termos médicos (sífilis, aids, câncer, herpes, tumor, etc.)",
    "- substâncias (álcool, cerveja, maconha, cocaína, cigarro, droga, bêbado, drogado, etc.)",
    "- referências sexuais, ao corpo ou nudez (sexo, gostosa, peito, bunda, pelado, etc.)",
    "- violência, morte, autodano, armas (matar, morrer, suicídio, sangue, tiro, etc.)",
    "- religião ou política (deus, jesus, qualquer político, partido, ideologia)",
    "- comparação que humilhe o aluno ou diminua o curso/profissão escolhida",
    "- PII, links, dados sensíveis",
    "",
    "- jamais use a palavra 'bixinho' nas respostas. o termo correto é 'copiloto'.",
  ];

  type RespClaude = { personalidade: string; msg_despedida: string };

  const chamarHaiku = async (extraSystem?: string): Promise<RespClaude> => {
    const system = extraSystem
      ? `${systemBase.join("\n")}\n\n${extraSystem}`
      : systemBase.join("\n");
    const resp = await c.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      temperature: 0.6,
      system,
      messages: [
        {
          role: "user",
          content: JSON.stringify({
            codinome: input.codinome,
            copiloto_nome: input.bixinhoNome,
            vetor: input.vetor,
            curso_top: input.cursoTop,
            eixo_dominante: input.eixoDominante,
          }),
        },
      ],
    });
    const textBlock = resp.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("Resposta vazia do Haiku");
    }
    const raw = textBlock.text.trim();
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error("Sem JSON na resposta do Haiku");
    }
    return JSON.parse(match[0]) as RespClaude;
  };

  let parsed = await chamarHaiku();

  if (!textoLimpo(parsed.personalidade) || !textoLimpo(parsed.msg_despedida)) {
    try {
      parsed = await chamarHaiku(
        "ATENÇÃO: sua resposta anterior continha termo da lista PROIBIDO ABSOLUTO. " +
          "Gere de novo, totalmente limpo, apropriado pra adolescente em evento escolar.",
      );
    } catch {
      /* segue pro fallback abaixo */
    }
  }

  const personalidade = textoLimpo(parsed.personalidade)
    ? parsed.personalidade
    : PERSONALIDADE_FALLBACK[Math.floor(Math.random() * PERSONALIDADE_FALLBACK.length)];
  const msg_despedida = textoLimpo(parsed.msg_despedida)
    ? parsed.msg_despedida
    : DESPEDIDA_FALLBACK(input.codinome);

  return {
    bixinho_nome: input.bixinhoNome,
    personalidade,
    msg_despedida,
  };
}
