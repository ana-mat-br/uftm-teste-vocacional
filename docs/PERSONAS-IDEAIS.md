# 🧪 Personas Ideais por Curso UFTM

> **Geração automática** via greedy: pra cada curso, escolho em cada cena a opção cujo vetor de pontos tem maior produto escalar com o vetor do curso. Em seguida valido que essa persona retorna o curso como top 1.
>
> Use isso pra: (1) sanidade qualitativa — você lê a persona de Medicina e bate com sua intuição? (2) prova quantitativa — script verifica matematicamente que cada curso é alcançável.
>
> Regenere com: `npx tsx scripts/personas-ideais.ts`

## Resumo

**27/31 cursos validados** ✅

### ⚠️ Cursos não alcançáveis como top 1

- **Psicologia** → veio Pedagogia (97.5%)
- **Engenharia Mecânica** → veio Engenharia Elétrica (96.6%)
- **Engenharia Elétrica** → veio Inteligência Artificial (86.7%)
- **Engenharia Química** → veio Física (97.4%)

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

**Vetor do curso:** `[3,3,2,1,1,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo e levanto a mão pra perguntar se esse Protocolo … *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [chart] Vou pra sala de dados e cruzo o rastro com todos os arquivo… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [brain] Anoto como eu reagi e os efeitos no meu corpo — pode virar … *(idx 3)* | CUI+1 INV+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [lab] Corro pro laboratório fazer exame de sangue — nem chego per… *(idx 0)* | CUI+1 INV+3 |
| 17 Festa dos 100 dias | [voice] Organizo um show de talentos — música, poesia, brincadeiras… *(idx 1)* | CUI+1 COM+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 1)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Antes de plantar nada, estudo o solo, o ar e a luz — só dep… *(idx 2)* | INV+3 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[16,23,2,8,1,2,9]`

**✅ Top 1: Medicina** 90.7%

**Top 3 completo:** Medicina 90.7% · Biomedicina 90.4% · Química 76.7%

#### Enfermagem ✅

*Especialista em Cuidado Vital* · Uberaba

> Cuidado cotidiano, fica perto do paciente. Empatia + execução técnica.

**Vetor do curso:** `[3,1,2,1,0,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [satellite] Mando um drone chegar mais perto antes da gente fazer qualq… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [stethoscope] Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 17 Festa dos 100 dias | [voice] Organizo um show de talentos — música, poesia, brincadeiras… *(idx 1)* | CUI+1 COM+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 1)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[25,6,7,13,1,3,4]`

**✅ Top 1: Enfermagem** 92.7%

**Top 3 completo:** Enfermagem 92.7% · Terapia Ocupacional 86.5% · Medicina 83.1%

#### Psicologia ⚠️

*Posto de Saúde Mental* · Uberaba

> Saúde mental, escuta, intervenção comportamental. Cuida via comunicação.

**Vetor do curso:** `[2,2,0,3,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [globe] Pergunto pra Capitã: como essa missão muda a vida da galera… *(idx 4)* | COM+1 TRA+3 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Chamo a galera toda — isso aqui precisa de várias cabeças p… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [voice] Aviso a galera com calma — explico o que tá rolando pra nin… *(idx 4)* | CUI+1 COM+3 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [scale] Crio regras claras: o que pode ficar guardado e o que não —… *(idx 4)* | COM+1 TRA+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [letter] Faço um documentário da viagem até aqui — entrevisto todo m… *(idx 0)* | COM+2 TRA+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 2)* | COM+3 TRA+1 |
| 14 Cultivo planetário | [lab] Antes de plantar nada, estudo o solo, o ar e a luz — só dep… *(idx 2)* | INV+3 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 TRA+1 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[12,3,0,25,20,1,0]`

**⚠️ Top 1 calculado: Pedagogia** (esperado: Psicologia)

**Top 3 completo:** Pedagogia 97.5% · Psicologia 94.2% · Letras 92.5%

#### Fisioterapia ✅

*Posto de Reabilitação Motora* · Uberaba

> Reabilita o corpo. Cuidado pelo movimento e técnica física.

**Vetor do curso:** `[3,2,3,0,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [tools] Chego mais perto e dou uma olhada na nave — quero ver como … *(idx 2)* | INV+1 CON+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [satellite] Mando um drone chegar mais perto antes da gente fazer qualq… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [lab] Corro pro laboratório fazer exame de sangue — nem chego per… *(idx 0)* | CUI+1 INV+3 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CUL+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 1)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [tree] Sistema fechado e reciclado — engenheiro tudo pra quase não… *(idx 3)* | CON+3 TRA+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[15,14,17,2,3,3,4]`

**✅ Top 1: Fisioterapia** 96.8%

**Top 3 completo:** Fisioterapia 96.8% · Medicina 95.1% · Enfermagem 89.7%

#### Terapia Ocupacional ✅

*Posto de Adaptação à Rotina* · Uberaba

> Ajuda pessoas a recuperar autonomia em atividades cotidianas.

