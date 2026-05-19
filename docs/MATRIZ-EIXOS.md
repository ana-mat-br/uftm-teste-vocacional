# 🧬 Matriz de Eixos × Cursos UFTM

**Versão:** 0.1 (não validada com colegas ainda)
**Cursos:** 31 (29 Uberaba + 2 exclusivos Iturama)
**Eixos:** 6

---

## Os 6 Eixos de Personalidade

| # | Eixo | Essência | Cursos âncora |
|---|---|---|---|
| 1 | **Cuidador** (CUI) | Empatia, cuidar do outro | Medicina, Enfermagem, Psicologia, Fisio, TO, Nutrição, Serv. Social, Ed. Especial |
| 2 | **Investigador** (INV) | Curiosidade, pesquisa, "por quê" | Biomedicina, Física, Química, Ciências Biológicas |
| 3 | **Construtor** (CON) | Resolver, criar, calcular, sistemas | Engenharias, Banco de Dados, IA, Matemática |
| 4 | **Comunicador** (COM) | Conectar, expressar, ensinar | Letras (×2), Pedagogia |
| 5 | **Transformador** (TRA) | Justiça, mudança social, contexto | História, Geografia, Ed. Campo, Ed. Física |
| 6 | **Cultivador** (CUL) | Trabalhar com o vivo, sustentabilidade | Agronomia, Zootecnia, Eng. Ambiental, Ciências Biológicas |

> O eixo "Cultivador" foi adicionado depois de notar que Agronomia/Zoo/Ambiental ficavam mal representadas pelos 5 eixos clássicos. O eixo "Analista" original foi **fundido com Construtor** porque só Matemática dominava ele puramente.

---

## Matriz Completa (cursos × eixos)

Pesos de 0 a 3 (3 = afinidade máxima). Vetor do curso = `[CUI, INV, CON, COM, TRA, CUL]`.

### 🩺 Área Saúde / Cuidado

| Curso | CUI | INV | CON | COM | TRA | CUL | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Medicina | **3** | 3 | 1 | 2 | 2 | 1 | Uberaba |
| Enfermagem | **3** | 1 | 1 | 2 | 1 | 1 | Uberaba |
| Psicologia | **3** | 2 | 0 | 3 | 1 | 2 | Uberaba |
| Fisioterapia | **3** | 1 | 2 | 1 | 1 | 0 | Uberaba |
| Terapia Ocupacional | **3** | 1 | 2 | 2 | 1 | 1 | Uberaba |
| Nutrição | **3** | 2 | 1 | 1 | 2 | 2 | Uberaba |
| Serviço Social | **3** | 1 | 0 | 2 | **3** | 0 | Uberaba |
| Educação Especial e Inclusiva | **3** | 1 | 1 | 2 | 2 | 0 | Iturama |

### 🔬 Área Investigação / Ciências Naturais

| Curso | CUI | INV | CON | COM | TRA | CUL | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Biomedicina | 2 | **3** | 1 | 0 | 0 | 1 | Uberaba/Iturama |
| Ciências Biológicas | 1 | **3** | 1 | 1 | 1 | 3 | Uberaba/Iturama |
| Física | 0 | **3** | 2 | 0 | 0 | 0 | Uberaba |
| Química | 1 | **3** | 2 | 0 | 0 | 1 | Uberaba/Iturama |

### 🔧 Área Construção / Tecnologia

| Curso | CUI | INV | CON | COM | TRA | CUL | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Engenharia Civil | 0 | 1 | **3** | 1 | 1 | 0 | Uberaba |
| Engenharia Mecânica | 0 | 2 | **3** | 0 | 0 | 0 | Uberaba |
| Engenharia Elétrica | 0 | 2 | **3** | 0 | 0 | 0 | Uberaba |
| Engenharia Química | 0 | 2 | **3** | 0 | 0 | 1 | Uberaba |
| Engenharia de Produção | 0 | 1 | **3** | 2 | 1 | 0 | Uberaba |
| Engenharia Ambiental | 1 | 2 | **3** | 1 | 2 | **3** | Uberaba |
| Engenharia de Alimentos | 1 | 2 | **3** | 0 | 0 | 2 | Uberaba |
| Banco de Dados | 0 | 2 | **3** | 0 | 0 | 0 | Uberaba |
| Inteligência Artificial | 0 | **3** | **3** | 0 | 1 | 0 | Uberaba |
| Matemática | 0 | 2 | **3** | 1 | 0 | 0 | Uberaba |

### 📢 Área Comunicação / Educação

| Curso | CUI | INV | CON | COM | TRA | CUL | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Letras (PT/ESP) | 1 | 2 | 1 | **3** | 1 | 0 | Uberaba |
| Letras (PT/ING) | 1 | 2 | 1 | **3** | 1 | 0 | Uberaba |
| Pedagogia | **3** | 1 | 1 | **3** | 2 | 0 | Uberaba |

### ⚡ Área Transformação / Humanidades

| Curso | CUI | INV | CON | COM | TRA | CUL | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|---|
| História | 1 | 2 | 0 | 2 | **3** | 0 | Uberaba |
| Geografia | 1 | 2 | 1 | 1 | **3** | 2 | Uberaba |
| Educação Física | **3** | 1 | 1 | 2 | 2 | 1 | Uberaba |
| Licenciatura em Educação do Campo | 2 | 1 | 1 | 2 | **3** | **3** | Uberaba |

### 🌱 Área Cultivo / Natureza

| Curso | CUI | INV | CON | COM | TRA | CUL | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Agronomia | 1 | **3** | 2 | 1 | 1 | **3** | Uberaba/Iturama |
| Zootecnia | 2 | **3** | 2 | 1 | 0 | **3** | Iturama |

---

## Algoritmo de Matching

```typescript
type Vetor = [number, number, number, number, number, number]; // [CUI, INV, CON, COM, TRA, CUL]

function similaridadeCosseno(a: Vetor, b: Vetor): number {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dot / (magA * magB);
}

function topCursos(vetorAluno: Vetor, cursos: { nome: string; vetor: Vetor; campus: string }[]) {
  return cursos
    .map(curso => ({
      ...curso,
      score: similaridadeCosseno(vetorAluno, curso.vetor)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}
```

### Por que cosseno e não euclidiana?

Similaridade de cosseno mede **direção** do vetor, não magnitude. Um aluno que pontuou alto em tudo (engajou bastante) ainda vai bater com o curso certo, porque o que importa é a **proporção** entre os eixos. A distância euclidiana puniria injustamente perfis "fortes".

---

## Validação Recomendada

Antes do MVP ir ao ar, a matriz deve ser revisada por:

- [ ] 1 colega da área de Saúde (Medicina/Enfermagem/Psicologia)
- [ ] 1 colega da área de Engenharias / Exatas
- [ ] 1 colega da área de Humanidades / Letras
- [ ] 1 colega da área de Agronomia / Bio (Iturama)

Cada um confirma se os pesos do(s) curso(s) dele(a) parecem coerentes. Tempo estimado: 15 min por pessoa.

---

## Notas Importantes

1. **Cursos disponíveis em ambos campi** (Agronomia, Biomedicina, Bio, Química) devem mostrar "disponível em Uberaba e Iturama" no resultado
2. **Educação Especial e Zootecnia** são exclusivos de Iturama — destacar isso no resultado pra alunos que se encaixarem
3. **Empates** entre top 2 e top 3 são resolvidos pela Cena 11 (Reflexão), que dá um boost final ao eixo escolhido
4. A matriz é uma **v0.1** — pode (e deve) ser ajustada com base em feedback de quem fizer o quiz
