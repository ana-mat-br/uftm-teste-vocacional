/**
 * Painel público de estatísticas agregadas — sem PII.
 * Server component; revalida a cada 30s pra suportar uso ao vivo na feira.
 */

import { getSupabaseAdmin } from "@/lib/supabase";
import { EIXOS, eixoDominante, type VetorEixos } from "@/lib/matching";
import { AREAS, areaDoCurso, type AreaKey } from "@/lib/areas";
import { PageNav } from "@/components/PageNav";

export const revalidate = 30;

type SessaoRow = {
  id: string;
  iniciado_em: string;
  finalizado_em: string | null;
  vetor: VetorEixos | null;
  curso_top: string | null;
  user_agent_tipo: string | null;
};

const EIXO_LABELS: Record<string, string> = {
  CUI: "Cuidador",
  INV: "Investigador",
  CON: "Construtor",
  COM: "Comunicador",
  TRA: "Transformador",
  CUL: "Cultivador",
  TEC: "Decifrador",
};

function fmtPct(n: number, total: number): string {
  if (total === 0) return "0%";
  return `${Math.round((n / total) * 100)}%`;
}

function fmtDuracao(ms: number): string {
  if (!isFinite(ms) || ms <= 0) return "—";
  const min = Math.floor(ms / 60000);
  const seg = Math.floor((ms % 60000) / 1000);
  return `${min}m ${String(seg).padStart(2, "0")}s`;
}

function StatCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div
      className="px-4 py-3 border-2"
      style={{
        borderColor: "var(--sun-pink)",
        background: "rgba(26, 6, 51, 0.7)",
        boxShadow: "0 0 12px rgba(255, 46, 147, 0.25)",
      }}
    >
      <div
        className="font-terminal text-xs uppercase tracking-widest"
        style={{ color: "var(--text-dim)" }}
      >
        // {label}
      </div>
      <div
        className="font-pixel-title text-xl mt-1"
        style={{ color: "var(--sun-yellow)", textShadow: "0 0 10px var(--sun-orange)" }}
      >
        {value}
      </div>
      {hint && (
        <div
          className="font-terminal text-xs mt-1 opacity-70"
          style={{ color: "var(--text-dim)" }}
        >
          {hint}
        </div>
      )}
    </div>
  );
}