**Vetor do curso:** `[3,0,3,2,0,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [satellite] Mando um drone chegar mais perto antes da gente fazer qualq… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [wrench] Troco as peças do computador — coisas novas e bem mais rápi… *(idx 2)* | CON+3 |
| 8 Doença misteriosa | [stethoscope] Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 17 Festa dos 100 dias | [voice] Organizo um show de talentos — música, poesia, brincadeiras… *(idx 1)* | CUI+1 COM+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 2)* | COM+3 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado e reciclado — engenheiro tudo pra quase não… *(idx 3)* | CON+3 TRA+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[23,1,11,16,3,0,0]`

**✅ Top 1: Terapia Ocupacional** 94.4%

**Top 3 completo:** Terapia Ocupacional 94.4% · Enfermagem 92.1% · Educação Especial e Inclusiva 84.9%

#### Nutrição ✅

*Posto de Sustento Vital* · Uberaba

> Alimentação como saúde. Ciência aplicada ao bem-estar.

**Vetor do curso:** `[3,2,0,0,2,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se vou poder levar plantas pra estufa da nave *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [scale] Crio regras claras: o que pode ficar guardado e o que não —… *(idx 4)* | COM+1 TRA+3 |
| 8 Doença misteriosa | [lab] Corro pro laboratório fazer exame de sangue — nem chego per… *(idx 0)* | CUI+1 INV+3 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CUL+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 3)* | INV+1 TRA+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[21,10,0,5,8,15,0]`

**✅ Top 1: Nutrição** 96.3%

**Top 3 completo:** Nutrição 96.3% · Zootecnia 91.3% · Licenciatura em Educação do Campo 82.7%

#### Serviço Social ✅

*Defesa de Direitos da Tripulação* · Uberaba

> Defende direitos sociais, ponte com políticas públicas.

**Vetor do curso:** `[3,1,0,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [globe] Pergunto pra Capitã: como essa missão muda a vida da galera… *(idx 4)* | COM+1 TRA+3 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [scale] Crio regras claras: o que pode ficar guardado e o que não —… *(idx 4)* | COM+1 TRA+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [letter] Faço um documentário da viagem até aqui — entrevisto todo m… *(idx 0)* | COM+2 TRA+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 3)* | INV+1 TRA+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[18,1,0,15,24,3,0]`

**✅ Top 1: Serviço Social** 97.2%

**Top 3 completo:** Serviço Social 97.2% · Pedagogia 91.0% · Psicologia 90.2%

#### Educação Especial e Inclusiva ✅

*Especialista em Inclusão* · Iturama

> Ensina pessoas com necessidades específicas. Cuidado pedagógico (exclusivo Iturama).

**Vetor do curso:** `[3,0,3,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [globe] Pergunto pra Capitã: como essa missão muda a vida da galera… *(idx 4)* | COM+1 TRA+3 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [scale] Crio regras claras: o que pode ficar guardado e o que não —… *(idx 4)* | COM+1 TRA+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [letter] Faço um documentário da viagem até aqui — entrevisto todo m… *(idx 0)* | COM+2 TRA+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 2)* | COM+3 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado e reciclado — engenheiro tudo pra quase não… *(idx 3)* | CON+3 TRA+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[14,0,9,17,20,0,0]`

**✅ Top 1: Educação Especial e Inclusiva** 94.2%

**Top 3 completo:** Educação Especial e Inclusiva 94.2% · Serviço Social 91.2% · Pedagogia 90.2%

### 🔬 Investigação / Ciências Naturais

#### Biomedicina ✅

*Pesquisa de Vida Alienígena* · Uberaba/Iturama

> Pesquisa em saúde — lab, análises clínicas. Curiosidade científica com vocação de cuidar.

**Vetor do curso:** `[1,3,0,0,0,1,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo e levanto a mão pra perguntar se esse Protocolo … *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+3 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [brain] App de bem-estar — cada um registra humor e sono no celular… *(idx 4)* | INV+1 COM+1 TEC+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [brain] Anoto como eu reagi e os efeitos no meu corpo — pode virar … *(idx 3)* | CUI+1 INV+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [lab] Corro pro laboratório fazer exame de sangue — nem chego per… *(idx 0)* | CUI+1 INV+3 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CUL+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 1)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Antes de plantar nada, estudo o solo, o ar e a luz — só dep… *(idx 2)* | INV+3 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,32,2,1,0,10,12]`

**✅ Top 1: Biomedicina** 98.1%

**Top 3 completo:** Biomedicina 98.1% · Matemática 86.7% · Química 82.0%

#### Ciências Biológicas ✅

*Cientista de Ecossistemas* · Uberaba/Iturama

> Estuda os seres vivos e ecossistemas. Pesquisador da vida.

