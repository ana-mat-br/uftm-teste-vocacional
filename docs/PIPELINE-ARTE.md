# 🎨 Pipeline de Arte — Pixel Art Synthwave

**Plataforma:** Mac M-series (sem GPU NVIDIA dedicada)
**Orçamento:** R$ 0
**Estilo:** Pixel art cyberpunk fofo / synthwave sunset
**Quantidade alvo:** ~20 sprites finais (6 corpos × 3-4 variações)

---

## 🎯 Output esperado

Cada sprite final deve ser:

- **32×32 pixels** (nativo) ou **64×64** (com mais detalhe)
- **PNG** com fundo transparente
- **Paleta limitada:** 8–16 cores da paleta synthwave (ver [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md))
- **Visual:** criatura fofa, antena/topo distinto, olhos grandes, glow latente
- **Coesão:** todos parecem da mesma "família"

---

## 🔧 Ferramentas (todas gratuitas)

### 1. Geração inicial: **Leonardo.ai**

- **URL:** https://leonardo.ai
- **Custo:** 150 créditos/dia grátis (~30 imagens)
- **Modelo:** "Pixel Art" (preset pronto)
- **Por quê:** zero instalação, interface boa, qualidade consistente

**Backup:** **DiffusionBee** (app Mac nativo, grátis, ilimitado mas ~30s/imagem no M1/M2)

### 2. Refino: **Piskel** ou **Aseprite**

- **Piskel:** https://piskelapp.com — grátis, web, zero instalação
- **Aseprite:** US$ 20 OU compilar grátis pelo source
- **Uso:** downscale pra 32×32, ajustar paleta, limpar artefatos, exportar PNG

### 3. Compressão: **TinyPNG**

- **URL:** https://tinypng.com
- **Uso:** reduzir tamanho dos PNGs em ~70% sem perda visível

### 4. (Opcional) **Photopea**

- **URL:** https://photopea.com — Photoshop grátis no navegador
- **Uso:** ajustes finos de cor, máscara, batch

---

## 📝 Prompt-Base para Leonardo.ai

```
pixel art character, 32x32 sprite, cute mascot creature, front-facing, 
synthwave palette (hot pink, sunset orange, neon yellow, cyan accents), 
glowing eyes, small antenna on top, simple silhouette, 
clean pixels, no anti-aliasing, transparent background, 
isolated character study
```

### Variações por eixo de personalidade

Cada eixo precisa de um corpo-base que sugira a personalidade:

| Eixo | Variação de prompt | Sugestão visual |
|---|---|---|
| **Cuidador** | `soft round body, gentle expression, holding heart-shape` | Bixinho rosa fofo, olhar protetor |
| **Investigador** | `curious expression, magnifying glass or one big eye, scientific accessory` | Olho destacado, lupa |
| **Construtor** | `geometric body, gear or tool accessory, sharp angles, mechanical hints` | Engrenagem na cabeça, formas geométricas |
| **Comunicador** | `mouth/speaker accessory, megaphone or speech-bubble, lively pose` | Bixinho com balão de fala |
| **Transformador** | `dynamic pose, flag or fist accessory, bold colors` | Postura ativa, pose de "vamos lá" |
| **Cultivador** | `leaf or flower on top, earthy tones mixed with synthwave` | Folhinha em vez de antena |

### Parâmetros recomendados no Leonardo.ai

- **Aspect ratio:** 1:1 (square)
- **Image dimensions:** 512×512 ou 768×768 (gera grande, downscale depois)
- **Number of images:** 4 (pra escolher o melhor)
- **PhotoReal:** OFF
- **Alchemy:** OFF (consome mais créditos)
- **Negative prompt:** `realistic, 3d, photograph, blurry, anti-aliasing, smooth, gradient`

---

## 🔄 Pipeline passo a passo

### Etapa 1 — Gerar bruto (Leonardo.ai)

1. Abra https://leonardo.ai → Image Generation
2. Selecione modelo "Pixel Art"
3. Cole o prompt-base + variação do eixo
4. Configure 512×512, 4 imagens
5. Gere
6. Salve os 2-3 melhores

**Tempo:** ~5 min por eixo × 6 eixos = **30 min**

### Etapa 2 — Downscale (Piskel)

