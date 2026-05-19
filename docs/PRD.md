# PRD — Protocolo Vocação UFTM 2087

**Versão:** 2.0
**Data:** 2026-05-19
**Autora:** Ana Paula Fernandes (UFTM)
**Status:** Design fechado, implementação em 7 dias (feira em 2026-05-26)

---

## 1. Problema & Oportunidade

Estudantes do Ensino Médio que visitam a Feira de Profissões da UFTM enfrentam três problemas simultâneos:

1. **Paradoxo da escolha** — ~30 cursos de graduação em poucas horas
2. **Informação repetitiva** — cada estande explica seu curso, mas o aluno raramente compara
3. **Quizzes vocacionais tradicionais falham** — perguntas diretas ("você gosta de exatas?") são facilmente "trapaceadas", o aluno responde o que acha que *deveria* querer ser

**Oportunidade:** transformar a visita à feira em uma experiência narrativa memorável e compartilhável, que:
- reduz o paradoxo da escolha apresentando 3 cursos compatíveis (não 30)
- entrega um artefato visual único (bixinho + carta) que o aluno quer postar
- gera marketing orgânico para a UFTM via redes sociais
- aproxima a UFTM da Gen Z com linguagem e estética próprias

---

## 2. Público-alvo

| Camada | Quem | Tamanho estimado |
|---|---|---|
| **Primário** | Estudantes 2º/3º ano EM, 16–18 anos, visitando a feira presencialmente | Centenas a milhares na feira |
| **Secundário** | Rede social desses estudantes (amigos, colegas, família) | Milhares por compartilhamento |
| **Terciário** | UFTM como instituição (marketing/captação) | Indireto, mas estratégico |

**Persona principal:** "Júlia, 17 anos, 3º ano. Tem o vestibular daqui 8 meses. Não sabe se quer Medicina (pressão familiar) ou Psicologia (paixão própria). Vai à feira meio perdida, com o celular na mão e Instagram aberto."

---

## 3. Objetivos e Métricas

### OKRs do MVP

| Objetivo | KR / Métrica | Meta MVP |
|---|---|---|
| Engajar visitantes | Taxa de conclusão do quiz | ≥ 70% |
| Viralizar | % de concluintes que clica em "compartilhar" | ≥ 30% |
| Cobrir cursos | Cursos representados nos resultados (no mín. uma vez) | 100% dos 31 |
| Aproximar UFTM | Total de quizzes finalizados no dia | ≥ 100 |

### Métricas operacionais
- Tempo médio de conclusão: **4–6 minutos**
- Taxa de erro técnico: **< 1%**
- Tempo de carregamento inicial: **< 2s no 3G**

---

## 4. Conceito do Produto

### Narrativa
"**Expedição UFTM 2087**" — Ano 2087, a UFTM virou centro de pesquisa interplanetário e está montando a primeira missão tripulada ao exoplaneta Kepler-186f. O aluno é candidato e suas decisões durante uma jornada narrativa de **11 cenas** (1 home + 9 pontuáveis + 1 resultado) revelam qual papel ele tem na tripulação.

### Resultado
1. **Papel na missão** (ex: "Oficial Médica de Bordo")
2. **Curso correspondente no século XXI** (ex: Medicina)
3. **Top 2 cursos alternativos** (ex: Psicologia, Enfermagem)
4. **Bixinho-IA companheiro** (sprite pixel art + nome + personalidade gerados por LLM)
5. **Carta-comunicado** com tudo isso, compartilhável

### Conceito-chave
A pontuação dos eixos de personalidade é **invisível** ao aluno. Ele não sabe que está sendo medido — ele está tomando decisões numa história. Isso elimina o viés de "responder o esperado".

> Detalhes em [ROTEIRO.md](ROTEIRO.md) e [MATRIZ-EIXOS.md](MATRIZ-EIXOS.md).

---

## 5. Escopo do MVP

### IN — entra no MVP
- ✅ Web app mobile-first, acesso via QR Code
- ✅ 11 cenas no total (1 home + 9 pontuáveis + 1 resultado)
- ✅ Algoritmo de matching: respostas → 6 eixos → top 3 cursos (similaridade cosseno)
- ✅ Carta final estilo "Comunicado da Comissão Interestelar"
- ✅ Bixinho pixel art (6 sprites SVG inline, 1 por eixo) + nome/personalidade gerados por Claude Haiku
- ✅ Codinome gerado pelo sistema (ex: "ESTRELA-7") — sem pedir nada do aluno
- ✅ Geração de imagem 9:16 (Stories) via html2canvas — **D4**
- ✅ Compartilhamento: Instagram Stories, WhatsApp, X — **D4**
- ✅ Métricas anônimas agregadas (tabela sessoes no Supabase)

