# 🧪 Personas Ideais por Curso UFTM

> **Geração automática** via greedy: pra cada curso, escolho em cada cena a opção cujo vetor de pontos tem maior produto escalar com o vetor do curso. Em seguida valido que essa persona retorna o curso como top 1.
>
> Use isso pra: (1) sanidade qualitativa — você lê a persona de Medicina e bate com sua intuição? (2) prova quantitativa — script verifica matematicamente que cada curso é alcançável.
>
> Regenere com: `npx tsx scripts/personas-ideais.ts`

## Resumo

**28/31 cursos validados** ✅

### ⚠️ Cursos não alcançáveis como top 1

- **Medicina** → veio Psicologia (97.5%)
- **Engenharia Elétrica** → veio Engenharia de Produção (96.5%)
- **Inteligência Artificial** → veio Engenharia Elétrica (91.3%)

Possíveis causas: vetor idêntico a outro curso (ex: Eng. Mec/Elétrica), vetor "redondo demais" que faz outro curso vencer por cosseno mesmo no greedy, ou gap de cobertura nas cenas. Investigar.

## Fundamentação do método

**1. Taxonomia inspirada em RIASEC (Holland, 1959)** — 7 eixos vocacionais adaptados pro contexto UFTM. Ver [`MATRIZ-EIXOS.md`](MATRIZ-EIXOS.md).

**2. Similaridade de cosseno** — mede direção, não magnitude. Padrão em sistemas de recomendação (Netflix, Spotify).

**3. Quiz com pontuação ponderada** — formato clássico (Myers-Briggs, 16 Personalities). Cada opção pontua 1-3 eixos.

**⚠️ O que ele NÃO é:** instrumento psicometricamente validado. É ferramenta de engajamento/exploração, não diagnóstico clínico. O feedback 👍🤔👎 da feira é o primeiro dataset de validação.

## Personas por área

### 🩺 Saúde / Cuidado

#### Medicina ⚠️

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
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [thinking] Primeiro entendo o problema no papel — só depois mexo no có… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[20,16,1,17,8,3,2]`

**⚠️ Top 1 calculado: Psicologia** (esperado: Medicina)

**Top 3 completo:** Psicologia 97.5% · Medicina 96.9% · Pedagogia 94.4%

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
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [thinking] Primeiro entendo o problema no papel — só depois mexo no có… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [stethoscope] Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 17 Festa dos 100 dias | [voice] Organizo um show de talentos — música, poesia, brincadeiras… *(idx 1)* | CUI+1 COM+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[24,6,5,20,2,3,2]`

**✅ Top 1: Enfermagem** 97.8%

**Top 3 completo:** Enfermagem 97.8% · Pedagogia 96.4% · Terapia Ocupacional 92.9%

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
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [thinking] Primeiro entendo o problema no papel — só depois mexo no có… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[15,15,1,24,8,3,2]`

**✅ Top 1: Psicologia** 96.2%

**Top 3 completo:** Psicologia 96.2% · Letras 95.6% · Pedagogia 94.2%

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
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CUI+1 CON+1 COM+1 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[21,7,14,14,9,1,2]`

**✅ Top 1: Fisioterapia** 97.2%

**Top 3 completo:** Fisioterapia 97.2% · Terapia Ocupacional 95.5% · Educação Especial e Inclusiva 95.2%

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
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [wrench] Troco as peças do computador — coisas novas e bem mais rápi… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [voice] Organizo um show de talentos — música, poesia, brincadeiras… *(idx 1)* | CUI+1 COM+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[21,4,13,19,1,3,2]`

**✅ Top 1: Terapia Ocupacional** 97.6%

**Top 3 completo:** Terapia Ocupacional 97.6% · Enfermagem 96.3% · Educação Especial e Inclusiva 91.7%

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
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CON+1 CUL+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 5)* | INV+2 COM+1 TRA+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[21,12,5,6,10,13,2]`

**✅ Top 1: Nutrição** 95.7%

**Top 3 completo:** Nutrição 95.7% · Zootecnia 85.5% · Medicina 84.7%

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
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [stethoscope] Acomodo os três, fico de olho a cada 30 min, dando água o t… *(idx 1)* | CUI+3 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CUI+1 CON+1 COM+1 TRA+3 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 5)* | INV+2 COM+1 TRA+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[18,5,9,13,21,1,2]`

**✅ Top 1: Serviço Social** 95.5%

**Top 3 completo:** Serviço Social 95.5% · Educação Especial e Inclusiva 92.8% · Psicologia 88.0%

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
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CUI+1 CON+1 COM+1 TRA+3 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[18,5,11,19,14,1,2]`

