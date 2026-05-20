# 🧪 Personas Ideais por Curso UFTM

> **Geração automática** via greedy: pra cada curso, escolho em cada cena a opção cujo vetor de pontos tem maior produto escalar com o vetor do curso. Em seguida valido que essa persona retorna o curso como top 1.
>
> Use isso pra: (1) sanidade qualitativa — você lê a persona de Medicina e bate com sua intuição? (2) prova quantitativa — script verifica matematicamente que cada curso é alcançável.
>
> Regenere com: `npx tsx scripts/personas-ideais.ts`

## Resumo

**18/31 cursos validados** ✅

### ⚠️ Cursos não alcançáveis como top 1

- **Psicologia** → veio Enfermagem (94.0%)
- **Terapia Ocupacional** → veio Enfermagem (92.6%)
- **Serviço Social** → veio Educação Especial e Inclusiva (96.3%)
- **Educação Especial e Inclusiva** → veio Enfermagem (90.1%)
- **Engenharia Elétrica** → veio Engenharia Mecânica (98.3%)
- **Engenharia Química** → veio Engenharia Mecânica (97.7%)
- **Engenharia Ambiental** → veio Agronomia (90.1%)
- **Engenharia de Alimentos** → veio Engenharia Química (97.1%)
- **Banco de Dados** → veio Inteligência Artificial (91.3%)
- **Inteligência Artificial** → veio Biomedicina (89.0%)
- **Educação Física** → veio Enfermagem (91.3%)
- **Agronomia** → veio Ciências Biológicas (95.7%)
- **Zootecnia** → veio Ciências Biológicas (95.7%)

Possíveis causas: vetor idêntico a outro curso (ex: Eng. Mec/Elétrica), vetor "redondo demais" que faz outro curso vencer por cosseno mesmo no greedy, ou gap de cobertura nas cenas. Investigar.

## Fundamentação do método

**1. Taxonomia inspirada em RIASEC (Holland, 1959)** — 7 eixos vocacionais adaptados pro contexto UFTM. Ver [`MATRIZ-EIXOS.md`](MATRIZ-EIXOS.md).

**2. Similaridade de cosseno** — mede direção, não magnitude. Padrão em sistemas de recomendação (Netflix, Spotify).

**3. Quiz com pontuação ponderada** — formato clássico (Myers-Briggs, 16 Personalities). Cada opção pontua 1-3 eixos.

**⚠️ O que ele NÃO é:** instrumento psicometricamente validado. É ferramenta de engajamento/exploração, não diagnóstico clínico. O feedback 👍🤔👎 da feira é o primeiro dataset de validação.

## Personas por área

### 🩺 Saúde / Cuidado

#### Medicina ✅

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[15,9,0,5,3,3,0]`

**✅ Top 1: Medicina** 92.1%

**Top 3 completo:** Medicina 92.1% · Enfermagem 90.9% · Psicologia 89.6%

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
| 8 Doença misteriosa | 🛏️ Acomodo os três, monitoro sinais a cada 30 min, hidratação … *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[18,1,0,10,1,3,0]`

**✅ Top 1: Enfermagem** 91.9%

**Top 3 completo:** Enfermagem 91.9% · Psicologia 85.8% · Educação Física 85.8%

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
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[15,4,0,12,1,3,0]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Psicologia)

**Top 3 completo:** Enfermagem 94.0% · Psicologia 93.0% · Pedagogia 89.4%

#### Fisioterapia ✅

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
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[17,2,6,7,1,0,0]`

**✅ Top 1: Fisioterapia** 93.7%

**Top 3 completo:** Fisioterapia 93.7% · Enfermagem 92.2% · Terapia Ocupacional 91.9%

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
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[17,1,4,10,1,0,0]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Terapia Ocupacional)

**Top 3 completo:** Enfermagem 92.6% · Terapia Ocupacional 89.8% · Pedagogia 89.0%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[14,8,0,3,3,7,0]`

**✅ Top 1: Nutrição** 93.4%

**Top 3 completo:** Nutrição 93.4% · Psicologia 89.4% · Medicina 88.8%

#### Serviço Social ⚠️

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
| 8 Doença misteriosa | 🛏️ Acomodo os três, monitoro sinais a cada 30 min, hidratação … *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[14,0,2,8,9,0,0]`

**⚠️ Top 1 calculado: Educação Especial e Inclusiva** (esperado: Serviço Social)

**Top 3 completo:** Educação Especial e Inclusiva 96.3% · Serviço Social 95.4% · Pedagogia 94.5%

#### Educação Especial e Inclusiva ⚠️

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
| 8 Doença misteriosa | 🛏️ Acomodo os três, monitoro sinais a cada 30 min, hidratação … *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[19,0,2,7,4,0,0]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Educação Especial e Inclusiva)

**Top 3 completo:** Enfermagem 90.1% · Educação Especial e Inclusiva 89.6% · Educação Física 87.3%

### 🔬 Investigação / Ciências Naturais

#### Biomedicina ✅

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,21,0,0,1,3,8]`

**✅ Top 1: Biomedicina** 89.0%

**Top 3 completo:** Biomedicina 89.0% · Matemática 86.6% · Inteligência Artificial 85.4%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,15,1,0,1,12,3]`

**✅ Top 1: Ciências Biológicas** 93.2%

**Top 3 completo:** Ciências Biológicas 93.2% · Agronomia 88.4% · Zootecnia 88.0%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,19,4,0,1,1,8]`

