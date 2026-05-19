# 🎨 Design System — Protocolo Vocação

**Versão:** 1.0
**Estética:** Synthwave Sunset (cyberpunk fofo + pôr-do-sol vaporwave)

---

## Princípios

1. **Pixel art primeiro** — sprites em PNG, sempre com `image-rendering: pixelated`
2. **Glow é a linguagem** — cores neon com `text-shadow` e `box-shadow` saturados
3. **Mobile-first** — desenhado pra tela < 480px de largura
4. **Texto pixel font sempre** — sem sans-serif "modernas"
5. **Espaço pra respirar** — apesar dos neons, layouts limpos, sem poluição

---

## 🎨 Paleta

```css
:root {
  /* Backgrounds */
  --bg-deep: #1a0633;       /* roxo profundo (topo do céu) */
  --bg-mid: #4a1078;        /* roxo médio (transição) */

  /* Sol / Acentos quentes */
  --sun-orange: #ff6b35;
  --sun-pink: #ff2e93;
  --sun-yellow: #ffcc00;

  /* Grid / Acento frio */
  --grid-cyan: #00f0ff;

  /* Texto */
  --text: #fff8e7;          /* off-white quentinho */
  --text-dim: #d4a8ff;      /* lavanda pra labels */

  /* Auxiliares */
  --whatsapp: #25d366;
  --twitter: #1da1f2;
}
```

### Gradiente sunset (assinatura)

```css
background: linear-gradient(180deg,
  #1a0633 0%,    /* roxo profundo */
  #3d0a5c 20%,
  #6b0f8a 40%,
  #ff2e93 60%,   /* magenta */
  #ff6b35 78%,   /* laranja */
  #ffcc00 88%,   /* amarelo */
  #1a0633 100%
);
```

### Sol gigante (radial gradient)

```css
background: radial-gradient(
  ellipse 380px 280px at 50% 42%,
  var(--sun-yellow) 0%,
  var(--sun-orange) 30%,
  var(--sun-pink) 55%,
  transparent 75%
);
```

### Grid em perspectiva

```css
.grid-floor {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 30%;
  background-image:
    linear-gradient(rgba(0, 240, 255, 0.6) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.6) 1px, transparent 1px);
  background-size: 30px 30px;
  transform: perspective(180px) rotateX(55deg);
  transform-origin: bottom;
  mask-image: linear-gradient(to top, black 45%, transparent 100%);
}
```

---

## 🔤 Tipografia

Todas via Google Fonts (free, carregam rápido):

| Fonte | Uso | Tamanhos |
|---|---|---|
| **Press Start 2P** | Títulos, nomes, marcas | 9–13px (corpo), 18–22px (destaque) |
| **VT323** | Terminal, labels, metadados | 12–16px |
| **Pixelify Sans** | Corpo de texto, botões, falas | 14–16px |

```html
<link href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=Pixelify+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Regras de uso

- **NUNCA** use sans-serif modernas (Inter, Helvetica, etc) — quebra a estética
- Press Start 2P em tamanho pequeno (≤ 13px) — fica nítida e legível
- VT323 pode crescer mais — desenhada pra terminal grande
- Texto longo (>3 linhas) → use Pixelify Sans, é a mais legível

---

## 🌟 Efeitos

### Glow neon (text-shadow)

```css
.glow-pink {
  text-shadow: 0 0 14px var(--sun-pink), 0 2px 0 var(--sun-orange);
}

.glow-yellow {
  text-shadow: 0 0 16px var(--sun-yellow);
}

.glow-cyan {
  text-shadow: 0 0 8px var(--grid-cyan);
}
```

### Glow neon (box-shadow)

```css
.box-glow {
  box-shadow:
    0 0 25px rgba(255, 46, 147, 0.5),
    inset 0 0 15px rgba(255, 107, 53, 0.15);
}
```

### Scanlines CRT (sutis)

```css
.scanlines::after {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px, transparent 2px,
    rgba(255, 255, 255, 0.04) 3px,
    rgba(255, 255, 255, 0.04) 3px
  );
  pointer-events: none;
}
```

### Flutuação (co-piloto)

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.bixinho-sprite {
  animation: float 3s ease-in-out infinite;
  filter:
    drop-shadow(0 0 12px var(--sun-yellow))
    drop-shadow(0 0 20px var(--sun-pink));
}
```

