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

export type BixinhoGerado = {
  bixinho_nome: string;
  personalidade: string;
  msg_despedida: string;
};

export async function gerarBixinho(input: {
  codinome: string;
  vetor: VetorEixos;
  cursoTop: string;
  eixoDominante: EixoSigla;
}): Promise<BixinhoGerado> {
  const c = getClient();

  const resp = await c.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 300,
    temperature: 0.9,
    system: [
      "Você é o motor narrativo do Protocolo Vocação UFTM 2087.",
      "Gera um JSON com nome+personalidade+despedida de um 'bixinho-IA' companheiro do candidato.",
      "Tom: levíssimo, com humor seco. Sempre em minúsculo. Gírias permitidas. Cyberpunk fofo.",
      "REGRAS RÍGIDAS:",
      "- nome do bixinho: formato 'KÉPLER-Δ{NUM}' ou 'VEGA-Ω{NUM}' ou similar (letra grega + número 1-99)",
      "- personalidade: máximo 12 palavras. uma frase curta, descritiva, em minúsculo. SEM ponto final.",
      "- msg_despedida: máximo 25 palavras. fala direto pro codinome do candidato. tem que mencionar o codinome.",
      "- jamais inclua PII, links, dados sensíveis ou referências políticas.",
      "- responda APENAS o JSON, sem markdown, sem prosa em volta.",
    ].join("\n"),
    messages: [
      {
        role: "user",
        content: JSON.stringify({
          codinome: input.codinome,
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

  const parsed = JSON.parse(textBlock.text) as BixinhoGerado;
  return parsed;
}
