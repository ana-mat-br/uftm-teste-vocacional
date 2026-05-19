# 🎨 Pipeline de Arte — 6 sprites SVG inline

**Plataforma:** independente de OS/GPU
**Orçamento:** R$ 0
**Estilo:** Pixel art cyberpunk fofo / synthwave sunset
**Implementado:** 6 SVGs, um por eixo de personalidade, escritos manualmente

> ⚠️ **Mudança de plano em 2026-05-19.** A v1.0 deste documento previa gerar sprites via Leonardo.ai e refinar no Piskel. No sprint apertado de 7 dias, optamos por **desenhar SVGs inline** — sem dependência externa, controle total da paleta synthwave, zero risco de IA gerar coisa estranha. Resultado: 6 sprites coesos em ~30 min.

---

## 🎯 Decisão e trade-offs

| Critério | Leonardo.ai + Piskel (v1.0) | SVG inline (atual) |
|---|---|---|
| Tempo de produção | 2-3 dias | ~30 min |
| Coesão visual | depende da geração | total (cores são vars CSS) |
| Risco de erro | alto (IA pode gerar feio) | zero |
| "Uau" visual | maior potencial | "geométrico mas charmoso" |
| Custo | grátis (com limites) | grátis sem limite |
| Dependência externa | sim (site, conta, créditos) | nenhuma |

**Conclusão:** pro prazo de 7 dias, SVG inline ganhou. Upgrade pra arte real é trivial depois da feira — basta substituir o arquivo PNG no `public/sprites/`.

---

## 🖼️ Os 6 sprites

Cada sprite é um SVG em `public/sprites/{eixo}.svg`, viewBox `0 0 16 16`. Cada `<rect>` é um pixel. Tudo escalado pra 128px ou 180px na UI com `image-rendering: pixelated`.

| Arquivo | Eixo | Identidade visual | Cor principal |
|---|---|---|---|
| `cuidador.svg` | CUI | corpo rosa pastel, coraçãozinho amarelo no topo | rosa claro `#ffb3d9` |
| `investigador.svg` | INV | corpo roxo, antena com sensor cyan, "óculos" cyan | roxo `#b026ff` |
| `construtor.svg` | CON | corpo laranja, engrenagem amarela no topo | laranja `#ff6b35` |
| `comunicador.svg` | COM | corpo amarelo, balão de fala no canto, "bocha aberta" | amarelo `#fff95e` |
| `transformador.svg` | TRA | corpo magenta, bandeirinha tricolor no mastro | magenta `#ff2e93` |
| `cultivador.svg` | CUL | corpo rosa, folhinha verde no topo | rosa `#ff8fc8` + verde `#7ee787` |

**Estrutura comum** de todos os sprites:
- Cabeça + corpo (10x6 pixels)
- 2 olhos (2x2 pixels cada) com 1 pixel de brilho branco
- Bochechas (1 pixel de cada lado)
- 2 pernas (2x1 pixels cada)
- Acessório no topo distintivo (rows 0-3)

A coesão vem de: mesma silhueta, mesma escala dos olhos, paleta restrita a 8 cores synthwave.

---

## 🎨 Paleta usada nos sprites

```css
--bg-deep:    #1a0633   /* não usado em sprite, é o fundo */
--sun-orange: #ff6b35
--sun-pink:   #ff2e93
--sun-yellow: #ffcc00
--grid-cyan:  #00f0ff

/* Variações dos sprites */
#ff8fc8  /* rosa pastel suave */
#ffb3d9  /* rosa mais claro */
#b026ff  /* roxo neon */
#7ee787  /* verde do Cultivador */
#5cb868  /* verde escuro do Cultivador */
#fff95e  /* amarelo claro do Comunicador */
#cc1a6e  /* magenta escuro do Transformador */
#4a1078  /* roxo escuro (contorno/olhos do Cuidador) */
#fff      /* brilho dos olhos */
```

---

## 🔧 Como editar um sprite

1. Abre `public/sprites/{eixo}.svg` no editor (ou Piskel se quiser visual)
2. Cada `<rect x="X" y="Y" width="W" height="H" fill="#COR"/>` é um bloco de pixels
3. Salva. O Next.js dev server hot-reloada.
4. Confere o resultado em `public/sprites/preview.html` (grid dos 6 lado a lado)

---

## 👀 Preview

Abrir no browser:
```bash
open public/sprites/preview.html
```

Mostra os 6 sprites a 128px cada com glow synthwave aplicado (drop-shadow ciano + rosa).

Em produção, o sprite renderizado no `/resultado` tem 180px com float animation (3s ease-in-out).

---

## 🔄 Como substituir por arte real (pós-feira)

1. Gerar 6 PNGs 32×32 com fundo transparente (Leonardo.ai, freelancer, Aseprite, etc)
2. Salvar em `public/sprites/cuidador.png`, etc. (mesmos nomes-base)
3. Em `data/bixinhos.ts`, mudar o mapa pra apontar pros `.png` em vez de `.svg`
4. CSS `image-rendering: pixelated` continua o mesmo
5. Sem mais nenhuma mudança de código

---

## 🔗 Ferramentas relevantes (caso alguém queira refazer com IA)

- **Leonardo.ai** — modelo "Pixel Art XL", grátis 150 créditos/dia
- **Bing Image Creator** — DALL-E 3 grátis via Microsoft
- **Recraft.ai** — bom no estilo pixel
- **Piskel** (piskelapp.com) — editor de pixel art no browser, grátis
- **TinyPNG** — comprime PNGs em ~70% sem perda visível
- **Lospec.com** — paletas synthwave de referência

Para a v2 pós-feira, recomendamos contratar 1-2h de freelancer de pixel art (Workana/Twitter, ~R$ 100-200) pra ter sprites com mais detalhe e personalidade.
