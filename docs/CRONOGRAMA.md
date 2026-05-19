# 📅 Cronograma — 7 Dias até a Feira

**Início:** 2026-05-19
**Feira de Profissões:** **2026-05-26** (segunda-feira)
**Duração:** 7 dias corridos
**Disponibilidade da Ana:** 4+ horas focadas/dia, incluindo fim de semana

> ⚠️ Cronograma agressivo. Cabe porque cortamos LGPD (sem PII), Feed 1:1, Cena 11, validação externa da matriz e polish visual.

---

## Visão Geral

```
D1 ter 19/05  │ Setup + sprites brutos
D2 qua 20/05  │ Refino sprites + roteiro em JSON
D3 qui 21/05  │ Build do quiz (cenas + navegação)
D4 sex 22/05  │ Matriz + resultado + LLM Haiku
D5 sáb 23/05  │ Compartilhamento + deploy
D6 dom 24/05  │ Testes com pessoas reais + bugs
D7 seg 26/05  │ FEIRA 🚀 (estamos pulando dom 25 pra descanso)
```

> **Nota:** o dia 25 (dom) fica como buffer/descanso. Se algo derrapar em D1-D6, o dia 25 absorve.

---

## D1 — Terça 19/05 (HOJE) 🌅

**Foco:** setup técnico + começar gerar sprites

### Manhã/Tarde
- ✅ Documentação completa em `/docs` (feita!)
- ✅ Repo no GitHub (feito!)

### Noite (3-4h)
- [ ] `npx create-next-app uftm-teste-vocacional --typescript --tailwind --app`
- [ ] Setup Supabase (criar projeto, copiar URLs/keys)
- [ ] Setup conta Anthropic API + pegar key
- [ ] Adicionar `.env.local` com chaves (NÃO commitar)
- [ ] Gerar 6 sprites brutos no Leonardo.ai (1 por eixo)
- [ ] Deploy inicial na Vercel (página em branco)

**Entrega:** projeto Next.js no ar (mesmo vazio), 6 PNGs brutos baixados.

---

## D2 — Quarta 20/05

**Foco:** refino dos sprites + estruturação dos dados

### 4h focadas
- [ ] Downscale dos 6 sprites no Piskel (32×32)
- [ ] Refinar paleta synthwave em cada um
- [ ] Comprimir com TinyPNG e salvar em `public/sprites/`
- [ ] Criar `data/cenas.ts` — todas as 11 cenas em JSON estruturado
- [ ] Criar `data/cursos.ts` — vetor de cada um dos 31 cursos (da matriz)
- [ ] Criar `data/codinomes.ts` — lista de prefixos astronômicos
- [ ] Criar `lib/matching.ts` — função similaridade cosseno
- [ ] Schema do Supabase: tabelas `sessoes` e `eventos`

**Entrega:** dados estruturados + sprites prontos + DB criado.

---

## D3 — Quinta 21/05

**Foco:** quiz funcional end-to-end (sem resultado bonito ainda)

### 4h focadas
- [ ] Componente `CenaQuiz.tsx` (header, narrativa, opções, click handler)
- [ ] Roteamento `/cena/[id]` com Next.js dynamic route
- [ ] Estado global (vetor acumulado + respostas) via `useReducer` + localStorage
- [ ] Tela inicial `/` (apresentação + botão "embarcar")
- [ ] Geração de codinome aleatório na Cena 1
- [ ] Navegação entre cenas (botão "próxima")
- [ ] Pode "passar" pelas 11 cenas e ver vetor calculado no console

**Entrega:** quiz navegável end-to-end, vetor calculado.

---

## D4 — Sexta 22/05

**Foco:** matriz, tela de resultado, LLM

### 4h focadas
- [ ] Função `topCursos(vetor)` retornando top 3 (similaridade cosseno)
- [ ] Componente `CartaResultado.tsx` portando do protótipo HTML
- [ ] Adaptar paleta synthwave do protótipo pro componente React
- [ ] Endpoint `app/api/finalizar/route.ts`:
  - Recebe vetor + respostas
  - Calcula top 3 cursos
  - Chama Claude Haiku pra gerar `{nome_bixinho, personalidade, msg_despedida}`
  - Salva tudo no Supabase (`sessoes`)
  - Retorna resultado completo pra UI
- [ ] Tela `/resultado` consome o endpoint
- [ ] Prompt do Haiku travado (system prompt restrito)

**Entrega:** fluxo completo do início ao resultado, com LLM gerando a carta.

---

## D5 — Sábado 23/05

**Foco:** compartilhamento + deploy de produção

### 4h focadas
- [ ] Instalar `html2canvas`
- [ ] Componente oculto `StoryTemplate.tsx` (renderiza 9:16 fora da tela)
- [ ] Botão "Compartilhar no Stories" → captura PNG → Web Share API ou download
- [ ] Botão WhatsApp com texto pronto + link
- [ ] Botão X (Twitter) com texto pronto
- [ ] OG image estática em `public/og-image.png`
- [ ] Política de privacidade super curta (1 parágrafo: "este projeto não coleta dados pessoais")
- [ ] Subdomínio Vercel `protocolo-vocacao-uftm.vercel.app`
- [ ] Configurar Vercel Analytics