**Vetor do curso:** `[0,3,0,1,1,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se vou poder levar plantas pra estufa da nave *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+3 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [sprout] Sugiro plantar mais nas estufas pra resolver na raiz *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [scale] Documento de direitos da tripulação — regras justas e jeito… *(idx 3)* | COM+1 TRA+3 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | [brain] Anoto como eu reagi e os efeitos no meu corpo — pode virar … *(idx 3)* | CUI+1 INV+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — tem comida nova da estufa,… *(idx 3)* | INV+1 CUL+3 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CUL+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [leaf] Procuro nos arredores: tem alguma planta ou bicho com esses… *(idx 4)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — testo como cre… *(idx 0)* | INV+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[3,20,3,1,3,26,3]`

**✅ Top 1: Ciências Biológicas** 95.2%

**Top 3 completo:** Ciências Biológicas 95.2% · Zootecnia 81.3% · Agronomia 81.2%

#### Física ✅

*Investigador de Mistérios Espaciais* · Uberaba

> Estuda fenômenos físicos e teoria. Curiosidade abstrata pro mundo natural.

**Vetor do curso:** `[0,3,2,0,1,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo e levanto a mão pra perguntar se esse Protocolo … *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+3 |
| 4 Anomalia | [chart] Vou pra sala de dados e cruzo o rastro com todos os arquivo… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [brain] App de bem-estar — cada um registra humor e sono no celular… *(idx 4)* | INV+1 COM+1 TEC+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [brain] Anoto como eu reagi e os efeitos no meu corpo — pode virar … *(idx 3)* | CUI+1 INV+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [lab] Corro pro laboratório fazer exame de sangue — nem chego per… *(idx 0)* | CUI+1 INV+3 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CON+1 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 1)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Antes de plantar nada, estudo o solo, o ar e a luz — só dep… *(idx 2)* | INV+3 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,31,8,1,4,2,12]`

**✅ Top 1: Física** 93.4%

**Top 3 completo:** Física 93.4% · Biomedicina 91.1% · Matemática 88.0%

#### Química ✅

*Especialista em Atmosferas* · Uberaba/Iturama

> Estuda matéria, reações e transformações. Cientista do micro.

**Vetor do curso:** `[1,3,2,0,0,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [tools] Chego mais perto e dou uma olhada na nave — quero ver como … *(idx 2)* | INV+1 CON+2 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+3 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [mountain] Esporte toda semana com a galera — vira cuidado e amizade j… *(idx 2)* | CUI+2 CON+1 TRA+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como eu reagi e os efeitos no meu corpo — pode virar … *(idx 3)* | CUI+1 INV+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [lab] Corro pro laboratório fazer exame de sangue — nem chego per… *(idx 0)* | CUI+1 INV+3 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CUL+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 1)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Antes de plantar nada, estudo o solo, o ar e a luz — só dep… *(idx 2)* | INV+3 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[6,27,13,0,2,7,4]`

**✅ Top 1: Química** 97.8%

**Top 3 completo:** Química 97.8% · Física 92.1% · Engenharia Química 91.1%

### 🔧 Construção / Engenharias físicas

#### Engenharia Civil ✅

*Arquitetura de Bases Planetárias* · Uberaba

> Projeta e constrói infraestrutura. Construtor do macroespaço urbano.

**Vetor do curso:** `[0,1,3,1,2,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [tools] Chego mais perto e dou uma olhada na nave — quero ver como … *(idx 2)* | INV+1 CON+2 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Mando um drone chegar mais perto antes da gente fazer qualq… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [scale] Documento de direitos da tripulação — regras justas e jeito… *(idx 3)* | COM+1 TRA+3 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra da família é mais motivo… *(idx 2)* | TRA+3 |
| 13 Computador da nave | [wrench] Troco as peças do computador — coisas novas e bem mais rápi… *(idx 2)* | CON+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CON+1 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 3)* | INV+1 TRA+3 |
| 14 Cultivo planetário | [tree] Sistema fechado e reciclado — engenheiro tudo pra quase não… *(idx 3)* | CON+3 TRA+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 TRA+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TRA+1 TEC+2 |

**Vetor resultante do aluno:** `[0,5,23,6,19,0,2]`

**✅ Top 1: Engenharia Civil** 95.5%

**Top 3 completo:** Engenharia Civil 95.5% · Engenharia de Produção 93.5% · Engenharia Mecânica 90.6%

#### Engenharia Mecânica ⚠️

*Engenharia Mecânica de Bordo* · Uberaba

> Máquinas, motores, sistemas mecânicos. Construtor que entende o como.

**Vetor do curso:** `[0,1,3,1,1,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [tools] Chego mais perto e dou uma olhada na nave — quero ver como … *(idx 2)* | INV+1 CON+2 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Mando um drone chegar mais perto antes da gente fazer qualq… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [brain] App de bem-estar — cada um registra humor e sono no celular… *(idx 4)* | INV+1 COM+1 TEC+3 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [logs] Junto todas as mensagens num álbum no meu tablet — quero re… *(idx 4)* | CUI+1 COM+1 TEC+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CON+1 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 1)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [tree] Sistema fechado e reciclado — engenheiro tudo pra quase não… *(idx 3)* | CON+3 TRA+1 |
| 10 Contato | [satellite] Programo um drone pra acompanhar elas à distância e registr… *(idx 4)* | CON+1 TEC+3 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TRA+1 TEC+2 |