1. Abra https://piskelapp.com
2. New Sprite → Import Image
3. Carregue o PNG gerado
4. **Crítico:** marque "Resize" pra 32×32 com **nearest-neighbor** (não bilinear!)
5. O resultado vai parecer "pixelado de verdade" agora
6. Exporte PNG 32×32

**Tempo:** ~3 min por sprite

### Etapa 3 — Refinar paleta (Piskel)

1. Identifique cores fora da paleta synthwave (verdes, marrons, etc)
2. Substitua pelas cores corretas usando o Color Picker do Piskel
3. Suavize bordas onde ficou estranho
4. Adicione/ajuste antena, olhos, acessório

**Tempo:** ~5-15 min por sprite

### Etapa 4 — Variações de cor

Pra cada corpo-base, criar **3-4 variações de cor**:

1. Duplique o sprite no Piskel
2. Use "Color Swap" pra trocar cor principal
3. Combinações sugeridas:
   - Rosa principal + amarelo acento
   - Laranja principal + ciano acento
   - Magenta principal + amarelo acento
   - Roxo principal + rosa acento

**Tempo:** ~2 min por variação = **30 min totais**

### Etapa 5 — Comprimir e organizar

1. Passe todos pelos TinyPNG
2. Renomeie seguindo convenção: `bixinho-{eixo}-{variacao}.png`
   - Exemplo: `bixinho-cuidador-rosa.png`, `bixinho-construtor-ciano.png`
3. Salve em `public/sprites/` no repo

**Tempo:** ~10 min

---

## ⏱️ Estimativa Total

| Etapa | Tempo |
|---|---|
| Geração bruta (Leonardo.ai) | 30 min |
| Downscale dos 6 corpos-base | 20 min |
| Refino de paleta | 60 min |
| Variações de cor (3 × 6 = 18 sprites) | 30 min |
| Compressão + organização | 10 min |
| Buffer pra retrabalho | 30 min |
| **TOTAL** | **~3 horas** |

Dividido em 2 dias de trabalho focado (1,5h cada).

---

## 🎁 Bônus: Composição dinâmica

Em vez de gerar TODAS as combinações possíveis, dá pra **compor em runtime**:

```html
<div class="bixinho">
  <img class="corpo" src="/sprites/corpo-cuidador.png" />
  <img class="antena" src="/sprites/antena-flor.png" />
  <img class="acessorio" src="/sprites/acessorio-coracao.png" />
</div>
```

Com CSS `filter: hue-rotate(45deg)` pra paletas alternativas → multiplica variações sem mais sprites.

---

## ✅ Checklist final do sprite

- [ ] 32×32 ou 64×64 pixels exatos
- [ ] Fundo transparente
- [ ] Sem anti-aliasing (pixels duros)
- [ ] Apenas cores da paleta synthwave
- [ ] Olhos visíveis (ponto de empatia)
- [ ] Antena ou topo distinto
- [ ] Acessório opcional sugerindo o eixo
- [ ] Renderiza bem em 128px e 180px (zoom × 4 e × 5,6)
- [ ] Comprimido com TinyPNG
- [ ] Nome do arquivo seguindo convenção

---

## ⚠️ Armadilhas comuns

1. **Anti-aliasing furtivo:** Leonardo às vezes gera pixel art com bordas suaves. Sempre conferir após downscale, e se necessário, redesenhar bordas no Piskel.
2. **Paleta vazando:** se o Leonardo usar verdes/marrons "naturais", quebra a estética. Substituir manualmente.
3. **Inconsistência de proporção:** pode gerar uns sprites com cabeça gigante, outros com cabeça pequena. Pedir prompts com `proportional body`.
4. **Resolução errada no CSS:** sem `image-rendering: pixelated`, o navegador embaça tudo. Sempre aplicar no CSS.

---

## 🔗 Recursos

- **Paletas synthwave de referência:** https://lospec.com/palette-list/tag/synthwave
- **Inspiração visual:** Pixel Starships, Hyper Light Drifter, Moonlighter, FTL
- **Tutoriais pixel art:** https://saint11.org/blog/pixel-art-tutorials/
- **Asset packs grátis (referência):** https://itch.io/game-assets/free/tag-pixel-art
