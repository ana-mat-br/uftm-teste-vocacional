# 🧬 Matriz de Eixos × Cursos UFTM

**Versão:** 0.2 (eixo TEC adicionado; Matemática realocada)
**Cursos:** 31 (29 Uberaba + 2 exclusivos Iturama)
**Eixos:** 7

---

## Os 7 Eixos de Personalidade

| # | Eixo | Essência | Cursos âncora |
|---|---|---|---|
| 1 | **Cuidador** (CUI) | Empatia, cuidar do outro | Medicina, Enfermagem, Psicologia, Fisio, TO, Nutrição, Serv. Social, Ed. Especial |
| 2 | **Investigador** (INV) | Curiosidade, pesquisa, "por quê" | Biomedicina, Física, Química, Ciências Biológicas, Matemática |
| 3 | **Construtor** (CON) | Construir coisas físicas, engenharias do mundo real | Eng. Civil, Mecânica, Elétrica, Química, Produção, Ambiental, Alimentos |
| 4 | **Comunicador** (COM) | Conectar, expressar, ensinar | Letras (×2), Pedagogia |
| 5 | **Transformador** (TRA) | Justiça, mudança social, contexto | História, Geografia, Ed. Campo, Ed. Física |
| 6 | **Cultivador** (CUL) | Trabalhar com o vivo, sustentabilidade | Agronomia, Zootecnia, Eng. Ambiental, Ciências Biológicas |
| 7 | **Decifrador** (TEC) ⭐ | Computação, dados, lógica, sistemas digitais | Banco de Dados, IA, Matemática |

### Histórico de mudanças

- **v0.2 (2026-05-19)** — Split do Construtor:
  - Adicionado eixo **TEC ("Decifrador")** pra distinguir "construir coisas físicas" de "decifrar/operar sistemas digitais"
  - **Matemática** movida de CON→INV+TEC (mais coerente com a natureza teórica do curso na UFTM)
  - **Banco de Dados** e **IA** agora têm TEC dominante (eram CON antes, o que confundia eng. de produção com BD)
  - Motivação: o eixo CON era "genérico demais" e ganhava com muita facilidade (10 cursos com CON=3); agora ele tem 7 cursos âncora, mais cirúrgico
- **v0.1 (2026-05-19)** — Versão inicial com 6 eixos (Analista fundido em Construtor, Cultivador novo)

---

## Matriz Completa (cursos × eixos)

Pesos de 0 a 3 (3 = afinidade máxima). Vetor do curso = `[CUI, INV, CON, COM, TRA, CUL, TEC]`.

### 🩺 Área Saúde / Cuidado

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Medicina | **3** | 3 | 1 | 2 | 2 | 1 | 0 | Uberaba |
| Enfermagem | **3** | 1 | 1 | 2 | 1 | 1 | 0 | Uberaba |
| Psicologia | **3** | 2 | 0 | 3 | 1 | 2 | 0 | Uberaba |
| Fisioterapia | **3** | 1 | 2 | 1 | 1 | 0 | 0 | Uberaba |
| Terapia Ocupacional | **3** | 1 | 2 | 2 | 1 | 1 | 0 | Uberaba |
| Nutrição | **3** | 2 | 1 | 1 | 2 | 2 | 0 | Uberaba |
| Serviço Social | **3** | 1 | 0 | 2 | **3** | 0 | 0 | Uberaba |
| Educação Especial e Inclusiva | **3** | 1 | 1 | 2 | 2 | 0 | 0 | Iturama |

### 🔬 Área Investigação / Ciências Naturais

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Biomedicina | 2 | **3** | 1 | 0 | 0 | 1 | 1 | Uberaba/Iturama |
| Ciências Biológicas | 1 | **3** | 1 | 1 | 1 | 3 | 0 | Uberaba/Iturama |
| Física | 0 | **3** | 2 | 0 | 0 | 0 | 1 | Uberaba |
| Química | 1 | **3** | 2 | 0 | 0 | 1 | 0 | Uberaba/Iturama |

### 🔧 Área Construtor / Engenharias físicas

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Engenharia Civil | 0 | 1 | **3** | 1 | 1 | 0 | 0 | Uberaba |
| Engenharia Mecânica | 0 | 2 | **3** | 0 | 0 | 0 | 1 | Uberaba |
| Engenharia Elétrica | 0 | 2 | **3** | 0 | 0 | 0 | 1 | Uberaba |
| Engenharia Química | 0 | 2 | **3** | 0 | 0 | 1 | 0 | Uberaba |
| Engenharia de Produção | 0 | 1 | 2 | 2 | 1 | 0 | 2 | Uberaba |
| Engenharia Ambiental | 1 | 2 | **3** | 1 | 2 | **3** | 0 | Uberaba |
| Engenharia de Alimentos | 1 | 2 | **3** | 0 | 0 | 2 | 0 | Uberaba |

### 💻 Área Decifrador / Computação + Dados + Matemática ⭐ novo

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Banco de Dados | 0 | 2 | 0 | 0 | 0 | 0 | **3** | Uberaba |
| Inteligência Artificial | 0 | **3** | 1 | 0 | 1 | 0 | **3** | Uberaba |
| Matemática | 0 | **3** | 0 | 1 | 0 | 0 | **3** | Uberaba |

### 📢 Área Comunicação / Educação

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Letras (PT/ESP) | 1 | 2 | 1 | **3** | 1 | 0 | 0 | Uberaba |
| Letras (PT/ING) | 1 | 2 | 1 | **3** | 1 | 0 | 0 | Uberaba |
| Pedagogia | **3** | 1 | 1 | **3** | 2 | 0 | 0 | Uberaba |

