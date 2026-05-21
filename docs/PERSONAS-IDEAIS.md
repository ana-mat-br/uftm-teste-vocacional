# 🧪 Personas Ideais por Curso UFTM

> **Geração automática** via greedy: pra cada curso, escolho em cada cena a opção cujo vetor de pontos tem maior produto escalar com o vetor do curso. Em seguida valido que essa persona retorna o curso como top 1.
>
> Use isso pra: (1) sanidade qualitativa — você lê a persona de Medicina e bate com sua intuição? (2) prova quantitativa — script verifica matematicamente que cada curso é alcançável.
>
> Regenere com: `npx tsx scripts/personas-ideais.ts`

## Resumo

**23/31 cursos validados** ✅

### ⚠️ Cursos não alcançáveis como top 1

- **Serviço Social** → veio Educação Especial e Inclusiva (97.7%)
- **Engenharia Elétrica** → veio Engenharia Mecânica (97.5%)
- **Engenharia Química** → veio Engenharia Mecânica (96.4%)
- **Banco de Dados** → veio Matemática (91.8%)
- **Inteligência Artificial** → veio Matemática (88.5%)
- **Educação Física** → veio Enfermagem (95.9%)
- **Agronomia** → veio Ciências Biológicas (97.5%)
- **Zootecnia** → veio Ciências Biológicas (96.7%)

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
| 12 Rotina coletiva | 🌈 Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — mapeio o ecossistema antes d… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[17,15,1,9,5,4,2]`

**✅ Top 1: Medicina** 96.3%

**Top 3 completo:** Medicina 96.3% · Psicologia 92.0% · Enfermagem 90.0%

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
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🛏️ Acomodo os três, monitoro sinais a cada 30 min, hidratação … *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[22,4,2,13,3,6,2]`

**✅ Top 1: Enfermagem** 96.6%

**Top 3 completo:** Enfermagem 96.6% · Psicologia 91.7% · Educação Física 91.5%

#### Psicologia ✅

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
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — 1:1, confidencial, com técnicas … *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[18,8,1,16,1,6,2]`

**✅ Top 1: Psicologia** 96.3%

**Top 3 completo:** Psicologia 96.3% · Enfermagem 94.5% · Pedagogia 88.1%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | ⚡ Refatoro o hardware — circuitos novos, processamento físico… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[19,4,14,9,3,1,2]`

**✅ Top 1: Fisioterapia** 97.7%

**Top 3 completo:** Fisioterapia 97.7% · Terapia Ocupacional 96.0% · Enfermagem 91.0%

#### Terapia Ocupacional ✅

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | ⚡ Refatoro o hardware — circuitos novos, processamento físico… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[21,2,10,12,1,3,2]`

**✅ Top 1: Terapia Ocupacional** 95.3%

**Top 3 completo:** Terapia Ocupacional 95.3% · Enfermagem 94.2% · Fisioterapia 92.4%

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
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e vínculo ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos logs, age automático, … *(idx 1)* | INV+2 CON+1 TRA+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[18,10,3,4,6,11,2]`

**✅ Top 1: Nutrição** 97.1%

**Top 3 completo:** Nutrição 97.1% · Enfermagem 90.3% · Medicina 90.3%

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
| 12 Rotina coletiva | 🌈 Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🌍 Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | 📊 Dashboard pro time — visualização de tudo, gestão por dados *(idx 4)* | INV+1 CON+1 COM+1 TRA+1 TEC+2 |
| 8 Doença misteriosa | 🛏️ Acomodo os três, monitoro sinais a cada 30 min, hidratação … *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[16,2,7,11,14,1,2]`

**⚠️ Top 1 calculado: Educação Especial e Inclusiva** (esperado: Serviço Social)

**Top 3 completo:** Educação Especial e Inclusiva 97.7% · Educação Física 96.1% · Pedagogia 95.9%

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
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | 📊 Dashboard pro time — visualização de tudo, gestão por dados *(idx 4)* | INV+1 CON+1 COM+1 TRA+1 TEC+2 |
| 8 Doença misteriosa | 🛏️ Acomodo os três, monitoro sinais a cada 30 min, hidratação … *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[21,2,7,10,9,1,2]`

**✅ Top 1: Educação Especial e Inclusiva** 96.8%

**Top 3 completo:** Educação Especial e Inclusiva 96.8% · Educação Física 95.2% · Enfermagem 94.9%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🌾 Variedades terrestres em solo alienígena — técnica agrícola… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[6,26,3,3,1,6,10]`

**✅ Top 1: Biomedicina** 92.5%

**Top 3 completo:** Biomedicina 92.5% · Matemática 86.5% · Física 85.3%

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
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e vínculo ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🌾 Variedades terrestres em solo alienígena — técnica agrícola… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[6,20,3,2,3,16,5]`

