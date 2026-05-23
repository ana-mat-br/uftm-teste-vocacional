/**
 * Estrutura das cenas do quiz. Ver docs/ROTEIRO.md para a versão narrativa completa.
 *
 * Estrutura:
 * - Cena 1 (Hero)     = home page `/` — gera codinome, sem pontuação
 * - Cenas 2-17        = 15 cenas pontuáveis, em /cena/[id] (16, 18, 19 removidas)
 *                       Ordem narrativa: 2, 3, 4, 5, 12, 6, 17, 7, 13, 8, 9, 15, 14, 10, 11
 *                       IDs discriminantes: 12 (educação), 13 (sistema/tech),
 *                       14 (cultivo), 8 (saúde clínica), 15 (tech alienígena),
 *                       17 (saúde mental)
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
      "Ano 2087. A Terra está em colapso e a UFTM está montando a primeira expedição tripulada ao exoplaneta Kepler-186f: 14 meses de viagem, tripulação de 12. Vocês não foram escolhidos por nota — foram escolhidos pelo Protocolo Vocação. Uma luzinha verde flutua até você no hangar; é seu copiloto de bordo, uma IA que ainda não tem nome (a missão vai batizar ela no fim). Atrás, a Capitã Vidal aparece no holograma. O Protocolo começa agora.",
    falaBixinho: "oi! sou eu, seu copiloto. vou te acompanhar a missão inteira. ela é sempre dramática assim, relaxa.",
    opcoes: [
      { icon: "thinking", texto: "Anoto tudo, levanto a mão pra perguntar se o Protocolo pode falhar", pontos: [0, 2, 0, 0, 0, 0, 1] },
      { icon: "uncertain", texto: "Olho pros outros candidatos pra ver se alguém também tá perdido", pontos: [1, 0, 0, 2, 0, 0, 0] },
      { icon: "flame", texto: "Já tô empolgado, quero saber quando começa pra valer", pontos: [0, 0, 1, 0, 2, 0, 0] },
      { icon: "sprout", texto: "Pergunto se a gente vai poder levar plantas pra estufa da nave", pontos: [0, 0, 0, 0, 0, 3, 0] },
    ],
  },
  {
    id: 3,
    titulo: "Primeiro turno",
    narrativa:
      "14:23 UTC. Três alertas piscam ao mesmo tempo. Você só atende UM agora.",
    falaBixinho: "clássico. respira.",
    opcoes: [
      { icon: "stethoscope", texto: "Enfermaria — colega passou mal no treino físico", pontos: [3, 0, 0, 0, 0, 0, 0] },
      { icon: "wrench", texto: "Engenharia — vazamento pequeno crescendo no compartimento 7", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { icon: "radio", texto: "Comunicações — sinal estranho da Terra, talvez urgente", pontos: [0, 2, 0, 1, 0, 0, 0] },
      { icon: "leaf", texto: "Estufa — sistema de irrigação travou nas mudas", pontos: [0, 0, 1, 0, 0, 2, 0] },
      { icon: "brain", texto: "Pauso 30 segundos, comparo os 3 alertas com histórico antes de decidir qual atender", pontos: [2, 2, 0, 0, 0, 0, 0] },
    ],
  },
  {
    id: 4,
    titulo: "Anomalia",
    narrativa:
      "Dia 47 da viagem. Um sensor externo detecta um rastro de energia que não tá no manual. Não é asteroide. Não é nave. Não é nada que humano já tenha registrado.",
    falaBixinho: "eu fingiria que tô calmo se eu tivesse pulmão.",
    opcoes: [
      { icon: "chart", texto: "Vou pra sala de dados cruzar o rastro com todos os arquivos da Terra", pontos: [0, 2, 0, 0, 0, 0, 2] },
      { icon: "satellite", texto: "Sugiro mandar um drone pra mais perto antes de qualquer coisa", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { icon: "voice", texto: "Reúno a tripulação — isso precisa de várias cabeças decidindo", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { icon: "shield", texto: "Aviso a Capitã na hora e disparo alerta vermelho", pontos: [1, 0, 0, 0, 2, 0, 0] },
      { icon: "logs", texto: "Escrevo script pra IA de bordo ficar de olho na anomalia 24h e avisar se mudar de padrão", pontos: [0, 0, 0, 1, 0, 0, 3] },
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
      { icon: "sprout", texto: "Sugiro que a gente plante mais nas estufas pra resolver na raiz", pontos: [0, 0, 1, 0, 0, 2, 0] },
    ],
  },
  {
    id: 12,
    titulo: "Rotina coletiva",
    narrativa:
      "Algumas semanas depois do conflito, todo mundo concorda: a tripulação precisa de UM programa pra cuidar do grupo. Você se voluntaria pra criar. Qual aposta?",
    falaBixinho: "que coisa de adulto. respira que dá certo.",
    opcoes: [
      { icon: "voice", texto: "Espaço de escuta semanal — individual, confidencial, pra lidar melhor com sentimentos", pontos: [1, 1, 0, 3, 0, 0, 0] },
      { icon: "tools", texto: "Oficina pra cada um aprender do próprio jeito — ajusto as tarefas pra cada pessoa trabalhar sozinha", pontos: [2, 0, 2, 2, 0, 0, 0] },
      { icon: "hug", texto: "Programa inclusivo — todo mundo na rotina, com adaptações pra quem tem necessidade específica", pontos: [2, 0, 1, 2, 2, 0, 0] },
      { icon: "mountain", texto: "Rotina física coletiva — esporte como cuidado e amizade entre a galera", pontos: [2, 0, 1, 1, 2, 1, 0] },
      { icon: "scale", texto: "Documento de direitos da tripulação — formal, com regras justas e jeito de denunciar quem desrespeitar", pontos: [1, 0, 0, 2, 3, 0, 0] },
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
    ],
  },
  {
    id: 17,
    titulo: "Atendimento à tripulação",
    narrativa:
      "Um colega vem até você abalado — não consegue dormir, perdeu o apetite, tá afastado da galera. Não é doença física. O que você faz?",
    falaBixinho: "isso aqui é importante. cuidar de gente é tudo nessa missão.",
    opcoes: [
      { icon: "stethoscope", texto: "Investigo sintomas físicos primeiro — pressão, sono, exames. Mente e corpo conversam.", pontos: [3, 3, 0, 0, 0, 0, 0] },
      { icon: "hug", texto: "Fico junto, sem precisar resolver — presença e rotina de cuidado diária", pontos: [3, 0, 0, 1, 0, 0, 0] },
      { icon: "voice", texto: "Escuto sem julgar — abro espaço pra ele falar o que sente, sem pressa", pontos: [2, 0, 0, 3, 0, 0, 0] },
      { icon: "dna", texto: "Avalio postura e movimento — corpo tenso afeta a mente. Prescrevo exercício.", pontos: [2, 1, 2, 0, 0, 0, 0] },
      { icon: "tools", texto: "Reorganizo as tarefas dele — adapto a rotina pra ele participar de outro jeito", pontos: [2, 0, 2, 2, 0, 0, 0] },
      { icon: "leaf", texto: "Reviso o que ele anda comendo — falta de nutriente afeta humor e energia", pontos: [2, 1, 0, 0, 0, 2, 0] },
      { icon: "scale", texto: "Crio uma rede de apoio na tripulação — coletivo cuida melhor que indivíduo", pontos: [1, 0, 0, 1, 3, 0, 0] },
      { icon: "shield", texto: "Faço um plano de inclusão pra ele voltar com adaptações que respeitem o ritmo dele", pontos: [2, 0, 0, 2, 2, 0, 0] },
    ],
  },
  {
    id: 7,
    titulo: "Mensagem da Terra",
    narrativa:
      "Chegou uma transmissão. Sua família mandou um vídeo. Tá tudo bem — mas é a primeira notícia em 3 meses. Você sente o nó na garganta.",
    falaBixinho: "sabe que você pode chorar, né. eu não conto pra ninguém.",
    opcoes: [
      { icon: "video", texto: "Assisto sozinho no meu quarto, depois respondo com calma", pontos: [2, 0, 0, 1, 0, 0, 0] },
      { icon: "letter", texto: "Escrevo uma carta longa de volta, contando tudo da viagem", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { icon: "brain", texto: "Anoto como o impacto emocional mudou meu jeito de trabalhar nos plantões", pontos: [0, 2, 0, 0, 1, 0, 1] },
      { icon: "globe", texto: "Reflito sobre o quanto a Terra precisa que essa missão dê certo", pontos: [0, 0, 0, 0, 3, 0, 0] },
      { icon: "chart", texto: "Salvo a mensagem num arquivo encriptado pra reler nos momentos difíceis — meu backup pessoal", pontos: [0, 0, 0, 1, 0, 0, 3] },
    ],
  },
  {
    id: 13,
    titulo: "Sistema da nave",
    narrativa:
      "Os registros do sistema tão maiores do que ele aguenta. Tudo tá ficando lento. Você lidera a reorganização — por onde começa?",
    falaBixinho: "olha, isso aqui sou EU me reorganizando. bora junto?",
    opcoes: [
      { icon: "logs", texto: "Banco centralizado — tabelas bem organizadas, busca rápida de qualquer info. Foco em organização prática", pontos: [0, 0, 0, 1, 0, 0, 3] },
      { icon: "brain", texto: "IA que aprende sozinha vendo os registros — age automático e melhora com o tempo", pontos: [0, 2, 2, 0, 2, 0, 2] },
      { icon: "thinking", texto: "Matemática primeiro — explico o problema no papel antes de programar uma linha", pontos: [0, 3, 0, 1, 0, 0, 2] },
      { icon: "wrench", texto: "Reconstruo os equipamentos — circuitos novos, máquinas mais rápidas", pontos: [0, 1, 3, 0, 0, 0, 2] },
      { icon: "chart", texto: "Painel pro time — todo mundo enxerga tudo, decisões com base em números", pontos: [0, 1, 1, 1, 1, 0, 2] },
    ],
  },
  {
    id: 8,
    titulo: "Doença misteriosa",
    narrativa:
      "Dia 89 da viagem. Três colegas acordam com os mesmos sintomas — febre baixa, luz forte machucando os olhos, dor espalhada pelo corpo. Ninguém viu nada parecido. Você tá no plantão. Qual sua jogada?",
    falaBixinho: "cara, isso aqui é série médica espacial. respira.",
    opcoes: [
      { icon: "lab", texto: "Lab AGORA — exames de sangue e imagem, amostras. Não toco em ninguém antes de saber o que é.", pontos: [2, 2, 0, 0, 0, 0, 0] },
      { icon: "stethoscope", texto: "Acomodo os três, fico de olho a cada 30 min, dando água o tempo todo", pontos: [3, 0, 0, 0, 0, 0, 0] },
      { icon: "voice", texto: "Sento, escuto. Pergunto rotina, sono, ansiedades — talvez seja estresse de todo mundo, não doença", pontos: [1, 1, 0, 2, 0, 0, 0] },
      { icon: "dna", texto: "Avalio o corpo, os movimentos — se tá afetado, prescrevo exercício certo pra recuperar", pontos: [2, 0, 2, 0, 0, 0, 0] },
      { icon: "leaf", texto: "Investigo as últimas refeições — comida fresca, contaminação, falta de algum nutriente?", pontos: [2, 1, 0, 0, 0, 1, 0] },
      { icon: "satellite", texto: "Mando os dados pra IA de bordo cruzar com base de doenças conhecidas — depois decido", pontos: [0, 1, 0, 0, 0, 0, 3] },
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
      { icon: "waves", texto: "Perto do mar — fonte de água e possíveis ecossistemas marinhos", pontos: [0, 2, 0, 0, 0, 2, 0] },
      { icon: "tent", texto: "No vale central — perto de tudo, mais fácil de organizar a base depois", pontos: [0, 0, 2, 0, 1, 0, 0] },
      { icon: "sprout", texto: "Num vale fértil — onde dá pra cultivar comida e começar uma estufa nativa", pontos: [0, 0, 0, 0, 0, 3, 0] },
    ],
  },
  {
    id: 15,
    titulo: "Linguagem alienígena",
    narrativa:
      "Drone de exploração encontra um artefato com símbolos que se repetem em padrão. Parece código. Você é chamado pra liderar a decifração — por onde começa?",
    falaBixinho: "isso aqui me lembra muito CSS quebrado. respira que a gente decifra.",
    opcoes: [
      { icon: "logs", texto: "Catalogo cada símbolo num banco de dados — sem catálogo, não tem análise possível", pontos: [0, 0, 0, 0, 0, 0, 3] },
      { icon: "brain", texto: "Treino uma IA pra reconhecer padrões nos símbolos — deixo a máquina aprender", pontos: [0, 1, 0, 0, 0, 0, 3] },
      { icon: "thinking", texto: "Provo matematicamente que a sequência segue alguma lógica antes de chutar", pontos: [0, 3, 0, 0, 0, 0, 1] },
      { icon: "chart", texto: "Crio um dashboard pro time inteiro contribuir — todo mundo vê os padrões", pontos: [0, 0, 0, 2, 0, 0, 2] },
      { icon: "wrench", texto: "Monto um decodificador físico — circuito que traduz os símbolos pra som", pontos: [0, 0, 2, 0, 0, 0, 2] },
    ],
  },
  {
    id: 14,
    titulo: "Cultivo planetário",
    narrativa:
      "Mês 1 em Kepler-186f. A equipe decide testar produção de comida no planeta. Você lidera o primeiro experimento. Por onde começa?",
    falaBixinho: "cara, plantas não são minha praia. ajuda.",
    opcoes: [
      { icon: "sprout", texto: "Planto plantas da Terra no chão alienígena — técnica de plantação, acompanho quanto cresce", pontos: [0, 2, 1, 0, 0, 3, 0] },
      { icon: "tent", texto: "Criação animal sustentável — começo pequeno, foco em bem-estar dos animais", pontos: [2, 0, 1, 0, 0, 3, 0] },
      { icon: "lab", texto: "Apenas observação científica — estudo o ambiente antes de qualquer ação", pontos: [0, 3, 0, 1, 0, 1, 0] },
      { icon: "tree", texto: "Sistema fechado — tudo reciclado, quase sem afetar o ambiente", pontos: [0, 1, 3, 0, 2, 1, 0] },
      { icon: "wrench", texto: "Comida industrial que dura muito tempo — feita em fábrica, mais energia por prato", pontos: [0, 1, 3, 0, 0, 1, 0] },
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
      { icon: "comms", texto: "Mando imagens pra Terra na hora — humanidade inteira precisa ver isso", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { icon: "shield", texto: "Recuo a equipe e estabeleço a regra de não chegar perto, por segurança", pontos: [1, 0, 0, 0, 2, 0, 0] },
      { icon: "leaf", texto: "Observo o ecossistema que cerca elas — plantas, terreno, ciclos de luz — pra entender a vida que as sustenta", pontos: [0, 1, 0, 0, 0, 3, 0] },
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
      { icon: "battery", texto: "Redireciono toda energia pros sistemas mais importantes, na mão", pontos: [0, 0, 2, 0, 0, 0, 2] },
      { icon: "dna", texto: "Salvo os dados de pesquisa antes que se percam — justifica a missão", pontos: [0, 3, 0, 0, 0, 0, 0] },
      { icon: "voice", texto: "Coordeno a tripulação inteira, distribuo funções por voz", pontos: [0, 0, 0, 2, 2, 0, 0] },
      { icon: "sprout", texto: "Protejo a estufa — sem ela, ninguém volta pra casa", pontos: [0, 0, 0, 0, 0, 3, 0] },
      { icon: "logs", texto: "Copio tudo num servidor de reserva e organizo direitinho — backup é comigo", pontos: [0, 0, 0, 2, 0, 0, 3] },
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
