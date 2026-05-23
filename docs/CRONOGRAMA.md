# 📅 Cronograma — 7 Dias até a Feira

**Início:** 2026-05-19
**Feira de Profissões:** **2026-05-26** (segunda-feira)
**Duração:** 7 dias corridos
**Disponibilidade da Ana:** 4+ horas focadas/dia, incluindo fim de semana

> 🚀 **Update 2026-05-19 (noite):** D1 absorveu D1-D4 do plano original. Scaffolding, quiz end-to-end, Supabase, Haiku, 7 eixos, desempate e Phase A (vaporwave) já no ar. O cronograma foi reorientado para o **Immersion Upgrade** (ver [IMPLEMENTATION-MAP.md](IMPLEMENTATION-MAP.md), fases A-G).

---

## Visão Geral

```
D1 ter 19/05  │ ✅ Scaffolding + quiz E2E + Supabase + Haiku + Phase A (vapor)
D2 qua 20/05  │ ✅ Phase B (Hero) + Phase C (Star Fox narrator)
D3 qui 21/05  │ ✅ Phase D (Wrapped result, 5 cenas paced) + StarField canvas
D4 sex 22/05  │ ✅ Phase E (Share card 9:16) + Phase F (Stats + Galeria)
D5 sáb 23/05  │ Phase G (Audio) + deploy de produção
D6 dom 24/05  │ Testes com pessoas reais + bugs + QR Code
D7 seg 26/05  │ FEIRA 🚀 (estamos pulando dom 25 pra descanso)
```

> **Nota:** o dia 25 (dom) fica como buffer/descanso. Se algo derrapar em D1-D6, o dia 25 absorve.

---

## D1 — Terça 19/05 ✅ CONCLUÍDO

**Foco original:** setup + sprites brutos. **Real:** D1-D4 inteiro num dia só.

### Entregue hoje (13 commits)
- ✅ Documentação completa em `/docs`
- ✅ Repo no GitHub + branch `hdev`
- ✅ Scaffolding Next.js 16 + TS + Tailwind (`71879d6`)
- ✅ 6 sprites **SVG** synthwave (cortou Leonardo.ai, ficou inline `e367ef9`)
- ✅ Quiz end-to-end navegável, cenas 2-10 + resultado mock (`1793377`)
- ✅ Integração Supabase + Claude Haiku no `/api/finalizar` (`89948f3`)
- ✅ Cena 5.5 de desempate quando top1/top2 < 5% (`0a1ee53`)
- ✅ **7 eixos** (não 6) com TEC + confidence + feedback (`1cd1772`)
- ✅ Rename `bixinho-IA` → `copiloto` em todo lugar (`7c76d87`, `1d666f3`)
- ✅ Matriz-eixos v0.2 documentada (`21d5acc`)
- ✅ **Phase A (Vaporwave foundation):** GSAP, palette, `VaporwaveBg`, `MuteToggle`, `lib/motion.ts`, `lib/audio.ts` (stub)
- ✅ `IMPLEMENTATION-MAP.md` — plano de imersão A→G

**Saldo:** quiz funcional + visual vaporwave base. Resto do cronograma = polish de imersão.

---

## D2 — Quarta 20/05 — Phase B + C ✅ CONCLUÍDO

**Foco:** primeira impressão e narrador Star Fox.

### Phase B — Hero page
- [x] `components/Hero.tsx` novo (timeline GSAP: type-in letra-a-letra, CTA ramp, glow loop)
- [x] `app/page.tsx` vira hero puro
- [x] Briefing original migra pra cena 2 (`data/cenas.ts`)
- [x] `BotaoEmbarcar` ganha animação de entrada (glow loop via matchMedia)

### Phase C — Star Fox narrator
- [x] `components/NarratorBox.tsx` com portrait + typewriter + beep
- [x] Estender `lib/audio.ts` com blips (square wave, pitch jitter ±50Hz, ADSR curto)
- [x] Substituir bloco `falaBixinho` em `CenaQuiz`, `Desempate`, `Resultado`
- [x] Tap-to-skip + reduced-motion + mute global respeitados

**Entrega:** hero distinto + narrador presente em todas as cenas-chave. `/`, `/cena/2`, `/desempate` 200, type-check limpo.

---

## D3 — Quinta 21/05 — Phase D ✅ CONCLUÍDO

**Foco:** Wrapped-style result (5 cenas paced) + StarField interativo.

### Phase D — Wrapped sequence
- [x] `components/WrappedScene.tsx` (primitiva — fade-in GSAP por cena ativa, reduced-motion bypass)
- [x] `components/PetHeroScene.tsx` (sprite scale+rotate-in, float loop, nome + caption)
- [x] `components/WrappedSequence.tsx` (orchestrator com auto-advance 6s, pause toggle, progress dots, tap/swipe/teclado)
- [x] `components/Resultado.tsx` refatorado em orchestrator de loading/erro/sucesso
- [x] 5 cenas: 01 eixo dominante → 02 perfil → 03 pet hero → 04 stats (tempo+opção+confiança) → 05 curso+alts+despedida
- [x] Tap/click/seta-direita/swipe-↓ avança; seta-esquerda/swipe-↑ volta; auto-advance 6s; pause toggle no canto
- [x] Reduced-motion inicia pausado, sem fade-in, avanço só manual

