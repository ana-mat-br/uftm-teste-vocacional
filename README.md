# 🚀 Protocolo Vocação — UFTM 2087

> Quiz vocacional gamificado em formato de aventura sci-fi, para estudantes do Ensino Médio durante a **Feira de Profissões da UFTM**.

O aluno embarca numa missão interplanetária fictícia ambientada em 2087. Suas decisões revelam, sem ele saber, qual papel ele tem na tripulação — que se traduz em **cursos da UFTM** compatíveis no século XXI. No final, recebe uma **carta-comunicado** com seu resultado + um **co-piloto companheiro** em pixel art, pronta pra compartilhar no Instagram, WhatsApp e X.

🌐 **Em produção:** https://uftm-teste-vocacional.vercel.app
📅 **Feira:** 26/05/2026 (segunda-feira)

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
| [Roteiro](docs/ROTEIRO.md) | As 11 cenas da aventura (1 home + 9 pontuáveis + 1 resultado) |
| [Matriz de Eixos](docs/MATRIZ-EIXOS.md) | 7 eixos de personalidade × 31 cursos UFTM + algoritmo de matching |
| [Design System](docs/DESIGN-SYSTEM.md) | Paleta synthwave, fontes, componentes, formatos de compartilhamento |
| [Stack Técnica](docs/STACK.md) | Next.js 16 + Supabase + Vercel + Claude Haiku — decisões e custos |
| [Pipeline de Arte](docs/PIPELINE-ARTE.md) | 6 sprites pixel art em SVG inline (sem AI generation) |
| [LGPD](docs/LGPD.md) | Privacidade — projeto não coleta PII |
| [Cronograma](docs/CRONOGRAMA.md) | 7 dias até a feira (D1-D7) |

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

Em `/public/sprites/preview.html` você vê os 6 sprites finais lado a lado.

---

## 🛠️ Stack resumida

- **Front + Back:** Next.js 16 (App Router + API Routes)
- **Banco:** Supabase (free tier, novo formato de keys 2025+)
- **Hosting:** Vercel (free tier)
- **LLM:** Claude Haiku 4.5 (gera nome+personalidade+despedida do co-piloto)
- **Arte:** 6 sprites pixel art em SVG inline (16×16 viewBox, escalados com `image-rendering: pixelated`)
- **Compartilhamento:** `html2canvas` pra gerar PNG 9:16 (em D4)

Custo total estimado por aluno: **~R$ 0,007** (só LLM). Infra: **R$ 0** no free tier.
**Sem coleta de dados pessoais** — apenas métricas anônimas agregadas (ver [LGPD.md](docs/LGPD.md)).

---

## 🚦 Status atual

**Mantenedores:** [@ana-mat-br](https://github.com/ana-mat-br) · [@hebert-almeida](https://github.com/hebert-almeida) (UFTM)

### Implementação
| Sprint | Status |
|---|:-:|
| D1 — Setup + sprites + matriz | ✅ |
| D2 — Quiz navegável end-to-end (9 cenas + mock resultado) | ✅ |
| D3 — Endpoint /api/finalizar (Supabase + Claude Haiku + fallback templates) | ✅ |
| D4 — Compartilhamento Stories/WhatsApp/X (html2canvas) | ⏳ |
| D5 — Polish + bugs | ⏳ |
| D6 — Testes com pessoas reais + QR Code físico | ⏳ |
| D7 — FEIRA 🚀 | 26/05 |

### Decisões fechadas ✅
- Narrativa: Expedição UFTM 2087 (sci-fi)
- Visual: Synthwave sunset (neon laranja/rosa/amarelo, grid ciano)
- Tom: leve com humor
- Co-piloto-IA: nome/personalidade gerados por Claude Haiku 4.5 (com fallback de templates)
- 7 eixos × 31 cursos com matriz v0.1
- 11 cenas no total (1 home + 9 pontuáveis + 1 resultado)
- Compartilhamento: Stories (9:16) + WhatsApp + X (Feed 1:1 cortado por prazo)
- **Zero coleta de PII** — codinome gerado pelo sistema (ex: "ESTRELA-7")

---

## 🧪 Desenvolvimento

```bash
git clone https://github.com/ana-mat-br/uftm-teste-vocacional.git
cd uftm-teste-vocacional
npm install
cp .env.local.example .env.local   # preencher com keys reais
npm run dev                         # http://localhost:3000

# Smoke tests:
npx tsx scripts/test-connections.ts  # Supabase + Anthropic
npx tsx scripts/check-sessoes.ts     # lista últimas sessões salvas
```

---

## 📜 Licença

MIT — ver [LICENSE](LICENSE). Sinta-se livre pra adaptar pra outras universidades.
