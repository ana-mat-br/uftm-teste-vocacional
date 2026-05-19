# 🛠️ Stack Técnica

**Restrições:** orçamento R$ 0, < 1 mês, 1 dev, mobile-first, escala de centenas–milhares de usuários no evento

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
│  • SSR/SSG  • Server Actions  • @vercel/og      │
└────┬────────────────────────┬───────────────────┘
     │                        │
     ▼                        ▼
┌──────────────┐    ┌──────────────────────────┐
│  SUPABASE    │    │  ANTHROPIC API           │
│  (Postgres)  │    │  Claude Haiku 4.5        │
│  • respostas │    │  • nome+personalidade    │
│  • leads     │    │    do bixinho            │
│  • métricas  │    │  • mensagem despedida    │
└──────────────┘    └──────────────────────────┘
```

---

## Componentes

### Frontend + Backend: **Next.js 14 (App Router)**

**Por quê:**
- ✅ Ana já sabe React/Next
- ✅ Server Actions eliminam necessidade de API separada
- ✅ SSG/ISR pras páginas estáticas (quiz scaffolding)
- ✅ Bundle splitting automático
- ✅ Deploy zero-config na Vercel
- ✅ `@vercel/og` integrado pra gerar OG images dinâmicas (preview WhatsApp/X)

**Versão:** 14.x (latest stable)

### Hosting: **Vercel (Free Tier)**

| Recurso | Free tier | Suficiente? |
|---|---|---|
| Bandwidth | 100 GB/mês | ✅ Sim — assets leves |
| Builds | 6000 min/mês | ✅ Sim |
| Serverless Functions | 100 GB-h | ✅ Sim |
| Edge Functions | 500k invocações | ✅ Sim |
| Domínio custom | Sim, com SSL | ✅ Sim |

**Risco:** se viralizar muito (>10k usuários simultâneos), pode estourar bandwidth. Mitigação: configurar alerta de 80% do limite.

### Banco de Dados: **Supabase (Free Tier)**

| Recurso | Free tier | Suficiente? |
|---|---|---|
| Database | 500 MB | ✅ Sim |
| Bandwidth | 5 GB/mês | ✅ Sim |
| Auth users | 50k | ✅ N/A (sem login) |
| Edge Functions | 500k invocações | ✅ N/A |

**Por quê:** Postgres relacional cabe perfeito (respostas → cursos via JOIN), tem RLS pra LGPD, dashboards prontos.

### LLM: **Claude Haiku 4.5** (Anthropic API)

**Por quê este modelo:**
- ✅ Excelente em PT-BR (importante pro tom criativo)
- ✅ Latência baixa (~1-2s)
- ✅ Custo baixíssimo
- ✅ Suporte a system prompt longo (template controlado)

**Custos estimados:**

| Item | Tokens | Custo unitário* | Custo por aluno |
|---|---|---|---|
| Input (prompt + escolhas) | ~600 | US$ 1/MTok | US$ 0,0006 |
| Output (nome + personalidade + msg) | ~150 | US$ 5/MTok | US$ 0,00075 |
| **Total por aluno** | | | **~R$ 0,007** |

*Valores aproximados em 2026. 1000 alunos = ~R$ 7. 10000 alunos = ~R$ 70.

**Configuração de segurança:**
- `max_tokens: 200` — cap pra evitar custos descontrolados
- System prompt restrito a templates pré-aprovados
- Sem PII no prompt (só nome de bixinho e vetor numérico)

### Compartilhamento social: **html2canvas**

- Biblioteca client-side que captura DOM como imagem
- Gera PNG 1080×1920 (Story) e 1080×1080 (Feed) no momento do compartilhamento
- ~30kb gzip
- Trade-off: rende um pouco diferente de browser pra browser → testar em iOS Safari + Chrome Android

**Alternativa avaliada:** `@vercel/og` server-side. Pros: consistência total. Contras: latência extra + complexidade. **Decisão:** usar html2canvas pro MVP, considerar `@vercel/og` em v2.

### Analytics: **Vercel Analytics + tabela própria**

- Vercel Analytics (free): page views, web vitals
- Tabela `eventos` no Supabase pra métricas de produto:
  - quiz_iniciado
  - cena_completada (cena_id, eixo_dominante)
  - quiz_concluido (curso_top, tempo_total)
  - compartilhamento_clicado (rede)
  - share_completado (rede) — via callback

---

## Estrutura de Pastas (proposta)

```
uftm-teste-vocacional/
├── app/                          # Next.js App Router
│   ├── (quiz)/
│   │   ├── page.tsx              # Onboarding (Cena 1)
│   │   ├── cena/[id]/page.tsx    # Cena 2-11 dinâmica
│   │   └── resultado/page.tsx    # Cena 12 (Carta)
│   ├── api/
│   │   ├── gerar-bixinho/route.ts  # chama Claude Haiku
│   │   └── salvar-resposta/route.ts # salva no Supabase
│   ├── og/route.tsx              # Open Graph image (@vercel/og)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── BixinhoSprite.tsx
│   ├── CartaResultado.tsx
│   ├── CenaQuiz.tsx
│   └── BotoesShare.tsx
├── lib/
│   ├── matriz-eixos.ts           # vetores dos 31 cursos
│   ├── matching.ts               # similaridade cosseno
│   ├── supabase.ts
│   └── claude.ts
├── data/
│   ├── cenas.ts                  # roteiro estruturado
│   └── bixinhos.ts               # mapa eixo → variação sprite
├── public/
│   ├── sprites/                  # 20 PNGs pixel art
│   └── qr-code-uftm.png
├── docs/                         # esta documentação
├── prototipos/                   # protótipos HTML standalone
└── ...
```

---

## Comandos de setup (futuro)

```bash
# Criar projeto Next.js
npx create-next-app@latest uftm-teste-vocacional --typescript --tailwind --app

# Dependências
npm install @supabase/supabase-js @anthropic-ai/sdk html2canvas qrcode

# Dev
npm run dev

# Deploy
vercel
```

---

## Variáveis de Ambiente

```bash
# .env.local (NUNCA commitar)
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=ey...
SUPABASE_SERVICE_ROLE_KEY=ey...
NEXT_PUBLIC_SITE_URL=https://protocolo.uftm.edu.br
```

---

## Métricas de Performance Target

| Métrica | Target | Por quê |
|---|---|---|
| First Contentful Paint | < 1.5s no 3G | Aluno não desistir antes de começar |
| Time to Interactive | < 3s no 3G | Quiz responsivo |
| Bundle JS inicial | < 200kb gzip | Wifi/4G ruim na feira |
| Imagens totais | < 500kb | Sprites comprimidos (TinyPNG) |
| Lighthouse Mobile | ≥ 90 | Boa prática |

---

## Decisões avaliadas e descartadas

| Opção | Por que descartei |
|---|---|
| **Astro em vez de Next.js** | Ana já sabe Next; menos integração com html2canvas/OG |
| **Vercel KV / Upstash Redis** | Sobra grátis no Supabase; complexidade extra desnecessária |
| **GPT-4o-mini em vez de Haiku** | Haiku mais barato e melhor em PT-BR pra texto criativo |
| **Geração de sprite real-time (Stable Diffusion)** | Latência alta + risco de geração inadequada + custo $$ |
| **App nativo iOS/Android** | Atrito de instalação mata conversão; web mobile basta |
| **Tailwind sem CSS custom** | Estética synthwave precisa CSS custom (gradientes complexos) |
