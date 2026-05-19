# 📅 Cronograma — 3,5 Semanas até a Feira

**Início:** 2026-05-19 (data deste documento)
**Feira de Profissões:** data exata **a definir** (assumimos ~2026-06-15)
**Duração:** 3,5 semanas (~25 dias)

> ⚠️ **Bloqueio crítico:** data exata da feira. Este cronograma assume ~15/06. Ajustar quando confirmar.

---

## Visão Geral

```
SEMANA 1 (19-25/05)  │ Conteúdo + Arte
SEMANA 2 (26/05-01/06)│ Build core do quiz
SEMANA 3 (02-08/06)   │ Compartilhamento + LGPD
SEMANA 3,5 (09-14/06) │ Testes + ajustes + deploy
FEIRA    (15/06)      │ Lançamento 🚀
```

---

## 🗓️ Semana 1 — Conteúdo + Arte

**Dias 1-7 (19-25/05) — Fundação criativa e visual**

| Dia | Entregas |
|---|---|
| Seg 19 | ✅ PRD, roteiro, matriz e design system documentados |
| Ter 20 | Validação da matriz com 1-2 colegas (15min cada) |
| Qua 21 | Gerar sprites brutos no Leonardo.ai (6 corpos-base × 4 imagens) |
| Qui 22 | Downscale + refino dos 6 corpos no Piskel |
| Sex 23 | Criar 3 variações de cor pra cada (= 18 sprites finais) |
| Sáb-Dom 24-25 | **Folga / buffer** (a vida acontece) |

**Marco da semana:**
- 🎯 18 sprites finais em `public/sprites/`
- 🎯 Matriz validada por pelo menos 1 colega

**Riscos:**
- Leonardo.ai pode gerar inconsistentes → considerar fallback: contratar sprite freelance (~R$ 200) se até dia 23 não tiver coesão

---

## 🗓️ Semana 2 — Build Core

**Dias 8-14 (26/05-01/06) — Quiz funcionando end-to-end**

| Dia | Entregas |
|---|---|
| Seg 26 | Setup Next.js + Supabase + repo conectado à Vercel |
| Ter 27 | Schema do banco (respostas, eventos, leads) + RLS |
| Qua 28 | Componente `CenaQuiz.tsx` + roteamento Cena 1 → 12 |
| Qui 29 | Implementar matriz de eixos + cálculo de similaridade cosseno |
| Sex 30 | Tela de resultado (Carta) em React, portando do protótipo HTML |
| Sáb-Dom 31-01 | **Folga / buffer** |

**Marco da semana:**
- 🎯 Quiz end-to-end funcionando (sem LLM ainda, sem share)
- 🎯 Pode passar pelas 12 cenas, ver resultado mockado

---

## 🗓️ Semana 3 — LLM + Compartilhamento + LGPD

**Dias 15-21 (02-08/06)**

| Dia | Entregas |
|---|---|
| Seg 02 | Integração Claude Haiku — prompt + endpoint Server Action |
| Ter 03 | Pipeline html2canvas → PNG 9:16 (Story) e 1:1 (Feed) |
| Qua 04 | Botões de share + Web Share API + fallback download |
| Qui 05 | Tela de consentimento LGPD + política de privacidade publicada |
| Sex 06 | Open Graph image (@vercel/og) pra preview em WhatsApp/X |
| Sáb-Dom 07-08 | **Folga / buffer** |

**Marco da semana:**
- 🎯 Produto completo, end-to-end, com IA e share funcionando
- 🎯 Aprovação LGPD em andamento com Procuradoria

---

## 🗓️ Semana 3,5 — Testes + Polish + Deploy

**Dias 22-25 (09-12/06)**

| Dia | Entregas |
|---|---|
| Seg 09 | Teste com 5-10 estudantes reais (amigos/familiares) |
| Ter 10 | Ajustes pós-teste (UX, copy, bugs) |
| Qua 11 | Performance audit (Lighthouse), otimização de bundle |
| Qui 12 | Deploy de produção + QR Codes impressos pro estande |

**Marco da semana:**
- 🎯 Site em `protocolo.uftm.edu.br` (ou Vercel preview)
- 🎯 QR Code físico impresso em vinil/banner

---

## 🚀 Dia da Feira

**Domingo a definir (~15/06)**

- 🎯 Banner/cartaz no estande UFTM com QR Code grande
- 🎯 Monitorar dashboard de eventos em tempo real
- 🎯 Estar disponível pra hotfix urgente

---

## 📈 Pós-feira (semana 4+)

- Analisar métricas (taxa de conclusão, share, NPS)
- Documentar lições aprendidas
- Considerar v2 / abertura pra outras IFES
- Compartilhar resultados em rede acadêmica

---

## ✂️ Cortes de Escopo (em ordem de prioridade)

Se o cronograma apertar, cortar nesta ordem:

1. **Open Graph image (@vercel/og)** — WhatsApp/X funcionam sem preview rico
2. **Feed 1:1** — Stories é o canal principal
3. **NPS pós-quiz** — pode fazer pesquisa manual depois
4. **Personalidade do bixinho gerada por LLM** — usar templates fixos por curso
5. **Cena 11 (Reflexão)** — quiz pode terminar em 10 cenas

**Não cortar:**
- Pixel art (é a identidade)
- Story 9:16 (é o motor viral)
- Compartilhamento em pelo menos uma rede (WhatsApp)
- LGPD (é obrigação legal)

---

## 🚨 Bloqueios a destravar AGORA

1. **Data exata da feira** — ajusta todo o cronograma
2. **Email DPO/Procuradoria UFTM** — pra iniciar consulta jurídica em paralelo
3. **Aprovação pra usar @uftm.oficial** ou similar no rodapé do story

---

## 📊 Risk burndown

| Semana | Risco residual | Confiança no prazo |
|---|---|---|
| Início | 🔴 Alto | 60% |
| Fim S1 | 🟡 Médio | 75% |
| Fim S2 | 🟢 Baixo | 90% |
| Fim S3 | 🟢 Baixo | 95% |
| Pré-deploy | 🟢 Mínimo | 98% |
