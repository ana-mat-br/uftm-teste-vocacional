# PRD — Protocolo Vocação UFTM 2087

**Versão:** 1.0
**Data:** 2026-05-19
**Autora:** Ana Paula Fernandes (UFTM)
**Status:** Design fechado, pré-implementação

---

## 1. Problema & Oportunidade

Estudantes do Ensino Médio que visitam a Feira de Profissões da UFTM enfrentam três problemas simultâneos:

1. **Paradoxo da escolha** — ~30 cursos de graduação em poucas horas
2. **Informação repetitiva** — cada estande explica seu curso, mas o aluno raramente compara
3. **Quizzes vocacionais tradicionais falham** — perguntas diretas ("você gosta de exatas?") são facilmente "trapaceadas", o aluno responde o que acha que *deveria* querer ser

**Oportunidade:** transformar a visita à feira em uma experiência narrativa memorável e compartilhável, que:
- reduz o paradoxo da escolha apresentando 3 cursos compatíveis (não 30)
- entrega um artefato visual único (bixinho + carta) que o aluno quer postar
- gera marketing orgânico para a UFTM via redes sociais
- aproxima a UFTM da Gen Z com linguagem e estética próprias

---

## 2. Público-alvo

| Camada | Quem | Tamanho estimado |
|---|---|---|
| **Primário** | Estudantes 2º/3º ano EM, 16–18 anos, visitando a feira presencialmente | Centenas a milhares na feira |
| **Secundário** | Rede social desses estudantes (amigos, colegas, família) | Milhares por compartilhamento |
| **Terciário** | UFTM como instituição (marketing/captação) | Indireto, mas estratégico |

**Persona principal:** "Júlia, 17 anos, 3º ano. Tem o vestibular daqui 8 meses. Não sabe se quer Medicina (pressão familiar) ou Psicologia (paixão própria). Vai à feira meio perdida, com o celular na mão e Instagram aberto."

---

## 3. Objetivos e Métricas

### OKRs do MVP

| Objetivo | KR / Métrica | Meta MVP |
|---|---|---|
| Engajar visitantes | Taxa de conclusão do quiz | ≥ 70% |
| Viralizar | % de concluintes que clica em "compartilhar" | ≥ 30% |
| Cobrir cursos | Cursos representados nos resultados (no mín. uma vez) | 100% dos 31 |
| Validar experiência | NPS pós-quiz (1 pergunta no fim) | ≥ 50 |
| Aproximar UFTM | % com @instagram preenchido (opt-in) | ≥ 40% |

### Métricas operacionais
- Tempo médio de conclusão: **4–6 minutos**
- Taxa de erro técnico: **< 1%**
- Tempo de carregamento inicial: **< 2s no 3G**

---

## 4. Conceito do Produto

### Narrativa
"**Expedição UFTM 2087**" — Ano 2087, a UFTM virou centro de pesquisa interplanetário e está montando a primeira missão tripulada ao exoplaneta Kepler-186f. O aluno é candidato e suas decisões durante uma jornada narrativa de 12 cenas revelam qual papel ele tem na tripulação.

### Resultado
1. **Papel na missão** (ex: "Oficial Médica de Bordo")
2. **Curso correspondente no século XXI** (ex: Medicina)
3. **Top 2 cursos alternativos** (ex: Psicologia, Enfermagem)
4. **Bixinho-IA companheiro** (sprite pixel art + nome + personalidade gerados por LLM)
5. **Carta-comunicado** com tudo isso, compartilhável

### Conceito-chave
A pontuação dos eixos de personalidade é **invisível** ao aluno. Ele não sabe que está sendo medido — ele está tomando decisões numa história. Isso elimina o viés de "responder o esperado".

> Detalhes em [ROTEIRO.md](ROTEIRO.md) e [MATRIZ-EIXOS.md](MATRIZ-EIXOS.md).

---

## 5. Escopo do MVP

### IN — entra no MVP
- ✅ Web app mobile-first, acesso via QR Code
- ✅ 12 perguntas/cenas em formato narrativo
- ✅ Algoritmo de matching: respostas → 6 eixos → top 3 cursos
- ✅ Carta final estilo "Comunicado da Comissão Interestelar"
- ✅ Bixinho pixel art (sprite + nome/personalidade gerados por LLM)
- ✅ Geração de imagem 9:16 (Stories) e 1:1 (Feed) via html2canvas
- ✅ Compartilhamento: Instagram, WhatsApp, X
- ✅ Coleta opcional: nome + @instagram + cidade + escola
- ✅ Consentimento LGPD explícito
- ✅ Dashboard simples de métricas

### OUT — fica pra v2
- ❌ Geração de imagem por IA em tempo real
- ❌ Conta persistente / login
- ❌ Versão multi-vestibular / multi-instituição
- ❌ Múltiplos idiomas
- ❌ App nativo iOS/Android
- ❌ Modo offline

---

## 6. Restrições do Projeto

| Restrição | Implicação |
|---|---|
| **Prazo:** < 1 mês a partir de 2026-05-19 | Escopo enxuto, MVP só |
| **Orçamento:** R$ 0 | Stack 100% free tier |
| **Equipe:** 1 pessoa (Ana, voluntária) | Cortar tudo que não for crítico |
| **Sem aprovação institucional pesada** | Decisões diretas, sem comitê |
| **Mobile-first via QR Code** | Web app responsivo, < 500kb JS |
| **Wifi/4G ruim na feira** | App leve, tolerante a 3G |
| **Público menor de idade** | LGPD rigorosa, coleta mínima |

---

## 7. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|---|:-:|:-:|---|
| Wifi/4G fraco na feira | 🔴 Alta | 🔴 Alto | Bundle JS < 500kb, sprites em PNG otimizado, sem vídeos |
| Coleta de dados de menor + LGPD | 🟡 Média | 🔴 Alto | Consentimento explícito, dados opcionais, sem foto, sem geo |
| LLM gera carta inadequada | 🟡 Média | 🔴 Alto | Prompt restrito + templates pré-aprovados por curso |
| Quiz "errar" o curso e frustrar | 🟡 Média | 🟡 Médio | Sempre top 3, framing "explore também" — não "você é isso" |
| Ana sozinha não dar conta em < 1 mês | 🔴 Alta | 🔴 Alto | Cortar escopo agressivo, usar bibliotecas prontas, sem features novas |
| Estudantes não escanearem o QR | 🟡 Média | 🟡 Médio | Banner físico chamativo + estande UFTM "te ajudo a escanear" |
| Resultado parece raso/genérico | 🟡 Média | 🟡 Médio | LLM personaliza a carta com base nas escolhas, não só no curso final |
| 31 cursos = muitas combinações | 🟢 Baixa | 🟡 Médio | Sistema de similaridade vetorial, não árvore de decisão |

---

## 8. Métricas de Sucesso pós-feira

Em 30 dias após a feira:
- Posts no Instagram com #ProtocoloVocacaoUFTM ou marcando @uftm.oficial
- Aumento de visitas no site uftm.edu.br (Google Analytics)
- Aumento de menções da UFTM no Twitter/X
- Inscrições no vestibular (longo prazo, difícil de atribuir diretamente)

---

## 9. Próximos passos

Ver [CRONOGRAMA.md](CRONOGRAMA.md) para detalhes das 3,5 semanas até o evento.

**Bloqueios imediatos:**
1. Data exata da feira (ainda não definida)
2. Validação da matriz curso↔eixos com colegas de áreas que Ana conhece menos
3. Decisão sobre quem produz os 20 sprites pixel art
