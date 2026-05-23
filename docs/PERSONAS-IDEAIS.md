# 🧪 Personas Ideais por Curso UFTM

> **Geração automática** via greedy: pra cada curso, escolho em cada cena a opção cujo vetor de pontos tem maior produto escalar com o vetor do curso. Em seguida valido que essa persona retorna o curso como top 1.
>
> Use isso pra: (1) sanidade qualitativa — você lê a persona de Medicina e bate com sua intuição? (2) prova quantitativa — script verifica matematicamente que cada curso é alcançável.
>
> Regenere com: `npx tsx scripts/personas-ideais.ts`

## Resumo

**28/31 cursos validados** ✅

### ⚠️ Cursos não alcançáveis como top 1

- **Engenharia Civil** → veio Engenharia Mecânica (96.4%)
- **Engenharia Química** → veio Química (94.2%)
- **Engenharia de Produção** → veio Engenharia Elétrica (97.6%)

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
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [thinking] Matemática primeiro — explico o problema no papel antes de … *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[22,18,1,11,5,3,3]`

**✅ Top 1: Medicina** 95.6%

**Top 3 completo:** Medicina 95.6% · Psicologia 91.2% · Enfermagem 88.6%

#### Enfermagem ✅

*Especialista em Cuidado Vital* · Uberaba

> Cuidado cotidiano, fica perto do paciente. Empatia + execução técnica.

**Vetor do curso:** `[3,1,1,2,0,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [thinking] Matemática primeiro — explico o problema no papel antes de … *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [stethoscope] Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [chart] Crio um dashboard pro time inteiro contribuir — todo mundo … *(idx 3)* | COM+2 TEC+2 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[25,7,5,15,1,3,4]`

**✅ Top 1: Enfermagem** 98.0%

**Top 3 completo:** Enfermagem 98.0% · Terapia Ocupacional 93.3% · Pedagogia 88.7%

#### Psicologia ✅

*Posto de Saúde Mental* · Uberaba

> Saúde mental, escuta, intervenção comportamental. Cuida via comunicação.

**Vetor do curso:** `[3,2,0,3,2,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 17 Atendimento à tripulação | [shield] Faço um plano de inclusão pra ele voltar com adaptações que… *(idx 7)* | CUI+2 COM+2 TRA+2 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [thinking] Matemática primeiro — explico o problema no papel antes de … *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[16,14,1,20,7,3,3]`

**✅ Top 1: Psicologia** 97.0%

**Top 3 completo:** Psicologia 97.0% · Medicina 93.1% · Letras 92.3%

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
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [wrench] Monto um decodificador físico — circuito que traduz os símb… *(idx 4)* | CON+2 TEC+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[22,8,15,9,5,1,4]`

**✅ Top 1: Fisioterapia** 98.6%

**Top 3 completo:** Fisioterapia 98.6% · Terapia Ocupacional 96.1% · Enfermagem 92.3%

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
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 17 Atendimento à tripulação | [tools] Reorganizo as tarefas dele — adapto a rotina pra ele partic… *(idx 4)* | CUI+2 CON+2 COM+2 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [wrench] Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [chart] Crio um dashboard pro time inteiro contribuir — todo mundo … *(idx 3)* | COM+2 TEC+2 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[21,2,15,16,0,3,4]`

**✅ Top 1: Terapia Ocupacional** 97.1%

**Top 3 completo:** Terapia Ocupacional 97.1% · Enfermagem 93.8% · Fisioterapia 90.0%

#### Nutrição ✅

*Posto de Sustento Vital* · Uberaba

> Alimentação como saúde. Ciência aplicada ao bem-estar.

**Vetor do curso:** `[3,2,0,0,2,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[21,16,4,4,7,11,3]`

**✅ Top 1: Nutrição** 94.9%

**Top 3 completo:** Nutrição 94.9% · Biomedicina 89.1% · Zootecnia 86.8%

#### Serviço Social ✅

*Defesa de Direitos da Tripulação* · Uberaba

> Defende direitos sociais, ponte com políticas públicas.

**Vetor do curso:** `[3,1,0,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 17 Atendimento à tripulação | [shield] Faço um plano de inclusão pra ele voltar com adaptações que… *(idx 7)* | CUI+2 COM+2 TRA+2 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [stethoscope] Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 15 Linguagem alienígena | [chart] Crio um dashboard pro time inteiro contribuir — todo mundo … *(idx 3)* | COM+2 TEC+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[16,3,8,13,20,1,4]`

**✅ Top 1: Serviço Social** 94.4%

**Top 3 completo:** Serviço Social 94.4% · Pedagogia 93.1% · Educação Especial e Inclusiva 92.7%

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
| 17 Atendimento à tripulação | [tools] Reorganizo as tarefas dele — adapto a rotina pra ele partic… *(idx 4)* | CUI+2 CON+2 COM+2 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 15 Linguagem alienígena | [chart] Crio um dashboard pro time inteiro contribuir — todo mundo … *(idx 3)* | COM+2 TEC+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[18,3,12,18,10,1,4]`

**✅ Top 1: Educação Especial e Inclusiva** 98.4%

**Top 3 completo:** Educação Especial e Inclusiva 98.4% · Pedagogia 96.3% · Terapia Ocupacional 91.0%

### 🔬 Investigação / Ciências Naturais

#### Biomedicina ✅

*Pesquisa de Vida Alienígena* · Uberaba/Iturama

> Pesquisa em saúde — lab, análises clínicas. Curiosidade científica com vocação de cuidar.

**Vetor do curso:** `[2,3,0,0,0,1,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou meu jeito de trabalhar… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [thinking] Matemática primeiro — explico o problema no papel antes de … *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[8,34,0,5,1,4,11]`

**✅ Top 1: Biomedicina** 92.3%

**Top 3 completo:** Biomedicina 92.3% · Matemática 86.4% · Física 81.8%

#### Ciências Biológicas ✅

*Cientista de Ecossistemas* · Uberaba/Iturama

> Estuda os seres vivos e ecossistemas. Pesquisador da vida.

**Vetor do curso:** `[0,3,0,1,1,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou meu jeito de trabalhar… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [thinking] Matemática primeiro — explico o problema no papel antes de … *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[6,27,2,5,1,15,6]`

**✅ Top 1: Ciências Biológicas** 90.8%

**Top 3 completo:** Ciências Biológicas 90.8% · Biomedicina 90.6% · Química 84.2%

#### Física ✅

*Investigador de Mistérios Espaciais* · Uberaba

> Estuda fenômenos físicos e teoria. Curiosidade abstrata pro mundo natural.

**Vetor do curso:** `[0,3,2,1,0,0,2]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou meu jeito de trabalhar… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,30,6,4,3,2,14]`

**✅ Top 1: Física** 92.1%

**Top 3 completo:** Física 92.1% · Matemática 90.9% · Biomedicina 85.8%

#### Química ✅

*Especialista em Atmosferas* · Uberaba/Iturama

> Estuda matéria, reações e transformações. Cientista do micro.

**Vetor do curso:** `[1,3,2,0,0,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou meu jeito de trabalhar… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[9,27,11,2,3,8,5]`

**✅ Top 1: Química** 96.4%

**Top 3 completo:** Química 96.4% · Biomedicina 90.0% · Engenharia Química 88.3%

### 🔧 Construção / Engenharias físicas

#### Engenharia Civil ⚠️

*Arquitetura de Bases Planetárias* · Uberaba

> Projeta e constrói infraestrutura. Construtor do macroespaço urbano.

**Vetor do curso:** `[0,1,3,1,1,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 17 Atendimento à tripulação | [tools] Reorganizo as tarefas dele — adapto a rotina pra ele partic… *(idx 4)* | CUI+2 CON+2 COM+2 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [wrench] Monto um decodificador físico — circuito que traduz os símb… *(idx 4)* | CON+2 TEC+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[6,9,26,7,6,4,6]`

**⚠️ Top 1 calculado: Engenharia Mecânica** (esperado: Engenharia Civil)

**Top 3 completo:** Engenharia Mecânica 96.4% · Engenharia Civil 94.6% · Engenharia de Produção 88.9%

#### Engenharia Mecânica ✅

*Engenharia Mecânica de Bordo* · Uberaba

> Máquinas, motores, sistemas mecânicos. Construtor que entende o como.

**Vetor do curso:** `[0,1,3,1,1,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 17 Atendimento à tripulação | [tools] Reorganizo as tarefas dele — adapto a rotina pra ele partic… *(idx 4)* | CUI+2 CON+2 COM+2 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou meu jeito de trabalhar… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [wrench] Monto um decodificador físico — circuito que traduz os símb… *(idx 4)* | CON+2 TEC+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[6,11,25,5,10,2,7]`

**✅ Top 1: Engenharia Mecânica** 96.7%

**Top 3 completo:** Engenharia Mecânica 96.7% · Engenharia Civil 92.2% · Engenharia Química 89.4%

#### Engenharia Elétrica ✅

*Engenharia de Sistemas Vitais* · Uberaba

> Sistemas elétricos, eletrônicos e energia. Construtor + lógica de circuitos.

**Vetor do curso:** `[0,2,3,1,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 17 Atendimento à tripulação | [dna] Avalio postura e movimento — corpo tenso afeta a mente. Pre… *(idx 3)* | CUI+2 INV+1 CON+2 |
| 7 Mensagem da Terra | [chart] Salvo a mensagem num arquivo encriptado pra reler nos momen… *(idx 4)* | COM+1 TEC+3 |
| 13 Sistema da nave | [wrench] Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [wrench] Monto um decodificador físico — circuito que traduz os símb… *(idx 4)* | CON+2 TEC+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,16,18,3,2,2,19]`

**✅ Top 1: Engenharia Elétrica** 97.5%

**Top 3 completo:** Engenharia Elétrica 97.5% · Engenharia de Produção 95.9% · Inteligência Artificial 95.9%

#### Engenharia Química ⚠️

*Engenharia de Processos* · Uberaba

> Processos químicos industriais. Ponte ciência↔produção.

**Vetor do curso:** `[0,3,3,0,1,1,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou meu jeito de trabalhar… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[7,25,16,2,5,2,7]`

**⚠️ Top 1 calculado: Química** (esperado: Engenharia Química)

**Top 3 completo:** Química 94.2% · Engenharia Química 94.0% · Física 91.1%

#### Engenharia de Produção ⚠️

*Coordenação da Operação da Nave* · Uberaba

> Gestão e otimização de processos. Construtor que lidera equipes.

**Vetor do curso:** `[0,2,3,1,0,0,2]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 17 Atendimento à tripulação | [dna] Avalio postura e movimento — corpo tenso afeta a mente. Pre… *(idx 3)* | CUI+2 INV+1 CON+2 |
| 7 Mensagem da Terra | [chart] Salvo a mensagem num arquivo encriptado pra reler nos momen… *(idx 4)* | COM+1 TEC+3 |
| 13 Sistema da nave | [wrench] Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [wrench] Monto um decodificador físico — circuito que traduz os símb… *(idx 4)* | CON+2 TEC+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,14,21,3,2,2,17]`

**⚠️ Top 1 calculado: Engenharia Elétrica** (esperado: Engenharia de Produção)

**Top 3 completo:** Engenharia Elétrica 97.6% · Engenharia de Produção 97.4% · Inteligência Artificial 93.6%

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
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 17 Atendimento à tripulação | [dna] Avalio postura e movimento — corpo tenso afeta a mente. Pre… *(idx 3)* | CUI+2 INV+1 CON+2 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou meu jeito de trabalhar… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[6,12,17,1,7,18,4]`

**✅ Top 1: Engenharia Ambiental** 95.7%

**Top 3 completo:** Engenharia Ambiental 95.7% · Agronomia 94.9% · Engenharia de Alimentos 94.1%

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
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 17 Atendimento à tripulação | [dna] Avalio postura e movimento — corpo tenso afeta a mente. Pre… *(idx 3)* | CUI+2 INV+1 CON+2 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou meu jeito de trabalhar… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [wrench] Reconstruo os equipamentos — circuitos novos, máquinas mais… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[6,15,22,2,1,9,6]`

**✅ Top 1: Engenharia de Alimentos** 96.1%

**Top 3 completo:** Engenharia de Alimentos 96.1% · Engenharia Química 94.1% · Química 91.2%

### 💻 Decifrador / Computação + Dados + Matemática

#### Banco de Dados ✅

*Posto de Arquivo de Bordo* · Uberaba

> Dados, armazenamento, queries. Organiza o digital.

**Vetor do curso:** `[0,1,1,2,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [logs] Escrevo script pra IA de bordo ficar de olho na anomalia 24… *(idx 4)* | COM+1 TEC+3 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 17 Atendimento à tripulação | [voice] Escuto sem julgar — abro espaço pra ele falar o que sente, … *(idx 2)* | CUI+2 COM+3 |
| 7 Mensagem da Terra | [chart] Salvo a mensagem num arquivo encriptado pra reler nos momen… *(idx 4)* | COM+1 TEC+3 |
| 13 Sistema da nave | [logs] Banco centralizado — tabelas bem organizadas, busca rápida … *(idx 0)* | COM+1 TEC+3 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [brain] Treino uma IA pra reconhecer padrões nos símbolos — deixo a… *(idx 1)* | INV+1 TEC+3 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [logs] Copio tudo num servidor de reserva e organizo direitinho — … *(idx 5)* | COM+2 TEC+3 |

**Vetor resultante do aluno:** `[3,14,2,16,0,1,23]`

**✅ Top 1: Banco de Dados** 95.8%

**Top 3 completo:** Banco de Dados 95.8% · Matemática 92.4% · Física 80.7%

#### Inteligência Artificial ✅

*Posto de IA da Missão* · Uberaba

> Machine learning, sistemas inteligentes. Investigador digital.

**Vetor do curso:** `[0,2,2,0,1,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [chart] Salvo a mensagem num arquivo encriptado pra reler nos momen… *(idx 4)* | COM+1 TEC+3 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [brain] Treino uma IA pra reconhecer padrões nos símbolos — deixo a… *(idx 1)* | INV+1 TEC+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[5,20,13,3,4,2,20]`

**✅ Top 1: Inteligência Artificial** 95.8%

**Top 3 completo:** Inteligência Artificial 95.8% · Física 95.1% · Engenharia Elétrica 92.6%

#### Matemática ✅

*Estrategista de Rotas* · Uberaba

> Modelagem, teoria, abstração. Pensador puro.

**Vetor do curso:** `[0,3,0,1,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [chart] Salvo a mensagem num arquivo encriptado pra reler nos momen… *(idx 4)* | COM+1 TEC+3 |
| 13 Sistema da nave | [thinking] Matemática primeiro — explico o problema no papel antes de … *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [satellite] Mando os dados pra IA de bordo cruzar com base de doenças c… *(idx 5)* | INV+1 TEC+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [brain] Treino uma IA pra reconhecer padrões nos símbolos — deixo a… *(idx 1)* | INV+1 TEC+3 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [logs] Copio tudo num servidor de reserva e organizo direitinho — … *(idx 5)* | COM+2 TEC+3 |

**Vetor resultante do aluno:** `[4,26,0,9,0,4,21]`

**✅ Top 1: Matemática** 98.1%

**Top 3 completo:** Matemática 98.1% · Física 86.7% · Biomedicina 81.7%

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
| 17 Atendimento à tripulação | [voice] Escuto sem julgar — abro espaço pra ele falar o que sente, … *(idx 2)* | CUI+2 COM+3 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | [thinking] Matemática primeiro — explico o problema no papel antes de … *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,16,2,26,2,1,5]`

**✅ Top 1: Letras** 94.9%

**Top 3 completo:** Letras 94.9% · Psicologia 83.1% · Pedagogia 77.5%

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
| 17 Atendimento à tripulação | [voice] Escuto sem julgar — abro espaço pra ele falar o que sente, … *(idx 2)* | CUI+2 COM+3 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem *(idx 1)* | COM+3 |
| 13 Sistema da nave | [thinking] Matemática primeiro — explico o problema no papel antes de … *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,16,2,26,2,1,5]`

**✅ Top 1: Letras** 94.9%

**Top 3 completo:** Letras 94.9% · Psicologia 83.1% · Pedagogia 77.5%

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
| 17 Atendimento à tripulação | [shield] Faço um plano de inclusão pra ele voltar com adaptações que… *(idx 7)* | CUI+2 COM+2 TRA+2 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 15 Linguagem alienígena | [chart] Crio um dashboard pro time inteiro contribuir — todo mundo … *(idx 3)* | COM+2 TEC+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[17,4,8,20,12,1,4]`

**✅ Top 1: Pedagogia** 98.4%

**Top 3 completo:** Pedagogia 98.4% · Educação Especial e Inclusiva 97.1% · Psicologia 92.0%

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
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [scale] Documento de direitos da tripulação — formal, com regras ju… *(idx 4)* | CUI+1 COM+2 TRA+3 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 17 Atendimento à tripulação | [scale] Crio uma rede de apoio na tripulação — coletivo cuida melho… *(idx 6)* | CUI+1 COM+1 TRA+3 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [shield] Recuo a equipe e estabeleço a regra de não chegar perto, po… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,13,3,10,23,3,3]`

**✅ Top 1: História** 97.3%

**Top 3 completo:** História 97.3% · Geografia 91.6% · Serviço Social 86.8%

#### Geografia ✅

*Mapas de Mundos Novos* · Uberaba

> Espaço, território, humano↔ambiente. Multidisciplinar.

**Vetor do curso:** `[1,2,0,1,3,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [scale] Documento de direitos da tripulação — formal, com regras ju… *(idx 4)* | CUI+1 COM+2 TRA+3 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 17 Atendimento à tripulação | [scale] Crio uma rede de apoio na tripulação — coletivo cuida melho… *(idx 6)* | CUI+1 COM+1 TRA+3 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,15,4,6,20,10,3]`

**✅ Top 1: Geografia** 97.7%

**Top 3 completo:** Geografia 97.7% · História 88.9% · Nutrição 83.8%

#### Educação Física ✅

*Treinamento da Tripulação* · Uberaba

> Movimento, esporte, saúde corporal. Cuidado pelo corpo em ação.

**Vetor do curso:** `[2,1,2,0,2,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 15 Linguagem alienígena | [wrench] Monto um decodificador físico — circuito que traduz os símb… *(idx 4)* | CON+2 TEC+2 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [shield] Recuo a equipe e estabeleço a regra de não chegar perto, po… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[15,6,16,2,19,2,4]`

**✅ Top 1: Educação Física** 96.1%

**Top 3 completo:** Educação Física 96.1% · Fisioterapia 86.6% · Educação Especial e Inclusiva 79.0%

#### Licenciatura em Educação do Campo ✅

*Educação de Vila Rural* · Uberaba

> Educação no contexto rural/agrário. Justiça social + terra.

**Vetor do curso:** `[2,0,0,1,3,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 17 Atendimento à tripulação | [scale] Crio uma rede de apoio na tripulação — coletivo cuida melho… *(idx 6)* | CUI+1 COM+1 TRA+3 |
| 7 Mensagem da Terra | [globe] Reflito sobre o quanto a Terra precisa que essa missão dê c… *(idx 3)* | TRA+3 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [chart] Crio um dashboard pro time inteiro contribuir — todo mundo … *(idx 3)* | COM+2 TEC+2 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[11,5,4,5,15,20,4]`

**✅ Top 1: Licenciatura em Educação do Campo** 95.7%

**Top 3 completo:** Licenciatura em Educação do Campo 95.7% · Geografia 88.5% · Nutrição 85.7%

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
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 17 Atendimento à tripulação | [leaf] Reviso o que ele anda comendo — falta de nutriente afeta hu… *(idx 5)* | CUI+2 INV+1 CUL+2 |
| 7 Mensagem da Terra | [brain] Anoto como o impacto emocional mudou meu jeito de trabalhar… *(idx 2)* | INV+2 TRA+1 TEC+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[6,14,8,1,5,26,4]`

**✅ Top 1: Agronomia** 94.7%

**Top 3 completo:** Agronomia 94.7% · Zootecnia 93.3% · Ciências Biológicas 88.5%

#### Zootecnia ✅

*Criação de Vida Animal* · Iturama

> Produção animal sustentável (exclusivo Iturama).

**Vetor do curso:** `[2,2,1,0,0,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se a gente vai poder levar plantas pra estufa da n… *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 17 Atendimento à tripulação | [stethoscope] Investigo sintomas físicos primeiro — pressão, sono, exames… *(idx 0)* | CUI+3 INV+3 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto, depois respondo com calma *(idx 0)* | CUI+2 COM+1 |
| 13 Sistema da nave | [brain] IA que aprende sozinha vendo os registros — age automático … *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [thinking] Provo matematicamente que a sequência segue alguma lógica a… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[11,17,5,2,4,22,5]`

**✅ Top 1: Zootecnia** 96.4%

**Top 3 completo:** Zootecnia 96.4% · Agronomia 91.9% · Ciências Biológicas 88.6%

---
*Gerado automaticamente em 2026-05-23 pelo `scripts/personas-ideais.ts`*