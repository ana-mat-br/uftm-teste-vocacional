/**
 * Estrutura das cenas do quiz. Ver docs/ROTEIRO.md para a versão narrativa completa.
 *
 * Estrutura:
 * - Cena 1 (Hero)     = home page `/` — gera codinome, sem pontuação
 * - Cenas 2-17        = 15 cenas pontuáveis, em /cena/[id] (16, 18, 19 removidas)
 *                       Ordem narrativa: 2, 3, 4, 5, 12, 6, 7, 13, 8, 17, 9, 15, 14, 10, 11
 *                       IDs discriminantes: 12 (educação), 13 (sistema/tech),
 *                       14 (cultivo), 8 (saúde clínica), 15 (tech alienígena),
 *                       17 (festival/social — TRA/COM/CUL)
 *                       Ver docs/PERSONAS-IDEAIS.md
 *
 * Cada opção pontua de 1 a 3 eixos.
 * Ordem do vetor: [CUI, INV, CON, COM, TRA, CUL, TEC]
 */

import type { VetorEixos } from "@/lib/matching";
import type { IconName } from "@/components/Icon";

export type Opcao = {
  /** Nome do ícone Lucide (renderizado via <Icon name="..." />). */
  icon: IconName;
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
      "Ano 2087. A Terra está em colapso e a UFTM está montando a primeira expedição tripulada ao exoplaneta Kepler-186f: 14 meses de viagem, tripulação de 12. Vocês não foram escolhidos por nota — foram escolhidos pelo Protocolo Vocação. Uma luzinha verde flutua até você na sala de embarque; é seu copiloto de bordo, uma IA que ainda não tem nome (a missão vai batizar ela no fim). Atrás, a Capitã Vidal aparece no holograma. O Protocolo começa agora.",
    falaBixinho: "oi! sou eu, seu copiloto. vou te acompanhar a missão inteira. ela é sempre dramática assim, relaxa.",
    opcoes: [
      { icon: "thinking", texto: "Anoto tudo e levanto a mão pra perguntar se esse Protocolo pode dar errado", pontos: [0, 2, 0, 0, 0, 0, 1] },
      { icon: "uncertain", texto: "Olho pros outros candidatos pra ver se alguém também tá perdido", pontos: [1, 0, 0, 2, 0, 0, 0] },
      { icon: "tools", texto: "Chego mais perto e dou uma olhada na nave — quero ver como ela é por dentro", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { icon: "sprout", texto: "Pergunto se vou poder levar plantas pra estufa da nave", pontos: [0, 0, 0, 0, 0, 3, 0] },
      { icon: "globe", texto: "Pergunto pra Capitã: como essa missão muda a vida da galera que fica na Terra?", pontos: [0, 0, 0, 1, 3, 0, 0] },
    ],
  },
  {
    id: 3,
    titulo: "Primeiro turno",
    narrativa:
      "14:23 UTC. Cinco alertas piscam ao mesmo tempo. Você só atende UM agora.",
    falaBixinho: "clássico. respira.",
    opcoes: [
      { icon: "stethoscope", texto: "Enfermaria — colega passou mal no treino físico", pontos: [3, 0, 0, 0, 0, 0, 0] },
      { icon: "wrench", texto: "Engenharia — vazamento pequeno crescendo no compartimento 7", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { icon: "radio", texto: "Comunicações — sinal estranho da Terra, talvez urgente", pontos: [0, 3, 0, 0, 0, 0, 0] },
      { icon: "leaf", texto: "Estufa — sistema de irrigação travou nas mudas", pontos: [0, 0, 1, 0, 0, 2, 0] },
      { icon: "logs", texto: "Painel de bordo — a IA tá apontando uma falha no sistema de dados", pontos: [0, 0, 0, 1, 0, 0, 3] },
    ],
  },
  {
    id: 4,
    titulo: "Anomalia",
    narrativa:
      "Dia 47 da viagem. Um sensor externo detecta um rastro de energia que não tá no manual. Não é asteroide. Não é nave. Não é nada que humano já tenha registrado.",
    falaBixinho: "eu fingiria que tô calmo se eu tivesse pulmão.",
    opcoes: [
      { icon: "chart", texto: "Vou pra sala de dados e cruzo o rastro com todos os arquivos da Terra", pontos: [0, 2, 0, 0, 0, 0, 2] },
      { icon: "satellite", texto: "Mando um drone chegar mais perto antes da gente fazer qualquer coisa", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { icon: "voice", texto: "Chamo a galera toda — isso aqui precisa de várias cabeças pra decidir", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { icon: "shield", texto: "Aviso a Capitã na hora e disparo alerta vermelho", pontos: [1, 0, 0, 0, 2, 0, 0] },
      { icon: "leaf", texto: "Comparo o rastro com padrões de seres vivos que a gente já conhece — vai que é coisa biológica?", pontos: [0, 2, 0, 0, 0, 3, 0] },
    ],
  },
  {
    id: 5,
    titulo: "Conflito de tripulação",
    narrativa:
      "Dois colegas estão brigando alto no refeitório. Um acha que tão racionando comida demais, o outro acha que não tão racionando suficiente. A discussão tá ficando feia.",
    falaBixinho: "vai lá. eu seguro pipoca holográfica.",
    opcoes: [
      { icon: "hug", texto: "Chego perto e peço pros dois respirarem antes de continuar", pontos: [2, 0, 0, 2, 0, 0, 0] },
      { icon: "chart", texto: "Puxo os dados de estoque no tablet e mostro o que os números dizem", pontos: [0, 1, 0, 0, 0, 0, 2] },
      { icon: "scale", texto: "Proponho uma reunião com a tripulação inteira pra revisar as regras", pontos: [0, 0, 0, 1, 3, 0, 0] },
      { icon: "sprout", texto: "Sugiro plantar mais nas estufas pra resolver na raiz", pontos: [0, 0, 1, 0, 0, 2, 0] },
      { icon: "tools", texto: "Reorganizo as escalas e os turnos de cozinha — se cada um souber sua função, a briga acaba sozinha", pontos: [0, 0, 3, 0, 1, 0, 0] },
    ],
  },
  {
    id: 12,
    titulo: "Rotina coletiva",
    narrativa:
      "Algumas semanas depois do conflito, todo mundo concorda: a tripulação precisa de UM programa pra cuidar do grupo. Você se voluntaria pra criar. Qual aposta?",
    falaBixinho: "que coisa de adulto. respira que dá certo.",
    opcoes: [
      { icon: "voice", texto: "Espaço de escuta semanal — individual, confidencial, pra lidar melhor com sentimentos", pontos: [1, 0, 0, 3, 0, 0, 0] },
      { icon: "hug", texto: "Programa inclusivo — todo mundo na rotina, com adaptações pra quem precisar", pontos: [3, 0, 0, 1, 1, 0, 0] },
      { icon: "mountain", texto: "Esporte toda semana com a galera — vira cuidado e amizade junto", pontos: [2, 0, 1, 0, 1, 0, 0] },
      { icon: "scale", texto: "Documento de direitos da tripulação — regras justas e jeito de denunciar quem desrespeitar", pontos: [0, 0, 0, 1, 3, 0, 0] },
      { icon: "brain", texto: "App de bem-estar — cada um registra humor e sono no celular, a IA aponta padrões pra prevenir crises", pontos: [0, 1, 0, 1, 0, 0, 3] },
    ],
  },
  {
    id: 6,
    titulo: "Falha técnica",
    narrativa:
      "03h da manhã. O sistema de oxigênio do dormitório B começou a variar 2%. Não é perigoso AINDA. Mas em 6 horas vira.",
    falaBixinho: "se eu morrer aqui eu juro que volto te assombrar via wifi.",
    opcoes: [
      { icon: "tools", texto: "Vou direto pra engenharia, abro o painel e tento descobrir o problema", pontos: [0, 0, 3, 0, 0, 0, 0] },
      { icon: "logs", texto: "Pego os logs dos últimos 30 dias pra entender o padrão antes de mexer", pontos: [0, 2, 0, 0, 0, 0, 2] },
      { icon: "alarm", texto: "Acordo a tripulação do dormitório B pra realocar enquanto consertam", pontos: [2, 0, 0, 0, 1, 0, 0] },
      { icon: "wind", texto: "Verifico se as plantas da estufa podem ajudar com o ar", pontos: [0, 0, 0, 0, 0, 3, 0] },
      { icon: "voice", texto: "Aviso a galera com calma — explico o que tá rolando pra ninguém entrar em pânico", pontos: [1, 0, 0, 3, 0, 0, 0] },
    ],
  },
  {
    id: 7,
    titulo: "Mensagem da Terra",
    narrativa:
      "Chegou uma transmissão. Sua família mandou um vídeo. Tá tudo bem — mas é a primeira notícia em 3 meses. Você sente o nó na garganta.",
    falaBixinho: "sabe que você pode chorar, né. eu não conto pra ninguém.",
    opcoes: [
      { icon: "hug", texto: "Chamo um colega de tripulação pra assistir junto comigo — não quero ficar sozinho nessa", pontos: [3, 0, 0, 1, 0, 0, 0] },
      { icon: "letter", texto: "Escrevo uma carta longa de volta, contando tudo da viagem com calma", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { icon: "globe", texto: "Vejo isso como motor: cada palavra da família é mais motivo pra essa missão dar certo pra Terra inteira", pontos: [0, 0, 0, 0, 3, 0, 0] },
      { icon: "brain", texto: "Anoto como eu reagi e os efeitos no meu corpo — pode virar dado pra próximas missões longas", pontos: [1, 3, 0, 0, 0, 0, 0] },
      { icon: "logs", texto: "Junto todas as mensagens num álbum no meu tablet — quero rever toda vez que bater saudade", pontos: [1, 0, 0, 1, 0, 0, 3] },
    ],
  },
  {
    id: 13,
    titulo: "Computador da nave",
    narrativa:
      "O computador da nave tá cheio demais e travando. Você ficou responsável por arrumar isso — por onde começa?",
    falaBixinho: "olha, isso aqui sou EU me reorganizando. bora junto?",
    opcoes: [
      { icon: "logs", texto: "Junto tudo num lugar só, bem organizado — fica fácil de achar qualquer coisa depois", pontos: [0, 0, 0, 1, 0, 0, 3] },
      { icon: "brain", texto: "Crio uma IA que aprende sozinha lendo os arquivos antigos — ela melhora com o tempo", pontos: [0, 2, 2, 0, 0, 0, 3] },
      { icon: "wrench", texto: "Troco as peças do computador — coisas novas e bem mais rápidas", pontos: [0, 0, 3, 0, 0, 0, 0] },
      { icon: "hug", texto: "Pergunto pra galera o que mais incomoda no sistema — resolvo o que mais dói primeiro", pontos: [1, 0, 0, 3, 0, 0, 0] },
      { icon: "scale", texto: "Crio regras claras: o que pode ficar guardado e o que não — todo mundo segue uma política", pontos: [0, 0, 0, 1, 3, 0, 0] },
    ],
  },
  {
    id: 8,
    titulo: "Doença misteriosa",
    narrativa:
      "Dia 89 da viagem. Três colegas acordam com os mesmos sintomas — febre baixa, luz forte machucando os olhos, dor espalhada pelo corpo. Ninguém viu nada parecido. Você tá no plantão. Qual sua jogada?",
    falaBixinho: "cara, isso aqui é série médica espacial. respira.",
    opcoes: [
      { icon: "lab", texto: "Corro pro laboratório fazer exame de sangue — nem chego perto deles antes de saber o que é", pontos: [1, 3, 0, 0, 0, 0, 0] },
      { icon: "stethoscope", texto: "Acomodo os três, fico de olho a cada 30 min, dando água o tempo todo", pontos: [3, 0, 0, 0, 0, 0, 0] },
      { icon: "brain", texto: "Peço pra IA cruzar os sintomas com tudo que a gente tem registrado a bordo — tem que ter padrão", pontos: [0, 0, 0, 1, 0, 0, 3] },
      { icon: "leaf", texto: "Investigo as últimas refeições — tem comida nova da estufa, pode ser ela", pontos: [0, 1, 0, 0, 0, 3, 0] },
      { icon: "scale", texto: "Junto a galera pra reconstruir os últimos dias — onde esteve, o que comeu, o que tocou. Achamos a origem em equipe", pontos: [0, 0, 0, 2, 3, 0, 0] },
    ],
  },
  {
    id: 17,
    titulo: "Festa dos 100 dias",
    narrativa:
      "Já são 100 dias de viagem. A galera quer fazer uma festa e cada um pode ajudar do seu jeito. Você topa cuidar do quê?",
    falaBixinho: "agora sim! cara, finalmente uma festa nesse drama todo.",
    opcoes: [
      { icon: "letter", texto: "Faço um documentário da viagem até aqui — entrevisto todo mundo e conto a história dos 100 dias", pontos: [0, 0, 0, 2, 3, 0, 0] },
      { icon: "voice", texto: "Organizo um show de talentos — música, poesia, brincadeiras da galera", pontos: [1, 0, 0, 3, 0, 0, 0] },
      { icon: "leaf", texto: "Cuido da comida — pratos especiais com o que cresceu na estufa, comida pra confortar", pontos: [2, 0, 0, 0, 0, 2, 0] },
      { icon: "scale", texto: "Monto uma gincana com a galera dividida em times — todo mundo joga junto, ninguém fora", pontos: [0, 0, 1, 0, 3, 0, 0] },
      { icon: "brain", texto: "Faço uma enquete pra todo mundo no celular — galera vota e a programação aparece pronta", pontos: [0, 0, 0, 1, 0, 0, 3] },
    ],
  },
  {
    id: 9,
    titulo: "Chegada ao planeta",
    narrativa:
      "Kepler-186f na tela. Atmosfera respirável (com filtro). Verde-azulado. Bonito demais pra ser real. A Capitã pergunta: onde pousamos primeiro?",
    falaBixinho: "olha esse planetinha. sou só um software e até eu tô emocionado.",
    opcoes: [
      { icon: "mountain", texto: "Perto das montanhas — terreno estável, vista pra tudo", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { icon: "tree", texto: "Perto da floresta densa — onde tem mais vida pra estudar", pontos: [0, 1, 0, 0, 0, 3, 0] },
      { icon: "waves", texto: "Perto do mar — som das ondas ajuda a galera a se adaptar; bem-estar primeiro", pontos: [2, 0, 0, 2, 0, 0, 0] },
      { icon: "tent", texto: "No vale central — perto de tudo, mais fácil de organizar a base e dividir tarefas", pontos: [0, 0, 1, 0, 2, 0, 0] },
      { icon: "radio", texto: "Onde o sinal pega melhor pra ficar em contato com a Terra — sem comunicação, ninguém volta pra casa", pontos: [0, 0, 0, 1, 0, 0, 3] },
    ],
  },
  {
    id: 15,
    titulo: "Linguagem alienígena",
    narrativa:
      "Um drone acha um objeto com símbolos que se repetem. Parece um código. Você tem que descobrir o que significa — por onde começa?",
    falaBixinho: "calma. já vi muita gente decifrar coisa mais difícil que isso.",
    opcoes: [
      { icon: "logs", texto: "Organizo todos os símbolos num arquivo — sem organizar, não dá pra estudar", pontos: [0, 0, 0, 0, 0, 0, 3] },
      { icon: "thinking", texto: "Tento achar a lógica matemática — vejo se os símbolos seguem alguma sequência", pontos: [0, 3, 0, 0, 0, 0, 1] },
      { icon: "letter", texto: "Comparo com escritas antigas da Terra — pode ser parecido com hieróglifo ou letra de jogo", pontos: [0, 0, 0, 3, 1, 0, 0] },
      { icon: "globe", texto: "Penso quem fez isso — que tipo de gente era? o que queria dizer pra outros mundos?", pontos: [0, 1, 0, 0, 3, 0, 0] },
      { icon: "leaf", texto: "Procuro nos arredores: tem alguma planta ou bicho com esses mesmos padrões? a natureza pode ter a chave", pontos: [0, 1, 0, 0, 0, 3, 0] },
    ],
  },
  {
    id: 14,
    titulo: "Cultivo planetário",
    narrativa:
      "Mês 1 em Kepler-186f. A equipe decide testar produção de comida no planeta. Você lidera o primeiro experimento. Por onde começa?",
    falaBixinho: "cara, plantas não são minha praia. ajuda.",
    opcoes: [
      { icon: "sprout", texto: "Planto plantas da Terra no chão alienígena — testo como crescem aqui", pontos: [0, 1, 0, 0, 0, 3, 0] },
      { icon: "tent", texto: "Criação animal sustentável — começo pequeno, foco em bem-estar dos bichos", pontos: [2, 0, 0, 0, 0, 3, 0] },
      { icon: "lab", texto: "Antes de plantar nada, estudo o solo, o ar e a luz — só depois decido", pontos: [0, 3, 0, 0, 0, 1, 0] },
      { icon: "tree", texto: "Sistema fechado e reciclado — engenheiro tudo pra quase não afetar o ambiente", pontos: [0, 0, 3, 0, 1, 0, 0] },
      { icon: "brain", texto: "Coloco sensores espalhados — a IA monitora o cultivo 24h e avisa o que precisa de ajuste", pontos: [0, 1, 0, 0, 0, 1, 3] },
    ],
  },
  {
    id: 10,
    titulo: "Contato",
    narrativa:
      "Terceira semana no planeta. Vocês encontram algo. Bichinhos pequenos que brilham saem das tocas à noite. Curiosos. Não parecem perigosos.",
    falaBixinho: "o brilho deles não é elétrico igual o meu. é vida.",
    opcoes: [
      { icon: "camera", texto: "Observo de longe, anoto comportamento, não interfiro", pontos: [0, 3, 0, 0, 0, 1, 0] },
      { icon: "offering", texto: "Tento oferecer algo — gesto de paz entre espécies", pontos: [2, 0, 0, 2, 0, 0, 0] },
      { icon: "lab", texto: "Coleto amostras (sem machucar) pra entender a biologia delas", pontos: [0, 2, 0, 0, 0, 2, 0] },
      { icon: "comms", texto: "Mando imagens pra Terra na hora — humanidade inteira precisa ver isso", pontos: [0, 0, 0, 3, 1, 0, 0] },
      { icon: "satellite", texto: "Programo um drone pra acompanhar elas à distância e registrar tudo automaticamente", pontos: [0, 0, 1, 0, 0, 0, 3] },
    ],
  },
  {
    id: 11,
    titulo: "Crise final",
    narrativa:
      "Mês 7 no planeta. Tempestade magnética inesperada. Os sistemas que mantêm todo mundo vivo estão piscando. Você tem 12 minutos pra decidir o que priorizar.",
    falaBixinho: "tá. agora é sério. confio em você.",
    opcoes: [
      { icon: "stethoscope", texto: "Garanto que a enfermaria fique online — vidas primeiro, dados depois", pontos: [3, 0, 0, 0, 0, 0, 0] },
      { icon: "battery", texto: "Redireciono toda energia pros sistemas mais importantes, na mão", pontos: [0, 0, 2, 0, 1, 0, 2] },
      { icon: "dna", texto: "Salvo os dados de pesquisa antes que se percam — justifica a missão", pontos: [0, 3, 0, 0, 0, 0, 0] },
      { icon: "voice", texto: "Coordeno a tripulação inteira, distribuo funções por voz", pontos: [0, 0, 0, 2, 2, 0, 0] },
      { icon: "sprout", texto: "Protejo a estufa — sem ela, ninguém volta pra casa", pontos: [0, 0, 0, 0, 0, 3, 0] },
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
