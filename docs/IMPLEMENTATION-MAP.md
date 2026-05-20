# 🗺️ Implementation Map — Immersion Upgrade

**Started:** 2026-05-19
**Target:** Feira 2026-05-26 (7 days)
**Scope:** A → G (all phases greenlit)
**Palette decision:** deferred — toggle behind CSS vars (`?palette=warm` for legacy)

---

## Status

| Phase | State |
|---|:-:|
| A — Vaporwave foundation | ✅ complete |
| B — Hero page | ✅ complete |
| C — Star Fox narrator | ✅ complete |
| D — Wrapped-style result | ✅ complete |
| E — Share card 9:16 | ⏳ pending |
| F — Stats + gallery | ⏳ pending |
| G — Audio polish | ⏳ pending |

---

## Ground rules (apply to every phase)

- **Mobile first.** Bundle JS < 200kb gzip, Lighthouse mobile ≥ 80 stays sacred.
- **Animations gated by `gsap.matchMedia()`** — `prefers-reduced-motion` users get static fallbacks.
- **No new heavy deps.** Greenlit: `gsap`. Skipping: three.js, lottie, howler, satori.
- **No DB schema break.** Anything new = additive migration only.
- **No PII leak.** Gallery shows codinome + sprite + curso only.
- **Validate each phase in dev (`npm run dev`) before next.**

---

## Files & deps inventory

### Existing files touched by this work
- `app/page.tsx` — current home (becomes hero)
- `app/layout.tsx` — fonts, root
- `app/globals.css` — palette, bg, animations
- `app/cena/[id]/page.tsx` — quiz route
- `app/resultado/page.tsx` — result route
- `app/desempate/page.tsx` — tiebreaker route
- `components/BotaoEmbarcar.tsx`
- `components/CenaQuiz.tsx`
- `components/Desempate.tsx`
- `components/Resultado.tsx`
- `data/cenas.ts` — already has `falaBixinho`
- `lib/use-sessao.ts`
- `app/api/finalizar/route.ts`
- `supabase/migrations/`

### New files
- `lib/motion.ts` — GSAP setup + matchMedia helper + reduced-motion guard
- `lib/audio.ts` — Web Audio engine (blips, swells, mute state)
- `lib/share.ts` — html2canvas → blob → Web Share API
- `components/VaporwaveBg.tsx` — animated sun + grid + scanlines layer (single fixed bg)
- `components/Hero.tsx` — Phase B hero block
- `components/NarratorBox.tsx` — Star Fox portrait + typewriter caption + beep
- `components/WrappedSequence.tsx` — Phase D reveal-scene player
- `components/WrappedScene.tsx` — individual scene primitive
- `components/PetHeroScene.tsx` — dedicated pet highlight scene
- `components/ShareCard.tsx` — 9:16 share artifact
- `components/StatsBar.tsx` — per-option % bar shown after answering
- `components/MuteToggle.tsx` — floating mute button
- `app/galeria/page.tsx` — public pet gallery
- `app/api/stats/cena/[id]/route.ts` — per-question aggregations
- `app/api/galeria/route.ts` — paginated pet list
- `supabase/migrations/002_galeria.sql` — additive index on `finalizado_em`
- `public/audio/` — small mp3/wav for swells (or fully procedural via Web Audio, decided in G)

### Deps added
- `gsap` (~50kb gzip)

### Deps unchanged
- `html2canvas` already in `package.json`, no install needed.

---

## Phase A — Vaporwave foundation
**Goal:** new visual baseline visible on every existing screen without breaking layout.

**Touches:** `package.json`, `app/globals.css`, `app/layout.tsx`, `lib/motion.ts` (new), `lib/audio.ts` (new, stub), `components/VaporwaveBg.tsx` (new), `components/MuteToggle.tsx` (new, placeholder), `app/page.tsx` (mount via layout).

**Decisions baked in:**
- Two palette tokens behind CSS vars; flip warm↔cool via `<html class="theme-warm">`. Default = cool vaporwave. Toggle via `?palette=warm` URL flag (inline script in `<head>` to avoid FOUC).
- Type scale: bump body, headings use `clamp()` for responsive.
- Background: sky gradient (CSS only, no JS, no flash) + animated retro sun (component) + scanlines (component) + GSAP-driven grid parallax.
- All animations gated by `prefers-reduced-motion`.