### Pulsação (dots, alerts)

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
```

---

## 🖼️ Sprites Pixel Art

### Especificações

- **Resolução nativa:** 32×32 px (sprite ideal)
- **Resolução renderizada na UI:** 128–180 px (escala 4×–5,6×)
- **Formato:** PNG com transparência
- **Paleta:** limitada a 8–16 cores (estilo retro)
- **CSS obrigatório:**

```css
.bixinho-sprite {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}
```

### Estrutura do co-piloto (composição)

Cada co-piloto final = corpo-base + paleta + antena + acessório

| Camada | Variações |
|---|---|
| **Corpo-base** | 6 (um por eixo dominante) |
| **Paleta** | 4–5 variações (a sortear) |
| **Antena/topo** | 3–4 modelos |
| **Acessório** | 4 modelos (livro, estetoscópio, planta, engrenagem…) |

= **centenas de combinações únicas** com ~20 assets desenhados.

### Cores do sprite (synthwave)

Cada sprite deve usar **principalmente** cores da paleta sunset:

- Tons de rosa: `#ff2e93`, `#ff5fa8`, `#ffb3d9`
- Tons de laranja: `#ff6b35`, `#ff8c5a`
- Tons de amarelo: `#ffcc00`, `#fff95e`
- Detalhes em ciano: `#00f0ff` (olhos, antena)
- Roxo profundo só pra contorno: `#4a1078`

> Detalhes de produção em [PIPELINE-ARTE.md](PIPELINE-ARTE.md).

---

## 📐 Componentes

### Painel principal

```css
.panel {
  border: 2px solid var(--sun-pink);
  background: rgba(26, 6, 51, 0.75);
  backdrop-filter: blur(6px);
  padding: 20px 16px;
  box-shadow:
    0 0 40px rgba(255, 46, 147, 0.4),
    inset 0 0 30px rgba(255, 107, 53, 0.1);
}
```

### Botão de compartilhamento

```css
.share-btn {
  font-family: 'Pixelify Sans', monospace;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 8px;
  border: 2px solid;
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: transform 0.2s;
}
.share-btn:active { transform: translateY(-2px); }
```

### Caixa de mensagem do co-piloto

```css
.bixinho-msg {
  padding: 12px 14px;
  border-left: 3px solid var(--sun-yellow);
  background: linear-gradient(90deg, rgba(255, 204, 0, 0.1), transparent);
  font-style: italic;
}
.bixinho-msg::before {
  content: '☼ ';
  color: var(--sun-yellow);
}
```

---

## 📱 Formatos de Compartilhamento

### 1. Tela de resultado (in-app)

- **Proporção:** vertical livre, scroll permitido
- **Largura máx:** 480px
- **Contém:** todos os elementos (header, co-piloto, resultado, alternativos, mensagem, botões)
- **Arquivo de referência:** `prototipos/carta-prototipo-b-synthwave.html`

### 2. Story do Instagram (9:16)

- **Resolução:** 1080 × 1920 px
- **Sem botões, sem scroll** — 1 quadro só
- **Inclui QR Code** pra amigos fazerem o teste
- **Espaço pra stickers** do Instagram nas bordas
- **Arquivo de referência:** `prototipos/story-instagram.html`

### 3. Post de Feed (1:1)

- **Resolução:** 1080 × 1080 px
- **Layout horizontal-friendly** — co-piloto à esquerda, info à direita
- **Inclui handle @uftm.oficial** sempre
- **A produzir** — `prototipos/feed-instagram.html` (TODO)

### 4. Preview WhatsApp / X (Open Graph)

- **Resolução:** 1200 × 630 px (1.91:1)
- **Gerado via `@vercel/og`** server-side
- **URL única por aluno** para preview rico
- **A implementar** no Next.js (TODO)

---

## ✅ Accessibility

- Contraste mínimo 4.5:1 em textos importantes
- `aria-label` em todos os botões com emoji apenas
- Sem texto **só** em pixel font abaixo de 14px (legibilidade)
- Animações respeitam `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .bixinho-sprite { animation: none; }
}
```

---

## 🚫 O que NÃO fazer

- ❌ Sans-serif modernas (Inter, Roboto)
- ❌ Cores pastel/claras (perde a vibe synthwave)
- ❌ Sombras suaves (queremos `text-shadow` neon agressivo)
- ❌ Bordas arredondadas excessivas (>16px raio)
- ❌ Stardew Valley / fantasia rural (descartado em favor do synthwave)
- ❌ Cyberpunk hacker monocromático (descartado em favor do sunset quente)