**✅ Top 1: Ciências Biológicas** 95.7%

**Top 3 completo:** Ciências Biológicas 95.7% · Agronomia 92.0% · Zootecnia 90.6%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — mapeio o ecossistema antes d… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,25,6,4,1,2,10]`

**✅ Top 1: Física** 91.8%

**Top 3 completo:** Física 91.8% · Biomedicina 89.4% · Inteligência Artificial 88.7%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🌾 Variedades terrestres em solo alienígena — técnica agrícola… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[6,22,9,3,1,8,4]`

**✅ Top 1: Química** 96.3%

**Top 3 completo:** Química 96.3% · Biomedicina 94.2% · Zootecnia 90.1%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | ⚡ Refatoro o hardware — circuitos novos, processamento físico… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,8,22,5,7,2,4]`

**✅ Top 1: Engenharia Civil** 96.8%

**Top 3 completo:** Engenharia Civil 96.8% · Engenharia Mecânica 89.6% · Engenharia Elétrica 89.6%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ⚡ Refatoro o hardware — circuitos novos, processamento físico… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,13,21,2,3,2,8]`

**✅ Top 1: Engenharia Mecânica** 97.5%

**Top 3 completo:** Engenharia Mecânica 97.5% · Engenharia Elétrica 97.5% · Engenharia Química 91.5%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ⚡ Refatoro o hardware — circuitos novos, processamento físico… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,13,21,2,3,2,8]`

**⚠️ Top 1 calculado: Engenharia Mecânica** (esperado: Engenharia Elétrica)

**Top 3 completo:** Engenharia Mecânica 97.5% · Engenharia Elétrica 97.5% · Engenharia Química 91.5%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ⚡ Refatoro o hardware — circuitos novos, processamento físico… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,12,22,2,3,4,6]`

**⚠️ Top 1 calculado: Engenharia Mecânica** (esperado: Engenharia Química)

**Top 3 completo:** Engenharia Mecânica 96.4% · Engenharia Elétrica 96.4% · Engenharia Química 94.3%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | ⚡ Refatoro o hardware — circuitos novos, processamento físico… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[3,10,17,10,2,1,9]`

**✅ Top 1: Engenharia de Produção** 92.9%

**Top 3 completo:** Engenharia de Produção 92.9% · Engenharia Mecânica 88.5% · Engenharia Elétrica 88.5%

#### Engenharia Ambiental ✅

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
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e vínculo ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ⚡ Refatoro o hardware — circuitos novos, processamento físico… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🧪 Coleto amostras (sem machucar) pra entender a biologia delas *(idx 2)* | INV+2 CUL+2 |
| 11 Crise final | 🌱 Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[4,8,16,1,5,17,3]`

**✅ Top 1: Engenharia Ambiental** 95.6%

**Top 3 completo:** Engenharia Ambiental 95.6% · Engenharia de Alimentos 93.6% · Agronomia 91.1%

#### Engenharia de Alimentos ✅

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🔧 Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ⚡ Refatoro o hardware — circuitos novos, processamento físico… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | 💪 Avaliação motora — se o corpo tá afetado, prescrevo movimen… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🌾 Variedades terrestres em solo alienígena — técnica agrícola… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,11,20,2,1,9,5]`

**✅ Top 1: Engenharia de Alimentos** 96.3%

**Top 3 completo:** Engenharia de Alimentos 96.3% · Engenharia Química 95.5% · Engenharia Mecânica 91.3%

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
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — 1:1, confidencial, com técnicas … *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — mapeio o ecossistema antes d… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🔋 Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[5,25,2,5,1,4,12]`

**⚠️ Top 1 calculado: Matemática** (esperado: Banco de Dados)

**Top 3 completo:** Matemática 91.8% · Biomedicina 88.8% · Inteligência Artificial 88.0%

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
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — 1:1, confidencial, com técnicas … *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — mapeio o ecossistema antes d… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[5,28,0,5,1,4,10]`

**⚠️ Top 1 calculado: Matemática** (esperado: Inteligência Artificial)

**Top 3 completo:** Matemática 88.5% · Biomedicina 87.6% · Inteligência Artificial 83.4%

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
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — 1:1, confidencial, com técnicas … *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — mapeio o ecossistema antes d… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[3,28,0,6,1,4,10]`

**✅ Top 1: Matemática** 89.5%

