-- Schema inicial — Protocolo Vocação UFTM
-- Zero PII. Dados anônimos agregados.

CREATE TABLE IF NOT EXISTS sessoes (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codinome        text NOT NULL,
  iniciado_em     timestamptz NOT NULL DEFAULT now(),
  finalizado_em   timestamptz,
  respostas       jsonb,
  vetor           jsonb,
  curso_top       text,
  curso_alt1      text,
  curso_alt2      text,
  bixinho_nome    text,
  user_agent_tipo text
);

CREATE INDEX IF NOT EXISTS idx_sessoes_finalizado_em ON sessoes(finalizado_em);
CREATE INDEX IF NOT EXISTS idx_sessoes_curso_top ON sessoes(curso_top);

CREATE TABLE IF NOT EXISTS eventos (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sessao_id   uuid REFERENCES sessoes(id) ON DELETE CASCADE,
  tipo        text NOT NULL,
  payload     jsonb,
  criado_em   timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_eventos_sessao_id ON eventos(sessao_id);
CREATE INDEX IF NOT EXISTS idx_eventos_tipo ON eventos(tipo);

-- RLS habilitado em ambas as tabelas (Supabase aplicou no Run).
-- O cliente NUNCA acessa Supabase diretamente. Toda interação passa pelo
-- Next.js server (Server Action / API route) usando SUPABASE_SERVICE_ROLE_KEY,
-- que bypassa RLS. Sem políticas adicionais necessárias.
ALTER TABLE sessoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE eventos ENABLE ROW LEVEL SECURITY;
