# 🧪 Personas Ideais por Curso UFTM

> **Geração automática** via greedy: pra cada curso, escolho em cada cena a opção cujo vetor de pontos tem maior produto escalar com o vetor do curso. Em seguida valido que essa persona retorna o curso como top 1.
>
> Use isso pra: (1) sanidade qualitativa — você lê a persona de Medicina e bate com sua intuição? (2) prova quantitativa — script verifica matematicamente que cada curso é alcançável.
>
> Regenere com: `npx tsx scripts/personas-ideais.ts`

## Resumo

**16/31 cursos validados** ✅

### ⚠️ Cursos não alcançáveis como top 1

- **Medicina** → veio Enfermagem (93.1%)
- **Psicologia** → veio Enfermagem (94.3%)
- **Fisioterapia** → veio Enfermagem (93.2%)
- **Terapia Ocupacional** → veio Enfermagem (92.0%)
- **Biomedicina** → veio Matemática (88.7%)
- **Engenharia Mecânica** → veio Física (97.4%)
- **Engenharia Elétrica** → veio Física (97.4%)
- **Engenharia Química** → veio Engenharia Mecânica (97.6%)
- **Engenharia Ambiental** → veio Agronomia (88.3%)
- **Engenharia de Alimentos** → veio Engenharia Química (97.3%)
- **Banco de Dados** → veio Inteligência Artificial (93.7%)
- **Inteligência Artificial** → veio Matemática (88.7%)
- **Educação Física** → veio Enfermagem (93.0%)
- **Agronomia** → veio Ciências Biológicas (95.5%)
- **Zootecnia** → veio Ciências Biológicas (95.5%)

Possíveis causas: vetor idêntico a outro curso (ex: Eng. Mec/Elétrica), vetor "redondo demais" que faz outro curso vencer por cosseno mesmo no greedy, ou gap de cobertura nas cenas. Investigar.

## Fundamentação do método

**1. Taxonomia inspirada em RIASEC (Holland, 1959)** — 7 eixos vocacionais adaptados pro contexto UFTM. Ver [`MATRIZ-EIXOS.md`](MATRIZ-EIXOS.md).

**2. Similaridade de cosseno** — mede direção, não magnitude. Padrão em sistemas de recomendação (Netflix, Spotify).

**3. Quiz com pontuação ponderada** — formato clássico (Myers-Briggs, 16 Personalities). Cada opção pontua 1-3 eixos.

**⚠️ O que ele NÃO é:** instrumento psicometricamente validado. É ferramenta de engajamento/exploração, não diagnóstico clínico. O feedback 👍🤔👎 da feira é o primeiro dataset de validação.

## Personas por área

### 🩺 Saúde / Cuidado

#### Medicina ⚠️

*Oficial Médica de Bordo* · Uberaba

> Diagnostica e trata doenças com contato direto ao paciente. Cuidador clinicamente curioso.

