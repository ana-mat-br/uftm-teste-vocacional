/**
 * Estrutura das cenas do quiz. Ver docs/ROTEIRO.md para a versão narrativa completa.
 *
 * Estrutura:
 * - Cena 1 (Embarque) = home page `/` — gera codinome, sem pontuação
 * - Cenas 2-10        = 9 cenas pontuáveis, em /cena/[id]
 * - Cena 11 (Resultado) = /resultado — não tem entry aqui
 *
 * Cada opção pontua de 1 a 3 eixos.
 * Ordem do vetor: [CUI, INV, CON, COM, TRA, CUL, TEC]
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
    titulo: "Embarque",
    narrativa:
      "Ano 2087. A Terra está em colapso e a UFTM está montando a primeira viagem tripulada ao planeta Kepler-186f: 14 meses de viagem, tripulação de 12. Vocês não foram escolhidos por nota — foram escolhidos pelo Protocolo Vocação. Uma luzinha rosa flutua até você no hangar; é seu co-piloto, uma IA que ainda não tem nome (a missão vai batizar ela no fim). Atrás, a Capitã Vidal aparece no holograma. O Protocolo começa agora.",
    falaBixinho: "oi! sou eu, teu co-piloto. cola comigo a missão inteira. ela curte um drama, relaxa.",
    opcoes: [
      { emoji: "🤔", texto: "Anoto tudo, levanto a mão pra perguntar se o Protocolo pode errar", pontos: [0, 2, 0, 0, 0, 0, 1] },
      { emoji: "😅", texto: "Olho pros outros candidatos pra ver se alguém também tá perdido", pontos: [1, 0, 0, 2, 0, 0, 0] },
      { emoji: "🔥", texto: "Já tô empolgado, quero saber quando começa pra valer", pontos: [0, 0, 1, 0, 2, 0, 0] },
      { emoji: "🌱", texto: "Pergunto se a gente vai poder levar plantas pra estufa da nave", pontos: [0, 0, 0, 0, 0, 3, 0] },
    ],
  },
  {
    id: 3,
    titulo: "Primeiro turno",
    narrativa:
      "14h23. Vários alertas piscam ao mesmo tempo. Você só atende UM agora.",
    falaBixinho: "clássico. respira.",
    opcoes: [
      { emoji: "🩺", texto: "Enfermaria — colega passou mal no treino físico", pontos: [3, 0, 0, 0, 0, 0, 0] },
      { emoji: "🧬", texto: "Enfermaria também — mas paro pra entender a causa antes de medicar: como ele tá agora, o que fez antes", pontos: [2, 2, 0, 0, 0, 0, 0] },
      { emoji: "🔧", texto: "Engenharia — vazamento pequeno crescendo no compartimento 7", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { emoji: "📡", texto: "Comunicações — sinal estranho da Terra, talvez urgente", pontos: [0, 3, 0, 0, 0, 0, 0] },
      { emoji: "🌿", texto: "Estufa — sistema de irrigação travou nas mudas", pontos: [0, 0, 1, 0, 0, 2, 0] },
    ],
  },
  {
    id: 4,
    titulo: "Anomalia",
    narrativa:
      "Dia 47 da viagem. Um sensor externo detecta um sinal de energia que não tá no manual. Não é asteroide. Não é nave. Não é nada que humano já tenha registrado.",
    falaBixinho: "eu fingiria que tô calmo se eu tivesse pulmão.",
    opcoes: [
      { emoji: "📊", texto: "Vou pra sala de dados cruzar o sinal com todos os arquivos da Terra", pontos: [0, 2, 0, 0, 0, 0, 2] },
      { emoji: "🛰️", texto: "Sugiro mandar um drone pra mais perto antes de qualquer coisa", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { emoji: "🗣️", texto: "Reúno a tripulação — isso precisa de várias cabeças decidindo", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { emoji: "🛡️", texto: "Aviso a Capitã imediatamente e protocolo de segurança", pontos: [1, 0, 0, 0, 2, 0, 0] },
    ],
  },
  {
    id: 5,
    titulo: "Conflito de tripulação",
    narrativa:
      "Dois colegas estão brigando alto no refeitório. Um acha que tão dividindo comida demais, o outro acha que não tão dividindo suficiente. A discussão tá ficando feia.",
    falaBixinho: "vai lá. eu seguro pipoca holográfica.",
    opcoes: [
      { emoji: "🫂", texto: "Chego perto e peço pros dois respirarem antes de continuar", pontos: [2, 0, 0, 2, 0, 0, 0] },
      { emoji: "📈", texto: "Puxo os dados de estoque no tablet e mostro o que os números dizem", pontos: [0, 1, 0, 0, 0, 0, 2] },
      { emoji: "⚖️", texto: "Proponho uma reunião com a tripulação inteira pra revisar as regras", pontos: [0, 0, 0, 0, 3, 0, 0] },
      { emoji: "🧑‍🍳", texto: "Sugiro que a gente plante mais nas estufas pra resolver na raiz", pontos: [0, 0, 1, 0, 0, 2, 0] },
    ],
  },
  {
    id: 12,
    titulo: "Rotina coletiva",
    narrativa:
      "Algumas semanas depois do conflito, todo mundo concorda: a tripulação precisa de UM programa pra cuidar do grupo. Você se voluntaria pra criar. Qual aposta?",
    falaBixinho: "que coisa de adulto. respira que dá certo.",
    opcoes: [
      { emoji: "🧘", texto: "Espaço de escuta semanal — individual, confidencial, pra lidar melhor com sentimentos", pontos: [1, 1, 0, 3, 0, 0, 0] },
      { emoji: "🛠️", texto: "Oficina de adaptação — ajusto pequenas tarefas pra cada um trabalhar sozinho", pontos: [2, 0, 2, 2, 0, 0, 0] },
      { emoji: "🌈", texto: "Programa inclusivo — todo mundo na rotina, com adaptações pra quem tem necessidade específica", pontos: [2, 0, 1, 2, 2, 0, 0] },
      { emoji: "🏃", texto: "Rotina física coletiva — esporte como cuidado e amizade entre a galera", pontos: [2, 0, 1, 1, 2, 1, 0] },
      { emoji: "⚖️", texto: "Carta de direitos da tripulação — formal, com regras justas e canal de denúncia", pontos: [1, 0, 0, 2, 3, 0, 0] },
    ],
  },
  {
    id: 6,
    titulo: "Falha técnica",
    narrativa:
      "03h da manhã. O sistema de oxigênio do dormitório B começou a variar (2% pra menos). Não é perigoso AINDA. Mas em 6 horas vira.",
    falaBixinho: "se eu morrer aqui eu juro que volto te assombrar via wifi.",
    opcoes: [
      { emoji: "🔧", texto: "Vou direto pra engenharia, abro o painel e tento achar o problema", pontos: [0, 0, 3, 0, 0, 0, 0] },
      { emoji: "📊", texto: "Pego os registros dos últimos 30 dias pra entender o padrão antes de mexer", pontos: [0, 2, 0, 0, 0, 0, 2] },
      { emoji: "🚨", texto: "Acordo a tripulação do dormitório B pra mudar de lugar enquanto consertam", pontos: [2, 0, 0, 0, 1, 0, 0] },
      { emoji: "🌬️", texto: "Verifico se as plantas da estufa podem ajudar a estabilizar o O2", pontos: [0, 0, 0, 0, 0, 3, 0] },
    ],
  },
  {
    id: 7,
    titulo: "Mensagem da Terra",
    narrativa:
      "Chegou uma transmissão. Sua família mandou um vídeo. Tá tudo bem — mas é a primeira notícia em 3 meses. Você sente o nó na garganta.",
    falaBixinho: "pode chorar, mano. fica entre nós.",
    opcoes: [
      { emoji: "🎥", texto: "Assisto sozinho no meu quarto, depois respondo com calma", pontos: [2, 0, 0, 1, 0, 0, 0] },
      { emoji: "📝", texto: "Escrevo uma carta longa de volta, contando tudo da viagem", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { emoji: "🧠", texto: "Anoto como me senti — isso mudou meu jeito de trabalhar nos turnos", pontos: [0, 2, 0, 0, 1, 0, 1] },
      { emoji: "🌍", texto: "Penso muito no quanto a Terra precisa que essa missão dê certo", pontos: [0, 0, 0, 0, 3, 0, 0] },
    ],
  },
  {
    id: 13,
    titulo: "Sistema da nave",
    narrativa:
      "Os registros do sistema tão maiores do que ele aguenta. Tudo tá ficando lento. Você lidera a reorganização — por onde começa?",
    falaBixinho: "véi, isso aqui sou EU me reorganizando. mete a mão.",
    opcoes: [
      { emoji: "💾", texto: "Banco centralizado — tabelas bem organizadas, busca rápida de qualquer info. Foco em organização prática", pontos: [0, 0, 0, 1, 0, 0, 3] },
      { emoji: "🤖", texto: "IA aplicada — modelo que aprende dos registros, age automático, evolui sozinho", pontos: [0, 2, 2, 0, 2, 0, 2] },
      { emoji: "∫", texto: "Teoria primeiro — provo o problema matematicamente antes de tocar uma linha de código", pontos: [0, 3, 0, 1, 0, 0, 2] },
      { emoji: "⚡", texto: "Reconstruo os equipamentos — circuitos novos, máquinas mais rápidas", pontos: [0, 1, 3, 0, 0, 0, 2] },
      { emoji: "📊", texto: "Painel pro time — todo mundo enxerga tudo, decisões com base em números", pontos: [0, 1, 1, 1, 1, 0, 2] },
    ],
  },
  {
    id: 8,
    titulo: "Doença misteriosa",
    narrativa:
      "Dia 89 da viagem. Três colegas acordam com os mesmos sintomas — febre baixa, luz forte machucando os olhos, dor espalhada pelo corpo. Ninguém viu nada parecido. Você tá no plantão. Qual sua jogada?",
    falaBixinho: "cara, isso aqui é novela médica espacial. respira.",
    opcoes: [
      { emoji: "🔬", texto: "Lab AGORA — exames de sangue e imagem, amostras. Não toco em ninguém antes de saber o que é.", pontos: [2, 2, 0, 0, 0, 0, 0] },
      { emoji: "🛏️", texto: "Acomodo os três, fico de olho a cada 30 min, dando água o tempo todo", pontos: [3, 0, 0, 0, 0, 0, 0] },
      { emoji: "🗣️", texto: "Sento, escuto. Pergunto rotina, sono, ansiedades — talvez seja estresse de todo mundo, não doença", pontos: [1, 1, 0, 2, 0, 0, 0] },
      { emoji: "💪", texto: "Avalio o corpo, os movimentos — se tá afetado, prescrevo exercício certo pra recuperar", pontos: [2, 0, 2, 0, 0, 0, 0] },
      { emoji: "🥗", texto: "Investigo as últimas refeições — comida fresca, contaminação, falta de algum nutriente?", pontos: [2, 1, 0, 0, 0, 1, 0] },
      { emoji: "📡", texto: "Mando os dados pra IA de bordo cruzar com base de doenças conhecidas — depois decido", pontos: [0, 2, 0, 0, 0, 0, 2] },
    ],
  },
  {
    id: 9,
    titulo: "Chegada ao planeta",
    narrativa:
      "Kepler-186f na tela. Dá pra respirar (com filtro). Verde-azulado. Bonito demais pra ser real. A Capitã pergunta: onde pousamos primeiro?",
    falaBixinho: "olha esse planetinha. eu já tô com ciúmes da terra.",
    opcoes: [
      { emoji: "🏔️", texto: "Perto das montanhas — terreno estável, vista pra tudo", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { emoji: "🌳", texto: "Perto da floresta densa — onde tem mais vida pra estudar", pontos: [0, 1, 0, 0, 0, 3, 0] },
      { emoji: "🌊", texto: "Perto do mar — fonte de água e possível vida marinha pra estudar", pontos: [0, 2, 0, 0, 0, 2, 0] },
      { emoji: "🏕️", texto: "No vale central — perto de tudo, mais fácil de organizar a base depois", pontos: [0, 0, 2, 0, 1, 0, 0] },
    ],
  },
  {
    id: 14,
    titulo: "Cultivo planetário",
    narrativa:
      "Mês 1 em Kepler-186f. A equipe decide testar produção de comida no planeta. Você lidera o primeiro experimento. Por onde começa?",
    falaBixinho: "cara, plantas não são minha praia. ajuda.",
    opcoes: [
      { emoji: "🌾", texto: "Planto variedades da Terra no solo alienígena — técnica agrícola, acompanho quanto cresce", pontos: [0, 2, 1, 0, 0, 3, 0] },
      { emoji: "🐑", texto: "Criação animal sustentável — começo pequeno, foco em bem-estar dos animais", pontos: [2, 0, 1, 0, 0, 3, 0] },
      { emoji: "🔬", texto: "Apenas observação científica — estudo o ambiente antes de qualquer ação", pontos: [0, 3, 0, 1, 0, 1, 0] },
      { emoji: "♻️", texto: "Sistema fechado — tudo reciclado, quase sem afetar o ambiente", pontos: [0, 1, 3, 0, 2, 1, 0] },
      { emoji: "🏭", texto: "Alimentos processados de longa duração — escala industrial, máximo de energia por porção", pontos: [0, 1, 3, 0, 0, 1, 0] },
    ],
  },
  {
    id: 10,
    titulo: "Contato",
    narrativa:
      "Terceira semana no planeta. Vocês encontram algo. Pequenas criaturas que brilham no escuro saem das tocas à noite. Elas parecem curiosas. Não perigosas.",
    falaBixinho: "tipo eu mas em carbono.",
    opcoes: [
      { emoji: "📸", texto: "Observo de longe, anoto o comportamento, não chego perto", pontos: [0, 3, 0, 0, 0, 1, 0] },
      { emoji: "🍞", texto: "Tento oferecer algo — gesto de paz, primeira ponte entre espécies", pontos: [2, 0, 0, 2, 0, 0, 0] },
      { emoji: "🧪", texto: "Coleto amostras (sem machucar) pra entender como elas funcionam", pontos: [0, 2, 0, 0, 0, 2, 0] },
      { emoji: "📡", texto: "Mando imagens pra Terra na hora — humanidade inteira precisa ver isso", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { emoji: "🛡️", texto: "Tiro a equipe de perto e crio regra: ninguém se aproxima, por garantia", pontos: [1, 0, 0, 0, 2, 0, 0] },
    ],
  },
  {
    id: 11,
    titulo: "Crise final",
    narrativa:
      "Mês 7 no planeta. Tempestade magnética do nada. Os sistemas de suporte vital estão piscando. Você tem 12 minutos pra decidir o que salvar primeiro.",
    falaBixinho: "tá. agora é sério. confio em você.",
    opcoes: [
      { emoji: "🩺", texto: "Garanto que a enfermaria fique online — vidas primeiro, dados depois", pontos: [3, 0, 0, 0, 0, 0, 0] },
      { emoji: "🔋", texto: "Redireciono toda energia pros sistemas críticos, manualmente", pontos: [0, 0, 2, 0, 0, 0, 2] },
      { emoji: "🧬", texto: "Salvo os dados de pesquisa antes que se percam — é o motivo da missão", pontos: [0, 3, 0, 0, 0, 0, 0] },
      { emoji: "🗣️", texto: "Coordeno a tripulação inteira, distribuo funções por voz", pontos: [0, 0, 0, 2, 2, 0, 0] },
      { emoji: "🌱", texto: "Protejo a estufa — sem ela, ninguém volta pra casa", pontos: [0, 0, 0, 0, 0, 3, 0] },
    ],
  },
];

/** Total de cenas pontuáveis (2 a 10). Cena 1 é home, Cena 11 é resultado. */
export const TOTAL_CENAS_PONTUAVEIS = CENAS.length;

export function getCena(id: number): Cena | undefined {
  return CENAS.find((c) => c.id === id);
}

export function proximaCena(idAtual: number): Cena | null {
  const idx = CENAS.findIndex((c) => c.id === idAtual);
  if (idx === -1) return null;
  return CENAS[idx + 1] ?? null;
}