**✅ Top 1: Educação Especial e Inclusiva** 98.3%

**Top 3 completo:** Educação Especial e Inclusiva 98.3% · Psicologia 91.0% · Pedagogia 90.5%

### 🔬 Investigação / Ciências Naturais

#### Biomedicina ✅

*Pesquisa de Vida Alienígena* · Uberaba/Iturama

> Pesquisa em saúde — lab, análises clínicas. Curiosidade científica com vocação de cuidar.

**Vetor do curso:** `[1,3,0,0,0,1,1]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [brain] Pauso 30 segundos, comparo os 3 alertas com histórico antes… *(idx 4)* | CUI+2 INV+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [thinking] Primeiro entendo o problema no papel — só depois mexo no có… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 17 Festa dos 100 dias | [sprout] Monto uma exposição com plantas e amostras que a gente cole… *(idx 4)* | INV+2 CUL+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[8,31,0,7,0,7,10]`

**✅ Top 1: Biomedicina** 97.4%

**Top 3 completo:** Biomedicina 97.4% · Matemática 85.3% · Química 79.7%

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
| 7 Mensagem da Terra | [sprout] Vou pra estufa cuidar das plantas que lembram minha família… *(idx 4)* | CUL+3 |
| 13 Computador da nave | [thinking] Primeiro entendo o problema no papel — só depois mexo no có… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 17 Festa dos 100 dias | [sprout] Monto uma exposição com plantas e amostras que a gente cole… *(idx 4)* | INV+2 CUL+3 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[3,23,2,8,1,21,4]`

**✅ Top 1: Ciências Biológicas** 96.7%

**Top 3 completo:** Ciências Biológicas 96.7% · Biomedicina 85.8% · Zootecnia 84.5%

#### Física ✅

*Investigador de Mistérios Espaciais* · Uberaba

> Estuda fenômenos físicos e teoria. Curiosidade abstrata pro mundo natural.

**Vetor do curso:** `[0,3,2,0,0,0,2]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [chart] Vou pra sala de dados cruzar o rastro com todos os arquivos… *(idx 0)* | INV+2 TEC+2 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [video] Assisto sozinho no meu quarto — preciso processar antes de … *(idx 0)* | CUI+1 COM+1 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [brain] Uso visão computacional — programo a câmera pra enxergar de… *(idx 1)* | INV+1 CON+1 TEC+3 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[5,25,9,6,4,2,12]`

**✅ Top 1: Física** 93.0%

**Top 3 completo:** Física 93.0% · Biomedicina 88.9% · Matemática 88.0%

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
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 17 Festa dos 100 dias | [sprout] Monto uma exposição com plantas e amostras que a gente cole… *(idx 4)* | INV+2 CUL+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[9,24,11,4,2,11,4]`

**✅ Top 1: Química** 96.3%

**Top 3 completo:** Química 96.3% · Biomedicina 90.6% · Engenharia Química 87.1%

### 🔧 Construção / Engenharias físicas

#### Engenharia Civil ✅

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
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CUI+1 CON+1 COM+1 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[5,11,23,9,10,4,4]`

**✅ Top 1: Engenharia Civil** 95.9%

**Top 3 completo:** Engenharia Civil 95.9% · Engenharia Mecânica 95.9% · Engenharia Química 87.9%

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
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CUI+1 CON+1 COM+1 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [brain] Uso visão computacional — programo a câmera pra enxergar de… *(idx 1)* | INV+1 CON+1 TEC+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[5,10,23,7,12,2,7]`

**✅ Top 1: Engenharia Mecânica** 97.1%

**Top 3 completo:** Engenharia Mecânica 97.1% · Engenharia Civil 92.5% · Engenharia Química 87.3%

#### Engenharia Elétrica ⚠️

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
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [wrench] Troco as peças do computador — coisas novas e bem mais rápi… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [brain] Uso visão computacional — programo a câmera pra enxergar de… *(idx 1)* | INV+1 CON+1 TEC+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,17,17,7,4,2,14]`

**⚠️ Top 1 calculado: Engenharia de Produção** (esperado: Engenharia Elétrica)

**Top 3 completo:** Engenharia de Produção 96.5% · Engenharia Elétrica 95.3% · Física 93.5%

#### Engenharia Química ✅

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
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra deles é mais motivo pra … *(idx 3)* | TRA+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 17 Festa dos 100 dias | [sprout] Monto uma exposição com plantas e amostras que a gente cole… *(idx 4)* | INV+2 CUL+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[4,22,16,2,7,5,6]`

