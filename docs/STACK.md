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
│  VERCEL (Next.js 16 — App Router + Turbopack)   │
│  • SSG nas cenas  • API Routes server           │
│  • html2canvas client-side (D4)                 │
└────┬────────────────────────┬───────────────────┘
     │                        │
     ▼                        ▼
┌──────────────┐    ┌──────────────────────────┐
│  SUPABASE    │    │  ANTHROPIC API           │
│  (Postgres)  │    │  Claude Haiku 4.5        │
│  ANÔNIMO:    │    │  Input: codinome, vetor, │
│  • sessoes   │    │         curso            │
│  • eventos   │    │  Output: nome co-piloto,   │
│              │    │          personalidade,  │
│              │    │          msg despedida   │
└──────────────┘    └──────────────────────────┘
```

---

## Componentes

### Frontend + Backend: **Next.js 16 (App Router + Turbopack)**

**Por quê:**
- Ana já sabe React/Next
- API Routes em `app/api/.../route.ts` pra lógica server (Server Actions também serviria; preferimos route handlers explícitos)
- Bundle splitting automático + SSG nas cenas (todas pré-renderizadas)
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
  respostas       jsonb,                    -- [{"cena":2,"opcao":0}, ...]  (opcao = índice 0..N)
  vetor           jsonb,                    -- [CUI, INV, CON, COM, TRA, CUL]
  curso_top       text,
  curso_alt1      text,
  curso_alt2      text,
  bixinho_nome    text,                     -- "KÉPLER-Δ7" (gerado pelo Haiku ou fallback)
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
│   ├── page.tsx                      # Home / onboarding (Cena 1)
│   ├── cena/[id]/page.tsx            # Cenas 2-10 (server, com generateStaticParams)
│   ├── resultado/page.tsx            # Resultado (delega pra Resultado.tsx)
│   ├── api/
│   │   └── finalizar/route.ts        # Server: top 3 cursos + Haiku + insert Supabase
│   ├── layout.tsx
│   └── globals.css                   # Paleta synthwave global
├── components/
│   ├── BotaoEmbarcar.tsx             # Client: gera codinome + redirect /cena/2
│   ├── CenaQuiz.tsx                  # Client: render cena + opções + transição
│   └── Resultado.tsx                 # Client: chama /api/finalizar e monta a Carta
├── lib/
│   ├── matching.ts                   # similaridade cosseno + topCursos + eixoDominante
│   ├── codinome.ts                   # gerador "ESTRELA-7"
│   ├── sessao.ts                     # tipos + helpers de localStorage
│   ├── use-sessao.ts                 # hook React useSessao()
│   ├── supabase.ts                   # cliente server-side com secret key
│   └── claude.ts                     # chama Haiku 4.5 e parseia JSON
├── data/
│   ├── cenas.ts                      # 9 cenas pontuáveis estruturadas
│   ├── cursos.ts                     # 31 cursos UFTM com vetor
│   ├── bixinhos.ts                   # mapa eixo → sprite
│   ├── bixinhos-fallback.ts          # templates pré-escritos se Haiku falhar
│   └── codinomes.ts                  # re-export de gerarCodinome
├── public/
│   └── sprites/                      # 6 SVGs pixel art + preview.html
├── supabase/
│   └── migrations/001_init.sql       # Schema das tabelas sessoes + eventos
├── scripts/
│   ├── test-connections.ts           # smoke test Supabase + Anthropic
│   └── check-sessoes.ts              # lista últimas 10 sessões salvas
└── docs/                             # esta documentação
```

---

## Variáveis de Ambiente

```bash
# .env.local (NUNCA commitar)
# Supabase usa o NOVO formato de keys (2025+): publishable + secret
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
SUPABASE_SECRET_KEY=sb_secret_...
NEXT_PUBLIC_SITE_URL=https://uftm-teste-vocacional.vercel.app
```

---

## Comandos de setup (já executados em D1)

```bash
npx create-next-app@latest uftm-teste-vocacional --typescript --tailwind --app

cd uftm-teste-vocacional
npm install @supabase/supabase-js @anthropic-ai/sdk html2canvas
npm install -D tsx dotenv

cp .env.local.example .env.local   # depois preencher
npm run dev
```

A Vercel está conectada via integração com GitHub — push pra `main` faz redeploy automaticamente. Env vars setadas no painel Vercel.

---

## Métricas de Performance Target

| Métrica | Target |
|---|---|
| First Contentful Paint | < 1.5s no 3G |
| Time to Interactive | < 3s no 3G |
| Bundle JS inicial | < 200kb gzip |
| Lighthouse Mobile | ≥ 80 |
