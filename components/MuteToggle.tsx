"use client";

import { useEffect, useState } from "react";
import { isMuted, onMuteChange, toggleMuted } from "@/lib/audio";

export default function MuteToggle() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setMuted(isMuted());
    return onMuteChange(setMuted);
  }, []);

  return (
    <button
      type="button"
      onClick={() => toggleMuted()}
      aria-label={muted ? "ativar som" : "silenciar"}
      className="fixed bottom-4 right-4 z-50 font-terminal text-sm px-3 py-2 border-2 backdrop-blur-sm transition-all hover:scale-105"
      style={{
        background: "rgba(13, 2, 33, 0.7)",
        borderColor: "var(--grid-cyan)",
        color: "var(--grid-cyan)",
        boxShadow: muted ? "none" : "0 0 12px var(--grid-cyan)",
      }}
    >
      {muted ? "🔇 som" : "🔊 som"}
    </button>
  );
}
