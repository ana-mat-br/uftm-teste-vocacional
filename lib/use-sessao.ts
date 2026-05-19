"use client";

import { useCallback, useEffect, useState } from "react";
import { gerarCodinome } from "./codinome";
import type { VetorEixos } from "./matching";
import {
  carregarSessao,
  salvarSessao,
  limparSessao,
  somarVetores,
  vetorZerado,
  type Resposta,
  type Sessao,
} from "./sessao";

/** Hook React que centraliza acesso à sessão do quiz. Persistida em localStorage. */
export function useSessao() {
  const [sessao, setSessao] = useState<Sessao | null>(null);
  const [carregando, setCarregando] = useState(true);

  // Carrega do localStorage no mount
  useEffect(() => {
    setSessao(carregarSessao());
    setCarregando(false);
  }, []);

  /** Inicia nova sessão (gera codinome) e retorna ela. */
  const iniciar = useCallback((): Sessao => {
    const nova: Sessao = {
      codinome: gerarCodinome(),
      iniciadoEm: Date.now(),
      vetor: vetorZerado(),
      respostas: [],
      finalizado: false,
    };
    salvarSessao(nova);
    setSessao(nova);
    return nova;
  }, []);

  /** Registra escolha do aluno: soma o vetor de pontos e guarda a resposta. */
  const responder = useCallback(
    (cenaId: number, opcaoIndex: number, pontos: VetorEixos) => {
      setSessao((atual) => {
        if (!atual) return atual;
        const respostaExistente = atual.respostas.find((r) => r.cena === cenaId);
        if (respostaExistente) {
          // já respondeu essa cena — não dupla-pontua se voltar e clicar de novo
          return atual;
        }
        const proxima: Sessao = {
          ...atual,
          vetor: somarVetores(atual.vetor, pontos),
          respostas: [...atual.respostas, { cena: cenaId, opcao: opcaoIndex }],
        };
        salvarSessao(proxima);
        return proxima;
      });
    },
    [],
  );

  /** Marca como finalizado. Chamar depois de receber resultado do server. */
  const finalizar = useCallback(() => {
    setSessao((atual) => {
      if (!atual) return atual;
      const proxima = { ...atual, finalizado: true };
      salvarSessao(proxima);
      return proxima;
    });
  }, []);

  /** Apaga tudo. Útil pra começar de novo. */
  const reset = useCallback(() => {
    limparSessao();
    setSessao(null);
  }, []);

  return {
    sessao,
    carregando,
    iniciar,
    responder,
    finalizar,
    reset,
  };
}

export type { Sessao, Resposta };
