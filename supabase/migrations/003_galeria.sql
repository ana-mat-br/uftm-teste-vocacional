-- Galeria pública de co-pilotos + agregação de stats por cena.
-- Aditivo: índice DESC pra paginar sessões finalizadas por mais recentes
-- + função SQL que agrega respostas por opção sem fetch JS pesado.
-- Galeria mostra só codinome + sprite + curso_top — zero PII.

CREATE INDEX IF NOT EXISTS idx_sessoes_finalizado_em_desc
  ON sessoes (finalizado_em DESC NULLS LAST)
  WHERE finalizado_em IS NOT NULL;

-- Agrega respostas (jsonb array) por opção pra uma cena específica.
-- Chamada via supabase.rpc('stats_cena', { cena_id: 2 }).
CREATE OR REPLACE FUNCTION stats_cena(cena_id int)
RETURNS TABLE(opcao int, n bigint)
LANGUAGE sql
STABLE
AS $$
  SELECT
    (r->>'opcao')::int AS opcao,
    COUNT(*) AS n
  FROM sessoes,
  LATERAL jsonb_array_elements(respostas) r
  WHERE finalizado_em IS NOT NULL
    AND respostas IS NOT NULL
    AND (r->>'cena')::int = cena_id
  GROUP BY opcao
  ORDER BY opcao;
$$;
