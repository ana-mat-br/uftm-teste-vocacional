# 🛠️ Stack Técnica

**Restrições:** orçamento R$ 0, 7 dias, 1 dev, mobile-first, centenas–milhares de usuários

---

## Resumo

```
┌─────────────────────────────────────────────────┐
│         CELULAR DO ALUNO (QR Code)              │
└────────────────┬────────────────────────────────┘
                 │ HTTPS
                 ▼
┌─────────────────────────────────────────────────┐
│  VERCEL (Next.js 14 — App Router)               │
│  • SSR/SSG  • Server Actions                    │
│  • html2canvas client-side                      │
└────┬────────────────────────┬───────────────────┘
     │                        │
     ▼                        ▼
┌──────────────┐    ┌──────────────────────────┐
│  SUPABASE    │    │  ANTHROPIC API           │
│  (Postgres)  │    │  Claude Haiku 4.5        │
│  ANÔNIMO:    │    │  Input: codinome, vetor, │
│  • sessoes   │    │         curso            │
│  • eventos   │    │  Output: nome bixinho,   │
│              │    │          personalidade,  │
│              │    │          msg despedida   │
└──────────────┘    └──────────────────────────┘
```

---

## Componentes

### Frontend + Backend: **Next.js 14 (App Router)**

**Por quê:**
- Ana já sabe React/Next
- Server Actions eliminam necessidade de API separada
- Bundle splitting automático
- Deploy zero-config na Vercel

### Hosting: **Vercel (Free Tier)**

| Recurso | Free tier |
|---|---|
| Bandwidth | 100 GB/mês |
| Builds | 6000 min/mês |
| Serverless Functions | 100 GB-h |
| Edge Functions | 500k invocações |

### Banco: **Supabase (Free Tier)**

Schema simplificado (sem PII):

```sql
-- Cada quiz feito gera uma sessão anônima
CREATE TABLE sessoes (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codinome        text NOT NULL,            -- "ESTRELA-7" (gerado, não fornecido)
  iniciado_em     timestamptz DEFAULT now(),
  finalizado_em   timestamptz,
  respostas       jsonb,                    -- [{cena:2, opcao:"A"}, ...]
  vetor           jsonb,                    -- [CUI, INV, CON, COM, TRA, CUL]
  curso_top       text,
  curso_alt1      text,
  curso_alt2      text,
  bixinho_nome    text,                     -- "KÉPLER-Δ7"
  user_agent_tipo text                      -- "mobile-ios"|"mobile-android"|"desktop"
);

-- Eventos granulares pra análise de UX
CREATE TABLE eventos (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sessao_id   uuid REFERENCES sessoes(id) ON DELETE CASCADE,
  tipo        text NOT NULL,                -- "cena_completada", "share_clicado"
  payload     jsonb,
  criado_em   timestamptz DEFAULT now()
);

-- Configuração crítica: NÃO logar IP
-- Em Supabase Dashboard: Database → Logs → desativar IP retention
```

**Por quê este schema:**
- 2 tabelas só → simples
- jsonb pra respostas/vetor → flexível
- ON DELETE CASCADE pra evitar órfãos
- Sem campo de IP, geo, ou identificador externo

### LLM: **Claude Haiku 4.5** (Anthropic API)

**Input enviado** (zero PII):
```json
{
  "codinome": "ESTRELA-7",
  "vetor": [6, 8, 3, 5, 4, 7],
  "curso_top": "Biomedicina",
  "eixo_dominante": "Investigador"
}
```

**Output esperado:**
```json
{
  "bixinho_nome": "KÉPLER-Δ12",
  "personalidade": "curiosa demais pro próprio bem. acha pista em tudo.",
  "msg_despedida": "valeu ESTRELA-7, foi um barato investigar contigo. me marca no insta quando passar no vestibular."
}
```

**Custos:** ~R$ 0,007/aluno. 1000 alunos = R$ 7. 10000 alunos = R$ 70.

**Configuração de segurança:**
- `max_tokens: 200` — cap pra evitar custos
- `temperature: 0.9` — variedade nos textos
- System prompt restrito (templates de comportamento)

### Compartilhamento: **html2canvas**

- Client-side, gera PNG 9:16 (Stories)
- ~30kb gzip
- Web Share API quando disponível, download como fallback