### ⚡ Área Transformação / Humanidades

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| História | 1 | 2 | 0 | 2 | **3** | 0 | 0 | Uberaba |
| Geografia | 1 | 2 | 1 | 1 | **3** | 2 | 1 | Uberaba |
| Educação Física | **3** | 1 | 1 | 2 | 2 | 1 | 0 | Uberaba |
| Licenciatura em Educação do Campo | 2 | 1 | 1 | 2 | **3** | **3** | 0 | Uberaba |

### 🌱 Área Cultivo / Natureza

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Agronomia | 1 | **3** | 2 | 1 | 1 | **3** | 0 | Uberaba/Iturama |
| Zootecnia | 2 | **3** | 2 | 1 | 0 | **3** | 0 | Iturama |

---

## Algoritmo de Matching

```typescript
type VetorEixos = [number, number, number, number, number, number, number];
// ordem: [CUI, INV, CON, COM, TRA, CUL, TEC]

function similaridadeCosseno(a: VetorEixos, b: VetorEixos): number {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dot / (magA * magB);
}

function topCursos(vetorAluno: VetorEixos, limite = 3) {
  return CURSOS
    .map(c => ({ ...c, score: similaridadeCosseno(vetorAluno, c.vetor) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limite);
}
```

### Por que cosseno e não euclidiana?

Similaridade de cosseno mede **direção** do vetor, não magnitude. Um aluno que pontuou alto em tudo (engajou bastante) ainda vai bater com o curso certo, porque o que importa é a **proporção** entre os eixos. A distância euclidiana puniria injustamente perfis "fortes".

---

## Mecanismos de aprimoramento do acerto (v0.2)

### Cena de desempate (`/desempate`)
Dispara quando o resultado seria classificado como **"exploratório"** pelo `nivelConfianca` — i.e., gap < 2% OU top1 < 80%. O aluno é redirecionado pra uma cena especial mostrando os top 3 cursos como cards; a escolha aplica `vetor_curso × 2` ao vetor original, deslocando o resultado pra família correta.

Perfis com top1 alto (mesmo com top2 colado por afinidade de família, ex: Medicina vs Biomedicina, Letras vs Pedagogia) vão **direto pro resultado**: o badge "🔀 perfil híbrido" já avisa que vale visitar todos os 3 estandes, e uma cena extra dilui a revelação final. Ver `lib/matching.ts::precisaDesempate`.

**v0.2 → v0.2.1 (2026-05-20):** threshold endurecido. Antes, `gap < 5%` disparava em quase todo perfil (ex: persona Medicina-leaning com top1 92% e gap 2.4% caía em desempate). Agora segue a mesma condição de "exploratório", reduzindo desempates a ~10-20% dos perfis genuinamente confusos.

### Indicador de confiança no resultado
Após o cálculo final, o aluno vê um badge informando a qualidade do match:

| Nível | Critério | UI |
|---|---|---|
| 🎯 **Alta afinidade** | gap ≥ 5% e top1 ≥ 85% | cyan, mensagem padrão |
| 🔀 **Perfil híbrido** | gap entre 2-5% ou top1 80-85% | amarelo, "vale visitar todos os 3 estandes" |
| ⚠️ **Resultado exploratório** | gap < 2% ou top1 < 80% | rosa, "ler sobre cada um com calma" |

Ver `lib/matching.ts::nivelConfianca`.

### Coleta de feedback
No fim da carta, 3 botões 👍/🤔/👎 perguntam *"esse resultado te representa?"*. Salvo na coluna `feedback_resultado` da tabela `sessoes`. Análise pós-feira:

```sql
SELECT curso_top, feedback_resultado, COUNT(*) as n
FROM sessoes
WHERE feedback_resultado IS NOT NULL
GROUP BY curso_top, feedback_resultado
ORDER BY curso_top, feedback_resultado;
```

Cursos com muitos "👎" são fortes candidatos a revisão da matriz na v0.3.

---

## Validação Recomendada

Antes do MVP ir ao ar, a matriz deve ser revisada por:

- [ ] 1 colega da área de Saúde (Medicina/Enfermagem/Psicologia)
- [ ] 1 colega das Engenharias físicas
- [ ] 1 colega da área de Computação/Matemática (eixo TEC novo — **prioridade pós-introdução**)
- [ ] 1 colega da área de Humanidades / Letras
- [ ] 1 colega da área de Agronomia / Bio (Iturama)

Cada um confirma se os pesos do(s) curso(s) dele(a) parecem coerentes. Tempo estimado: 15 min por pessoa.

---

## Notas Importantes

1. **Cursos disponíveis em ambos campi** (Agronomia, Biomedicina, Bio, Química) devem mostrar "disponível em Uberaba e Iturama" no resultado
2. **Educação Especial e Zootecnia** são exclusivos de Iturama — destacar isso no resultado pra alunos que se encaixarem
3. **Empates** entre top 1 e top 2 (gap < 5%) acionam a cena de desempate `/desempate`
4. A matriz é uma **v0.2** — pode (e deve) ser ajustada com base no feedback dos alunos coletado em `feedback_resultado`
5. **Decifrador (TEC)** é o eixo mais novo e o que mais merece atenção em validação — definir se IA pertence majoritariamente a TEC ou compartilha com INV é decisão de campo