### Extra: StarField canvas
- [x] `components/StarField.tsx` (canvas custom ~3kb — estrelas com drift toroidal, atração leve pro cursor, linhas tipo particles.js entre estrelas próximas e do cursor às vizinhas)
- [x] Montado em `app/layout.tsx`, `pointer-events: none`, `z-index: -1` (atrás de texto, na frente do gradient/sun/grid)
- [x] Sem nova dep — particles.js descartado por violar o budget; canvas custom mantém o look e respeita reduced-motion

**Entrega:** resultado deixou de ser scroll longo, virou sequência paced de 5 cenas; background ganhou estrelas interativas. `/`, `/cena/2`, `/desempate`, `/resultado` retornam 200, `npx tsc --noEmit` limpo.

---

## D4 — Sex 22/05 (executado em 21/05) — Phase E + F ✅ CONCLUÍDO

**Foco:** compartilhamento + dimensão coletiva. **Real:** D4 fechado um dia antes — sobra fôlego pra D5.

### Phase E — Share card 9:16
- [x] `components/ShareCard.tsx` (DOM offscreen 1080×1920 via forwardRef + position fixed -99999px)
- [x] `lib/share.ts` (import dinâmico de html2canvas, Web Share API com files, fallback download)
- [x] Conteúdo: header UFTM-Kepler, codinome, sprite gigante 560px, "eu sou [pet]", eixo, papel, curso, campus, hashtag
- [x] Fallback download no desktop com microcopy "imagem salva nos downloads"
- [x] QR Code adiado pra D6 (precisa da URL de produção final)

### Phase F — Stats + Galeria
- [x] `app/api/stats/cena/[id]/route.ts` (% por opção via RPC `stats_cena`)
- [x] `components/StatsBar.tsx` (bar GSAP scaleX + número animado com snap, destaque na escolha)
- [x] `app/api/galeria/route.ts` (paginado `?page=&size=`, sem PII, eixo calculado server-side)
- [x] `app/galeria/page.tsx` (grid 2/3/4 colunas + "carregar mais")
- [x] `supabase/migrations/003_galeria.sql` — índice DESC NULLS LAST + função SQL `stats_cena`
- [x] Link "// ver toda a tripulação" → `/galeria` no finale do Wrapped
- [x] CenaQuiz pausa 1.8s pra revelar stats após escolha (timeout fetch 1.5s)

**Entrega:** PNG compartilhável + ponte individual↔coletivo. `npx tsc --noEmit` limpo, todas as rotas 200. APIs aguardam aplicar migration 003 + env vars no Supabase pra responder 200 em prod.

---

## D5 — Sábado 23/05 — Phase G + Deploy

**Foco:** áudio polido + produção.

### Phase G — Audio polish
- [ ] Pad ambiente no hero e resultado (2 osciladores detuned + LFO lento)
- [ ] Swell de transição entre cenas Wrapped (sine sweep + noise filtrado)
- [ ] Mute persistido em localStorage (default muted)
- [ ] Wire do `MuteToggle` no estado real

### Deploy de produção
- [ ] Política de privacidade curta (1 parágrafo: sem PII)
- [ ] Subdomínio Vercel `protocolo-vocacao-uftm.vercel.app`
- [ ] OG image estática em `public/og-image.png`
- [ ] Vercel Analytics ativo
- [ ] Botão WhatsApp + X com texto pronto

**Entrega:** site em produção, áudio funcional, share completo.

---

## D6 — Domingo 24/05

**Foco:** testes + QR Code + ajustes.

- [ ] Testar com 3-5 pessoas reais (família, amigos, vizinhos)
- [ ] Listar bugs e UX issues
- [ ] Corrigir prioridade 1
- [ ] Smoke test em iOS Safari + Chrome Android + desktop
- [ ] Lighthouse audit mobile (alvo: ≥ 80, bundle JS < 200kb gzip)
- [ ] Gerar QR Code da URL (qrcode-monkey.com ou similar)
- [ ] Imprimir cartaz/banner pro estande (Canva)
- [ ] Preparar texto de divulgação pras redes UFTM

**Entrega:** produto polido, QR físico em mãos.

---

## D7 — Segunda 26/05 — 🚀 FEIRA

**Foco:** estar disponível + observar.

- Chegar cedo na feira, escanear o próprio QR pra confirmar que tá no ar
- Monitorar dashboard Supabase em tempo real (logado no laptop)
- Estar disponível pra hotfix urgente
- Anotar feedback informal dos alunos
- **Não tentar adicionar features no dia** — só corrigir bugs

