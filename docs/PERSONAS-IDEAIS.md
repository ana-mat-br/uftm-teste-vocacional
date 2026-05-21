# 🧪 Personas Ideais por Curso UFTM

> **Geração automática** via greedy: pra cada curso, escolho em cada cena a opção cujo vetor de pontos tem maior produto escalar com o vetor do curso. Em seguida valido que essa persona retorna o curso como top 1.
>
> Use isso pra: (1) sanidade qualitativa — você lê a persona de Medicina e bate com sua intuição? (2) prova quantitativa — script verifica matematicamente que cada curso é alcançável.
>
> Regenere com: `npx tsx scripts/personas-ideais.ts`

## Resumo

**29/31 cursos validados** ✅

### ⚠️ Cursos não alcançáveis como top 1

- **Serviço Social** → veio Educação Especial e Inclusiva (97.4%)
- **Banco de Dados** → veio Matemática (88.2%)

Possíveis causas: vetor idêntico a outro curso (ex: Eng. Mec/Elétrica), vetor "redondo demais" que faz outro curso vencer por cosseno mesmo no greedy, ou gap de cobertura nas cenas. Investigar.

## Fundamentação do método

**1. Taxonomia inspirada em RIASEC (Holland, 1959)** — 7 eixos vocacionais adaptados pro contexto UFTM. Ver [`MATRIZ-EIXOS.md`](MATRIZ-EIXOS.md).

**2. Similaridade de cosseno** — mede direção, não magnitude. Padrão em sistemas de recomendação (Netflix, Spotify).

**3. Quiz com pontuação ponderada** — formato clássico (Myers-Briggs, 16 Personalities). Cada opção pontua 1-3 eixos.

**⚠️ O que ele NÃO é:** instrumento psicometricamente validado. É ferramenta de engajamento/exploração, não diagnóstico clínico. O feedback 👍🤔👎 da feira é o primeiro dataset de validação.

## Personas por área

### 🩺 Saúde / Cuidado

#### Medicina ✅

*Posto Médico de Bordo* · Uberaba

> Diagnostica e trata doenças com contato direto ao paciente. Cuidador clinicamente curioso.

**Vetor do curso:** `[3,3,0,2,2,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | 🌈 Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra mudar de lugar enqu… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possível vida marinha pra es… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz, primeira ponte entre es… *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[19,12,1,11,5,3,2]`

**✅ Top 1: Medicina** 95.1%