### OUT — fica pra v2 ou foi cortado
- ❌ Coleta de qualquer dado pessoal (nome real, @instagram, cidade, escola, email)
- ❌ Cena de "Reflexão" (tie-breaker) — cortada por prazo
- ❌ Feed Instagram 1:1 — cortado por prazo, só Stories
- ❌ Variações de cor dos sprites (só 6 sprites base)
- ❌ Open Graph image dinâmica (PNG estática)
- ❌ Validação externa da matriz com colegas (Ana valida sozinha)
- ❌ Subdomínio próprio uftm.edu.br (uso `*.vercel.app`)
- ❌ Geração de imagem por IA em tempo real
- ❌ Conta persistente / login
- ❌ Versão multi-vestibular / multi-instituição
- ❌ Múltiplos idiomas
- ❌ App nativo iOS/Android
- ❌ Modo offline

---

## 6. Restrições do Projeto

| Restrição | Implicação |
|---|---|
| **Prazo:** 7 dias a partir de 2026-05-19 (feira em 26/05) | Cortes agressivos, ver [CRONOGRAMA.md](CRONOGRAMA.md) |
| **Orçamento:** R$ 0 | Stack 100% free tier |
| **Equipe:** 1 pessoa (Ana, voluntária) | Cortar tudo que não for crítico |
| **UFTM já está ciente** | Sem barreira institucional, mas comunicar status à PROEXT antes do lançamento |
| **Mobile-first via QR Code** | Web app responsivo, < 500kb JS |
| **Wifi/4G ruim na feira** | App leve, tolerante a 3G |
| **Sem coleta de PII** | Sem LGPD complexa. Apenas dados anônimos agregados. Ver [LGPD.md](LGPD.md) |

---

## 7. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|---|:-:|:-:|---|
| Wifi/4G fraco na feira | 🔴 Alta | 🔴 Alto | Bundle JS < 500kb, sprites em PNG otimizado, sem vídeos |
| ~~Coleta de dados de menor + LGPD~~ | — | — | **Mitigado:** decisão de não coletar PII (ver [LGPD.md](LGPD.md)) |
| LLM gera carta inadequada | 🟡 Média | 🔴 Alto | Prompt restrito + fallback de templates fixos se Haiku falhar |
| Quiz "errar" o curso e frustrar | 🟡 Média | 🟡 Médio | Sempre top 3, framing "explore também" — não "você é isso" |
| Ana sozinha não dar conta em 7 dias | 🔴 Alta | 🔴 Alto | Cortes agressivos (ver CRONOGRAMA.md), dia 25 como buffer |
| Pico de tráfego na feira sobrecarrega Supabase free tier | 🟡 Média | 🟡 Médio | Free tier aguenta 500 connections; pior caso pago US$25/mês ad-hoc |
| Estudantes não escanearem o QR | 🟡 Média | 🟡 Médio | Banner físico chamativo + estande UFTM "te ajudo a escanear" |
| Resultado parece raso/genérico | 🟡 Média | 🟡 Médio | LLM personaliza a carta com base nas escolhas, não só no curso final |
| 31 cursos = muitas combinações | 🟢 Baixa | 🟡 Médio | Sistema de similaridade vetorial, não árvore de decisão |

---

## 8. Métricas de Sucesso pós-feira

Análise direto no Supabase (queries SQL em [STACK.md](STACK.md)):
- Total e taxa de conclusão dos quizzes
- Top 10 cursos resultantes (qual curso "ganhou" mais)
- Distribuição dos 6 eixos na população de alunos
- Tempo médio de conclusão
- Cliques em compartilhar por rede
- Cena com maior abandono

Indireto:
- Posts no Instagram com #ProtocoloVocacaoUFTM (busca manual)
- Menções da UFTM no Twitter/X (busca manual)

---

## 9. Status da implementação

Ver [CRONOGRAMA.md](CRONOGRAMA.md) para o plano dia-a-dia.

**D1–D3 fechados:**
- ✅ D1: setup Next.js + Supabase + Anthropic + Vercel + 6 sprites SVG
- ✅ D2: quiz navegável end-to-end com state em localStorage
- ✅ D3: endpoint `/api/finalizar` integrando Claude Haiku + fallback templates + salvamento Supabase anônimo

**D4–D6 a fazer:**
- ⏳ D4: compartilhamento (html2canvas → PNG 9:16, WhatsApp/X intents)
- ⏳ D5: polish visual + testes em iOS/Android
- ⏳ D6: testes com pessoas reais + QR Code físico
- 🚀 D7 (26/05): feira
