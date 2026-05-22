/** Default mudo: políticas de autoplay quebram qualquer som não solicitado. */

const STORAGE_KEY = "uftm:muted";
type Listener = (muted: boolean) => void;
const listeners = new Set<Listener>();

let muted = true;

if (typeof window !== "undefined") {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  muted = stored === null ? true : stored !== "false";
}

export function isMuted(): boolean {
  return muted;
}

export function setMuted(v: boolean): void {
  if (muted === v) return;
  muted = v;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, String(v));
  }
  // Unmute conta como gesto do usuário — bom momento pra acordar o contexto.
  if (!v) getCtx();
  listeners.forEach((fn) => fn(v));
}

export function toggleMuted(): void {
  setMuted(!muted);
}

export function onMuteChange(fn: Listener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

// === Web Audio engine ===

let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (ctx === null) {
    const w = window as unknown as {
      AudioContext?: typeof AudioContext;
      webkitAudioContext?: typeof AudioContext;
    };
    const Ctor = w.AudioContext ?? w.webkitAudioContext;
    if (!Ctor) return null;
    try {
      const created = new Ctor();
      const gain = created.createGain();
      gain.gain.value = 0.5;
      gain.connect(created.destination);
      ctx = created;
      masterGain = gain;
    } catch {
      return null;
    }
  }
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
  return ctx;
}

let blipCount = 0;

/** Beep curto do narrador — square wave, pitch jitter ±50Hz, ADSR rápido. */
export function playNarratorBlip(): void {
  if (muted) return;
  const c = getCtx();
  if (!c || !masterGain) return;
  const now = c.currentTime;

  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = "square";

  // Pitch alterna leve pra dar ritmo, com jitter pra não soar mecânico.
  const base = 520;
  const jitter = (Math.random() - 0.5) * 100;
  const drift = blipCount % 2 === 0 ? 0 : -40;
  osc.frequency.value = base + jitter + drift;
  blipCount++;

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.05, now + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(now);
  osc.stop(now + 0.06);
}

// === Background music (Metroidvania Symphony pack) ===
//
// Duas trilhas via HTMLAudioElement com crossfade entre elas:
//   - "adventure" (Adventure Theme 4) — home + quiz
//   - "secret"    (Secret Area Theme 1) — wrapped final
//
// Crédito em /public/audio/CREDITS.txt. Licença permite uso comercial sem
// atribuição obrigatória, mas o crédito fica no repo de qualquer jeito.
//
// Refcount por trilha — várias telas podem pedir a mesma sem brigar. Quando
// duas tracks são requested ao mesmo tempo (troca de rota), a mais recente
// vence e dispara o crossfade.

export type MusicTrack = "adventure" | "secret";

type TrackEntry = {
  el: HTMLAudioElement;
  fadeTimer: number | null;
  refCount: number;
};

const TRACK_SOURCES: Record<MusicTrack, string> = {
  adventure: "/audio/adventure-theme-4.mp3",
  secret: "/audio/secret-area-theme-1.mp3",
};

const TRACK_VOLUME: Record<MusicTrack, number> = {
  adventure: 0.32,
  secret: 0.38,
};

const FADE_MS = 1400;
// Grace pra cobrir o gap entre unmount da rota antiga e mount da nova —
// se uma nova requestMusic chega nessa janela, cancela o fade-out e crossfade.
const RELEASE_GRACE_MS = 120;
const tracks = new Map<MusicTrack, TrackEntry>();
let activeTrack: MusicTrack | null = null;
let musicMuteUnsub: (() => void) | null = null;
let pendingReleaseTimer: number | null = null;

function ensureTrack(name: MusicTrack): TrackEntry | null {
  if (typeof window === "undefined") return null;
  let entry = tracks.get(name);
  if (entry) return entry;
  const el = new Audio(TRACK_SOURCES[name]);
  el.loop = true;
  // "metadata" só baixa o header; o arquivo (até 7+ MB) só é puxado quando
  // tryPlay() roda, ou seja, depois do gesto de unmute.
  el.preload = "metadata";
  el.volume = 0;
  entry = { el, fadeTimer: null, refCount: 0 };
  tracks.set(name, entry);
  return entry;
}

function clearFade(entry: TrackEntry): void {
  if (entry.fadeTimer !== null) {
    window.cancelAnimationFrame(entry.fadeTimer);
    entry.fadeTimer = null;
  }
}