**✅ Top 1: Física** 92.3%

**Top 3 completo:** Física 92.3% · Inteligência Artificial 91.0% · Matemática 87.9%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,17,6,0,1,5,2]`

**✅ Top 1: Química** 96.5%

**Top 3 completo:** Química 96.5% · Biomedicina 93.5% · Física 90.2%

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
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,6,14,3,5,1,2]`

**✅ Top 1: Engenharia Civil** 97.5%

**Top 3 completo:** Engenharia Civil 97.5% · Engenharia Mecânica 90.3% · Engenharia Elétrica 90.3%

#### Engenharia Mecânica ✅

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
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,11,13,0,1,1,6]`

**✅ Top 1: Engenharia Mecânica** 98.3%

**Top 3 completo:** Engenharia Mecânica 98.3% · Engenharia Elétrica 98.3% · Física 95.3%

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
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,11,13,0,1,1,6]`

**⚠️ Top 1 calculado: Engenharia Mecânica** (esperado: Engenharia Elétrica)

**Top 3 completo:** Engenharia Mecânica 98.3% · Engenharia Elétrica 98.3% · Física 95.3%

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
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,10,14,0,1,3,4]`

**⚠️ Top 1 calculado: Engenharia Mecânica** (esperado: Engenharia Química)

**Top 3 completo:** Engenharia Mecânica 97.7% · Engenharia Elétrica 97.7% · Engenharia Química 96.2%

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
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[1,8,9,8,0,0,7]`

**✅ Top 1: Engenharia de Produção** 93.0%

**Top 3 completo:** Engenharia de Produção 93.0% · Engenharia Mecânica 83.0% · Engenharia Elétrica 83.0%

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
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 🧪 Coleto amostras (sem machucar) pra entender a biologia delas *(idx 2)* | INV+2 CUL+2 |
| 11 Crise final | 🌱 Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[2,6,9,0,1,15,1]`

**⚠️ Top 1 calculado: Agronomia** (esperado: Engenharia Ambiental)

**Top 3 completo:** Agronomia 90.1% · Engenharia de Alimentos 89.7% · Engenharia Ambiental 89.1%

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
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,8,14,0,1,6,3]`

**⚠️ Top 1 calculado: Engenharia Química** (esperado: Engenharia de Alimentos)

**Top 3 completo:** Engenharia Química 97.1% · Engenharia de Alimentos 96.4% · Engenharia Mecânica 92.6%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,18,2,0,1,3,10]`

**⚠️ Top 1 calculado: Inteligência Artificial** (esperado: Banco de Dados)

**Top 3 completo:** Inteligência Artificial 91.3% · Matemática 90.4% · Biomedicina 90.3%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,21,0,0,1,3,8]`

**⚠️ Top 1 calculado: Biomedicina** (esperado: Inteligência Artificial)

**Top 3 completo:** Biomedicina 89.0% · Matemática 86.6% · Inteligência Artificial 85.4%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,21,0,1,1,3,8]`

**✅ Top 1: Matemática** 88.5%

**Top 3 completo:** Matemática 88.5% · Inteligência Artificial 86.3% · Biomedicina 85.5%

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
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[4,6,2,18,2,0,2]`

**✅ Top 1: Letras** 93.9%

**Top 3 completo:** Letras 93.9% · Pedagogia 80.8% · Psicologia 78.2%

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
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[4,6,2,18,2,0,2]`

**✅ Top 1: Letras** 93.9%

**Top 3 completo:** Letras 93.9% · Pedagogia 80.8% · Psicologia 78.2%

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
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[13,1,2,14,4,0,0]`

**✅ Top 1: Pedagogia** 95.6%

**Top 3 completo:** Pedagogia 95.6% · Enfermagem 91.4% · Educação Especial e Inclusiva 91.1%

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
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 10 Contato | 🛡️ Recuo a equipe e estabeleço protocolo de não-contato preven… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,5,1,4,15,2,0]`

**✅ Top 1: História** 92.2%

**Top 3 completo:** História 92.2% · Serviço Social 92.1% · Geografia 86.6%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[5,10,1,2,12,4,2]`

**✅ Top 1: Geografia** 94.2%

**Top 3 completo:** Geografia 94.2% · História 89.4% · Medicina 86.0%

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
| 8 Doença misteriosa | 🛏️ Acomodo os três, monitoro sinais a cada 30 min, hidratação … *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[19,1,0,7,3,3,0]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Educação Física)

**Top 3 completo:** Enfermagem 91.3% · Educação Física 87.4% · Educação Especial e Inclusiva 86.4%

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
| 8 Doença misteriosa | 🥗 Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[5,2,1,4,10,12,0]`

**✅ Top 1: Licenciatura em Educação do Campo** 96.5%

**Top 3 completo:** Licenciatura em Educação do Campo 96.5% · Geografia 87.1% · Nutrição 83.3%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,14,3,0,1,12,1]`

**⚠️ Top 1 calculado: Ciências Biológicas** (esperado: Agronomia)

**Top 3 completo:** Ciências Biológicas 95.7% · Agronomia 92.9% · Zootecnia 92.4%

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
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,14,3,0,1,12,1]`

**⚠️ Top 1 calculado: Ciências Biológicas** (esperado: Zootecnia)

**Top 3 completo:** Ciências Biológicas 95.7% · Agronomia 92.9% · Zootecnia 92.4%

---
*Gerado automaticamente em 2026-05-20 pelo `scripts/personas-ideais.ts`*