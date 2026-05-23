/**
 * Manual rápido e didático do Protocolo Vocação.
 * Página pública — pra curiosos, docentes, imprensa, qualquer um.
 */

import Link from "next/link";

export const metadata = {
  title: "Manual · Protocolo Vocação UFTM",
  description:
    "Como funciona o quiz vocacional gamificado da Feira de Profissões UFTM 2026.",
};

const EIXOS = [
  { sigla: "CUI", nome: "Cuidador", desc: "empatia, cuidar do outro", cor: "#ff5fa8" },
  { sigla: "INV", nome: "Investigador", desc: "curiosidade, pesquisa, 'por quê'", cor: "#b026ff" },
  { sigla: "CON", nome: "Construtor", desc: "construir coisas físicas, engenharias", cor: "#ff6b35" },
  { sigla: "COM", nome: "Comunicador", desc: "conectar, expressar, ensinar", cor: "#fff700" },
  { sigla: "TRA", nome: "Transformador", desc: "justiça, mudança social", cor: "#ff2e93" },
  { sigla: "CUL", nome: "Cultivador", desc: "vida, sustentabilidade, natureza", cor: "#05ffa1" },
  { sigla: "TEC", nome: "Decifrador", desc: "computação, dados, lógica", cor: "#01cdfe" },
];

function Section({
  num,
  title,
  children,
  color = "var(--grid-cyan)",
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <section className="mb-10">
      <div className="flex items-baseline gap-3 mb-4">
        <span
          className="font-terminal text-xs uppercase tracking-widest opacity-70"
          style={{ color }}
        >
          [{num}]
        </span>
        <h2
          className="font-pixel-title text-sm sm:text-base uppercase tracking-widest"
          style={{ color, textShadow: `0 0 10px ${color}` }}
        >
          {title}
        </h2>
      </div>
      <div className="font-pixel-body text-base sm:text-lg leading-relaxed text-[var(--text)]">
        {children}
      </div>
    </section>
  );
}