function fadeTo(entry: TrackEntry, target: number, durationMs: number, onDone?: () => void): void {
  clearFade(entry);
  const start = entry.el.volume;
  const delta = target - start;
  if (Math.abs(delta) < 0.001) {
    entry.el.volume = target;
    onDone?.();
    return;
  }
  const startedAt = performance.now();
  const tick = () => {
    const t = Math.min(1, (performance.now() - startedAt) / durationMs);
    entry.el.volume = Math.max(0, Math.min(1, start + delta * t));
    if (t >= 1) {
      entry.fadeTimer = null;
      onDone?.();
      return;
    }
    entry.fadeTimer = window.requestAnimationFrame(tick);
  };
  entry.fadeTimer = window.requestAnimationFrame(tick);
}

function tryPlay(el: HTMLAudioElement): void {
  // play() pode rejeitar por política de autoplay; nesse caso o áudio só
  // arranca depois que o usuário clica em "som" (gesto). Caminho esperado.
  const p = el.play();
  if (p && typeof p.catch === "function") p.catch(() => {});
}

function fadeOutAndPause(entry: TrackEntry, durationMs: number): void {
  fadeTo(entry, 0, durationMs, () => {
    if (entry.el.volume <= 0.001) entry.el.pause();
  });
}

function activateTrack(name: MusicTrack): void {
  if (muted) return;
  const entry = ensureTrack(name);
  if (!entry) return;

  for (const [otherName, otherEntry] of tracks) {
    if (otherName === name) continue;
    if (otherEntry.el.paused && otherEntry.el.volume === 0) continue;
    fadeOutAndPause(otherEntry, FADE_MS);
  }

  tryPlay(entry.el);
  fadeTo(entry, TRACK_VOLUME[name], FADE_MS);
  activeTrack = name;
}

function ensureMuteListener(): void {
  if (musicMuteUnsub) return;
  musicMuteUnsub = onMuteChange((m) => {
    if (m) {
      for (const entry of tracks.values()) fadeOutAndPause(entry, FADE_MS * 0.6);
    } else if (activeTrack) {
      activateTrack(activeTrack);
    }
  });
}

function cancelPendingRelease(): void {
  if (pendingReleaseTimer !== null) {
    window.clearTimeout(pendingReleaseTimer);
    pendingReleaseTimer = null;
  }
}

/**
 * Pede uma trilha — incrementa refcount e a torna ativa (crossfade de quem
 * estiver tocando antes). Idempotente por chamador via release correspondente.
 */
export function requestMusic(name: MusicTrack): void {
  cancelPendingRelease();
  const entry = ensureTrack(name);
  if (!entry) return;
  entry.refCount++;
  ensureMuteListener();

  if (muted) {
    activeTrack = name;
    return;
  }

  activateTrack(name);
}

/** Libera a trilha. Se nenhuma trilha tem refs após uma grace window, fade-out. */
export function releaseMusic(name: MusicTrack): void {
  const entry = tracks.get(name);
  if (!entry) return;
  if (entry.refCount > 0) entry.refCount--;

  for (const [otherName, otherEntry] of tracks) {
    if (otherName === name) {
      if (otherEntry.refCount > 0) return;
    } else if (otherEntry.refCount > 0) {
      return;
    }
  }

  // Grace window: troca de rota faz unmount antes do mount. Se o próximo
  // requestMusic chegar nessa janela, ele cancela esse fade-out e dispara
  // crossfade direto via activateTrack.
  cancelPendingRelease();
  pendingReleaseTimer = window.setTimeout(() => {
    pendingReleaseTimer = null;
    for (const e of tracks.values()) {
      if (e.refCount > 0) return;
    }
    for (const e of tracks.values()) fadeOutAndPause(e, FADE_MS * 0.6);
    activeTrack = null;
  }, RELEASE_GRACE_MS);
}

/** Aliases legados — Hero + CenaQuiz usam essas. Trilha default = adventure. */
export function startAmbientPad(): void {
  requestMusic("adventure");
}

export function stopAmbientPad(): void {
  releaseMusic("adventure");
}

// === SFX helpers ===

/** Buffers de ruído branco cacheados por (sampleRate, dur). SFX são chamados
 *  com poucas durações distintas, então o cache fica bounded (~3-4 entradas). */
const noiseBufferCache = new Map<string, AudioBuffer>();