**Top 3 completo:** Matemática 89.5% · Biomedicina 84.5% · Inteligência Artificial 83.6%

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
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — 1:1, confidencial, com técnicas … *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — mapeio o ecossistema antes d… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[5,13,2,23,2,1,4]`

**✅ Top 1: Letras** 95.1%

**Top 3 completo:** Letras 95.1% · Psicologia 80.2% · Pedagogia 76.9%

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
| 12 Rotina coletiva | 🧘 Espaço de escuta semanal — 1:1, confidencial, com técnicas … *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 📝 Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏔️ Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — mapeio o ecossistema antes d… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 📡 Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[5,13,2,23,2,1,4]`

**✅ Top 1: Letras** 95.1%

**Top 3 completo:** Letras 95.1% · Psicologia 80.2% · Pedagogia 76.9%

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
| 12 Rotina coletiva | 🌈 Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | 📊 Dashboard pro time — visualização de tudo, gestão por dados *(idx 4)* | INV+1 CON+1 COM+1 TRA+1 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🏕️ No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[15,3,7,17,9,1,2]`

**✅ Top 1: Pedagogia** 98.7%

**Top 3 completo:** Pedagogia 98.7% · Educação Especial e Inclusiva 95.7% · Educação Física 94.1%

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
| 12 Rotina coletiva | ⚖️ Carta de direitos da tripulação — formal, com regras justas… *(idx 4)* | CUI+1 COM+2 TRA+3 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🌍 Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🗣️ Sento, escuto. Pergunto rotina, sono, ansiedades — pode ser… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | 🌊 Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | 🔬 Apenas observação científica — mapeio o ecossistema antes d… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | 🛡️ Recuo a equipe e estabeleço protocolo de não-contato preven… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[8,11,1,8,18,3,2]`

**✅ Top 1: História** 97.3%

**Top 3 completo:** História 97.3% · Geografia 91.0% · Serviço Social 90.4%

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
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e vínculo ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 📊 Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | 🌍 Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | 🤖 IA aplicada — modelo que aprende dos logs, age automático, … *(idx 1)* | INV+2 CON+1 TRA+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | ♻️ Sistema fechado — recursos reciclados, impacto ambiental mí… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,13,6,3,17,6,4]`

**✅ Top 1: Geografia** 96.8%

**Top 3 completo:** Geografia 96.8% · Nutrição 86.5% · História 86.3%

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
| 12 Rotina coletiva | 🌈 Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | 🚨 Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | 🎥 Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | 📊 Dashboard pro time — visualização de tudo, gestão por dados *(idx 4)* | INV+1 CON+1 COM+1 TRA+1 TEC+2 |
| 8 Doença misteriosa | 🛏️ Acomodo os três, monitoro sinais a cada 30 min, hidratação … *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🩺 Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[23,2,3,10,6,6,2]`

**⚠️ Top 1 calculado: Enfermagem** (esperado: Educação Física)

**Top 3 completo:** Enfermagem 95.9% · Educação Física 93.5% · Terapia Ocupacional 91.0%

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
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e vínculo ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🌍 Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | 📊 Dashboard pro time — visualização de tudo, gestão por dados *(idx 4)* | INV+1 CON+1 COM+1 TRA+1 TEC+2 |
| 8 Doença misteriosa | 🥗 Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🐑 Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | 🍞 Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | 🗣️ Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[9,3,4,6,13,16,2]`

**✅ Top 1: Licenciatura em Educação do Campo** 98.1%

**Top 3 completo:** Licenciatura em Educação do Campo 98.1% · Geografia 89.5% · Nutrição 88.1%

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
| 12 Rotina coletiva | 🏃 Rotina física coletiva — esporte como cuidado e vínculo ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🌾 Variedades terrestres em solo alienígena — técnica agrícola… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[6,19,5,2,3,16,3]`

**⚠️ Top 1 calculado: Ciências Biológicas** (esperado: Agronomia)

**Top 3 completo:** Ciências Biológicas 97.5% · Agronomia 95.2% · Zootecnia 93.8%

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
| 12 Rotina coletiva | 🛠️ Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | 🌬️ Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | 🧠 Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | ∫ Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | 🔬 Lab AGORA — sangue, imagem, secreção. Não toco em ninguém a… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | 🌳 Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | 🌾 Variedades terrestres em solo alienígena — técnica agrícola… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | 📸 Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | 🧬 Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[6,19,6,3,1,15,3]`

**⚠️ Top 1 calculado: Ciências Biológicas** (esperado: Zootecnia)

**Top 3 completo:** Ciências Biológicas 96.7% · Zootecnia 95.4% · Agronomia 95.3%

---
*Gerado automaticamente em 2026-05-21 pelo `scripts/personas-ideais.ts`*