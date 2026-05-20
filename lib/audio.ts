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