---

## ✂️ Escopo Cortado (vs MVP original)

| Cortado | Motivo |
|---|---|
| ~~Coleta de nome/cidade/escola/IG do aluno~~ | LGPD: muito risco em 7 dias |
| ~~Tela de consentimento LGPD~~ | Não precisa sem PII |
| ~~Política de privacidade extensa~~ | 1 parágrafo basta |
| ~~Feed Instagram 1:1~~ | Stories/Share card é o motor viral |
| ~~OG image dinâmica via @vercel/og~~ | PNG estático funciona |
| ~~Cena 11 (Reflexão)~~ | Quiz é 10 cenas pontuáveis + cena 5.5 desempate condicional |
| ~~18 sprites com variações de cor~~ | 7 sprites SVG, 1 por eixo dominante |
| ~~Sprites PNG via Leonardo.ai~~ | SVG inline ficou suficiente |
| ~~Validação externa da matriz~~ | Ana valida sozinha |
| ~~Consulta formal à Procuradoria UFTM~~ | Não precisa sem PII |
| ~~Subdomínio uftm.edu.br~~ | Usar `*.vercel.app` direto |
| ~~Animações elaboradas~~ | GSAP greenlit (~50kb), `prefers-reduced-motion` respeitado |

---

## ➕ Escopo Adicionado (não estava no MVP original)

| Adicionado | Por quê |
|---|---|
| 7º eixo (TEC) com confidence + feedback | Matriz v0.2 ficou mais precisa |
| Cena 5.5 de desempate condicional | Quando top1 e top2 estão a < 5% |
| Phases A-G de imersão (vaporwave + Star Fox + Wrapped) | D1 sobrou orçamento; ver [IMPLEMENTATION-MAP.md](IMPLEMENTATION-MAP.md) |
| Galeria pública de copilotos | Dimensão coletiva, individual↔todos |
| Áudio procedural (Web Audio API) | Sem mp3, sem howler — gerado no client |

---

## 🚨 O que NÃO pode acontecer

1. **Mudar narrativa ou matriz dos eixos** — fechadas em v0.2
2. **Adicionar features novas além das fases A-G** — qualquer "seria legal" vai pra v2
3. **Mudar de stack** — Next.js + Supabase + Haiku + GSAP, decidido
4. **Quebrar schema do Supabase** — só migrações aditivas
5. **Esperar feedback externo pra avançar** — execução é unilateral
6. **Adicionar deps pesadas** — three.js, lottie, howler, satori: NÃO

---

## 📊 Risk burndown

| Dia | Risco residual | Confiança no prazo | Notas |
|---|---|---|---|
| D1 fim | ~~🔴 Alto~~ 🟢 **Baixo** | ~~60%~~ **95%** | D1-D4 fechados num dia |
| D2 fim | 🟢 Baixo | 96% | Hero + narrador são bounded |
| D3 fim | 🟢 Baixo | 97% | Wrapped é refactor, não greenfield |
| D4 fim | 🟢 Baixo | ~~98%~~ **99%** | Phase E+F fechadas um dia antes |
| D5 fim | 🟢 Mínimo | 99% | Áudio é cherry-on-top |
| D6 fim | 🟢 Mínimo | 99% | Buffer real |

---

## 🔥 Plano de contingência

**Se em D2 noite o narrador Star Fox não estiver fluido:**
- Cortar typewriter + blips, manter caixa estática com texto + portrait
- Hero pode ser estático (sem timeline GSAP), só CSS gradient

**Se em D3 noite o Wrapped não tiver 5 cenas funcionando:**
- Voltar ao resultado single-scroll (estado pré-Phase D, já funciona)
- Manter só a cena "pet hero" como destaque visual

**Se em D4 noite o share via html2canvas der problema:**
- Cortar Story 9:16
- Manter só link compartilhável (WhatsApp/X com texto pronto)

**Se em D4 a galeria não rodar:**
- Esconder rota `/galeria`, deixar pra v2
- Stats bar individual (Phase F parte 1) é suficiente

**Se em D6 algo crítico quebrar:**
- Domingo 25 vira dia de trabalho
- Cortar fases em ordem reversa (G → F → E → D)

---

## ✅ Definition of Done — Dia da Feira

Produto está pronto se:
- [ ] Aluno escaneia QR e abre o site no celular
- [ ] Passa pelas 10 cenas (+ desempate se aplicável) sem bugs
- [ ] Vê resultado com copiloto + curso + texto gerado pelo Haiku
- [ ] Consegue compartilhar em pelo menos UMA rede (WhatsApp mínimo)
- [ ] Funciona em iOS Safari + Chrome Android
- [ ] Carrega em < 5s no 4G, bundle JS < 200kb gzip
- [ ] Lighthouse mobile ≥ 80
- [ ] Supabase está gravando as sessões
- [ ] `prefers-reduced-motion` desliga animações sem quebrar layout
