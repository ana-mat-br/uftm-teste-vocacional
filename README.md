# 🚀 Protocolo Vocação — UFTM 2087

> Quiz vocacional gamificado em formato de aventura sci-fi, para estudantes do Ensino Médio durante a **Feira de Profissões da UFTM**.

O aluno embarca numa missão interplanetária fictícia ambientada em 2087. Suas decisões revelam, sem ele saber, qual papel ele tem na tripulação — que se traduz em **cursos da UFTM** compatíveis no século XXI. No final, recebe uma **carta-comunicado** com seu resultado + um **bixinho-IA companheiro** em pixel art, pronta pra compartilhar no Instagram, WhatsApp e X.

---

## ✨ Conceito em uma frase

> Em vez de perguntar "você gosta de exatas?", a gente faz o adolescente *vivenciar* uma viagem espacial e deduz o curso pela forma como ele decide.

## 🎯 Por que isso existe

Estudantes que visitam a Feira de Profissões da UFTM enfrentam ~30 cursos com pouco tempo e informação repetitiva nos estandes. Quizzes vocacionais tradicionais são chatos e fáceis de "trapacear" (o aluno responde o que acha que *deve* querer). A narrativa imersiva resolve isso e ainda gera marketing orgânico via redes sociais.

---

## 📚 Documentação

Toda a proposta está em `/docs`:

| Doc | O quê |
|---|---|
| [PRD](docs/PRD.md) | Problema, público, métricas, escopo MVP, riscos |
| [Roteiro](docs/ROTEIRO.md) | As 12 cenas da aventura com pontuação por eixo |
| [Matriz de Eixos](docs/MATRIZ-EIXOS.md) | 6 eixos de personalidade × 31 cursos UFTM + algoritmo de matching |
| [Design System](docs/DESIGN-SYSTEM.md) | Paleta synthwave, fontes, componentes, formatos de compartilhamento |
| [Stack Técnica](docs/STACK.md) | Next.js + Supabase + Vercel + Claude Haiku — decisões e custos |
| [Pipeline de Arte](docs/PIPELINE-ARTE.md) | Produção dos sprites pixel art (Leonardo.ai + Piskel) |
| [LGPD](docs/LGPD.md) | Privacidade, consentimento, menor de idade |
| [Cronograma](docs/CRONOGRAMA.md) | 3,5 semanas até a feira, divididas em sprints |

---

## 🎨 Protótipos visuais

Em `/prototipos`:

| Arquivo | O quê |
|---|---|
| `carta-prototipo-b-synthwave.html` | **Tela final do resultado** (escolhida) — synthwave sunset |
| `story-instagram.html` | **Imagem 9:16 pro Stories do Instagram** |
| `carta-prototipo.html` | Variação A — cyberpunk hacker (descartada) |
| `carta-prototipo-c-kawaii.html` | Variação C — cyber-kawaii pastel (descartada) |

Abra qualquer um no navegador. No DevTools (F12), ative o modo mobile pra ver na proporção real.

---

## 🛠️ Stack resumida

- **Front + Back:** Next.js 14 (App Router + Server Actions)
- **Banco:** Supabase (free tier)
- **Hosting:** Vercel (free tier)
- **LLM:** Claude Haiku 4.5 (carta + nome/personalidade do bixinho)
- **Arte:** Pixel art (Leonardo.ai + Piskel — 100% grátis)
- **Compartilhamento:** `html2canvas` pra gerar PNG 9:16 e 1:1

Custo total estimado por aluno: **~R$ 0,007** (só LLM). Infra: **R$ 0** no free tier.
**Sem coleta de dados pessoais** — apenas métricas anônimas agregadas (ver [LGPD.md](docs/LGPD.md)).

---

## 🚦 Status

**Fase atual:** Documentação concluída, **implementação em 7 dias**
**Feira:** **2026-05-26** (segunda-feira)
**Mantenedora:** [@ana-mat-br](https://github.com/ana-mat-br) (UFTM)

### Decisões fechadas ✅
- Narrativa: Expedição UFTM 2087 (sci-fi)
- Visual: Synthwave sunset (neon laranja/rosa/amarelo, grid ciano)
- Tom: leve com humor
- Bixinho-IA: nome/personalidade geradas por Claude Haiku 4.5
- 6 eixos × 31 cursos com matriz validada na v0.1
- 11 cenas de roteiro escritas
- Compartilhamento: Stories (9:16) + WhatsApp + X
- **Zero coleta de PII** — codinome gerado pelo sistema (ex: "ESTRELA-7")
- Stack: Next.js + Supabase + Vercel + Claude Haiku
- Cronograma D1–D7 fechado

### Próxima ação 🚀
Começar **D1**: setup do Next.js + gerar 6 sprites brutos no Leonardo.ai.

---

## 📜 Licença

MIT — ver [LICENSE](LICENSE). Sinta-se livre pra adaptar pra outras universidades.
