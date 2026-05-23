/**
 * Estrutura das cenas do quiz. Ver docs/ROTEIRO.md para a versão narrativa completa.
 *
 * Estrutura:
 * - Cena 1 (Hero)     = home page `/` — gera codinome, sem pontuação
 * - Cenas 2-14        = 13 cenas pontuáveis, em /cena/[id]
 *                       Ordem narrativa: 2, 3, 4, 5, 12, 6, 7, 13, 8, 9, 14, 10, 11
 *                       IDs 12/13/14/8 são cenas discriminantes (cobertura
 *                       analítica de cursos, ver docs/PERSONAS-IDEAIS.md)
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
      "Ano 2087. A Terra está em colapso e a UFTM está montando a primeira expedição tripulada ao exoplaneta Kepler-186f: 14 meses de viagem, tripulação de 12. Vocês não foram escolhidos por nota — foram escolhidos pelo Protocolo Vocação. Uma luzinha verde flutua até você no hangar; é seu co-piloto de bordo, uma IA que ainda não tem nome (a missão vai batizar ela no fim). Atrás, a Capitã Vidal aparece no holograma. O Protocolo começa agora.",
    falaBixinho: "oi! sou eu, teu co-piloto. vou te acompanhar a missão inteira. ela é sempre dramática assim, relaxa.",
    opcoes: [
      { icon: "thinking", texto: "Anoto tudo, levanto a mão pra perguntar das margens de erro do Protocolo", pontos: [0, 2, 0, 0, 0, 0, 1] },
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
      "Dia 47 da viagem. Um sensor externo detecta uma assinatura de energia que não tá no manual. Não é asteroide. Não é nave. Não é nada que humano já tenha registrado.",
    falaBixinho: "eu fingiria que tô calmo se eu tivesse pulmão.",
    opcoes: [
      { icon: "chart", texto: "Vou pra sala de dados cruzar a assinatura com todos os arquivos da Terra", pontos: [0, 2, 0, 0, 0, 0, 2] },
      { icon: "satellite", texto: "Sugiro mandar um drone pra mais perto antes de qualquer coisa", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { icon: "voice", texto: "Reúno a tripulação — isso precisa de várias cabeças decidindo", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { icon: "shield", texto: "Aviso a Capitã imediatamente e protocolo de segurança", pontos: [1, 0, 0, 0, 2, 0, 0] },
      { icon: "logs", texto: "Escrevo script pra IA de bordo monitorar a anomalia 24/7 e alertar se mudar de padrão", pontos: [0, 0, 0, 1, 0, 0, 3] },
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
      { icon: "tools", texto: "Oficina de adaptação — ajusto pequenas tarefas pra cada um trabalhar sozinho", pontos: [2, 0, 2, 2, 0, 0, 0] },
      { icon: "hug", texto: "Programa inclusivo — todo mundo na rotina, com adaptações pra quem tem necessidade específica", pontos: [2, 0, 1, 2, 2, 0, 0] },
      { icon: "mountain", texto: "Rotina física coletiva — esporte como cuidado e amizade entre a galera", pontos: [2, 0, 1, 1, 2, 1, 0] },
      { icon: "scale", texto: "Carta de direitos da tripulação — formal, com regras justas e canal de denúncia", pontos: [1, 0, 0, 2, 3, 0, 0] },
    ],
  },
  {
    id: 6,
    titulo: "Falha técnica",
    narrativa:
      "03h da manhã. O sistema de oxigênio do dormitório B começou a oscilar 2%. Não é perigoso AINDA. Mas em 6 horas vira.",
    falaBixinho: "se eu morrer aqui eu juro que volto te assombrar via wifi.",
    opcoes: [
      { icon: "tools", texto: "Vou direto pra engenharia, abro o painel e tento diagnosticar", pontos: [0, 0, 3, 0, 0, 0, 0] },
      { icon: "logs", texto: "Pego os logs dos últimos 30 dias pra entender o padrão antes de mexer", pontos: [0, 2, 0, 0, 0, 0, 2] },
      { icon: "alarm", texto: "Acordo a tripulação do dormitório B pra realocar enquanto consertam", pontos: [2, 0, 0, 0, 1, 0, 0] },
      { icon: "wind", texto: "Verifico se as plantas da estufa podem ajudar a estabilizar o O2", pontos: [0, 0, 0, 0, 0, 3, 0] },
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
      { icon: "brain", texto: "Anoto como o impacto emocional mudou minha performance nos turnos", pontos: [0, 2, 0, 0, 1, 0, 1] },
      { icon: "globe", texto: "Reflito sobre o quanto a Terra precisa que essa missão dê certo", pontos: [0, 0, 0, 0, 3, 0, 0] },
      { icon: "chart", texto: "Salvo a mensagem num arquivo encriptado pra reler nos momentos difíceis — meu backup pessoal", pontos: [0, 0, 0, 1, 0, 0, 3] },
    ],
  },
  {
    id: 13,
    titulo: "Sistema da nave",
    narrativa:
      "Os registros do sistema tão maiores do que ele aguenta. Tudo tá ficando lento. Você lidera a reorganização — por onde começa?",
    falaBixinho: "véi, isso aqui sou EU me reorganizando. mete a mão.",
    opcoes: [
      { icon: "logs", texto: "Banco centralizado — tabelas bem organizadas, busca rápida de qualquer info. Foco em organização prática", pontos: [0, 0, 0, 1, 0, 0, 3] },
      { icon: "brain", texto: "IA aplicada — modelo que aprende dos registros, age automático, evolui sozinho", pontos: [0, 2, 2, 0, 2, 0, 2] },
      { icon: "thinking", texto: "Teoria primeiro — provo o problema matematicamente antes de tocar uma linha de código", pontos: [0, 3, 0, 1, 0, 0, 2] },
      { icon: "wrench", texto: "Reconstruo os equipamentos — circuitos novos, máquinas mais rápidas", pontos: [0, 1, 3, 0, 0, 0, 2] },
      { icon: "chart", texto: "Painel pro time — todo mundo enxerga tudo, decisões com base em números", pontos: [0, 1, 1, 1, 1, 0, 2] },
    ],
  },
  {
    id: 8,
    titulo: "Doença misteriosa",
    narrativa:
      "Dia 89 da viagem. Três colegas acordam com os mesmos sintomas — febre baixa, luz forte machucando os olhos, dor espalhada pelo corpo. Ninguém viu nada parecido. Você tá no plantão. Qual sua jogada?",
    falaBixinho: "cara, isso aqui é novela médica espacial. respira.",
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
    falaBixinho: "olha esse planetinha. eu já tô com ciúmes da terra.",
    opcoes: [
      { icon: "mountain", texto: "Perto das montanhas — terreno estável, vista pra tudo", pontos: [0, 1, 2, 0, 0, 0, 0] },
      { icon: "tree", texto: "Perto da floresta densa — onde tem mais vida pra estudar", pontos: [0, 1, 0, 0, 0, 3, 0] },
      { icon: "waves", texto: "Perto do mar — fonte de água e possíveis ecossistemas marinhos", pontos: [0, 2, 0, 0, 0, 2, 0] },
      { icon: "tent", texto: "No vale central — perto de tudo, mais fácil de organizar a base depois", pontos: [0, 0, 2, 0, 1, 0, 0] },
      { icon: "sprout", texto: "Num vale fértil — onde dá pra cultivar comida e começar uma estufa nativa", pontos: [0, 0, 0, 0, 0, 3, 0] },
    ],
  },
  {
    id: 14,
    titulo: "Cultivo planetário",
    narrativa:
      "Mês 1 em Kepler-186f. A equipe decide testar produção de comida no planeta. Você lidera o primeiro experimento. Por onde começa?",
    falaBixinho: "cara, plantas não são minha praia. ajuda.",
    opcoes: [
      { icon: "sprout", texto: "Planto variedades da Terra no solo alienígena — técnica agrícola, acompanho quanto cresce", pontos: [0, 2, 1, 0, 0, 3, 0] },
      { icon: "tent", texto: "Criação animal sustentável — começo pequeno, foco em bem-estar dos animais", pontos: [2, 0, 1, 0, 0, 3, 0] },
      { icon: "lab", texto: "Apenas observação científica — estudo o ambiente antes de qualquer ação", pontos: [0, 3, 0, 1, 0, 1, 0] },
      { icon: "tree", texto: "Sistema fechado — tudo reciclado, quase sem afetar o ambiente", pontos: [0, 1, 3, 0, 2, 1, 0] },
      { icon: "wrench", texto: "Alimentos processados de longa duração — escala industrial, máximo de energia por porção", pontos: [0, 1, 3, 0, 0, 1, 0] },
    ],
  },
  {
    id: 10,
    titulo: "Contato",
    narrativa:
      "Terceira semana no planeta. Vocês encontram algo. Pequenas criaturas bioluminescentes saem das tocas à noite. Curiosas. Não parecem perigosas.",
    falaBixinho: "tipo eu mas em carbono.",
    opcoes: [
      { icon: "camera", texto: "Observo de longe, anoto comportamento, não interfiro", pontos: [0, 3, 0, 0, 0, 1, 0] },
      { icon: "offering", texto: "Tento oferecer algo — gesto de paz interespécie", pontos: [2, 0, 0, 2, 0, 0, 0] },
      { icon: "lab", texto: "Coleto amostras (sem machucar) pra entender a biologia delas", pontos: [0, 2, 0, 0, 0, 2, 0] },
      { icon: "comms", texto: "Mando imagens pra Terra na hora — humanidade inteira precisa ver isso", pontos: [0, 0, 0, 3, 0, 0, 0] },
      { icon: "shield", texto: "Recuo a equipe e estabeleço protocolo de não-contato preventivo", pontos: [1, 0, 0, 0, 2, 0, 0] },
      { icon: "leaf", texto: "Observo o ecossistema que cerca elas — plantas, terreno, ciclos de luz — pra entender a vida que as sustenta", pontos: [0, 1, 0, 0, 0, 3, 0] },
    ],
  },
  {
    id: 11,
    titulo: "Crise final",
    narrativa:
      "Mês 7 no planeta. Tempestade magnética inesperada. Os sistemas de suporte vital estão piscando. Você tem 12 minutos pra decidir o que priorizar.",
    falaBixinho: "tá. agora é sério. confio em você.",
    opcoes: [
      { icon: "stethoscope", texto: "Garanto que a enfermaria fique online — vidas primeiro, dados depois", pontos: [3, 0, 0, 0, 0, 0, 0] },
      { icon: "battery", texto: "Reroteio toda energia pros sistemas críticos, manualmente", pontos: [0, 0, 2, 0, 0, 0, 2] },
      { icon: "dna", texto: "Salvo os dados de pesquisa antes que se percam — justifica a missão", pontos: [0, 3, 0, 0, 0, 0, 0] },
      { icon: "voice", texto: "Coordeno a tripulação inteira, distribuo funções por voz", pontos: [0, 0, 0, 2, 2, 0, 0] },
      { icon: "sprout", texto: "Protejo a estufa — sem ela, ninguém volta pra casa", pontos: [0, 0, 0, 0, 0, 3, 0] },
      { icon: "logs", texto: "Backup centralizado dos bancos de bordo — perder dado de 7 meses é morte civilizacional", pontos: [0, 0, 0, 2, 0, 0, 3] },
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
