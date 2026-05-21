import BotaoEmbarcar from "@/components/BotaoEmbarcar";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[480px] flex-col items-center justify-center px-6 py-10 text-center">

      <div
        className="font-terminal text-base tracking-widest uppercase glow-cyan anim-flicker"
        style={{ color: "var(--grid-cyan)" }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full mr-2 anim-pulse"
          style={{ background: "var(--sun-pink)" }}
        />
        UFTM-KEPLER • OS v2087.5
      </div>

      <h1
        className="font-pixel-title text-base sm:text-lg leading-relaxed mt-10 glow-yellow"
        style={{ color: "var(--sun-yellow)" }}
      >
        COMISSÃO<br />INTERESTELAR<br />UFTM
      </h1>

      <p
        className="font-terminal text-base tracking-wide uppercase mt-2"
        style={{ color: "var(--text-dim)" }}
      >
        // protocolo vocação
      </p>

      <div
        className="mt-12 mb-12 px-6 py-5 border-2 backdrop-blur-sm"
        style={{
          borderColor: "var(--sun-pink)",
          background: "rgba(26, 6, 51, 0.7)",
          boxShadow: "0 0 30px rgba(255, 46, 147, 0.4)",
        }}
      >
        <p className="font-pixel-body text-base leading-relaxed">
          ano <span className="font-semibold" style={{ color: "var(--sun-yellow)" }}>2087</span>. a terra está em colapso.
          a uftm está montando a primeira viagem tripulada ao planeta kepler-186f.
        </p>
        <p className="font-pixel-body text-base leading-relaxed mt-3">
          em <span className="font-semibold" style={{ color: "var(--sun-pink)" }}>6 minutos</span>, o protocolo vocação vai descobrir qual papel é o seu na nave.
        </p>
      </div>

      <BotaoEmbarcar />

      <p
        className="font-terminal text-sm mt-8 max-w-xs"
        style={{ color: "var(--text-dim)" }}
      >
        // nenhum dado pessoal seu é coletado.<br />nem precisa logar.
      </p>

      <footer
        className="font-terminal text-sm mt-16 opacity-70"
        style={{ color: "var(--text-dim)" }}
      >
        UFTM • Feira de Profissões 2026
      </footer>
    </main>
  );
}
