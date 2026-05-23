# 🧪 Personas Ideais por Curso UFTM

> **Geração automática** via greedy: pra cada curso, escolho em cada cena a opção cujo vetor de pontos tem maior produto escalar com o vetor do curso. Em seguida valido que essa persona retorna o curso como top 1.
>
> Use isso pra: (1) sanidade qualitativa — você lê a persona de Medicina e bate com sua intuição? (2) prova quantitativa — script verifica matematicamente que cada curso é alcançável.
>
> Regenere com: `npx tsx scripts/personas-ideais.ts`

## Resumo

**31/31 cursos validados** ✅

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
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [shield] Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [thinking] Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

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
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [stethoscope] Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[22,3,4,12,5,6,2]`

**✅ Top 1: Enfermagem** 97.8%

**Top 3 completo:** Enfermagem 97.8% · Pedagogia 90.7% · Psicologia 89.8%

#### Psicologia ✅

*Posto de Saúde Mental* · Uberaba

> Saúde mental, escuta, intervenção comportamental. Cuida via comunicação.

**Vetor do curso:** `[3,2,0,3,1,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [thinking] Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

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
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

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
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [wrench] Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

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
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [shield] Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[18,10,4,4,7,11,2]`

**✅ Top 1: Nutrição** 95.6%

**Top 3 completo:** Nutrição 95.6% · Enfermagem 90.8% · Psicologia 88.2%

#### Serviço Social ✅

*Defesa de Direitos da Tripulação* · Uberaba

> Defende direitos sociais, ponte com políticas públicas.

**Vetor do curso:** `[3,1,0,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [shield] Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [stethoscope] Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[14,3,8,9,18,1,2]`

**✅ Top 1: Serviço Social** 93.6%

**Top 3 completo:** Serviço Social 93.6% · Educação Especial e Inclusiva 91.1% · Pedagogia 90.9%

#### Educação Especial e Inclusiva ✅

*Especialista em Inclusão* · Iturama

> Ensina pessoas com necessidades específicas. Cuidado pedagógico (exclusivo Iturama).

**Vetor do curso:** `[3,0,2,3,2,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[16,3,10,14,10,1,2]`

**✅ Top 1: Educação Especial e Inclusiva** 98.8%

**Top 3 completo:** Educação Especial e Inclusiva 98.8% · Pedagogia 97.3% · Enfermagem 94.0%

### 🔬 Investigação / Ciências Naturais

#### Biomedicina ✅

*Pesquisa de Vida Alienígena* · Uberaba/Iturama

> Pesquisa em saúde — lab, análises clínicas. Curiosidade científica com vocação de cuidar.

**Vetor do curso:** `[2,3,0,0,0,1,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [thinking] Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

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
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [thinking] Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [sprout] Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[6,20,3,2,3,16,5]`

**✅ Top 1: Ciências Biológicas** 95.5%

**Top 3 completo:** Ciências Biológicas 95.5% · Zootecnia 89.3% · Biomedicina 88.3%

#### Física ✅

*Investigador de Mistérios Espaciais* · Uberaba

> Estuda fenômenos físicos e teoria. Curiosidade abstrata pro mundo natural.

**Vetor do curso:** `[0,3,2,0,0,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,24,8,3,3,2,10]`

**✅ Top 1: Física** 93.9%

**Top 3 completo:** Física 93.9% · Química 87.0% · Matemática 86.4%

#### Química ✅

*Especialista em Atmosferas* · Uberaba/Iturama

> Estuda matéria, reações e transformações. Cientista do micro.

**Vetor do curso:** `[1,3,2,0,0,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | [sprout] Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[6,21,11,2,3,8,4]`

**✅ Top 1: Química** 97.2%

**Top 3 completo:** Química 97.2% · Engenharia Química 90.8% · Física 90.5%

### 🔧 Construção / Engenharias físicas

#### Engenharia Civil ✅

*Arquitetura de Bases Planetárias* · Uberaba

> Projeta e constrói infraestrutura. Construtor do macroespaço urbano.

**Vetor do curso:** `[0,1,3,1,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,9,21,6,9,2,4]`

**✅ Top 1: Engenharia Civil** 96.7%

**Top 3 completo:** Engenharia Civil 96.7% · Engenharia Mecânica 87.4% · Engenharia Elétrica 83.1%

#### Engenharia Mecânica ✅

*Engenharia Mecânica de Bordo* · Uberaba

> Máquinas, motores, sistemas mecânicos. Construtor que entende o como.

**Vetor do curso:** `[0,2,3,0,0,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [wrench] Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

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
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [wrench] Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,15,17,2,3,2,13]`

**✅ Top 1: Engenharia Elétrica** 97.8%

**Top 3 completo:** Engenharia Elétrica 97.8% · Engenharia Mecânica 94.7% · Inteligência Artificial 94.2%

#### Engenharia Química ✅

*Engenharia de Processos* · Uberaba

> Processos químicos industriais. Ponte ciência↔produção.

**Vetor do curso:** `[0,3,3,0,0,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

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
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [logs] Escrevo script pra IA de bordo monitorar a anomalia 24/7 e … *(idx 4)* | COM+1 TEC+3 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [chart] Salvo a mensagem num arquivo encriptado pra reler nos momen… *(idx 4)* | COM+1 TEC+3 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [logs] Backup centralizado dos bancos de bordo — perder dado de 7 … *(idx 5)* | COM+2 TEC+3 |

**Vetor resultante do aluno:** `[2,9,14,9,4,1,17]`

**✅ Top 1: Engenharia de Produção** 96.2%

**Top 3 completo:** Engenharia de Produção 96.2% · Inteligência Artificial 92.1% · Engenharia Elétrica 88.2%

#### Engenharia Ambiental ✅

*Posto Ambiental da Nave* · Uberaba

> Meio ambiente com técnica de engenharia. Sustentabilidade aplicada.

**Vetor do curso:** `[0,2,3,0,2,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [leaf] Estufa — sistema de irrigação travou nas mudas *(idx 3)* | CON+1 CUL+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[4,8,15,1,7,18,3]`

**✅ Top 1: Engenharia Ambiental** 96.5%

**Top 3 completo:** Engenharia Ambiental 96.5% · Agronomia 93.5% · Engenharia de Alimentos 90.8%

#### Engenharia de Alimentos ✅

*Engenharia de Suprimentos* · Uberaba

> Tecnologia de alimentos, processos da fazenda à mesa.

**Vetor do curso:** `[1,2,3,0,0,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [wrench] Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [sprout] Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,11,20,2,1,9,5]`

**✅ Top 1: Engenharia de Alimentos** 96.3%

**Top 3 completo:** Engenharia de Alimentos 96.3% · Engenharia Química 91.9% · Engenharia Mecânica 91.3%

### 💻 Decifrador / Computação + Dados + Matemática

#### Banco de Dados ✅

*Posto de Arquivo de Bordo* · Uberaba

> Dados, armazenamento, queries. Organiza o digital.

**Vetor do curso:** `[0,1,0,2,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [logs] Escrevo script pra IA de bordo monitorar a anomalia 24/7 e … *(idx 4)* | COM+1 TEC+3 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [chart] Salvo a mensagem num arquivo encriptado pra reler nos momen… *(idx 4)* | COM+1 TEC+3 |
| 13 Sistema da nave | [logs] Banco centralizado — tabelas bem organizadas, busca rápida … *(idx 0)* | COM+1 TEC+3 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [logs] Backup centralizado dos bancos de bordo — perder dado de 7 … *(idx 5)* | COM+2 TEC+3 |

**Vetor resultante do aluno:** `[1,14,0,13,0,3,20]`

**✅ Top 1: Banco de Dados** 96.0%

**Top 3 completo:** Banco de Dados 96.0% · Matemática 94.8% · Engenharia de Produção 76.8%

#### Inteligência Artificial ✅

*Posto de IA da Missão* · Uberaba

> Machine learning, sistemas inteligentes. Investigador digital.

**Vetor do curso:** `[0,2,2,0,1,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina de adaptação — ajusto pequenas tarefas pra cada um … *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [chart] Salvo a mensagem num arquivo encriptado pra reler nos momen… *(idx 4)* | COM+1 TEC+3 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Reroteio toda energia pros sistemas críticos, manualmente *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[2,16,13,3,4,2,17]`

**✅ Top 1: Inteligência Artificial** 97.5%

**Top 3 completo:** Inteligência Artificial 97.5% · Engenharia Elétrica 93.2% · Física 89.0%

#### Matemática ✅

*Estrategista de Rotas* · Uberaba

> Modelagem, teoria, abstração. Pensador puro.

**Vetor do curso:** `[0,3,0,1,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar das margens de erro… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [chart] Salvo a mensagem num arquivo encriptado pra reler nos momen… *(idx 4)* | COM+1 TEC+3 |
| 13 Sistema da nave | [thinking] Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [logs] Backup centralizado dos bancos de bordo — perder dado de 7 … *(idx 5)* | COM+2 TEC+3 |

**Vetor resultante do aluno:** `[1,22,0,9,0,4,18]`

**✅ Top 1: Matemática** 98.3%

**Top 3 completo:** Matemática 98.3% · Banco de Dados 83.5% · Biomedicina 77.2%

### 📢 Comunicação / Educação

#### Letras (PT/ESP) ✅

*Tradutor Interestelar* · Uberaba

> Língua, literatura, ensino. Conector via palavra (espanhol).

**Vetor do curso:** `[1,2,1,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | [thinking] Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[5,13,2,23,2,1,4]`

**✅ Top 1: Letras** 95.1%

**Top 3 completo:** Letras 95.1% · Psicologia 80.2% · Pedagogia 76.9%

#### Letras (PT/ING) ✅

*Tradutor Interestelar* · Uberaba

> Idem, mas em inglês. Mesma essência (são agrupados como 'Letras' no resultado).

**Vetor do curso:** `[1,2,1,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | [thinking] Teoria primeiro — provo o problema matematicamente antes de… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[5,13,2,23,2,1,4]`

**✅ Top 1: Letras** 95.1%

**Top 3 completo:** Letras 95.1% · Psicologia 80.2% · Pedagogia 76.9%

#### Pedagogia ✅

*Educação da Próxima Geração* · Uberaba

> Educação básica, formação de criança/jovem. Cuidado via ensino.

**Vetor do curso:** `[3,1,1,3,2,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz interespécie *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[15,4,8,16,10,1,2]`

**✅ Top 1: Pedagogia** 98.9%

**Top 3 completo:** Pedagogia 98.9% · Educação Especial e Inclusiva 98.0% · Enfermagem 94.0%

### ⚡ Transformação / Humanidades

#### História ✅

*Narrador da Expedição* · Uberaba

> Estudo do passado, memória, contexto. Cronista crítico.

**Vetor do curso:** `[1,2,0,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [shield] Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [scale] Carta de direitos da tripulação — formal, com regras justas… *(idx 4)* | CUI+1 COM+2 TRA+3 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [shield] Recuo a equipe e estabeleço protocolo de não-contato preven… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[6,10,3,9,20,3,2]`

**✅ Top 1: História** 97.0%

**Top 3 completo:** História 97.0% · Geografia 91.1% · Serviço Social 87.4%

#### Geografia ✅

*Mapas de Mundos Novos* · Uberaba

> Espaço, território, humano↔ambiente. Multidisciplinar.

**Vetor do curso:** `[1,2,0,1,3,2,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [shield] Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [scale] Carta de direitos da tripulação — formal, com regras justas… *(idx 4)* | CUI+1 COM+2 TRA+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [sprout] Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[6,14,4,5,17,7,4]`

**✅ Top 1: Geografia** 96.4%

**Top 3 completo:** Geografia 96.4% · História 89.4% · Licenciatura em Educação do Campo 84.5%

#### Educação Física ✅

*Treinamento da Tripulação* · Uberaba

> Movimento, esporte, saúde corporal. Cuidado pelo corpo em ação.

**Vetor do curso:** `[2,1,2,0,2,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [shield] Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento diagnostic… *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [shield] Recuo a equipe e estabeleço protocolo de não-contato preven… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[12,3,14,2,19,2,2]`

**✅ Top 1: Educação Física** 94.5%

**Top 3 completo:** Educação Física 94.5% · Fisioterapia 81.9% · Educação Especial e Inclusiva 78.8%

#### Licenciatura em Educação do Campo ✅

*Educação de Vila Rural* · Uberaba

> Educação no contexto rural/agrário. Justiça social + terra.

**Vetor do curso:** `[2,1,1,2,3,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [leaf] Estufa — sistema de irrigação travou nas mudas *(idx 3)* | CON+1 CUL+2 |
| 4 Anomalia | [shield] Aviso a Capitã imediatamente e protocolo de segurança *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,5,5,4,14,19,2]`

**✅ Top 1: Licenciatura em Educação do Campo** 95.2%

**Top 3 completo:** Licenciatura em Educação do Campo 95.2% · Geografia 88.6% · Engenharia Ambiental 83.0%

### 🌱 Cultivo / Natureza

#### Agronomia ✅

*Cultivo de Vida Planetária* · Uberaba/Iturama

> Agricultura técnica e científica. Investigação aplicada à terra (Uberaba/Iturama).

**Vetor do curso:** `[1,2,2,0,0,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [leaf] Estufa — sistema de irrigação travou nas mudas *(idx 3)* | CON+1 CUL+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou minha performance nos … *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [sprout] Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[4,10,8,1,5,24,3]`

**✅ Top 1: Agronomia** 93.9%

**Top 3 completo:** Agronomia 93.9% · Zootecnia 90.5% · Engenharia Ambiental 87.9%

#### Zootecnia ✅

*Criação de Vida Animal* · Iturama

> Produção animal sustentável (exclusivo Iturama).

**Vetor do curso:** `[2,2,1,0,0,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar a assinatura com todos os arqu… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar a estabilizar… *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA aplicada — modelo que aprende dos registros, age automát… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [sprout] Planto variedades da Terra no solo alienígena — técnica agr… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[8,11,5,2,4,22,4]`

**✅ Top 1: Zootecnia** 95.1%

**Top 3 completo:** Zootecnia 95.1% · Agronomia 92.5% · Ciências Biológicas 91.3%

---
*Gerado automaticamente em 2026-05-23 pelo `scripts/personas-ideais.ts`*