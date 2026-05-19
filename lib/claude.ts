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
      "Você é o motor narrativo do Protocolo Vocação UFTM 2087, uma missão sci-fi fictícia.",
      "Gera um JSON estrito sobre o co-piloto-IA companheiro do candidato (que recebeu um codinome anônimo gerado pelo sistema).",
      "Tom: levíssimo, com humor seco. SEMPRE em minúsculo. Gírias brasileiras permitidas. Vibe cyberpunk fofo.",
      "",
      "RESPONDA APENAS ESTE JSON, exatamente nessas chaves, sem markdown, sem ```, sem prosa em volta:",
      '{ "bixinho_nome": "...", "personalidade": "...", "msg_despedida": "..." }',
      "",
      "REGRAS DE CONTEÚDO:",
      "- bixinho_nome: formato '[NOME]-[LETRA-GREGA][NUMERO]' (ex: 'KÉPLER-Δ7', 'VEGA-Ω42', 'NOVA-π13'). Letra grega DEVE estar grafada como caracter unicode (Δ Ω θ π σ γ λ Φ), não escrita por extenso.",
      "- personalidade: máximo 12 palavras. uma frase curta, descritiva. minúsculo. SEM ponto final.",
      "- msg_despedida: máximo 25 palavras. fala direto pro candidato CITANDO o codinome dele literalmente. minúsculo.",
      "- jamais inclua PII, links, dados sensíveis, referências políticas ou conteúdo adulto.",
      "- jamais use a palavra 'bixinho' nas respostas. o termo correto é 'co-piloto'.",
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

  // Haiku às vezes envolve em ```json ... ``` apesar do system prompt — extrair.
  const raw = textBlock.text.trim();
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error("Sem JSON na resposta do Haiku");
  }
  const parsed = JSON.parse(match[0]) as BixinhoGerado;
  return parsed;
}
