-- Adiciona coluna pra coletar feedback do aluno sobre o resultado.
-- Valores: 'positivo' (me representa) | 'neutro' (mais ou menos) | 'negativo' (não me representa)
-- Não-PII. Continua anônimo.

ALTER TABLE sessoes ADD COLUMN IF NOT EXISTS feedback_resultado text;

CREATE INDEX IF NOT EXISTS idx_sessoes_feedback ON sessoes(feedback_resultado)
  WHERE feedback_resultado IS NOT NULL;