export default function ManualPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      {/* Header HUD */}
      <header className="mb-10 border-b-2 pb-6" style={{ borderColor: "var(--sun-pink)" }}>
        <div className="flex items-center justify-between mb-3">
          <span
            className="font-terminal text-xs uppercase tracking-widest"
            style={{ color: "var(--grid-cyan)" }}
          >
            // UFTM-KEPLER · OS v2087.5
          </span>
          <span
            className="font-terminal text-xs uppercase tracking-widest"
            style={{ color: "var(--sun-yellow)" }}
          >
            MANUAL_DA_MISSÃO
          </span>
        </div>
        <h1
          className="font-pixel-title text-base sm:text-xl md:text-2xl uppercase mb-3"
          style={{ color: "var(--sun-yellow)", textShadow: "0 0 12px var(--sun-orange), 0 2px 0 var(--sun-pink)" }}
        >
          Como funciona o Protocolo Vocação
        </h1>
        <p className="font-pixel-body text-base text-[var(--text-dim)]">
          Quiz vocacional gamificado da Feira de Profissões UFTM 2026.
          Você embarca numa missão sci-fi e suas decisões revelam — sem você
          saber — qual curso da UFTM mais combina com seu jeito.
        </p>
      </header>

      <Section num="01" title="O QUE É" color="var(--grid-cyan)">
        <ul className="list-none space-y-2">
          <li>▸ Uma aventura de <strong>15 cenas</strong> no ano 2087.</li>
          <li>▸ Cada escolha sua pontua em <strong>7 eixos de personalidade</strong>.</li>
          <li>▸ No fim, mostra <strong>1 curso UFTM como match top</strong> + 2 alternativos.</li>
          <li>▸ Você ganha um <strong>copiloto-IA</strong> em pixel art pra compartilhar.</li>
        </ul>
        <div
          className="mt-5 px-4 py-3 border-2 border-dashed"
          style={{ borderColor: "var(--sun-pink)", background: "rgba(255,46,147,0.06)" }}
        >
          <p className="font-terminal text-xs uppercase tracking-widest mb-1" style={{ color: "var(--sun-pink)" }}>
            ⚠ ATENÇÃO
          </p>
          <p className="text-sm leading-relaxed">
            Isso aqui é uma <strong>brincadeira pra te ajudar a explorar</strong> — não é um teste vocacional
            oficial nem um diagnóstico. O resultado sugere por quais cursos começar a visita na feira,
            não define sua carreira. Pra dúvida real, procura orientação vocacional na sua escola.
          </p>
        </div>
      </Section>

      <Section num="02" title="OS 7 EIXOS" color="var(--sun-yellow)">
        <p className="mb-4 text-[var(--text-dim)]">
          Inspirados na taxonomia RIASEC (Holland, 1959), adaptada pro contexto UFTM:
        </p>
        <div className="space-y-2">
          {EIXOS.map((e) => (
            <div
              key={e.sigla}
              className="flex items-center gap-3 px-3 py-2 border-l-2"
              style={{ borderColor: e.cor, background: "rgba(26,6,51,0.4)" }}
            >
              <span
                className="font-terminal text-sm font-bold shrink-0 w-12"
                style={{ color: e.cor }}
              >
                {e.sigla}
              </span>
              <span className="font-pixel-body text-base flex-1">
                <strong>{e.nome}</strong>{" "}
                <span className="text-[var(--text-dim)]">— {e.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section num="03" title="COMO FUNCIONA" color="var(--sun-pink)">
        <ol className="list-none space-y-3">
          <li>
            <strong style={{ color: "var(--sun-yellow)" }}>1. Você joga</strong>{" "}
            — escolhe entre 5 opções em cada uma das 15 cenas.
          </li>
          <li>
            <strong style={{ color: "var(--sun-yellow)" }}>2. Cada opção pontua 1-3 eixos</strong>{" "}
            — ex: &quot;corro pro laboratório fazer exame de sangue&quot; dá +1 CUI e +3 INV
            (perfil médico-investigativo).
          </li>
          <li>
            <strong style={{ color: "var(--sun-yellow)" }}>3. Vetor final do aluno</strong>{" "}
            — tipo <code className="text-[var(--grid-cyan)]">[10, 10, 0, 4, 3, 2, 4]</code>.
          </li>
          <li>
            <strong style={{ color: "var(--sun-yellow)" }}>4. Comparação por cosseno</strong>{" "}
            — fórmula matemática que mede a &quot;direção&quot; do perfil. Os 3
            cursos mais parecidos viram o top 3.
          </li>
          <li>
            <strong style={{ color: "var(--sun-yellow)" }}>5. Copiloto gerado</strong>{" "}
            — IA Claude Haiku cria nome único + personalidade pro seu copiloto.
          </li>
        </ol>
      </Section>

      <Section num="04" title="COMO FOI CONSTRUÍDO" color="var(--grid-cyan)">
        <p className="mb-3">
          Stack pequeno, free tier, deploy contínuo:
        </p>
        <ul className="list-none space-y-1.5 text-[var(--text-dim)]">
          <li>▸ <strong className="text-[var(--text)]">Next.js 16 + TypeScript</strong> — front e API rotas</li>
          <li>▸ <strong className="text-[var(--text)]">Supabase</strong> — banco de sessões anônimas</li>
          <li>▸ <strong className="text-[var(--text)]">Claude Haiku</strong> (Anthropic) — geração do copiloto</li>
          <li>▸ <strong className="text-[var(--text)]">GSAP</strong> — animações cinematográficas</li>
          <li>▸ <strong className="text-[var(--text)]">SVG pixel art</strong> — sprites 16×16 desenhados à mão</li>
          <li>▸ <strong className="text-[var(--text)]">Vercel</strong> — hospedagem free tier</li>
        </ul>
      </Section>

      <Section num="05" title="COMO FOI TESTADO" color="var(--sun-yellow)">
        <p className="mb-3">
          A matriz curso × perfil foi validada por <strong>2 scripts automáticos</strong>:
        </p>
        <div className="space-y-3">
          <div
            className="px-4 py-3 border-l-2"
            style={{ borderColor: "var(--mint)", background: "rgba(5,255,161,0.06)" }}
          >
            <p className="font-terminal text-xs uppercase tracking-widest mb-1" style={{ color: "var(--mint)" }}>
              ▸ personas-ideais (greedy)
            </p>
            <p className="text-sm">
              Pra cada um dos <strong>31 cursos</strong>, o script monta a &quot;persona perfeita&quot;
              (escolhe em cada cena a opção que mais ajuda esse curso) e verifica se ele
              sai como top 1. <strong className="text-[var(--mint)]">Atual: 27/31 ✓</strong>
            </p>
          </div>
          <div
            className="px-4 py-3 border-l-2"
            style={{ borderColor: "var(--grid-cyan)", background: "rgba(1,205,254,0.06)" }}
          >
            <p className="font-terminal text-xs uppercase tracking-widest mb-1" style={{ color: "var(--grid-cyan)" }}>
              ▸ Monte Carlo (1000 alunos × 31 cursos)
            </p>
            <p className="text-sm">
              Simula 1000 alunos &quot;típicos&quot; por curso com escolhas probabilísticas
              (softmax). Mede chance do curso esperado cair no top 1 e no top 3.{" "}
              <strong className="text-[var(--grid-cyan)]">Atual: 22/31 top 1 (média 76%)</strong> ·{" "}
              <strong className="text-[var(--grid-cyan)]">29/31 top 3 (média 98%)</strong>.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-[var(--text-dim)]">
          As confusões restantes acontecem entre cursos da mesma família (Medicina ↔ Biomedicina,
          IA ↔ Eng. Elétrica, Psicologia ↔ Pedagogia) — em todos os casos o curso esperado{" "}
          <strong>aparece no top 3</strong>, então o aluno vê ele entre os sugeridos.
        </p>
      </Section>

      <Section num="06" title="O QUE NÃO É" color="var(--sun-pink)">
        <ul className="list-none space-y-2">
          <li>▸ <strong>Não é diagnóstico vocacional.</strong> É uma conversa estruturada em formato de jogo.</li>
          <li>▸ <strong>Não passou por validação psicométrica</strong> (análise fatorial, teste-reteste, amostra normativa).</li>
          <li>▸ <strong>Não substitui orientação vocacional profissional</strong> — pra dúvida real, procura psicólogo(a) ou pedagogo(a).</li>
          <li>▸ <strong>O resultado é probabilístico</strong> — mostra os 3 mais compatíveis, não &quot;o curso certo&quot; pra você.</li>
          <li>▸ <strong>Seu futuro não cabe em 5 minutos de jogo</strong> — use isso só pra explorar.</li>
        </ul>
      </Section>

      <Section num="07" title="PRIVACIDADE" color="var(--mint)">
        <ul className="list-none space-y-2">
          <li>▸ <strong>Zero dado pessoal</strong> — não pedimos nome, email, idade, escola.</li>
          <li>▸ Cada aluno ganha um <strong>codinome aleatório</strong> (ex: SUPERNOVA-3).</li>
          <li>▸ O que salvamos: codinome + vetor de respostas + curso top. Anônimo.</li>
          <li>▸ Sem cookies de rastreamento, sem analytics de terceiros.</li>
        </ul>
      </Section>

      <Section num="08" title="OPERAÇÃO 8" color="var(--sun-pink)">
        <p>
          Projeto desenvolvido pela <strong>PROPPG-UFTM</strong> por{" "}
          <strong style={{ color: "var(--sun-yellow)" }}>Hebert × Ana</strong>{" "}
          em &lt; 1 mês pra a Feira de Profissões UFTM 2026 (26/05/2026).
        </p>
        <p className="mt-3 text-[var(--text-dim)] text-sm">
          Open source · feito com 💜 em Uberaba & Iturama.
        </p>
      </Section>

      <div className="mt-12 flex flex-wrap gap-4 justify-center border-t pt-8" style={{ borderColor: "var(--sun-pink)" }}>
        <Link
          href="/"
          className="font-pixel-title text-xs sm:text-sm uppercase tracking-widest px-5 py-3 border-2 transition-transform hover:scale-105"
          style={{
            borderColor: "var(--sun-yellow)",
            color: "var(--sun-yellow)",
            background: "rgba(255,247,0,0.08)",
            textShadow: "0 0 8px var(--sun-orange)",
          }}
        >
          ▸ EMBARCAR
        </Link>
        <Link
          href="/galeria"
          className="font-pixel-title text-xs sm:text-sm uppercase tracking-widest px-5 py-3 border-2 transition-transform hover:scale-105"
          style={{
            borderColor: "var(--grid-cyan)",
            color: "var(--grid-cyan)",
            background: "rgba(1,205,254,0.08)",
            textShadow: "0 0 8px var(--grid-cyan)",
          }}
        >
          ▸ TRIPULAÇÃO
        </Link>
        <Link
          href="/painel"
          className="font-pixel-title text-xs sm:text-sm uppercase tracking-widest px-5 py-3 border-2 transition-transform hover:scale-105"
          style={{
            borderColor: "var(--sun-pink)",
            color: "var(--sun-pink)",
            background: "rgba(255,46,147,0.08)",
            textShadow: "0 0 8px var(--sun-pink)",
          }}
        >
          ▸ ESTATÍSTICAS
        </Link>
      </div>

      <footer className="mt-10 text-center">
        <p
          className="font-terminal text-xs uppercase tracking-widest opacity-60"
          style={{ color: "var(--text-dim)" }}
        >
          // comissão interestelar · PROPPG-UFTM · 2026
        </p>
      </footer>
    </main>
  );
}