**Vetor resultante do aluno:** `[1,10,23,4,9,0,15]`

**⚠️ Top 1 calculado: Engenharia Elétrica** (esperado: Engenharia Mecânica)

**Top 3 completo:** Engenharia Elétrica 96.6% · Engenharia Mecânica 96.2% · Inteligência Artificial 93.3%

#### Engenharia Elétrica ⚠️

*Engenharia de Sistemas Vitais* · Uberaba

> Sistemas elétricos, eletrônicos e energia. Construtor + lógica de circuitos.

**Vetor do curso:** `[0,2,3,0,1,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [tools] Chego mais perto e dou uma olhada na nave — quero ver como … *(idx 2)* | INV+1 CON+2 |
| 3 Primeiro turno | [logs] Painel de bordo — a IA tá apontando uma falha no sistema de… *(idx 4)* | COM+1 TEC+3 |
| 4 Anomalia | [chart] Vou pra sala de dados e cruzo o rastro com todos os arquivo… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [brain] App de bem-estar — cada um registra humor e sono no celular… *(idx 4)* | INV+1 COM+1 TEC+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [logs] Junto todas as mensagens num álbum no meu tablet — quero re… *(idx 4)* | CUI+1 COM+1 TEC+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [brain] Peço pra IA cruzar os sintomas com tudo que a gente tem reg… *(idx 2)* | COM+1 TEC+3 |
| 17 Festa dos 100 dias | [brain] Faço uma enquete pra todo mundo no celular — galera vota e … *(idx 4)* | COM+1 TEC+3 |
| 9 Chegada ao planeta | [radio] Onde o sinal pega melhor pra ficar em contato com a Terra —… *(idx 4)* | COM+1 TEC+3 |
| 15 Linguagem alienígena | [logs] Organizo todos os símbolos num arquivo — sem organizar, não… *(idx 0)* | TEC+3 |
| 14 Cultivo planetário | [brain] Coloco sensores espalhados — a IA monitora o cultivo 24h e … *(idx 4)* | INV+1 CUL+1 TEC+3 |
| 10 Contato | [satellite] Programo um drone pra acompanhar elas à distância e registr… *(idx 4)* | CON+1 TEC+3 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TRA+1 TEC+2 |

**Vetor resultante do aluno:** `[1,9,10,6,2,1,36]`

**⚠️ Top 1 calculado: Inteligência Artificial** (esperado: Engenharia Elétrica)

**Top 3 completo:** Inteligência Artificial 86.7% · Engenharia Elétrica 84.5% · Matemática 81.6%

#### Engenharia Química ⚠️

*Engenharia de Processos* · Uberaba

> Processos químicos industriais. Ponte ciência↔produção.

**Vetor do curso:** `[0,3,3,0,1,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [tools] Chego mais perto e dou uma olhada na nave — quero ver como … *(idx 2)* | INV+1 CON+2 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Mando um drone chegar mais perto antes da gente fazer qualq… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [mountain] Esporte toda semana com a galera — vira cuidado e amizade j… *(idx 2)* | CUI+2 CON+1 TRA+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como eu reagi e os efeitos no meu corpo — pode virar … *(idx 3)* | CUI+1 INV+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [lab] Corro pro laboratório fazer exame de sangue — nem chego per… *(idx 0)* | CUI+1 INV+3 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CON+1 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 1)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Antes de plantar nada, estudo o solo, o ar e a luz — só dep… *(idx 2)* | INV+3 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,24,18,0,5,2,4]`

**⚠️ Top 1 calculado: Física** (esperado: Engenharia Química)

**Top 3 completo:** Física 97.4% · Engenharia Química 95.9% · Química 95.0%

#### Engenharia de Produção ✅

*Coordenação da Operação da Nave* · Uberaba

> Gestão e otimização de processos. Construtor que lidera equipes.

**Vetor do curso:** `[0,1,3,2,2,0,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [globe] Pergunto pra Capitã: como essa missão muda a vida da galera… *(idx 4)* | COM+1 TRA+3 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Mando um drone chegar mais perto antes da gente fazer qualq… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [scale] Documento de direitos da tripulação — regras justas e jeito… *(idx 3)* | COM+1 TRA+3 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [letter] Faço um documentário da viagem até aqui — entrevisto todo m… *(idx 0)* | COM+2 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 2)* | COM+3 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado e reciclado — engenheiro tudo pra quase não… *(idx 3)* | CON+3 TRA+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 TRA+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TRA+1 TEC+2 |

**Vetor resultante do aluno:** `[0,5,19,15,17,0,5]`

**✅ Top 1: Engenharia de Produção** 98.8%