**Vetor do curso:** `[3,3,1,2,2,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 8 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[13,7,0,5,3,3,0]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Medicina)

**Top 3 completo:** Enfermagem 93.1% · Medicina 92.4% · Psicologia 91.7%

#### Enfermagem ✅

*Especialista em Cuidado Vital* · Uberaba

> Cuidado cotidiano, fica perto do paciente. Empatia + execução técnica.

**Vetor do curso:** `[3,1,1,2,1,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 10 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[15,1,0,10,1,3,0]`

**✅ Top 1: Enfermagem** 92.6%

**Top 3 completo:** Enfermagem 92.6% · Psicologia 88.2% · Pedagogia 86.9%

#### Psicologia ⚠️

*Conselheira de Tripulação* · Uberaba

> Saúde mental, escuta, intervenção comportamental. Cuida via comunicação.

**Vetor do curso:** `[3,2,0,3,1,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 10 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[14,3,0,10,1,3,0]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Psicologia)

**Top 3 completo:** Enfermagem 94.3% · Psicologia 92.2% · Pedagogia 88.6%

#### Fisioterapia ⚠️

*Técnica de Reabilitação* · Uberaba

> Reabilita o corpo. Cuidado pelo movimento e técnica física.

**Vetor do curso:** `[3,1,2,1,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 10 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[15,2,4,7,1,0,0]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Fisioterapia)

**Top 3 completo:** Enfermagem 93.2% · Fisioterapia 91.7% · Terapia Ocupacional 91.1%

#### Terapia Ocupacional ⚠️

*Mediadora de Adaptação* · Uberaba

> Ajuda pessoas a recuperar autonomia em atividades cotidianas.

**Vetor do curso:** `[3,1,2,2,1,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 10 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[15,1,2,10,1,0,0]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Terapia Ocupacional)

**Top 3 completo:** Enfermagem 92.0% · Pedagogia 89.8% · Educação Especial e Inclusiva 88.3%

#### Nutrição ✅

*Engenheira de Sustento* · Uberaba

> Alimentação como saúde. Ciência aplicada ao bem-estar.

**Vetor do curso:** `[3,2,1,1,2,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[12,6,0,3,3,7,0]`

**✅ Top 1: Nutrição** 94.2%

**Top 3 completo:** Nutrição 94.2% · Psicologia 90.6% · Enfermagem 89.5%

#### Serviço Social ✅

*Defensora de Direitos da Tripulação* · Uberaba

> Defende direitos sociais, ponte com políticas públicas.

**Vetor do curso:** `[3,1,0,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🌍 Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 8 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 9 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 10 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[11,0,2,8,9,0,0]`

**✅ Top 1: Serviço Social** 96.4%

**Top 3 completo:** Serviço Social 96.4% · Educação Especial e Inclusiva 96.3% · Pedagogia 95.7%

#### Educação Especial e Inclusiva ✅

*Especialista em Inclusão* · Iturama

> Ensina pessoas com necessidades específicas. Cuidado pedagógico (exclusivo Iturama).

**Vetor do curso:** `[3,1,1,2,2,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 8 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 9 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 10 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[16,0,2,7,4,0,0]`

**✅ Top 1: Educação Especial e Inclusiva** 91.6%

**Top 3 completo:** Educação Especial e Inclusiva 91.6% · Enfermagem 91.5% · Pedagogia 89.4%

### 🔬 Investigação / Ciências Naturais

#### Biomedicina ⚠️

*Pesquisadora de Vida Alienígena* · Uberaba/Iturama

> Pesquisa em saúde — lab, análises clínicas. Curiosidade científica com vocação de cuidar.

**Vetor do curso:** `[2,3,1,0,0,1,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,19,0,0,1,3,8]`

**⚠️ Top 1 calculado: Matemática** (esperado: Biomedicina)

**Top 3 completo:** Matemática 88.7% · Inteligência Artificial 87.5% · Biomedicina 85.9%

#### Ciências Biológicas ✅

*Cientista de Ecossistemas* · Uberaba/Iturama

> Estuda os seres vivos e ecossistemas. Pesquisador da vida.

**Vetor do curso:** `[1,3,1,1,1,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,13,1,0,1,12,3]`

**✅ Top 1: Ciências Biológicas** 93.0%

**Top 3 completo:** Ciências Biológicas 93.0% · Agronomia 88.3% · Zootecnia 86.1%

#### Física ✅

*Analista de Anomalias Espaciais* · Uberaba

> Estuda fenômenos físicos e teoria. Curiosidade abstrata pro mundo natural.

**Vetor do curso:** `[0,3,2,0,0,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[0,17,4,0,1,1,8]`

**✅ Top 1: Física** 93.0%

**Top 3 completo:** Física 93.0% · Inteligência Artificial 92.9% · Matemática 89.3%

#### Química ✅

*Especialista em Atmosferas* · Uberaba/Iturama

> Estuda matéria, reações e transformações. Cientista do micro.

**Vetor do curso:** `[1,3,2,0,0,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,15,6,0,1,5,2]`

**✅ Top 1: Química** 96.2%

**Top 3 completo:** Química 96.2% · Física 91.8% · Biomedicina 90.2%

### 🔧 Construção / Engenharias físicas

#### Engenharia Civil ✅

*Arquiteta de Bases Planetárias* · Uberaba

> Projeta e constrói infraestrutura. Construtor do macroespaço urbano.

**Vetor do curso:** `[0,1,3,1,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🔥 Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | ⚖️ Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | TRA+3 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[0,6,12,3,5,1,2]`

**✅ Top 1: Engenharia Civil** 97.5%

**Top 3 completo:** Engenharia Civil 97.5% · Engenharia Mecânica 90.3% · Engenharia Elétrica 90.3%

#### Engenharia Mecânica ⚠️

*Mecânica-Chefe da Nave* · Uberaba

> Máquinas, motores, sistemas mecânicos. Construtor que entende o como.

**Vetor do curso:** `[0,2,3,0,0,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[0,11,11,0,1,1,6]`

**⚠️ Top 1 calculado: Física** (esperado: Engenharia Mecânica)

**Top 3 completo:** Física 97.4% · Engenharia Mecânica 97.4% · Engenharia Elétrica 97.4%

#### Engenharia Elétrica ⚠️

*Engenheira de Sistemas Vitais* · Uberaba

> Sistemas elétricos, eletrônicos e energia. Construtor + lógica de circuitos.

**Vetor do curso:** `[0,2,3,0,0,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[0,11,11,0,1,1,6]`

**⚠️ Top 1 calculado: Física** (esperado: Engenharia Elétrica)

**Top 3 completo:** Física 97.4% · Engenharia Mecânica 97.4% · Engenharia Elétrica 97.4%

#### Engenharia Química ⚠️

*Engenheira de Processos* · Uberaba

> Processos químicos industriais. Ponte ciência↔produção.

**Vetor do curso:** `[0,2,3,0,0,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[0,10,12,0,1,3,4]`

**⚠️ Top 1 calculado: Engenharia Mecânica** (esperado: Engenharia Química)

**Top 3 completo:** Engenharia Mecânica 97.6% · Engenharia Elétrica 97.6% · Engenharia Química 96.0%

#### Engenharia de Produção ✅

*Coordenadora de Operações* · Uberaba

> Gestão e otimização de processos. Construtor que lidera equipes.

**Vetor do curso:** `[0,1,2,2,1,0,2]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 10 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[0,7,9,6,0,0,7]`

**✅ Top 1: Engenharia de Produção** 93.0%

**Top 3 completo:** Engenharia de Produção 93.0% · Engenharia Mecânica 87.5% · Engenharia Elétrica 87.5%

#### Engenharia Ambiental ⚠️

*Guardiã do Ecossistema da Nave* · Uberaba

> Meio ambiente com técnica de engenharia. Sustentabilidade aplicada.

**Vetor do curso:** `[1,2,3,1,2,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🌿 Estufa — sistema de irrigação travou nas mudas *(idx 4)* | CON+1 CUL+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 🧪 Coleto amostras (sem machucar) pra entender a biologia delas *(idx 2)* | INV+2 CUL+2 |
| 10 Crise final | 🌱 Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[0,6,7,0,1,15,1]`

**⚠️ Top 1 calculado: Agronomia** (esperado: Engenharia Ambiental)

**Top 3 completo:** Agronomia 88.3% · Ciências Biológicas 85.7% · Engenharia Ambiental 85.6%

#### Engenharia de Alimentos ⚠️

*Engenheira de Suprimentos* · Uberaba

> Tecnologia de alimentos, processos da fazenda à mesa.

**Vetor do curso:** `[1,2,3,0,0,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[0,8,12,0,1,6,3]`

**⚠️ Top 1 calculado: Engenharia Química** (esperado: Engenharia de Alimentos)

**Top 3 completo:** Engenharia Química 97.3% · Engenharia de Alimentos 94.7% · Engenharia Mecânica 92.2%

### 💻 Decifrador / Computação + Dados + Matemática

#### Banco de Dados ⚠️

*Arquiveira de Bordo* · Uberaba

> Dados, armazenamento, queries. Organiza o digital.

**Vetor do curso:** `[0,2,0,0,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,16,2,0,1,3,10]`

**⚠️ Top 1 calculado: Inteligência Artificial** (esperado: Banco de Dados)

**Top 3 completo:** Inteligência Artificial 93.7% · Matemática 92.5% · Banco de Dados 88.9%

#### Inteligência Artificial ⚠️

*Operadora-IA da Missão* · Uberaba

> Machine learning, sistemas inteligentes. Investigador digital.

**Vetor do curso:** `[0,3,1,0,1,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,19,0,0,1,3,8]`

**⚠️ Top 1 calculado: Matemática** (esperado: Inteligência Artificial)

**Top 3 completo:** Matemática 88.7% · Inteligência Artificial 87.5% · Biomedicina 85.9%

#### Matemática ✅

*Estrategista de Rotas* · Uberaba

> Modelagem, teoria, abstração. Pensador puro.

**Vetor do curso:** `[0,3,0,1,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 📡 Comunicações — sinal estranho da Terra, talvez urgente *(idx 3)* | INV+2 COM+1 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[0,19,0,1,1,3,8]`

**✅ Top 1: Matemática** 90.1%

**Top 3 completo:** Matemática 90.1% · Inteligência Artificial 87.8% · Física 83.2%

### 📢 Comunicação / Educação

#### Letras (PT/ESP) ✅

*Linguista Interestelar* · Uberaba

> Língua, literatura, ensino. Conector via palavra (espanhol).

**Vetor do curso:** `[1,2,1,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 📡 Comunicações — sinal estranho da Terra, talvez urgente *(idx 3)* | INV+2 COM+1 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 10 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[3,5,2,16,2,0,2]`

**✅ Top 1: Letras** 93.5%

**Top 3 completo:** Letras 93.5% · Pedagogia 79.9% · Psicologia 76.4%

#### Letras (PT/ING) ✅

*Linguista Interestelar* · Uberaba

> Idem, mas em inglês. Mesma essência (são agrupados como 'Letras' no resultado).

**Vetor do curso:** `[1,2,1,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 📡 Comunicações — sinal estranho da Terra, talvez urgente *(idx 3)* | INV+2 COM+1 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 8 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 9 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 10 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[3,5,2,16,2,0,2]`

**✅ Top 1: Letras** 93.5%

**Top 3 completo:** Letras 93.5% · Pedagogia 79.9% · Psicologia 76.4%

#### Pedagogia ✅

*Educadora da Próxima Geração* · Uberaba

> Educação básica, formação de criança/jovem. Cuidado via ensino.

**Vetor do curso:** `[3,1,1,3,2,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 8 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 9 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 10 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[12,0,2,12,4,0,0]`

**✅ Top 1: Pedagogia** 95.4%

**Top 3 completo:** Pedagogia 95.4% · Educação Especial e Inclusiva 91.5% · Enfermagem 91.2%

### ⚡ Transformação / Humanidades

#### História ✅

*Cronista da Expedição* · Uberaba

> Estudo do passado, memória, contexto. Cronista crítico.

**Vetor do curso:** `[1,2,0,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🔥 Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | ⚖️ Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | TRA+3 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🌍 Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 8 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 9 Contato | 🛡️ Recuo a equipe e estabeleço protocolo de não-contato preven… *(idx 4)* | CUI+1 TRA+2 |
| 10 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[6,4,1,2,15,2,0]`

**✅ Top 1: História** 87.8%

**Top 3 completo:** História 87.8% · Serviço Social 87.5% · Geografia 85.2%

#### Geografia ✅

*Cartógrafa de Mundos Novos* · Uberaba

> Espaço, território, humano↔ambiente. Multidisciplinar.

**Vetor do curso:** `[1,2,1,1,3,2,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🔥 Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | ⚖️ Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | TRA+3 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🌍 Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[3,8,1,2,12,4,2]`

**✅ Top 1: Geografia** 95.4%

**Top 3 completo:** Geografia 95.4% · História 89.4% · Licenciatura em Educação do Campo 81.4%

#### Educação Física ⚠️

*Treinadora da Tripulação* · Uberaba

> Movimento, esporte, saúde corporal. Cuidado pelo corpo em ação.

**Vetor do curso:** `[3,1,1,2,2,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 10 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[16,1,0,7,3,3,0]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Educação Física)

**Top 3 completo:** Enfermagem 93.0% · Educação Física 89.4% · Educação Especial e Inclusiva 87.9%

#### Licenciatura em Educação do Campo ✅

*Engenheira Agrária Comunitária* · Uberaba

> Educação no contexto rural/agrário. Justiça social + terra.

**Vetor do curso:** `[2,1,1,2,3,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🌿 Estufa — sistema de irrigação travou nas mudas *(idx 4)* | CON+1 CUL+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | ⚖️ Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | TRA+3 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🌍 Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 10 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[3,1,1,4,10,11,0]`

**✅ Top 1: Licenciatura em Educação do Campo** 94.8%

**Top 3 completo:** Licenciatura em Educação do Campo 94.8% · Geografia 85.9% · Engenharia Ambiental 78.0%

### 🌱 Cultivo / Natureza

#### Agronomia ⚠️

*Cultivadora de Vida Planetária* · Uberaba/Iturama

> Agricultura técnica e científica. Investigação aplicada à terra (Uberaba/Iturama).

**Vetor do curso:** `[1,3,2,1,1,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,12,3,0,1,12,1]`

**⚠️ Top 1 calculado: Ciências Biológicas** (esperado: Agronomia)

**Top 3 completo:** Ciências Biológicas 95.5% · Agronomia 93.1% · Zootecnia 90.7%

#### Zootecnia ⚠️

*Criadora de Vida Animal* · Iturama

> Produção animal sustentável (exclusivo Iturama).

**Vetor do curso:** `[2,3,2,1,0,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 8 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 9 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 10 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,12,3,0,1,12,1]`

**⚠️ Top 1 calculado: Ciências Biológicas** (esperado: Zootecnia)

**Top 3 completo:** Ciências Biológicas 95.5% · Agronomia 93.1% · Zootecnia 90.7%

---
*Gerado automaticamente em 2026-05-20 pelo `scripts/personas-ideais.ts`*