function getNoiseBuffer(c: AudioContext, durSec: number): AudioBuffer {
  const key = `${c.sampleRate}:${durSec}`;
  const cached = noiseBufferCache.get(key);
  if (cached) return cached;
  const buf = c.createBuffer(1, Math.ceil(c.sampleRate * durSec), c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  noiseBufferCache.set(key, buf);
  return buf;
}

/** Guard comum dos SFX. Retorna `{ c, now }` ou null se sem som disponível. */
function sfxCtx(): { c: AudioContext; now: number } | null {
  if (muted) return null;
  const c = getCtx();
  if (!c || !masterGain) return null;
  return { c, now: c.currentTime };
}

// === Transition swell ===

const SWELL_DUR = 0.55;

/** Swell curto pra transições (cenas Wrapped): sine sweep + noise filtrado. */
export function playTransitionSwell(): void {
  const ctx = sfxCtx();
  if (!ctx || !masterGain) return;
  const { c, now } = ctx;
  const dur = SWELL_DUR;

  const sweep = c.createOscillator();
  sweep.type = "sine";
  sweep.frequency.setValueAtTime(220, now);
  sweep.frequency.exponentialRampToValueAtTime(660, now + dur * 0.7);

  const sweepGain = c.createGain();
  sweepGain.gain.setValueAtTime(0, now);
  sweepGain.gain.linearRampToValueAtTime(0.08, now + 0.08);
  sweepGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

  sweep.connect(sweepGain);
  sweepGain.connect(masterGain);
  sweep.start(now);
  sweep.stop(now + dur + 0.05);

  const noise = c.createBufferSource();
  noise.buffer = getNoiseBuffer(c, SWELL_DUR);

  const bp = c.createBiquadFilter();
  bp.type = "bandpass";
  bp.Q.value = 1.4;
  bp.frequency.setValueAtTime(800, now);
  bp.frequency.exponentialRampToValueAtTime(3500, now + dur * 0.7);

  const noiseGain = c.createGain();
  noiseGain.gain.setValueAtTime(0, now);
  noiseGain.gain.linearRampToValueAtTime(0.05, now + 0.06);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

  noise.connect(bp);
  bp.connect(noiseGain);
  noiseGain.connect(masterGain);
  noise.start(now);
  noise.stop(now + dur + 0.05);
}

// === Question/choice SFX ===

/** Confirm de escolha — pickup curto estilo Metroid item: dois tons ascendentes. */
export function playChoiceSelect(): void {
  const ctx = sfxCtx();
  if (!ctx || !masterGain) return;
  const { c, now } = ctx;

  const tones: Array<{ freq: number; start: number; dur: number }> = [
    { freq: 660, start: 0, dur: 0.09 },
    { freq: 990, start: 0.07, dur: 0.16 },
  ];

  for (const t of tones) {
    const osc = c.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(t.freq, now + t.start);

    const g = c.createGain();
    g.gain.setValueAtTime(0, now + t.start);
    g.gain.linearRampToValueAtTime(0.07, now + t.start + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + t.start + t.dur);

    osc.connect(g);
    g.connect(masterGain);
    osc.start(now + t.start);
    osc.stop(now + t.start + t.dur + 0.02);
  }
}

/** Transição entre perguntas — whoosh curto descendente filtrado. */
export function playQuestionTransition(): void {
  const ctx = sfxCtx();
  if (!ctx || !masterGain) return;
  const { c, now } = ctx;
  const dur = 0.35;

  const sweep = c.createOscillator();
  sweep.type = "sine";
  sweep.frequency.setValueAtTime(880, now);
  sweep.frequency.exponentialRampToValueAtTime(180, now + dur);

  const sweepGain = c.createGain();
  sweepGain.gain.setValueAtTime(0, now);
  sweepGain.gain.linearRampToValueAtTime(0.06, now + 0.04);
  sweepGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

  sweep.connect(sweepGain);
  sweepGain.connect(masterGain);
  sweep.start(now);
  sweep.stop(now + dur + 0.05);
}

// === Wrapped finale + reveal stingers ===

/** Acorde final do wrapped — três notas batidas juntas + sustain ressonante. */
export function playWrappedFinale(): void {
  const ctx = sfxCtx();
  if (!ctx || !masterGain) return;
  const { c, now } = ctx;
  const dur = 2.2;

  // Acorde maior: C4, E4, G4, C5 — fanfarra final.
  const chord = [261.63, 329.63, 392, 523.25];
  for (const f of chord) {
    const osc = c.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = f;

    const g = c.createGain();
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.05, now + 0.04);
    g.gain.linearRampToValueAtTime(0.04, now + 0.4);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.connect(g);
    g.connect(masterGain);
    osc.start(now);
    osc.stop(now + dur + 0.05);
  }
}

