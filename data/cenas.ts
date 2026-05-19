/**
 * Estrutura das cenas do quiz. Ver docs/ROTEIRO.md para a versão narrativa completa.
 *
 * Cada cena tem N opções e cada opção pontua 1-3 eixos.
 * O vetor de pontuação tem ordem fixa: [CUI, INV, CON, COM, TRA, CUL]
 */

import type { VetorEixos } from "@/lib/matching";

export type Opcao = {
  emoji: string;
  texto: string;
  pontos: VetorEixos;
  falaBixinho?: string;
};

export type Cena = {
  id: number;
  titulo: string;
  narrativa: string;
  falaBixinho?: string;
  opcoes: Opcao[];
};

// TODO D2/D3: completar com todas as cenas do ROTEIRO.md.
// Por ora deixo a cena 2 como exemplo do schema.
export const CENAS: Cena[] = [
  // Cena 1 (Embarque) é tratada como "/" — sem pontuação, gera codinome.
  // Cenas 2-11 abaixo.
  {
    id: 2,
    titulo: "Briefing",
    narrativa: "A Capitã Vidal aparece no holograma. Atrás dela, a Terra parece um abacaxi maduro demais. Ela explica a missão: 14 meses até Kepler-186f, tripulação de 12. Vocês não foram escolhidos por nota. Foram escolhidos pelo Protocolo Vocação. E ele começa agora.",
    falaBixinho: "ela é sempre dramática assim. relaxa.",
    opcoes: [
      { emoji: "🤔", texto: "Anoto tudo, levanto a mão pra perguntar das margens de erro do Protocolo", pontos: [0, 2, 1, 0, 0, 0] },
      { emoji: "😅", texto: "Olho pros outros candidatos pra ver se alguém também tá perdido", pontos: [1, 0, 0, 2, 0, 0] },
      { emoji: "🔥", texto: "Já tô empolgado, quero saber quando começa pra valer", pontos: [0, 0, 1, 0, 2, 0] },
      { emoji: "🌱", texto: "Pergunto se a gente vai poder levar plantas pra estufa da nave", pontos: [0, 0, 0, 0, 0, 3] },
    ],
  },
  // TODO: cenas 3-11 entram aqui no D2 quando estruturar.
];
