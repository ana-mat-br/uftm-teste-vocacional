/**
 * Tipos e helpers de persistência da sessão de quiz no localStorage.
 * Sessão é 100% client-side até o /resultado, quando envia pro servidor.
 */

import type { VetorEixos } from "./matching";

export const STORAGE_KEY = "uftm-protocolo-vocacao";

export type Resposta = {
  cena: number;
  opcao: number;     // índice da opção escolhida (0..N)
};

export type Sessao = {
  codinome: string;
  iniciadoEm: number; // Date.now()
  vetor: VetorEixos;
  respostas: Resposta[];
  finalizado: boolean;
  /** Verdadeiro se o aluno já passou pela cena de desempate (ou se não precisou). */
  desempateAplicado?: boolean;
};

export function vetorZerado(): VetorEixos {
  return [0, 0, 0, 0, 0, 0];
}

export function carregarSessao(): Sessao | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Sessao;
  } catch {
    return null;
  }
}

export function salvarSessao(s: Sessao): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

export function limparSessao(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function somarVetores(a: VetorEixos, b: VetorEixos): VetorEixos {
  return [
    a[0] + b[0],
    a[1] + b[1],
    a[2] + b[2],
    a[3] + b[3],
    a[4] + b[4],
    a[5] + b[5],
  ];
}