**Top 3 completo:** Medicina 95.1% · Enfermagem 94.1% · Psicologia 93.3%

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
| 12 Rotina coletiva | 🌈 Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra mudar de lugar enqu… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🛏️ Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz, primeira ponte entre es… *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[22,3,4,12,5,6,2]`

**✅ Top 1: Enfermagem** 97.8%

**Top 3 completo:** Enfermagem 97.8% · Educação Especial e Inclusiva 91.6% · Pedagogia 90.7%

#### Psicologia ✅

*Posto de Saúde Mental* · Uberaba

> Saúde mental, escuta, intervenção comportamental. Cuida via comunicação.

**Vetor do curso:** `[3,2,0,3,1,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra mudar de lugar enqu… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz, primeira ponte entre es… *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[18,8,1,16,1,6,2]`

**✅ Top 1: Psicologia** 96.3%

**Top 3 completo:** Psicologia 96.3% · Enfermagem 94.5% · Pedagogia 88.1%

#### Fisioterapia ✅

*Posto de Reabilitação Motora* · Uberaba

> Reabilita o corpo. Cuidado pelo movimento e técnica física.

**Vetor do curso:** `[3,1,2,1,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra mudar de lugar enqu… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 💪 Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz, primeira ponte entre es… *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[19,5,13,9,5,1,2]`

**✅ Top 1: Fisioterapia** 98.8%

**Top 3 completo:** Fisioterapia 98.8% · Terapia Ocupacional 96.8% · Enfermagem 93.0%

#### Terapia Ocupacional ✅

*Posto de Adaptação à Rotina* · Uberaba

> Ajuda pessoas a recuperar autonomia em atividades cotidianas.

**Vetor do curso:** `[3,1,2,2,0,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | ⚡ Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz, primeira ponte entre es… *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[19,2,13,12,0,3,2]`

**✅ Top 1: Terapia Ocupacional** 97.7%

**Top 3 completo:** Terapia Ocupacional 97.7% · Fisioterapia 92.3% · Enfermagem 91.3%

#### Nutrição ✅

*Posto de Sustento Vital* · Uberaba

> Alimentação como saúde. Ciência aplicada ao bem-estar.

**Vetor do curso:** `[3,2,0,0,2,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra mudar de lugar enqu… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[18,10,4,4,7,11,2]`

**✅ Top 1: Nutrição** 95.6%

**Top 3 completo:** Nutrição 95.6% · Zootecnia 91.1% · Enfermagem 90.8%

#### Serviço Social ⚠️

*Defesa de Direitos da Tripulação* · Uberaba

> Defende direitos sociais, ponte com políticas públicas.

**Vetor do curso:** `[3,1,0,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | 🌈 Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra mudar de lugar enqu… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🌍 Penso muito no quanto a Terra precisa que essa missão dê ce… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🛏️ Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz, primeira ponte entre es… *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[16,3,8,10,15,1,2]`

**⚠️ Top 1 calculado: Educação Especial e Inclusiva** (esperado: Serviço Social)

**Top 3 completo:** Educação Especial e Inclusiva 97.4% · Pedagogia 94.6% · Serviço Social 94.2%

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
| 12 Rotina coletiva | 🌈 Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra mudar de lugar enqu… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🛏️ Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz, primeira ponte entre es… *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[21,3,8,9,10,1,2]`

**✅ Top 1: Educação Especial e Inclusiva** 97.1%

**Top 3 completo:** Educação Especial e Inclusiva 97.1% · Fisioterapia 95.4% · Enfermagem 94.4%

### 🔬 Investigação / Ciências Naturais

#### Biomedicina ✅

*Pesquisa de Vida Alienígena* · Uberaba/Iturama

> Pesquisa em saúde — lab, análises clínicas. Curiosidade científica com vocação de cuidar.

**Vetor do curso:** `[2,3,0,0,0,1,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar o sinal com todos os arquivos … *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os registros dos últimos 30 dias pra entender o padrão… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possível vida marinha pra es… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — é o motivo… *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[5,28,0,5,1,4,10]`

**✅ Top 1: Biomedicina** 90.4%

**Top 3 completo:** Biomedicina 90.4% · Matemática 88.5% · Física 81.5%

#### Ciências Biológicas ✅

*Cientista de Ecossistemas* · Uberaba/Iturama

> Estuda os seres vivos e ecossistemas. Pesquisador da vida.

**Vetor do curso:** `[1,3,0,1,1,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 📡 Comunicações — sinal estranho da Terra, talvez urgente *(idx 3)* | INV+3 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar o sinal com todos os arquivos … *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🌾 Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — é o motivo… *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,21,3,2,3,16,5]`

**✅ Top 1: Ciências Biológicas** 95.0%

**Top 3 completo:** Ciências Biológicas 95.0% · Zootecnia 86.4% · Biomedicina 86.2%

#### Física ✅

*Investigador de Mistérios Espaciais* · Uberaba

> Estuda fenômenos físicos e teoria. Curiosidade abstrata pro mundo natural.

**Vetor do curso:** `[0,3,2,0,0,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 📡 Comunicações — sinal estranho da Terra, talvez urgente *(idx 3)* | INV+3 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar o sinal com todos os arquivos … *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 📊 Pego os registros dos últimos 30 dias pra entender o padrão… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 📡 Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+2 TEC+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — é o motivo… *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,26,6,3,3,2,12]`

**✅ Top 1: Física** 91.8%

**Top 3 completo:** Física 91.8% · Inteligência Artificial 90.6% · Matemática 90.4%

#### Química ✅

*Especialista em Atmosferas* · Uberaba/Iturama

> Estuda matéria, reações e transformações. Cientista do micro.

**Vetor do curso:** `[1,3,2,0,0,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 📡 Comunicações — sinal estranho da Terra, talvez urgente *(idx 3)* | INV+3 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possível vida marinha pra es… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🌾 Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — é o motivo… *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,22,11,2,3,8,4]`

**✅ Top 1: Química** 96.6%

**Top 3 completo:** Química 96.6% · Física 92.0% · Engenharia Química 91.9%

### 🔧 Construção / Engenharias físicas

#### Engenharia Civil ✅

*Arquitetura de Bases Planetárias* · Uberaba

> Projeta e constrói infraestrutura. Construtor do macroespaço urbano.

**Vetor do curso:** `[0,1,3,1,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🔥 Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | ⚖️ Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | TRA+3 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 💪 Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Redireciono toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,9,21,5,9,2,4]`

**✅ Top 1: Engenharia Civil** 96.3%

**Top 3 completo:** Engenharia Civil 96.3% · Engenharia Mecânica 88.2% · Engenharia Elétrica 83.8%

#### Engenharia Mecânica ✅

*Engenharia Mecânica de Bordo* · Uberaba

> Máquinas, motores, sistemas mecânicos. Construtor que entende o como.

**Vetor do curso:** `[0,2,3,0,0,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ⚡ Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Redireciono toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,13,21,2,3,2,8]`

**✅ Top 1: Engenharia Mecânica** 97.5%

**Top 3 completo:** Engenharia Mecânica 97.5% · Engenharia Elétrica 95.8% · Engenharia Química 89.7%

#### Engenharia Elétrica ✅

*Engenharia de Sistemas Vitais* · Uberaba

> Sistemas elétricos, eletrônicos e energia. Construtor + lógica de circuitos.

**Vetor do curso:** `[0,2,3,0,0,0,2]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar o sinal com todos os arquivos … *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ⚡ Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 📡 Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+2 TEC+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Redireciono toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,16,17,2,3,2,12]`

**✅ Top 1: Engenharia Elétrica** 97.4%

**Top 3 completo:** Engenharia Elétrica 97.4% · Engenharia Mecânica 95.3% · Inteligência Artificial 94.7%

#### Engenharia Química ✅

*Engenharia de Processos* · Uberaba

> Processos químicos industriais. Ponte ciência↔produção.

**Vetor do curso:** `[0,3,3,0,0,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — é o motivo… *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,18,17,2,5,4,4]`

**✅ Top 1: Engenharia Química** 95.2%

**Top 3 completo:** Engenharia Química 95.2% · Química 94.4% · Física 93.6%

#### Engenharia de Produção ✅

*Coordenação da Operação da Nave* · Uberaba

> Gestão e otimização de processos. Construtor que lidera equipes.

**Vetor do curso:** `[0,1,2,2,1,0,2]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar o sinal com todos os arquivos … *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 📡 Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+2 TEC+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🔋 Redireciono toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,12,16,8,4,1,11]`

**✅ Top 1: Engenharia de Produção** 93.4%

**Top 3 completo:** Engenharia de Produção 93.4% · Engenharia Elétrica 92.6% · Engenharia Mecânica 90.1%

#### Engenharia Ambiental ✅

*Posto Ambiental da Nave* · Uberaba

> Meio ambiente com técnica de engenharia. Sustentabilidade aplicada.

**Vetor do curso:** `[0,2,3,0,2,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🌿 Estufa — sistema de irrigação travou nas mudas *(idx 4)* | CON+1 CUL+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 💪 Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🧪 Coleto amostras (sem machucar) pra entender como elas funci… *(idx 2)* | INV+2 CUL+2 |
| 11 Crise final | 🌱 Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[4,9,15,1,7,17,3]`

**✅ Top 1: Engenharia Ambiental** 97.0%

**Top 3 completo:** Engenharia Ambiental 97.0% · Agronomia 92.7% · Engenharia de Alimentos 92.0%

#### Engenharia de Alimentos ✅

*Engenharia de Suprimentos* · Uberaba

> Tecnologia de alimentos, processos da fazenda à mesa.

**Vetor do curso:** `[1,2,3,0,0,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ⚡ Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🌾 Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Redireciono toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,11,20,2,1,9,5]`

**✅ Top 1: Engenharia de Alimentos** 96.3%

**Top 3 completo:** Engenharia de Alimentos 96.3% · Agronomia 92.1% · Engenharia Química 91.9%

### 💻 Decifrador / Computação + Dados + Matemática

#### Banco de Dados ⚠️

*Posto de Arquivo de Bordo* · Uberaba

> Dados, armazenamento, queries. Organiza o digital.

**Vetor do curso:** `[0,0,0,2,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar o sinal com todos os arquivos … *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os registros dos últimos 30 dias pra entender o padrão… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | 💾 Banco centralizado — tabelas bem organizadas, busca rápida … *(idx 0)* | COM+1 TEC+3 |
| 8 Doença misteriosa | 📡 Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+2 TEC+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🔋 Redireciono toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[5,12,4,13,0,1,13]`

**⚠️ Top 1 calculado: Matemática** (esperado: Banco de Dados)

**Top 3 completo:** Matemática 88.2% · Engenharia de Produção 84.1% · Banco de Dados 78.8%

#### Inteligência Artificial ✅

*Posto de IA da Missão* · Uberaba

> Machine learning, sistemas inteligentes. Investigador digital.

**Vetor do curso:** `[0,3,2,0,1,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 📡 Comunicações — sinal estranho da Terra, talvez urgente *(idx 3)* | INV+3 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar o sinal com todos os arquivos … *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 📊 Pego os registros dos últimos 30 dias pra entender o padrão… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 📡 Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+2 TEC+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Redireciono toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,21,11,2,5,2,14]`

**✅ Top 1: Inteligência Artificial** 97.6%

**Top 3 completo:** Inteligência Artificial 97.6% · Física 93.8% · Engenharia Elétrica 88.6%

#### Matemática ✅

*Estrategista de Rotas* · Uberaba

> Modelagem, teoria, abstração. Pensador puro.

**Vetor do curso:** `[0,3,0,1,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🤔 Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | 📡 Comunicações — sinal estranho da Terra, talvez urgente *(idx 3)* | INV+3 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar o sinal com todos os arquivos … *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 📈 Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os registros dos últimos 30 dias pra entender o padrão… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 📡 Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+2 TEC+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possível vida marinha pra es… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — é o motivo… *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[1,29,0,5,1,4,12]`

**✅ Top 1: Matemática** 91.6%

**Top 3 completo:** Matemática 91.6% · Biomedicina 84.6% · Física 82.5%

### 📢 Comunicação / Educação

#### Letras (PT/ESP) ✅

*Tradutor Interestelar* · Uberaba

> Língua, literatura, ensino. Conector via palavra (espanhol).

**Vetor do curso:** `[1,2,1,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os registros dos últimos 30 dias pra entender o padrão… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,13,2,22,2,1,4]`

**✅ Top 1: Letras** 95.5%

**Top 3 completo:** Letras 95.5% · Psicologia 83.5% · Pedagogia 80.2%

#### Letras (PT/ING) ✅

*Tradutor Interestelar* · Uberaba

> Idem, mas em inglês. Mesma essência (são agrupados como 'Letras' no resultado).

**Vetor do curso:** `[1,2,1,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os registros dos últimos 30 dias pra entender o padrão… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,13,2,22,2,1,4]`

**✅ Top 1: Letras** 95.5%

**Top 3 completo:** Letras 95.5% · Psicologia 83.5% · Pedagogia 80.2%

#### Pedagogia ✅

*Educação da Próxima Geração* · Uberaba

> Educação básica, formação de criança/jovem. Cuidado via ensino.

**Vetor do curso:** `[3,1,1,3,2,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 😅 Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🗣️ Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | 🫂 Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | 🌈 Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra mudar de lugar enqu… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz, primeira ponte entre es… *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[15,4,8,16,10,1,2]`

**✅ Top 1: Pedagogia** 98.9%

**Top 3 completo:** Pedagogia 98.9% · Educação Especial e Inclusiva 96.9% · Enfermagem 94.0%

### ⚡ Transformação / Humanidades

#### História ✅

*Narrador da Expedição* · Uberaba

> Estudo do passado, memória, contexto. Cronista crítico.

**Vetor do curso:** `[1,2,0,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🔥 Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | ⚖️ Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | TRA+3 |
| 12 Rotina coletiva | ⚖️ Carta de direitos da tripulação — formal, com regras justas… *(idx 4)* | CUI+1 COM+2 TRA+3 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra mudar de lugar enqu… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🌍 Penso muito no quanto a Terra precisa que essa missão dê ce… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possível vida marinha pra es… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 🛡️ Tiro a equipe de perto e crio regra: ninguém se aproxima, p… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[8,10,3,7,20,3,2]`

**✅ Top 1: História** 95.4%

**Top 3 completo:** História 95.4% · Geografia 91.4% · Serviço Social 89.4%

#### Geografia ✅

*Mapas de Mundos Novos* · Uberaba

> Espaço, território, humano↔ambiente. Multidisciplinar.

**Vetor do curso:** `[1,2,0,1,3,2,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🔥 Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | ⚖️ Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | TRA+3 |
| 12 Rotina coletiva | ⚖️ Carta de direitos da tripulação — formal, com regras justas… *(idx 4)* | CUI+1 COM+2 TRA+3 |
| 6 Falha técnica | 📊 Pego os registros dos últimos 30 dias pra entender o padrão… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🌍 Penso muito no quanto a Terra precisa que essa missão dê ce… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🌾 Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[6,14,4,4,17,7,4]`

**✅ Top 1: Geografia** 96.2%

**Top 3 completo:** Geografia 96.2% · História 88.2% · Licenciatura em Educação do Campo 83.6%

#### Educação Física ✅

*Treinamento da Tripulação* · Uberaba

> Movimento, esporte, saúde corporal. Cuidado pelo corpo em ação.

**Vetor do curso:** `[2,1,2,0,2,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🔥 Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | 🩺 Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | ⚖️ Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | TRA+3 |
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🌍 Penso muito no quanto a Terra precisa que essa missão dê ce… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 💪 Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | ♻️ Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🛡️ Tiro a equipe de perto e crio regra: ninguém se aproxima, p… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[12,3,14,1,19,2,2]`

**✅ Top 1: Educação Física** 94.7%

**Top 3 completo:** Educação Física 94.7% · Fisioterapia 81.1% · Educação Especial e Inclusiva 79.6%

#### Licenciatura em Educação do Campo ✅

*Educação de Vila Rural* · Uberaba

> Educação no contexto rural/agrário. Justiça social + terra.

**Vetor do curso:** `[2,1,1,2,3,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🌿 Estufa — sistema de irrigação travou nas mudas *(idx 4)* | CON+1 CUL+2 |
| 4 Anomalia | 🛡️ Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | ⚖️ Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | TRA+3 |
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🌍 Penso muito no quanto a Terra precisa que essa missão dê ce… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🥗 Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz, primeira ponte entre es… *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[9,4,5,5,14,16,2]`

**✅ Top 1: Licenciatura em Educação do Campo** 97.7%

**Top 3 completo:** Licenciatura em Educação do Campo 97.7% · Geografia 89.2% · Nutrição 84.4%

### 🌱 Cultivo / Natureza

#### Agronomia ✅

*Cultivo de Vida Planetária* · Uberaba/Iturama

> Agricultura técnica e científica. Investigação aplicada à terra (Uberaba/Iturama).

**Vetor do curso:** `[1,3,3,0,0,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🔧 Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 2)* | INV+1 CON+2 |
| 4 Anomalia | 🛰️ Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento achar o pr… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como me senti — isso mudou meu jeito de trabalhar nos… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🌾 Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — é o motivo… *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,17,13,2,3,12,3]`

**✅ Top 1: Agronomia** 97.1%

**Top 3 completo:** Agronomia 97.1% · Química 94.9% · Engenharia de Alimentos 94.1%

#### Zootecnia ✅

*Criação de Vida Animal* · Iturama

> Produção animal sustentável (exclusivo Iturama).

**Vetor do curso:** `[3,3,1,0,0,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | 🌱 Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | 🧬 Enfermaria também — mas paro pra entender a causa antes de … *(idx 1)* | CUI+2 INV+2 |
| 4 Anomalia | 📊 Vou pra sala de dados cruzar o sinal com todos os arquivos … *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | 🧑‍🍳 Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🌾 Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto o comportamento, não chego perto *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[11,15,3,3,2,16,4]`

**✅ Top 1: Zootecnia** 96.4%

**Top 3 completo:** Zootecnia 96.4% · Ciências Biológicas 94.0% · Biomedicina 88.8%

---
*Gerado automaticamente em 2026-05-21 pelo `scripts/personas-ideais.ts`*