**Entrega:** site em produção, share funcionando.

---

## D6 — Domingo 24/05

**Foco:** testes + ajustes finais + QR Code

### 4h focadas
- [ ] Testar com 3-5 pessoas reais (família, amigos, vizinhos)
- [ ] Listar bugs e UX issues
- [ ] Corrigir prioridade 1
- [ ] Smoke test em iOS Safari + Chrome Android + desktop
- [ ] Lighthouse audit mobile (alvo: ≥ 80)
- [ ] Gerar QR Code da URL (qrcode-monkey.com ou similar)
- [ ] Imprimir cartaz/banner pro estande (caseiro mesmo, pode usar Canva)
- [ ] Preparar texto de divulgação pras redes UFTM (se aplicável)

**Entrega:** produto polido o suficiente, QR físico em mãos.

---

## D7 — Segunda 26/05 — 🚀 FEIRA

**Foco:** estar disponível + observar

- Chegar cedo na feira, escanear o próprio QR pra confirmar que tá no ar
- Monitorar dashboard Supabase em tempo real (logado no laptop)
- Estar disponível pra hotfix urgente (mesmo q seja "cor X tá ruim")
- Anotar feedback informal dos alunos
- **Não tentar adicionar features no dia** — só corrigir bugs

---

## ✂️ Escopo Cortado (vs MVP original)

| Cortado | Motivo |
|---|---|
| ~~Coleta de nome/cidade/escola/IG do aluno~~ | LGPD: muito risco em 7 dias |
| ~~Tela de consentimento LGPD~~ | Não precisa sem PII |
| ~~Política de privacidade extensa~~ | 1 parágrafo basta |
| ~~Feed Instagram 1:1~~ | Stories é o motor viral, basta |
| ~~OG image dinâmica via @vercel/og~~ | PNG estático funciona |
| ~~Cena 11 (Reflexão)~~ | Quiz vai pra 11 cenas (1 onboard + 10 pontuáveis + resultado) |
| ~~18 sprites (com variações de cor)~~ | 6 sprites, 1 por eixo dominante |
| ~~Validação externa da matriz~~ | Ana valida sozinha |
| ~~Consulta formal à Procuradoria UFTM~~ | Não precisa sem PII |
| ~~Subdomínio uftm.edu.br~~ | Usar `*.vercel.app` direto |
| ~~Animações elaboradas~~ | CSS simples basta |

---

## 🚨 O que NÃO pode acontecer

1. **Mudar narrativa, paleta ou roteiro** — estão fechados
2. **Adicionar features novas** — qualquer "seria legal" vai pra v2
3. **Mudar de stack** — Next.js + Supabase + Haiku, decidido
4. **Refazer sprites do zero** — se o primeiro lote ficou ok, segue
5. **Esperar feedback externo pra avançar** — execução é unilateral

---

## 📊 Risk burndown

| Dia | Risco residual | Confiança no prazo |
|---|---|---|
| D1 fim | 🔴 Alto | 60% |
| D2 fim | 🟡 Médio | 70% |
| D3 fim | 🟡 Médio | 80% |
| D4 fim | 🟢 Baixo | 90% |
| D5 fim | 🟢 Baixo | 95% |
| D6 fim | 🟢 Mínimo | 98% |

---

## 🔥 Plano de contingência

**Se em D3 noite o quiz ainda não navega end-to-end:**
- Cortar pra 8 cenas em vez de 11
- Usar apenas 4 sprites (não 6)

**Se em D4 noite a integração com Haiku não funcionar:**
- Cortar LLM, usar 12 templates pré-escritos (1 por curso âncora + variações)
- Co-piloto ainda tem nome único via combinação `[PREFIXO]-[NÚMERO]` aleatórios
- Mensagem de despedida fixa por eixo dominante

**Se em D5 noite o share via html2canvas der problema:**
- Cortar Story 9:16
- Manter só link compartilhável (WhatsApp/X com texto pronto)

**Se em D6 algo crítico quebrar:**
- Domingo 25 vira dia de trabalho
- Cortar features menores até voltar a funcionar

---

## ✅ Definition of Done — Dia da Feira

Produto está pronto se:
- [ ] Aluno escaneia QR e abre o site no celular
- [ ] Passa pelas 11 cenas sem bugs
- [ ] Vê resultado com co-piloto + curso + texto gerado
- [ ] Consegue compartilhar em pelo menos UMA rede (WhatsApp mínimo)
- [ ] Funciona em iOS Safari + Chrome Android
- [ ] Carrega em < 5s no 4G
- [ ] Supabase está gravando as sessões
