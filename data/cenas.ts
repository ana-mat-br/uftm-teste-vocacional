/**
 * Estrutura das cenas do quiz. Ver docs/ROTEIRO.md para a versão narrativa completa.
 *
 * Estrutura:
 * - Cena 1 (Embarque) = home page `/` — gera codinome, sem pontuação
 * - Cenas 2-10        = 9 cenas pontuáveis, em /cena/[id]
 * - Cena 11 (Resultado) = /resultado — não tem entry aqui
 *
 * Cada opção pontua de 1 a 3 eixos. Ordem do vetor: [CUI, INV, CON, COM, TRA, CUL].
 */

import type { VetorEixos } from "@/lib/matching";

export type Opcao = {
  emoji: string;
  texto: string;
  pontos: VetorEixos;
};

export type Cena = {
  id: number;
  titulo: string;
  narrativa: string;
  falaBixinho?: string;
  opcoes: Opcao[];
};

export const CENAS: Cena[] = [
  {
    id: 2,
    titulo: "Briefing",
    narrativa:
      "Uma luzinha rosa flutua até você — é seu nó-companheiro de bordo, uma IA que ainda não tem nome (a missão vai batizar ela no fim). Atrás, a Capitã Vidal aparece no holograma: 14 meses até Kepler-186f, tripulação de 12. Vocês não foram escolhidos por nota. Foram escolhidos pelo Protocolo Vocação. E ele começa agora.",
    falaBixinho: "oi! sou eu — vou te acompanhar a missão inteira. ela é sempre dramática assim, relaxa.",
    opcoes: [
      { emoji: "🤔", texto: "Anoto tudo, levanto a mão pra perguntar das margens de erro do Protocolo", pontos: [0, 2, 1, 0, 0, 0] },
      { emoji: "😅", texto: "Olho pros outros candidatos pra ver se alguém também tá perdido", pontos: [1, 0, 0, 2, 0, 0] },
      { emoji: "🔥", texto: "Já tô empolgado, quero saber quando começa pra valer", pontos: [0, 0, 1, 0, 2, 0] },
      { emoji: "🌱", texto: "Pergunto se a gente vai poder levar plantas pra estufa da nave", pontos: [0, 0, 0, 0, 0, 3] },
    ],
  },
  {
    id: 3,
    titulo: "Primeiro turno",
    narrativa:
      "14:23 UTC. Três alertas piscam ao mesmo tempo. Você só atende UM agora.",
    falaBixinho: "clássico. respira.",
    opcoes: [
      { emoji: "🩺", texto: "Enfermaria — colega passou mal no treino físico", pontos: [3, 0, 0, 0, 0, 0] },
      { emoji: "🔧", texto: "Engenharia — vazamento pequeno crescendo no compartimento 7", pontos: [0, 1, 2, 0, 0, 0] },
      { emoji: "📡", texto: "Comunicações — sinal estranho da Terra, talvez urgente", pontos: [0, 2, 0, 1, 0, 0] },
      { emoji: "🌿", texto: "Estufa — sistema de irrigação travou nas mudas", pontos: [0, 0, 1, 0, 0, 2] },
    ],
  },
  {
    id: 4,
    titulo: "Anomalia",
    narrativa:
      "Dia 47 da viagem. Um sensor externo detecta uma assinatura de energia que não tá no manual. Não é asteroide. Não é nave. Não é nada que humano já tenha registrado.",
    falaBixinho: "eu fingiria que tô calmo se eu tivesse pulmão.",
    opcoes: [
      { emoji: "📊", texto: "Vou pra sala de dados cruzar a assinatura com todos os arquivos da Terra", pontos: [0, 2, 2, 0, 0, 0] },
      { emoji: "🛰️", texto: "Sugiro mandar um drone pra mais perto antes de qualquer coisa", pontos: [0, 1, 2, 0, 0, 0] },
      { emoji: "🗣️", texto: "Reúno a tripulação — isso precisa de várias cabeças decidindo", pontos: [0, 0, 0, 3, 0, 0] },
      { emoji: "🛡️", texto: "Aviso a Capitã imediatamente e protocolo de segurança", pontos: [1, 0, 0, 0, 2, 0] },
    ],
  },
  {
    id: 5,
    titulo: "Conflito de tripulação",
    narrativa:
      "Dois colegas estão brigando alto no refeitório. Um acha que tão racionando comida demais, o outro acha que não tão racionando suficiente. A discussão tá ficando feia.",
    falaBixinho: "vai lá. eu seguro pipoca holográfica.",
    opcoes: [
      { emoji: "🫂", texto: "Chego perto e peço pros dois respirarem antes de continuar", pontos: [2, 0, 0, 2, 0, 0] },
      { emoji: "📈", texto: "Puxo os dados de estoque no tablet e mostro o que os números dizem", pontos: [0, 1, 2, 0, 0, 0] },
      { emoji: "⚖️", texto: "Proponho uma reunião com a tripulação inteira pra revisar as regras", pontos: [0, 0, 0, 0, 3, 0] },
      { emoji: "🧑‍🍳", texto: "Sugiro que a gente plante mais nas estufas pra resolver na raiz", pontos: [0, 0, 1, 0, 0, 2] },
    ],
  },
  {
    id: 6,
    titulo: "Falha técnica",
    narrativa:
      "03h da manhã. O sistema de oxigênio do dormitório B começou a oscilar 2%. Não é perigoso AINDA. Mas em 6 horas vira.",
    falaBixinho: "se eu morrer aqui eu juro que volto te assombrar via wifi.",
    opcoes: [
      { emoji: "🔧", texto: "Vou direto pra engenharia, abro o painel e tento diagnosticar", pontos: [0, 0, 3, 0, 0, 0] },
      { emoji: "📊", texto: "Pego os logs dos últimos 30 dias pra entender o padrão antes de mexer", pontos: [0, 2, 1, 0, 0, 0] },
      { emoji: "🚨", texto: "Acordo a tripulação do dormitório B pra realocar enquanto consertam", pontos: [2, 0, 0, 0, 1, 0] },
      { emoji: "🌬️", texto: "Verifico se as plantas da estufa podem ajudar a estabilizar o O2", pontos: [0, 0, 0, 0, 0, 3] },
    ],
  },
  {
    id: 7,
    titulo: "Mensagem da Terra",
    narrativa:
      "Chegou uma transmissão. Sua família mandou um vídeo. Tá tudo bem — mas é a primeira notícia em 3 meses. Você sente o nó na garganta.",
    falaBixinho: "sabe que você pode chorar, né. eu não conto pra ninguém.",
    opcoes: [
      { emoji: "🎥", texto: "Assisto sozinho no meu quarto, depois respondo com calma", pontos: [2, 0, 0, 1, 0, 0] },
      { emoji: "📝", texto: "Escrevo uma carta longa de volta, contando tudo da viagem", pontos: [0, 0, 0, 3, 0, 0] },
      { emoji: "🧠", texto: "Anoto como o impacto emocional mudou minha performance nos turnos", pontos: [0, 2, 0, 0, 1, 0] },
      { emoji: "🌍", texto: "Reflito sobre o quanto a Terra precisa que essa missão dê certo", pontos: [0, 0, 0, 0, 3, 0] },
    ],
  },
  {
    id: 8,
    titulo: "Chegada ao planeta",
    narrativa:
      "Kepler-186f na tela. Atmosfera respirável (com filtro). Verde-azulado. Bonito demais pra ser real. A Capitã pergunta: onde pousamos primeiro?",
    falaBixinho: "olha esse planetinha. eu já tô com ciúmes da terra.",
    opcoes: [
      { emoji: "🏔️", texto: "Perto das montanhas — terreno estável, vista pra tudo", pontos: [0, 1, 2, 0, 0, 0] },
      { emoji: "🌳", texto: "Perto da floresta densa — onde tem mais vida pra estudar", pontos: [0, 1, 0, 0, 0, 3] },
      { emoji: "🌊", texto: "Perto do mar — fonte de água e possíveis ecossistemas marinhos", pontos: [0, 2, 0, 0, 0, 2] },
      { emoji: "🏕️", texto: "No vale central — perto de tudo, mais fácil de organizar a base depois", pontos: [0, 0, 2, 0, 1, 0] },
    ],
  },
  {
    id: 9,
    titulo: "Contato",
    narrativa:
      "Terceira semana no planeta. Vocês encontram algo. Pequenas criaturas bioluminescentes saem das tocas à noite. Curiosas. Não parecem perigosas.",
    falaBixinho: "tipo eu mas em carbono.",
    opcoes: [
      { emoji: "📸", texto: "Observo de longe, anoto comportamento, não interfiro", pontos: [0, 3, 0, 0, 0, 1] },
      { emoji: "🍞", texto: "Tento oferecer algo — gesto de paz interespécie", pontos: [2, 0, 0, 2, 0, 0] },
      { emoji: "🧪", texto: "Coleto amostras (sem machucar) pra entender a biologia delas", pontos: [0, 2, 0, 0, 0, 2] },
      { emoji: "📡", texto: "Mando imagens pra Terra na hora — humanidade inteira precisa ver isso", pontos: [0, 0, 0, 3, 0, 0] },
      { emoji: "🛡️", texto: "Recuo a equipe e estabeleço protocolo de não-contato preventivo", pontos: [1, 0, 0, 0, 2, 0] },
    ],
  },
  {
    id: 10,
    titulo: "Crise final",
    narrativa:
      "Mês 7 no planeta. Tempestade magnética inesperada. Os sistemas de suporte vital estão piscando. Você tem 12 minutos pra decidir o que priorizar.",
    falaBixinho: "tá. agora é sério. confio em você.",
    opcoes: [
      { emoji: "🩺", texto: "Garanto que a enfermaria fique online — vidas primeiro, dados depois", pontos: [3, 0, 0, 0, 0, 0] },
      { emoji: "🔋", texto: "Reroteio toda energia pros sistemas críticos, manualmente", pontos: [0, 0, 3, 0, 0, 0] },
      { emoji: "🧬", texto: "Salvo os dados de pesquisa antes que se percam — justifica a missão", pontos: [0, 3, 0, 0, 0, 0] },
      { emoji: "🗣️", texto: "Coordeno a tripulação inteira, distribuo funções por voz", pontos: [0, 0, 0, 2, 2, 0] },
      { emoji: "🌱", texto: "Protejo a estufa — sem ela, ninguém volta pra casa", pontos: [0, 0, 0, 0, 0, 3] },
    ],
  },
];

/** Total de cenas pontuáveis (2 a 10). Cena 1 é home, Cena 11 é resultado. */
export const TOTAL_CENAS_PONTUAVEIS = CENAS.length;

/** Helper: pega uma cena pelo ID, com fallback explícito. */
export function getCena(id: number): Cena | undefined {
  return CENAS.find((c) => c.id === id);
}

/** Helper: próxima cena pontuável. Retorna null se já passou da última. */
export function proximaCena(idAtual: number): Cena | null {
  const idx = CENAS.findIndex((c) => c.id === idAtual);
  if (idx === -1) return null;
  return CENAS[idx + 1] ?? null;
}