**Top 3 completo:** Engenharia de Produção 98.8% · Engenharia Civil 91.2% · Engenharia Mecânica 90.3%

#### Engenharia Ambiental ✅

*Posto Ambiental da Nave* · Uberaba

> Meio ambiente com técnica de engenharia. Sustentabilidade aplicada.

**Vetor do curso:** `[0,2,3,0,2,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se vou poder levar plantas pra estufa da nave *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [leaf] Estufa — sistema de irrigação travou nas mudas *(idx 3)* | CON+1 CUL+2 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [scale] Documento de direitos da tripulação — regras justas e jeito… *(idx 3)* | COM+1 TRA+3 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra da família é mais motivo… *(idx 2)* | TRA+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — tem comida nova da estufa,… *(idx 3)* | INV+1 CUL+3 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CON+1 TRA+3 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [leaf] Procuro nos arredores: tem alguma planta ou bicho com esses… *(idx 4)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — testo como cre… *(idx 0)* | INV+1 CUL+3 |
| 10 Contato | [lab] Coleto amostras (sem machucar) pra entender a biologia delas *(idx 2)* | INV+2 CUL+2 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[0,10,10,1,10,25,3]`

**✅ Top 1: Engenharia Ambiental** 93.0%

**Top 3 completo:** Engenharia Ambiental 93.0% · Agronomia 87.2% · Ciências Biológicas 84.8%

#### Engenharia de Alimentos ✅

*Engenharia de Suprimentos* · Uberaba

> Tecnologia de alimentos, processos da fazenda à mesa.