### Analytics: **Vercel Analytics + queries no Supabase**

Vercel Analytics free + tabela `eventos` no Supabase.

---

## Métricas que dá pra extrair do banco

Queries que rodam direto no Supabase SQL Editor:

```sql
-- 1. Total e taxa de conclusão
SELECT
  COUNT(*) AS iniciados,
  COUNT(finalizado_em) AS finalizados,
  ROUND(COUNT(finalizado_em)::numeric / COUNT(*) * 100, 1) AS taxa_conclusao
FROM sessoes;

-- 2. Top 10 cursos resultantes
SELECT curso_top, COUNT(*) AS qtd
FROM sessoes
WHERE finalizado_em IS NOT NULL
GROUP BY curso_top
ORDER BY qtd DESC
LIMIT 10;

-- 3. Distribuição de eixos dominantes
SELECT
  CASE
    WHEN (vetor->>'0')::int = (SELECT MAX(v::int) FROM jsonb_array_elements_text(vetor) v) THEN 'CUI'
    WHEN (vetor->>'1')::int = (SELECT MAX(v::int) FROM jsonb_array_elements_text(vetor) v) THEN 'INV'
    -- etc...
  END AS eixo_dominante,
  COUNT(*) AS qtd
FROM sessoes
WHERE finalizado_em IS NOT NULL
GROUP BY eixo_dominante;

-- 4. Tempo médio de conclusão
SELECT
  AVG(EXTRACT(EPOCH FROM (finalizado_em - iniciado_em))) AS segundos_medio
FROM sessoes
WHERE finalizado_em IS NOT NULL;

-- 5. Cliques em compartilhar por rede
SELECT
  payload->>'rede' AS rede,
  COUNT(*) AS cliques
FROM eventos
WHERE tipo = 'share_clicado'
GROUP BY rede;

-- 6. Cena com maior abandono
SELECT
  payload->>'ultima_cena' AS ultima_cena,
  COUNT(*) AS abandonos
FROM sessoes
WHERE finalizado_em IS NULL
GROUP BY ultima_cena
ORDER BY abandonos DESC;
```

---

## Estrutura de Pastas

```
uftm-teste-vocacional/
├── app/
│   ├── page.tsx                      # Onboarding
│   ├── cena/[id]/page.tsx            # Cena 2-11
│   ├── resultado/page.tsx            # Carta
│   ├── api/
│   │   └── finalizar/route.ts        # Salva no Supabase + chama Haiku
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── BixinhoSprite.tsx
│   ├── CartaResultado.tsx
│   ├── CenaQuiz.tsx
│   └── StoryTemplate.tsx             # 9:16 oculto pra html2canvas
├── lib/
│   ├── matching.ts                   # similaridade cosseno
│   ├── codinome.ts                   # gerador "ESTRELA-7"
│   ├── supabase.ts
│   └── claude.ts
├── data/
│   ├── cenas.ts                      # roteiro estruturado
│   ├── cursos.ts                     # 31 cursos com vetor
│   └── codinomes.ts                  # prefixos astronômicos
├── public/
│   ├── sprites/                      # 6 PNGs pixel art
│   ├── og-image.png                  # OG image estática
│   └── qr-code.png                   # QR Code do quiz
└── ...
```

---

## Variáveis de Ambiente

```bash
# .env.local (NUNCA commitar)
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_SUPABASE_URL=https://....supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ey...
SUPABASE_SERVICE_ROLE_KEY=ey...
NEXT_PUBLIC_SITE_URL=https://protocolo-vocacao-uftm.vercel.app
```

---

## Comandos de setup (D1)

```bash
npx create-next-app@latest uftm-teste-vocacional --typescript --tailwind --app

cd uftm-teste-vocacional
npm install @supabase/supabase-js @anthropic-ai/sdk html2canvas

# Já está no git, conectar à Vercel:
vercel link
vercel env add ANTHROPIC_API_KEY
vercel env add NEXT_PUBLIC_SUPABASE_URL
# etc...

npm run dev
```

---

## Métricas de Performance Target

| Métrica | Target |
|---|---|
| First Contentful Paint | < 1.5s no 3G |
| Time to Interactive | < 3s no 3G |
| Bundle JS inicial | < 200kb gzip |
| Lighthouse Mobile | ≥ 80 |
