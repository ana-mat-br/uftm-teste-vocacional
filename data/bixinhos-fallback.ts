/**
 * Banco de nomes + personalidades + frases de despedida pré-escritas por eixo.
 * Usado quando o LLM (Claude Haiku) não está disponível ou falha.
 *
 * Mantém a vibe leve+humor do roteiro, com 3 variações por eixo pra dar variedade.
 */

import type { EixoSigla } from "@/lib/matching";
import type { BixinhoGerado } from "@/lib/claude";

const SUFIXOS_GREGOS = ["Δ", "Ω", "θ", "π", "σ", "γ", "λ", "Φ"];

function nomeAleatorio(prefixo: string): string {
  const sufixo = SUFIXOS_GREGOS[Math.floor(Math.random() * SUFIXOS_GREGOS.length)];
  const numero = Math.floor(Math.random() * 99) + 1;
  return `${prefixo}-${sufixo}${numero}`;
}

const POOL: Record<EixoSigla, { prefixo: string; personalidades: string[]; despedidas: string[] }> = {
  CUI: {
    prefixo: "KÉPLER",
    personalidades: [
      "um pouco ansiosa, mas anota tudo. especialista em chorar junto",
      "carrega curativos invisíveis. ouvinte profissional",
      "tem mil hugs por minuto. funciona melhor com café",
    ],
    despedidas: [
      "foi um barato cuidar com você. me marca no insta quando passar",
      "obrigada por não desistir de ninguém. tamo junto",
      "você salva gente sem perceber. continua assim, é raro",
    ],
  },
  INV: {
    prefixo: "ÓRION",
    personalidades: [
      "curiosa demais pro próprio bem. acha pista em tudo",
      "anota até o que ninguém pediu. memória de elefante interestelar",
      "pergunta 'mas e se...' até as 3 da manhã",
    ],
    despedidas: [
      "você pergunta as coisas certas. continua assim e acha respostas que mudam o mundo",
      "ciência precisa de gente assim. me leva no print quando publicar o primeiro paper",
      "obrigada por nunca aceitar resposta pronta. é raro e importante",
    ],
  },
  CON: {
    prefixo: "RIVET",
    personalidades: [
      "resolve antes de assustar. só fala se precisar",
      "vê problema e já tá com a chave inglesa na mão",
      "monta lego mental enquanto você ainda tá lendo o manual",
    ],
    despedidas: [
      "você constrói as coisas certas. me marca quando entregar o primeiro projeto",
      "menos gente assim seria o caos. continua botando coisa de pé",
      "obrigada por não fugir do problema. raro e essencial",
    ],
  },
  COM: {
    prefixo: "VEGA",
    personalidades: [
      "fala mais que pizza dominical. amada por todos",
      "ouve antes de responder. virou tradução universal",
      "conecta gente que nem se conhecia. virou referência",
    ],
    despedidas: [
      "você liga gente. é uma habilidade que muda história. usa muito",
      "valeu por mediar a tripulação inteira. sem você ninguém se entende",
      "obrigada por traduzir o mundo. me marca no insta quando publicar",
    ],
  },
  TRA: {
    prefixo: "NOVA",
    personalidades: [
      "tem coragem que dói nos outros. não foge briga justa",
      "vê o sistema antes do detalhe. propõe mudança e topa fazer",
      "incomoda na medida certa. raríssimo",
    ],
    despedidas: [
      "o mundo precisa mais de gente que muda coisa. continua incomodando",
      "obrigada por não engolir injustiça. é cansativo e essencial",
      "você inicia revoluções pequenas. me marca quando começar a sua",
    ],
  },
  CUL: {
    prefixo: "FLORA",
    personalidades: [
      "fala com planta. ela responde. especialista em bicho fofo",
      "cuida do vivo antes de cuidar de si. precisa lembrar de comer",
      "vê ecossistema onde os outros veem fundo de tela",
    ],
    despedidas: [
      "você cuida do que é vivo. raro e necessário. continua plantando",
      "valeu por defender a estufa. literalmente salvou todo mundo",
      "obrigada por escutar bicho e planta. é talento sério",
    ],
  },
  TEC: {
    prefixo: "CIPHER",
    personalidades: [
      "vê padrão em tudo. até no acaso. especialmente no acaso",
      "pensa em loops. dorme em arrays. fala em queries",
      "decifra antes de perguntar. assustadora-mente eficiente",
    ],
    despedidas: [
      "você vê código onde os outros veem ruído. continua decifrando",
      "valeu por puxar os dados na hora certa. você salvou meu disco",
      "obrigada por traduzir o caos em sistema. raro e essencial",
    ],
  },
};

/**
 * Gera resposta de bixinho via templates locais (sem LLM).
 * Retorna a mesma forma que `lib/claude.ts::gerarBixinho`.
 */
export function gerarBixinhoFallback(eixo: EixoSigla, codinome: string): BixinhoGerado {
  const pool = POOL[eixo];
  const personalidade = pool.personalidades[Math.floor(Math.random() * pool.personalidades.length)];
  const despedidaBase = pool.despedidas[Math.floor(Math.random() * pool.despedidas.length)];
  return {
    bixinho_nome: nomeAleatorio(pool.prefixo),
    personalidade,
    msg_despedida: `${codinome}, ${despedidaBase}`,
  };
}