**Validation:** every existing page still works, no console errors, FPS visibly steady.

**A complete** — 2026-05-19. Files landed: `package.json` (+gsap), `app/globals.css` (vaporwave palette + `.theme-warm` override + new `.vapor-*` classes), `app/layout.tsx` (inline palette-init script + `<VaporwaveBg/>` + `<MuteToggle/>`), `lib/motion.ts`, `lib/audio.ts`, `components/VaporwaveBg.tsx`, `components/MuteToggle.tsx`. `/`, `/cena/2`, `/?palette=warm` all 200. Simplify pass removed dead `prefersReducedMotion()` export, killed task-narration comments, merged sun pulse into a single tween, added `gsap.killTweensOf()` before particle removal, dropped permanent `will-change` from CSS base classes (GSAP auto-promotes).

---

## Phase B — Hero page
**Goal:** dedicated first impression, distinct from briefing scene.

**Touches:** `app/page.tsx` (replace), `components/Hero.tsx` (new), `components/BotaoEmbarcar.tsx` (animate entrance).

**Narrative shift:** briefing block MOVES out of home into cena 2 (which is already called "Briefing"). Home becomes pure hero.

**GSAP work:** timeline on mount — sun pulse, title type-in, CTA glow ramp, grid parallax loop.

**Validation:** hero loads < 1.5s FCP locally, CTA navigates to cena 2, cena 2 still readable with the briefing text now inside it.

**B complete** — 2026-05-20. Files landed: `components/Hero.tsx` (new, GSAP timeline com type-in letra-a-letra, ramp do CTA, glow loop), `app/page.tsx` (reduzido a `<Hero/>`), `components/BotaoEmbarcar.tsx` (entrance + glow loop próprio via matchMedia), `data/cenas.ts` (cena 2 absorveu o briefing 2087/Kepler). `/` e `/cena/2` retornam 200, type-check limpo.

---

## Phase C — Star Fox narrator
**Goal:** portrait + speech window for `co-piloto` at every key beat.

**Touches:** `components/NarratorBox.tsx` (new), `lib/audio.ts` (extend with blips), `components/CenaQuiz.tsx` (replace `falaBixinho` block), `components/Desempate.tsx` (add narrator line), `components/Resultado.tsx` (narrator opens result).

**Component contract:**
```
<NarratorBox
  portrait={spritePath}
  text={cena.falaBixinho}
  variant="cena|intro|desempate|resultado"
  onComplete?={() => void}
/>
```
- GSAP entrance (slide-up, glow ramp).
- Typewriter char-by-char; each char fires short Web Audio blip (square wave, pitch jitter ±50Hz).
- Tap-to-skip → finishes typewriter instantly.
- Honors `prefers-reduced-motion` (no typewriter, no blip).
- Honors `MuteToggle` global state.

**Validation:** narrator appears in cenas 2-10, plays blips, skip works, mute kills sound.

**C complete** — 2026-05-20. Files landed: `components/NarratorBox.tsx` (new — portrait + typewriter por requestAnimationFrame, tap-to-skip, reduced-motion bypass, isMuted() gate), `lib/audio.ts` (motor Web Audio com master gain, `playNarratorBlip()` square + pitch jitter ±50Hz + ADSR curto, ctx criado tarde no gesto do MuteToggle), `components/CenaQuiz.tsx`/`Desempate.tsx`/`Resultado.tsx` (substituem o bloco estático `falaBixinho`/msg_despedida). Portrait do narrador durante quiz/desempate: `/sprites/decifrador.svg` (vibe TEC pra IA); resultado usa o sprite do eixo do aluno + nome do co-piloto. `/` `/cena/2` `/desempate` 200.

---

## Phase D — Wrapped-style result
**Goal:** 5 paced reveal scenes replacing the single-scroll letter.

**Touches:** `components/Resultado.tsx` (refactor into orchestrator), new: `WrappedSequence.tsx`, `WrappedScene.tsx`, `PetHeroScene.tsx`.