function BarraHorizontal({
  label,
  count,
  total,
  cor,
}: {
  label: string;
  count: number;
  total: number;
  cor?: string;
}) {
  const pct = total === 0 ? 0 : (count / total) * 100;
  return (
    <div className="font-pixel-body text-sm py-1">
      <div className="flex justify-between mb-0.5">
        <span style={{ color: "var(--text)" }}>{label}</span>
        <span style={{ color: "var(--text-dim)" }} className="font-terminal text-xs">
          {count} · {fmtPct(count, total)}
        </span>
      </div>
      <div className="h-1.5 w-full" style={{ background: "rgba(212, 168, 255, 0.15)" }}>
        <div
          className="h-1.5"
          style={{
            background: cor ?? "var(--grid-cyan)",
            width: `${pct}%`,
            boxShadow: `0 0 6px ${cor ?? "var(--grid-cyan)"}`,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

export default async function PainelPage() {
  let sessoes: SessaoRow[] = [];
  let erro: string | null = null;

  try {
    const sb = getSupabaseAdmin();
    const { data, error } = await sb
      .from("sessoes")
      .select("id, iniciado_em, finalizado_em, vetor, curso_top, user_agent_tipo")
      .order("finalizado_em", { ascending: false });
    if (error) throw error;
    sessoes = (data ?? []) as SessaoRow[];
  } catch (e) {
    erro = e instanceof Error ? e.message : "erro desconhecido";
  }

  // === Métricas ===
  const total = sessoes.length;

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const hoje = sessoes.filter(
    (s) => s.finalizado_em && new Date(s.finalizado_em) >= startOfToday,
  ).length;

  const umaHoraAtras = Date.now() - 60 * 60 * 1000;
  const ultimaHora = sessoes.filter(
    (s) => s.finalizado_em && new Date(s.finalizado_em).getTime() >= umaHoraAtras,
  ).length;

  // Duração média
  const duracoes = sessoes
    .filter((s) => s.iniciado_em && s.finalizado_em)
    .map((s) => new Date(s.finalizado_em!).getTime() - new Date(s.iniciado_em).getTime())
    .filter((d) => d > 0 && d < 30 * 60 * 1000); // ignora outliers (>30min)
  const duracaoMedia = duracoes.length
    ? duracoes.reduce((a, b) => a + b, 0) / duracoes.length
    : 0;

  // Top cursos (agrupa Letras como "Letras")
  const cursosCount = new Map<string, number>();
  for (const s of sessoes) {
    if (!s.curso_top) continue;
    const display = s.curso_top.startsWith("Letras") ? "Letras" : s.curso_top;
    cursosCount.set(display, (cursosCount.get(display) ?? 0) + 1);
  }
  const topCursos = [...cursosCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);

  // Distribuição por área
  const areasCount: Record<string, number> = {};
  for (const s of sessoes) {
    if (!s.curso_top) continue;
    const a = areaDoCurso(s.curso_top);
    if (a) areasCount[a] = (areasCount[a] ?? 0) + 1;
  }

  // Distribuição por eixo dominante
  const eixosCount: Record<string, number> = {};
  for (const s of sessoes) {
    if (!s.vetor || !Array.isArray(s.vetor) || s.vetor.length !== 7) continue;
    const eixo = eixoDominante(s.vetor as VetorEixos);
    eixosCount[eixo] = (eixosCount[eixo] ?? 0) + 1;
  }

  // User agent
  const uaCount: Record<string, number> = { "mobile-ios": 0, "mobile-android": 0, desktop: 0 };
  for (const s of sessoes) {
    if (s.user_agent_tipo && s.user_agent_tipo in uaCount) {
      uaCount[s.user_agent_tipo]++;
    }
  }

  if (erro) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="font-terminal text-base" style={{ color: "var(--sun-pink)" }}>
          // erro de transmissão
        </p>
        <p className="font-pixel-body text-base mt-4" style={{ color: "var(--text-dim)" }}>
          {erro}
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-6">
      <header className="mb-6">
        <div
          className="font-terminal text-sm tracking-widest uppercase anim-flicker"
          style={{ color: "var(--grid-cyan)" }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full mr-2 anim-pulse"
            style={{ background: "var(--sun-pink)" }}
          />
          UFTM-KEPLER · PAINEL DE TRANSMISSÕES
        </div>
        <h1
          className="font-pixel-title text-base sm:text-lg mt-3"
          style={{ color: "var(--sun-yellow)", textShadow: "0 0 10px var(--sun-orange)" }}
        >
          ESTATÍSTICAS DA EXPEDIÇÃO
        </h1>
        <p
          className="font-terminal text-xs mt-2 opacity-70"
          style={{ color: "var(--text-dim)" }}
        >
          dados anônimos · atualização a cada 30s
        </p>
      </header>

      {/* === Big numbers === */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <StatCard label="total" value={total} hint="desde o lançamento" />
        <StatCard label="hoje" value={hoje} hint="desde 00h" />
        <StatCard label="última hora" value={ultimaHora} hint="ao vivo" />
        <StatCard
          label="duração média"
          value={fmtDuracao(duracaoMedia)}
          hint={duracoes.length ? `n=${duracoes.length}` : ""}
        />
      </section>

      {total === 0 && (
        <div
          className="px-4 py-6 border-2 text-center mb-8"
          style={{ borderColor: "var(--sun-yellow)", background: "rgba(26, 6, 51, 0.5)" }}
        >
          <p className="font-pixel-body text-base" style={{ color: "var(--text-dim)" }}>
            sem transmissões registradas ainda — a missão começa quando o primeiro aluno embarca.
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {/* === Top cursos === */}
        <section
          className="px-4 py-4 border-l-2"
          style={{ borderColor: "var(--sun-pink)", background: "rgba(26, 6, 51, 0.4)" }}
        >
          <h2
            className="font-terminal text-xs uppercase tracking-widest mb-3"
            style={{ color: "var(--text-dim)" }}
          >
            // cursos mais escolhidos
          </h2>
          {topCursos.length === 0 ? (
            <p className="font-terminal text-xs opacity-50" style={{ color: "var(--text-dim)" }}>
              (vazio)
            </p>
          ) : (
            topCursos.map(([nome, count]) => (
              <BarraHorizontal
                key={nome}
                label={nome}
                count={count}
                total={total}
                cor="var(--sun-yellow)"
              />
            ))
          )}
        </section>

        {/* === Distribuição por área === */}
        <section
          className="px-4 py-4 border-l-2"
          style={{ borderColor: "var(--grid-cyan)", background: "rgba(26, 6, 51, 0.4)" }}
        >
          <h2
            className="font-terminal text-xs uppercase tracking-widest mb-3"
            style={{ color: "var(--text-dim)" }}
          >
            // distribuição por área
          </h2>
          {(Object.keys(AREAS) as AreaKey[]).map((k) => {
            const area = AREAS[k];
            const count = areasCount[k] ?? 0;
            return (
              <BarraHorizontal
                key={k}
                label={`${area.emoji} ${area.titulo}`}
                count={count}
                total={total}
                cor={area.cor}
              />
            );
          })}
        </section>
      </div>

      {/* === Eixos dominantes === */}
      <section
        className="px-4 py-4 border-l-2 mb-8"
        style={{ borderColor: "var(--sun-yellow)", background: "rgba(26, 6, 51, 0.4)" }}
      >
        <h2
          className="font-terminal text-xs uppercase tracking-widest mb-3"
          style={{ color: "var(--text-dim)" }}
        >
          // eixo principal dos alunos
        </h2>
        {EIXOS.map((e) => (
          <BarraHorizontal
            key={e}
            label={`${e} · ${EIXO_LABELS[e]}`}
            count={eixosCount[e] ?? 0}
            total={total}
            cor="var(--sun-orange)"
          />
        ))}
      </section>

      {/* === Mobile vs Desktop === */}
      <section
        className="px-4 py-4 border-l-2 mb-8"
        style={{ borderColor: "var(--grid-cyan)", background: "rgba(26, 6, 51, 0.4)" }}
      >
        <h2
          className="font-terminal text-xs uppercase tracking-widest mb-3"
          style={{ color: "var(--text-dim)" }}
        >
          // dispositivos
        </h2>
        <BarraHorizontal
          label="📱 iOS"
          count={uaCount["mobile-ios"]}
          total={total}
          cor="var(--grid-cyan)"
        />
        <BarraHorizontal
          label="🤖 Android"
          count={uaCount["mobile-android"]}
          total={total}
          cor="var(--grid-cyan)"
        />
        <BarraHorizontal
          label="🖥️ Desktop"
          count={uaCount.desktop}
          total={total}
          cor="var(--text-dim)"
        />
      </section>

      <PageNav current="painel" />

      <footer
        className="font-terminal text-xs mt-10 opacity-70 text-center"
        style={{ color: "var(--text-dim)" }}
      >
        UFTM · Feira de Profissões 2026 · zero dado pessoal coletado
        <br />
        // OPERAÇÃO7 HEBERT×ANA · PROPPG-UFTM
      </footer>
    </main>
  );
}