/** Revelação do pet — sparkle mágico: arpejo rápido ascendente + shimmer. */
export function playPetReveal(): void {
  const ctx = sfxCtx();
  if (!ctx || !masterGain) return;
  const { c, now } = ctx;

  // Arpejo ascendente cristalino: C5, E5, G5, B5, D6
  const notes = [523.25, 659.25, 783.99, 987.77, 1174.66];
  const stepDelay = 0.07;
  const noteDur = 0.45;

  for (let i = 0; i < notes.length; i++) {
    const start = now + i * stepDelay;
    const osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.value = notes[i] ?? 523.25;

    const g = c.createGain();
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(0.06, start + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, start + noteDur);

    osc.connect(g);
    g.connect(masterGain);
    osc.start(start);
    osc.stop(start + noteDur + 0.02);
  }

  // Shimmer: noise filtrado em highpass com sweep, "fairy dust".
  const shimmerDur = 1.2;
  const noise = c.createBufferSource();
  noise.buffer = getNoiseBuffer(c, shimmerDur);

  const hp = c.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.setValueAtTime(2000, now);
  hp.frequency.exponentialRampToValueAtTime(6000, now + shimmerDur);
  hp.Q.value = 0.7;

  const shimmerGain = c.createGain();
  shimmerGain.gain.setValueAtTime(0, now);
  shimmerGain.gain.linearRampToValueAtTime(0.025, now + 0.1);
  shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + shimmerDur);

  noise.connect(hp);
  hp.connect(shimmerGain);
  shimmerGain.connect(masterGain);
  noise.start(now);
  noise.stop(now + shimmerDur + 0.05);
}

/** Revelação do curso — stinger heroico: power chord + impact + sustain dourado. */
export function playCursoReveal(): void {
  const ctx = sfxCtx();
  if (!ctx || !masterGain) return;
  const { c, now } = ctx;

  // Impacto: noise burst curto filtrado em lowpass — o "slam".
  const impactDur = 0.4;
  const noise = c.createBufferSource();
  noise.buffer = getNoiseBuffer(c, impactDur);

  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(1200, now);
  lp.frequency.exponentialRampToValueAtTime(200, now + impactDur);
  lp.Q.value = 2;

  const impactGain = c.createGain();
  impactGain.gain.setValueAtTime(0.12, now);
  impactGain.gain.exponentialRampToValueAtTime(0.0001, now + impactDur);

  noise.connect(lp);
  lp.connect(impactGain);
  impactGain.connect(masterGain);
  noise.start(now);
  noise.stop(now + impactDur + 0.02);

  // Power chord heroico: A2, E3, A3, C#4, E4 — Lá maior, sustain longo.
  const chord = [110, 164.81, 220, 277.18, 329.63];
  const chordDur = 3.5;

  for (let i = 0; i < chord.length; i++) {
    const f = chord[i] ?? 220;
    const osc = c.createOscillator();
    osc.type = i < 2 ? "sawtooth" : "triangle";
    osc.frequency.value = f;
    osc.detune.value = (i - 2) * 4;

    const g = c.createGain();
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.045, now + 0.05);
    g.gain.linearRampToValueAtTime(0.035, now + 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, now + chordDur);

    // Filtro pra suavizar o sawtooth e dar brilho controlado.
    const filt = c.createBiquadFilter();
    filt.type = "lowpass";
    filt.frequency.setValueAtTime(1800, now);
    filt.frequency.exponentialRampToValueAtTime(3200, now + 0.8);
    filt.Q.value = 1.2;

    osc.connect(filt);
    filt.connect(g);
    g.connect(masterGain);
    osc.start(now);
    osc.stop(now + chordDur + 0.05);
  }

  // Top shimmer — quinta acima cintilando.
  const shimmer = c.createOscillator();
  shimmer.type = "sine";
  shimmer.frequency.setValueAtTime(659.25, now + 0.2);
  shimmer.frequency.linearRampToValueAtTime(987.77, now + 1.2);
  const sg = c.createGain();
  sg.gain.setValueAtTime(0, now);
  sg.gain.linearRampToValueAtTime(0.025, now + 0.4);
  sg.gain.exponentialRampToValueAtTime(0.0001, now + chordDur);
  shimmer.connect(sg);
  sg.connect(masterGain);
  shimmer.start(now);
  shimmer.stop(now + chordDur + 0.05);
}