**Scene order:**
1. **Eixo dominante** — big word ("INVESTIGADOR"), narrator says "seu eixo é…", GSAP scale+glow.
2. **Profile phrase** — LLM-generated personalidade text, large type.
3. **Pet hero** ✨ — full-screen pet sprite, name reveal, particles, "este é teu co-piloto".
4. **Personal stats** — "você levou Xm Ys" + "escolheu mais a opção Z" + confidence badge.
5. **Course + CTA** — top1 course + alts + "compartilhar" button.

**Mechanics:** GSAP timeline per scene; tap/swipe-down advances; auto-advance after 5-7s with subtle progress dots. Reduced motion = static cards, manual advance only.

**Validation:** scene sequence plays end-to-end, you can tap through, back button works, refresh policy documented.

**D complete** — 2026-05-21. Files landed: `components/WrappedScene.tsx` (primitiva — fade-in GSAP por cena ativa, label header, reduced-motion bypass), `components/PetHeroScene.tsx` (sprite scale+rotate-in com float loop, nome reveal, caption codinome), `components/WrappedSequence.tsx` (orchestrator das 5 cenas, auto-advance 6s, progress dots, pause toggle, tap/swipe-down/seta-direita avança, swipe-up/seta-esquerda volta, click em botões não consome o tap), `components/Resultado.tsx` (refatorado — só carrega/erro/orquestra; estado de sucesso delega pro `WrappedSequence`). 5 cenas: 01 eixo dominante, 02 perfil, 03 pet hero, 04 stats (tempo + opção mais escolhida + confiança), 05 curso + alts + despedida + refazer. Extra: `components/StarField.tsx` adicionado (canvas custom ~3kb, estrelas com atração pro cursor + linhas tipo particles.js, sem dep nova) montado em `app/layout.tsx`. `/`, `/cena/2`, `/desempate`, `/resultado` retornam 200. `npx tsc --noEmit` limpo.

---

## Phase E — Share card 9:16
**Goal:** close D4. Generate downloadable/shareable 1080×1920 PNG with first-person copy.

**Touches:** `components/ShareCard.tsx` (new — offscreen rendered DOM), `lib/share.ts` (new — html2canvas + Web Share API), `components/WrappedSequence.tsx` (final scene's button calls `share()`).

**Card content:** UFTM logo (text or simple SVG mark), pet sprite huge, codinome, course, first-person phrases ("eu sou COMUNICADORE", "eu descobri que meu papel é JORNALISMO"), QR code to feira landing, hashtag.

**Validation:** generated PNG opens at 1080×1920, Web Share works on Android Chrome, fallback download works on desktop.

---

## Phase F — Stats + gallery
**Goal:** individual ↔ collective bridge.

**Touches:**
- `app/api/stats/cena/[id]/route.ts` (new) — returns `{[opcaoIndex]: percentage}` from `sessoes.respostas`.
- `components/StatsBar.tsx` (new) — shown after `CenaQuiz` answer, animates GSAP bar to %.
- `app/api/galeria/route.ts` (new) — paginated `{codinome, eixo, curso_top, bixinho_nome}[]`.
- `app/galeria/page.tsx` (new) — grid of pet cards, infinite scroll or pages.
- `supabase/migrations/002_galeria.sql` — additive index on `finalizado_em DESC`.
- `components/CenaQuiz.tsx` — pause flow to show stats bar 1.5s after pick before navigating.
- `components/WrappedSequence.tsx` — final scene shows "vê todos os co-pilotos" link to /galeria.

**Validation:** answer a question → see "47% também escolheu isso", finish quiz → pet appears in /galeria, /galeria loads paginated without N+1.

---

## Phase G — Audio polish
**Goal:** ambient layer + transition swells.

**Touches:** `lib/audio.ts` (extend), `components/MuteToggle.tsx` (wire to real state), `components/Hero.tsx` + `WrappedSequence.tsx` (trigger swells).

**Sound design:**
- Ambient pad on hero + result: 2 detuned oscillators, low gain, slow LFO.
- Transition swell on scene change: rising sine sweep + filtered noise.
- All Web Audio API. No mp3 unless we hit a wall.
- Mute persists in localStorage. Defaults to muted on first load (autoplay policies + courtesy).

**Validation:** mute toggle works everywhere, unmuting plays pad, swells fire on scene transitions, no audio context warnings.