**Vetor do curso:** `[0,2,3,0,0,2,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [tools] Chego mais perto e dou uma olhada na nave — quero ver como … *(idx 2)* | INV+1 CON+2 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [brain] App de bem-estar — cada um registra humor e sono no celular… *(idx 4)* | INV+1 COM+1 TEC+3 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como eu reagi e os efeitos no meu corpo — pode virar … *(idx 3)* | CUI+1 INV+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — tem comida nova da estufa,… *(idx 3)* | INV+1 CUL+3 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CUL+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [leaf] Procuro nos arredores: tem alguma planta ou bicho com esses… *(idx 4)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [tree] Sistema fechado e reciclado — engenheiro tudo pra quase não… *(idx 3)* | CON+3 TRA+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TRA+1 TEC+2 |

**Vetor resultante do aluno:** `[3,16,19,1,3,12,8]`

**✅ Top 1: Engenharia de Alimentos** 98.2%

**Top 3 completo:** Engenharia de Alimentos 98.2% · Engenharia Química 92.4% · Agronomia 91.7%

### 💻 Decifrador / Computação + Dados + Matemática

#### Banco de Dados ✅

*Posto de Arquivo de Bordo* · Uberaba

> Dados, armazenamento, queries. Organiza o digital.

**Vetor do curso:** `[0,0,1,3,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [logs] Painel de bordo — a IA tá apontando uma falha no sistema de… *(idx 4)* | COM+1 TEC+3 |
| 4 Anomalia | [voice] Chamo a galera toda — isso aqui precisa de várias cabeças p… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [brain] App de bem-estar — cada um registra humor e sono no celular… *(idx 4)* | INV+1 COM+1 TEC+3 |
| 6 Falha técnica | [voice] Aviso a galera com calma — explico o que tá rolando pra nin… *(idx 4)* | CUI+1 COM+3 |
| 7 Mensagem da Terra | [logs] Junto todas as mensagens num álbum no meu tablet — quero re… *(idx 4)* | CUI+1 COM+1 TEC+3 |
| 13 Computador da nave | [logs] Junto tudo num lugar só, bem organizado — fica fácil de ach… *(idx 0)* | COM+1 TEC+3 |
| 8 Doença misteriosa | [brain] Peço pra IA cruzar os sintomas com tudo que a gente tem reg… *(idx 2)* | COM+1 TEC+3 |
| 17 Festa dos 100 dias | [brain] Faço uma enquete pra todo mundo no celular — galera vota e … *(idx 4)* | COM+1 TEC+3 |
| 9 Chegada ao planeta | [radio] Onde o sinal pega melhor pra ficar em contato com a Terra —… *(idx 4)* | COM+1 TEC+3 |
| 15 Linguagem alienígena | [logs] Organizo todos os símbolos num arquivo — sem organizar, não… *(idx 0)* | TEC+3 |
| 14 Cultivo planetário | [brain] Coloco sensores espalhados — a IA monitora o cultivo 24h e … *(idx 4)* | INV+1 CUL+1 TEC+3 |
| 10 Contato | [satellite] Programo um drone pra acompanhar elas à distância e registr… *(idx 4)* | CON+1 TEC+3 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TRA+1 TEC+2 |

**Vetor resultante do aluno:** `[5,2,3,17,1,1,32]`

**✅ Top 1: Banco de Dados** 93.6%

**Top 3 completo:** Banco de Dados 93.6% · Inteligência Artificial 71.4% · Matemática 65.4%

#### Inteligência Artificial ✅

*Posto de IA da Missão* · Uberaba

> Machine learning, sistemas inteligentes. Investigador digital.

**Vetor do curso:** `[0,2,3,1,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [tools] Chego mais perto e dou uma olhada na nave — quero ver como … *(idx 2)* | INV+1 CON+2 |
| 3 Primeiro turno | [logs] Painel de bordo — a IA tá apontando uma falha no sistema de… *(idx 4)* | COM+1 TEC+3 |
| 4 Anomalia | [chart] Vou pra sala de dados e cruzo o rastro com todos os arquivo… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [brain] App de bem-estar — cada um registra humor e sono no celular… *(idx 4)* | INV+1 COM+1 TEC+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [logs] Junto todas as mensagens num álbum no meu tablet — quero re… *(idx 4)* | CUI+1 COM+1 TEC+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [brain] Peço pra IA cruzar os sintomas com tudo que a gente tem reg… *(idx 2)* | COM+1 TEC+3 |
| 17 Festa dos 100 dias | [brain] Faço uma enquete pra todo mundo no celular — galera vota e … *(idx 4)* | COM+1 TEC+3 |
| 9 Chegada ao planeta | [radio] Onde o sinal pega melhor pra ficar em contato com a Terra —… *(idx 4)* | COM+1 TEC+3 |
| 15 Linguagem alienígena | [logs] Organizo todos os símbolos num arquivo — sem organizar, não… *(idx 0)* | TEC+3 |
| 14 Cultivo planetário | [brain] Coloco sensores espalhados — a IA monitora o cultivo 24h e … *(idx 4)* | INV+1 CUL+1 TEC+3 |
| 10 Contato | [satellite] Programo um drone pra acompanhar elas à distância e registr… *(idx 4)* | CON+1 TEC+3 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TRA+1 TEC+2 |

**Vetor resultante do aluno:** `[1,9,10,6,2,1,36]`

**✅ Top 1: Inteligência Artificial** 86.7%

**Top 3 completo:** Inteligência Artificial 86.7% · Engenharia Elétrica 84.5% · Matemática 81.6%

#### Matemática ✅

*Estrategista de Rotas* · Uberaba

> Modelagem, teoria, abstração. Pensador puro.

**Vetor do curso:** `[0,3,0,0,0,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo e levanto a mão pra perguntar se esse Protocolo … *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+3 |
| 4 Anomalia | [chart] Vou pra sala de dados e cruzo o rastro com todos os arquivo… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [brain] App de bem-estar — cada um registra humor e sono no celular… *(idx 4)* | INV+1 COM+1 TEC+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [brain] Anoto como eu reagi e os efeitos no meu corpo — pode virar … *(idx 3)* | CUI+1 INV+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [lab] Corro pro laboratório fazer exame de sangue — nem chego per… *(idx 0)* | CUI+1 INV+3 |
| 17 Festa dos 100 dias | [brain] Faço uma enquete pra todo mundo no celular — galera vota e … *(idx 4)* | COM+1 TEC+3 |
| 9 Chegada ao planeta | [radio] Onde o sinal pega melhor pra ficar em contato com a Terra —… *(idx 4)* | COM+1 TEC+3 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 1)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [brain] Coloco sensores espalhados — a IA monitora o cultivo 24h e … *(idx 4)* | INV+1 CUL+1 TEC+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[2,29,2,3,0,2,23]`

**✅ Top 1: Matemática** 98.6%

**Top 3 completo:** Matemática 98.6% · Biomedicina 88.2% · Física 78.9%

### 📢 Comunicação / Educação

#### Letras (PT/ESP) ✅

*Tradutor Interestelar* · Uberaba

> Língua, literatura, ensino. Conector via palavra (espanhol).

**Vetor do curso:** `[1,1,0,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Chamo a galera toda — isso aqui precisa de várias cabeças p… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 COM+3 |
| 6 Falha técnica | [voice] Aviso a galera com calma — explico o que tá rolando pra nin… *(idx 4)* | CUI+1 COM+3 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [hug] Pergunto pra galera o que mais incomoda no sistema — resolv… *(idx 3)* | CUI+1 COM+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [voice] Organizo um show de talentos — música, poesia, brincadeiras… *(idx 1)* | CUI+1 COM+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 2)* | COM+3 TRA+1 |
| 14 Cultivo planetário | [lab] Antes de plantar nada, estudo o solo, o ar e a luz — só dep… *(idx 2)* | INV+3 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 TRA+1 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[12,3,0,34,7,1,0]`

**✅ Top 1: Letras** 97.1%

**Top 3 completo:** Letras 97.1% · Pedagogia 91.4% · Psicologia 81.4%

#### Letras (PT/ING) ✅

*Tradutor Interestelar* · Uberaba

> Idem, mas em inglês. Mesma essência (são agrupados como 'Letras' no resultado).

**Vetor do curso:** `[1,1,0,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Chamo a galera toda — isso aqui precisa de várias cabeças p… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 COM+3 |
| 6 Falha técnica | [voice] Aviso a galera com calma — explico o que tá rolando pra nin… *(idx 4)* | CUI+1 COM+3 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [hug] Pergunto pra galera o que mais incomoda no sistema — resolv… *(idx 3)* | CUI+1 COM+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [voice] Organizo um show de talentos — música, poesia, brincadeiras… *(idx 1)* | CUI+1 COM+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 2)* | COM+3 TRA+1 |
| 14 Cultivo planetário | [lab] Antes de plantar nada, estudo o solo, o ar e a luz — só dep… *(idx 2)* | INV+3 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 TRA+1 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[12,3,0,34,7,1,0]`

**✅ Top 1: Letras** 97.1%

**Top 3 completo:** Letras 97.1% · Pedagogia 91.4% · Psicologia 81.4%

#### Pedagogia ✅

*Educação da Próxima Geração* · Uberaba

> Educação básica, formação de criança/jovem. Cuidado via ensino.

**Vetor do curso:** `[2,1,0,3,2,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [globe] Pergunto pra Capitã: como essa missão muda a vida da galera… *(idx 4)* | COM+1 TRA+3 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Chamo a galera toda — isso aqui precisa de várias cabeças p… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 COM+3 |
| 6 Falha técnica | [voice] Aviso a galera com calma — explico o que tá rolando pra nin… *(idx 4)* | CUI+1 COM+3 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [hug] Pergunto pra galera o que mais incomoda no sistema — resolv… *(idx 3)* | CUI+1 COM+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [letter] Faço um documentário da viagem até aqui — entrevisto todo m… *(idx 0)* | COM+2 TRA+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 2)* | COM+3 TRA+1 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CUL+3 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 TRA+1 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[15,0,0,30,13,3,0]`

**✅ Top 1: Pedagogia** 95.3%

**Top 3 completo:** Pedagogia 95.3% · Letras 94.4% · Psicologia 86.4%

### ⚡ Transformação / Humanidades

#### História ✅

*Narrador da Expedição* · Uberaba

> Estudo do passado, memória, contexto. Cronista crítico.

**Vetor do curso:** `[1,2,0,2,3,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [globe] Pergunto pra Capitã: como essa missão muda a vida da galera… *(idx 4)* | COM+1 TRA+3 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+3 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [scale] Documento de direitos da tripulação — regras justas e jeito… *(idx 3)* | COM+1 TRA+3 |
| 6 Falha técnica | [voice] Aviso a galera com calma — explico o que tá rolando pra nin… *(idx 4)* | CUI+1 COM+3 |
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra da família é mais motivo… *(idx 2)* | TRA+3 |
| 13 Computador da nave | [scale] Crio regras claras: o que pode ficar guardado e o que não —… *(idx 4)* | COM+1 TRA+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [letter] Faço um documentário da viagem até aqui — entrevisto todo m… *(idx 0)* | COM+2 TRA+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — som das ondas ajuda a galera a se adaptar; b… *(idx 2)* | CUI+2 COM+2 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 3)* | INV+1 TRA+3 |
| 14 Cultivo planetário | [lab] Antes de plantar nada, estudo o solo, o ar e a luz — só dep… *(idx 2)* | INV+3 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 TRA+1 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[4,7,0,18,29,1,0]`

**✅ Top 1: História** 94.7%

**Top 3 completo:** História 94.7% · Psicologia 91.1% · Pedagogia 85.3%

#### Geografia ✅

*Mapas de Mundos Novos* · Uberaba

> Espaço, território, humano↔ambiente. Multidisciplinar.

**Vetor do curso:** `[0,2,1,0,3,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [globe] Pergunto pra Capitã: como essa missão muda a vida da galera… *(idx 4)* | COM+1 TRA+3 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+3 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [scale] Documento de direitos da tripulação — regras justas e jeito… *(idx 3)* | COM+1 TRA+3 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra da família é mais motivo… *(idx 2)* | TRA+3 |
| 13 Computador da nave | [scale] Crio regras claras: o que pode ficar guardado e o que não —… *(idx 4)* | COM+1 TRA+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CON+1 TRA+3 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 3)* | INV+1 TRA+3 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — testo como cre… *(idx 0)* | INV+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[0,14,1,6,24,13,0]`

**✅ Top 1: Geografia** 95.7%

**Top 3 completo:** Geografia 95.7% · História 84.4% · Ciências Biológicas 79.4%

#### Educação Física ✅

*Treinamento da Tripulação* · Uberaba

> Movimento, esporte, saúde corporal. Cuidado pelo corpo em ação.

**Vetor do curso:** `[1,0,2,0,1,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [tools] Chego mais perto e dou uma olhada na nave — quero ver como … *(idx 2)* | INV+1 CON+2 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Mando um drone chegar mais perto antes da gente fazer qualq… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [tools] Reorganizo as escalas e os turnos de cozinha — se cada um s… *(idx 4)* | CON+3 TRA+1 |
| 12 Rotina coletiva | [mountain] Esporte toda semana com a galera — vira cuidado e amizade j… *(idx 2)* | CUI+2 CON+1 TRA+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [wrench] Troco as peças do computador — coisas novas e bem mais rápi… *(idx 2)* | CON+3 |
| 8 Doença misteriosa | [stethoscope] Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CON+1 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 3)* | INV+1 TRA+3 |
| 14 Cultivo planetário | [tree] Sistema fechado e reciclado — engenheiro tudo pra quase não… *(idx 3)* | CON+3 TRA+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TRA+1 TEC+2 |

**Vetor resultante do aluno:** `[10,5,24,3,10,0,2]`

**✅ Top 1: Educação Física** 90.1%

**Top 3 completo:** Educação Física 90.1% · Engenharia Mecânica 89.4% · Fisioterapia 89.2%

#### Licenciatura em Educação do Campo ✅

*Educação de Vila Rural* · Uberaba

> Educação no contexto rural/agrário. Justiça social + terra.

**Vetor do curso:** `[2,0,0,1,3,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [globe] Pergunto pra Capitã: como essa missão muda a vida da galera… *(idx 4)* | COM+1 TRA+3 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra da família é mais motivo… *(idx 2)* | TRA+3 |
| 13 Computador da nave | [scale] Crio regras claras: o que pode ficar guardado e o que não —… *(idx 4)* | COM+1 TRA+3 |
| 8 Doença misteriosa | [scale] Junto a galera pra reconstruir os últimos dias — onde estev… *(idx 4)* | COM+2 TRA+3 |
| 17 Festa dos 100 dias | [letter] Faço um documentário da viagem até aqui — entrevisto todo m… *(idx 0)* | COM+2 TRA+3 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 3)* | INV+1 TRA+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[10,4,0,10,22,15,0]`

**✅ Top 1: Licenciatura em Educação do Campo** 96.7%

**Top 3 completo:** Licenciatura em Educação do Campo 96.7% · Serviço Social 82.3% · História 80.6%

### 🌱 Cultivo / Natureza

#### Agronomia ✅

*Cultivo de Vida Planetária* · Uberaba/Iturama

> Agricultura técnica e científica. Investigação aplicada à terra (Uberaba/Iturama).

**Vetor do curso:** `[0,2,3,0,0,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se vou poder levar plantas pra estufa da nave *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [leaf] Estufa — sistema de irrigação travou nas mudas *(idx 3)* | CON+1 CUL+2 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [sprout] Sugiro plantar mais nas estufas pra resolver na raiz *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [mountain] Esporte toda semana com a galera — vira cuidado e amizade j… *(idx 2)* | CUI+2 CON+1 TRA+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [brain] Anoto como eu reagi e os efeitos no meu corpo — pode virar … *(idx 3)* | CUI+1 INV+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — tem comida nova da estufa,… *(idx 3)* | INV+1 CUL+3 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CUL+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [leaf] Procuro nos arredores: tem alguma planta ou bicho com esses… *(idx 4)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — testo como cre… *(idx 0)* | INV+1 CUL+3 |
| 10 Contato | [lab] Coleto amostras (sem machucar) pra entender a biologia delas *(idx 2)* | INV+2 CUL+2 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[5,13,8,0,1,29,3]`

**✅ Top 1: Agronomia** 87.7%

**Top 3 completo:** Agronomia 87.7% · Ciências Biológicas 85.3% · Zootecnia 85.2%

#### Zootecnia ✅

*Criação de Vida Animal* · Iturama

> Produção animal sustentável (exclusivo Iturama).

**Vetor do curso:** `[3,2,1,0,0,3,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [sprout] Pergunto se vou poder levar plantas pra estufa da nave *(idx 3)* | CUL+3 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [leaf] Comparo o rastro com padrões de seres vivos que a gente já … *(idx 4)* | INV+2 CUL+3 |
| 5 Conflito de tripulação | [sprout] Sugiro plantar mais nas estufas pra resolver na raiz *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 1)* | CUI+3 COM+1 TRA+1 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 0)* | CUI+3 COM+1 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TEC+3 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — tem comida nova da estufa,… *(idx 3)* | INV+1 CUL+3 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CUL+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [leaf] Procuro nos arredores: tem alguma planta ou bicho com esses… *(idx 4)* | INV+1 CUL+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CUL+3 |
| 10 Contato | [lab] Coleto amostras (sem machucar) pra entender a biologia delas *(idx 2)* | INV+2 CUL+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[16,9,3,2,1,27,3]`

**✅ Top 1: Zootecnia** 94.8%

**Top 3 completo:** Zootecnia 94.8% · Nutrição 80.7% · Ciências Biológicas 75.2%

---
*Gerado automaticamente em 2026-05-23 pelo `scripts/personas-ideais.ts`*