**✅ Top 1: Engenharia Química** 97.7%

**Top 3 completo:** Engenharia Química 97.7% · Química 93.7% · Física 90.5%

#### Engenharia de Produção ✅

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
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [wrench] Troco as peças do computador — coisas novas e bem mais rápi… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [brain] Uso visão computacional — programo a câmera pra enxergar de… *(idx 1)* | INV+1 CON+1 TEC+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,15,20,7,4,2,12]`

**✅ Top 1: Engenharia de Produção** 97.6%

**Top 3 completo:** Engenharia de Produção 97.6% · Engenharia Elétrica 94.9% · Engenharia Mecânica 93.0%

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
| 7 Mensagem da Terra | [sprout] Vou pra estufa cuidar das plantas que lembram minha família… *(idx 4)* | CUL+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [sprout] Monto uma exposição com plantas e amostras que a gente cole… *(idx 4)* | INV+2 CUL+3 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 5)* | INV+2 COM+1 TRA+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[4,10,15,2,9,24,2]`

**✅ Top 1: Engenharia Ambiental** 95.8%

**Top 3 completo:** Engenharia Ambiental 95.8% · Agronomia 93.6% · Engenharia de Alimentos 86.9%

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
| 7 Mensagem da Terra | [sprout] Vou pra estufa cuidar das plantas que lembram minha família… *(idx 4)* | CUL+3 |
| 13 Computador da nave | [wrench] Troco as peças do computador — coisas novas e bem mais rápi… *(idx 3)* | INV+1 CON+3 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [sprout] Monto uma exposição com plantas e amostras que a gente cole… *(idx 4)* | INV+2 CUL+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[4,14,20,2,0,15,5]`

**✅ Top 1: Engenharia de Alimentos** 97.7%

**Top 3 completo:** Engenharia de Alimentos 97.7% · Agronomia 93.7% · Engenharia Química 90.5%

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
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [logs] Junto tudo num lugar só, bem organizado — fica fácil de ach… *(idx 0)* | COM+1 TEC+3 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [brain] Uso visão computacional — programo a câmera pra enxergar de… *(idx 1)* | INV+1 CON+1 TEC+3 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [logs] Copio tudo num servidor de reserva e organizo direitinho — … *(idx 5)* | COM+2 TEC+3 |

**Vetor resultante do aluno:** `[2,16,3,19,2,1,17]`

**✅ Top 1: Banco de Dados** 91.7%

**Top 3 completo:** Banco de Dados 91.7% · Matemática 89.1% · Engenharia Elétrica 76.1%

#### Inteligência Artificial ⚠️

*Posto de IA da Missão* · Uberaba

> Machine learning, sistemas inteligentes. Investigador digital.

**Vetor do curso:** `[0,1,2,0,1,0,3]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [thinking] Anoto tudo, levanto a mão pra perguntar se o Protocolo pode… *(idx 0)* | INV+2 TEC+1 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [logs] Escrevo script pra IA de bordo ficar de olho na anomalia 24… *(idx 4)* | COM+1 TEC+3 |
| 5 Conflito de tripulação | [chart] Puxo os dados de estoque no tablet e mostro o que os número… *(idx 1)* | INV+1 TEC+2 |
| 12 Rotina coletiva | [tools] Oficina pra cada um aprender do próprio jeito — ajusto as t… *(idx 1)* | CUI+2 CON+2 COM+2 |
| 6 Falha técnica | [logs] Pego os logs dos últimos 30 dias pra entender o padrão ante… *(idx 1)* | INV+2 TEC+2 |
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra deles é mais motivo pra … *(idx 3)* | TRA+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CUI+1 CON+1 COM+1 TRA+3 |
| 9 Chegada ao planeta | [mountain] Perto das montanhas — terreno estável, vista pra tudo *(idx 0)* | INV+1 CON+2 |
| 15 Linguagem alienígena | [brain] Uso visão computacional — programo a câmera pra enxergar de… *(idx 1)* | INV+1 CON+1 TEC+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[5,14,17,4,10,2,15]`

**⚠️ Top 1 calculado: Engenharia Elétrica** (esperado: Inteligência Artificial)

**Top 3 completo:** Engenharia Elétrica 91.3% · Engenharia de Produção 91.1% · Inteligência Artificial 91.0%

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
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [thinking] Primeiro entendo o problema no papel — só depois mexo no có… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [brain] Uso visão computacional — programo a câmera pra enxergar de… *(idx 1)* | INV+1 CON+1 TEC+3 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [logs] Copio tudo num servidor de reserva e organizo direitinho — … *(idx 5)* | COM+2 TEC+3 |

**Vetor resultante do aluno:** `[3,26,1,13,2,4,15]`

**✅ Top 1: Matemática** 94.1%

**Top 3 completo:** Matemática 94.1% · Biomedicina 87.0% · Física 80.4%

### 📢 Comunicação / Educação

#### Letras (PT/ESP) ✅

*Tradutor Interestelar* · Uberaba

> Língua, literatura, ensino. Conector via palavra (espanhol).

**Vetor do curso:** `[1,1,0,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [thinking] Primeiro entendo o problema no papel — só depois mexo no có… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,16,0,28,6,3,2]`

**✅ Top 1: Letras** 96.7%

**Top 3 completo:** Letras 96.7% · Psicologia 86.6% · Pedagogia 84.2%

#### Letras (PT/ING) ✅

*Tradutor Interestelar* · Uberaba

> Idem, mas em inglês. Mesma essência (são agrupados como 'Letras' no resultado).

**Vetor do curso:** `[1,1,0,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [radio] Comunicações — sinal estranho da Terra, talvez urgente *(idx 2)* | INV+2 COM+1 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [voice] Espaço de escuta semanal — individual, confidencial, pra li… *(idx 0)* | CUI+1 INV+1 COM+3 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [letter] Escrevo uma carta longa de volta, contando tudo da viagem c… *(idx 1)* | COM+3 |
| 13 Computador da nave | [thinking] Primeiro entendo o problema no papel — só depois mexo no có… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [comms] Mando imagens pra Terra na hora — humanidade inteira precis… *(idx 3)* | COM+3 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[7,16,0,28,6,3,2]`

**✅ Top 1: Letras** 96.7%

**Top 3 completo:** Letras 96.7% · Psicologia 86.6% · Pedagogia 84.2%

#### Pedagogia ✅

*Educação da Próxima Geração* · Uberaba

> Educação básica, formação de criança/jovem. Cuidado via ensino.

**Vetor do curso:** `[3,1,0,3,1,0,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [uncertain] Olho pros outros candidatos pra ver se alguém também tá per… *(idx 1)* | CUI+1 COM+2 |
| 3 Primeiro turno | [stethoscope] Enfermaria — colega passou mal no treino físico *(idx 0)* | CUI+3 |
| 4 Anomalia | [voice] Reúno a tripulação — isso precisa de várias cabeças decidin… *(idx 2)* | COM+3 |
| 5 Conflito de tripulação | [hug] Chego perto e peço pros dois respirarem antes de continuar *(idx 0)* | CUI+2 COM+2 |
| 12 Rotina coletiva | [hug] Programa inclusivo — todo mundo na rotina, com adaptações p… *(idx 2)* | CUI+2 CON+1 COM+2 TRA+2 |
| 6 Falha técnica | [alarm] Acordo a tripulação do dormitório B pra realocar enquanto c… *(idx 2)* | CUI+2 TRA+1 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [thinking] Primeiro entendo o problema no papel — só depois mexo no có… *(idx 2)* | INV+3 COM+1 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 17 Festa dos 100 dias | [voice] Organizo um show de talentos — música, poesia, brincadeiras… *(idx 1)* | CUI+1 COM+3 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [letter] Comparo com escritas antigas da Terra — pode ser parecido c… *(idx 3)* | INV+2 COM+3 TRA+1 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [offering] Tento oferecer algo — gesto de paz entre espécies *(idx 1)* | CUI+2 COM+2 |
| 11 Crise final | [stethoscope] Garanto que a enfermaria fique online — vidas primeiro, dad… *(idx 0)* | CUI+3 |

**Vetor resultante do aluno:** `[22,8,2,22,4,5,2]`

**✅ Top 1: Pedagogia** 97.9%

**Top 3 completo:** Pedagogia 97.9% · Enfermagem 94.2% · Psicologia 93.1%

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
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra deles é mais motivo pra … *(idx 3)* | TRA+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [voice] Sento, escuto. Pergunto rotina, sono, ansiedades — talvez s… *(idx 2)* | CUI+1 INV+1 COM+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [waves] Perto do mar — fonte de água e possíveis ecossistemas marin… *(idx 2)* | INV+2 CUL+2 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 5)* | INV+2 COM+1 TRA+3 |
| 14 Cultivo planetário | [lab] Apenas observação científica — estudo o ambiente antes de q… *(idx 2)* | INV+3 COM+1 CUL+1 |
| 10 Contato | [shield] Recuo a equipe e estabeleço a regra de não chegar perto, po… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | [voice] Coordeno a tripulação inteira, distribuo funções por voz *(idx 3)* | COM+2 TRA+2 |

**Vetor resultante do aluno:** `[6,14,3,12,25,3,2]`

**✅ Top 1: História** 98.0%

**Top 3 completo:** História 98.0% · Serviço Social 85.4% · Geografia 82.5%

#### Geografia ✅

*Mapas de Mundos Novos* · Uberaba

> Espaço, território, humano↔ambiente. Multidisciplinar.

**Vetor do curso:** `[0,2,1,0,3,2,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [leaf] Estufa — sistema de irrigação travou nas mudas *(idx 3)* | CON+1 CUL+2 |
| 4 Anomalia | [shield] Aviso a Capitã na hora e disparo alerta vermelho *(idx 3)* | CUI+1 TRA+2 |
| 5 Conflito de tripulação | [scale] Proponho uma reunião com a tripulação inteira pra revisar a… *(idx 2)* | COM+1 TRA+3 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [wind] Verifico se as plantas da estufa podem ajudar com o ar *(idx 3)* | CUL+3 |
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra deles é mais motivo pra … *(idx 3)* | TRA+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [lab] Lab AGORA — exames de sangue e imagem, amostras. Não toco e… *(idx 0)* | CUI+2 INV+2 |
| 17 Festa dos 100 dias | [letter] Faço um vídeo da viagem até aqui — entrevisto todo mundo e … *(idx 0)* | INV+2 COM+2 TRA+2 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 5)* | INV+2 COM+1 TRA+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [camera] Observo de longe, anoto comportamento, não interfiro *(idx 0)* | INV+3 CUL+1 |
| 11 Crise final | [dna] Salvo os dados de pesquisa antes que se percam — justifica … *(idx 2)* | INV+3 |

**Vetor resultante do aluno:** `[5,16,8,5,21,11,2]`

**✅ Top 1: Geografia** 96.3%

**Top 3 completo:** Geografia 96.3% · História 84.7% · Engenharia Ambiental 84.0%

#### Educação Física ✅

*Treinamento da Tripulação* · Uberaba

> Movimento, esporte, saúde corporal. Cuidado pelo corpo em ação.

**Vetor do curso:** `[1,0,2,0,1,1,0]` (ordem: CUI, INV, CON, COM, TRA, CUL, TEC)

**Persona ideal — escolhas por cena:**

| Cena | Opção (índice) | Pontos |
|---|---|---|
| 2 Embarque | [flame] Já tô empolgado, quero saber quando começa pra valer *(idx 2)* | CON+1 TRA+2 |
| 3 Primeiro turno | [wrench] Engenharia — vazamento pequeno crescendo no compartimento 7 *(idx 1)* | INV+1 CON+2 |
| 4 Anomalia | [satellite] Sugiro mandar um drone pra mais perto antes de qualquer coi… *(idx 1)* | INV+1 CON+2 |
| 5 Conflito de tripulação | [sprout] Sugiro que a gente plante mais nas estufas pra resolver na … *(idx 3)* | CON+1 CUL+2 |
| 12 Rotina coletiva | [mountain] Rotina física coletiva — esporte como cuidado e amizade ent… *(idx 3)* | CUI+2 CON+1 COM+1 TRA+2 CUL+1 |
| 6 Falha técnica | [tools] Vou direto pra engenharia, abro o painel e tento descobrir … *(idx 0)* | CON+3 |
| 7 Mensagem da Terra | [hug] Chamo um colega de tripulação pra assistir junto comigo — n… *(idx 2)* | CUI+3 COM+2 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [dna] Avalio o corpo, os movimentos — se tá afetado, prescrevo ex… *(idx 3)* | CUI+2 CON+2 |
| 17 Festa dos 100 dias | [leaf] Cuido da comida — pratos especiais com o que cresceu na est… *(idx 2)* | CUI+2 CON+1 CUL+2 |
| 9 Chegada ao planeta | [tent] No vale central — perto de tudo, mais fácil de organizar a … *(idx 3)* | CON+2 TRA+1 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 5)* | INV+2 COM+1 TRA+3 |
| 14 Cultivo planetário | [tree] Sistema fechado — tudo reciclado, quase sem afetar o ambien… *(idx 3)* | INV+1 CON+3 TRA+2 CUL+1 |
| 10 Contato | [shield] Recuo a equipe e estabeleço a regra de não chegar perto, po… *(idx 4)* | CUI+1 TRA+2 |
| 11 Crise final | [battery] Redireciono toda energia pros sistemas mais importantes, na… *(idx 1)* | CON+2 TEC+2 |

**Vetor resultante do aluno:** `[10,7,22,4,14,6,4]`

**✅ Top 1: Educação Física** 93.4%

**Top 3 completo:** Educação Física 93.4% · Engenharia Civil 89.8% · Engenharia Mecânica 88.0%

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
| 7 Mensagem da Terra | [globe] Vejo isso como motor: cada palavra deles é mais motivo pra … *(idx 3)* | TRA+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 17 Festa dos 100 dias | [scale] Monto uma gincana com a galera dividida em times — todo mun… *(idx 3)* | CUI+1 CON+1 COM+1 TRA+3 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [globe] Penso quem fez isso — que tipo de gente era? o que queria d… *(idx 5)* | INV+2 COM+1 TRA+3 |
| 14 Cultivo planetário | [tent] Criação animal sustentável — começo pequeno, foco em bem-es… *(idx 1)* | CUI+2 CON+1 CUL+3 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[11,7,5,4,18,20,2]`

**✅ Top 1: Licenciatura em Educação do Campo** 95.3%

**Top 3 completo:** Licenciatura em Educação do Campo 95.3% · Nutrição 87.6% · Geografia 86.9%

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
| 7 Mensagem da Terra | [sprout] Vou pra estufa cuidar das plantas que lembram minha família… *(idx 4)* | CUL+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 17 Festa dos 100 dias | [sprout] Monto uma exposição com plantas e amostras que a gente cole… *(idx 4)* | INV+2 CUL+3 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[4,13,8,1,4,30,3]`

**✅ Top 1: Agronomia** 93.5%

**Top 3 completo:** Agronomia 93.5% · Zootecnia 90.8% · Ciências Biológicas 87.4%

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
| 7 Mensagem da Terra | [sprout] Vou pra estufa cuidar das plantas que lembram minha família… *(idx 4)* | CUL+3 |
| 13 Computador da nave | [brain] Crio uma IA que aprende sozinha lendo os arquivos antigos —… *(idx 1)* | INV+2 CON+2 TRA+2 TEC+2 |
| 8 Doença misteriosa | [leaf] Investigo as últimas refeições — comida fresca, contaminaçã… *(idx 4)* | CUI+2 INV+1 CUL+1 |
| 17 Festa dos 100 dias | [sprout] Monto uma exposição com plantas e amostras que a gente cole… *(idx 4)* | INV+2 CUL+3 |
| 9 Chegada ao planeta | [tree] Perto da floresta densa — onde tem mais vida pra estudar *(idx 1)* | INV+1 CUL+3 |
| 15 Linguagem alienígena | [thinking] Tento achar a lógica matemática — vejo se os símbolos segue… *(idx 2)* | INV+3 TEC+1 |
| 14 Cultivo planetário | [sprout] Planto plantas da Terra no chão alienígena — técnica de pla… *(idx 0)* | INV+2 CON+1 CUL+3 |
| 10 Contato | [leaf] Observo o ecossistema que cerca elas — plantas, terreno, ci… *(idx 5)* | INV+1 CUL+3 |
| 11 Crise final | [sprout] Protejo a estufa — sem ela, ninguém volta pra casa *(idx 4)* | CUL+3 |

**Vetor resultante do aluno:** `[6,16,5,1,4,28,5]`

**✅ Top 1: Zootecnia** 92.7%

**Top 3 completo:** Zootecnia 92.7% · Agronomia 92.0% · Ciências Biológicas 90.6%

---
*Gerado automaticamente em 2026-05-23 pelo `scripts/personas-ideais.ts`*