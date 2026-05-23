---
title: "Protocolo Vocação UFTM — Manual de Validação"
subtitle: "Pra docentes que vão revisar a matriz curso × perfil"
author: "Hebert × Ana · PROPPG-UFTM"
date: "Feira de Profissões 2026"
geometry: margin=2.5cm
fontsize: 11pt
mainfont: Georgia
monofont: Menlo
colorlinks: true
linkcolor: "purple"
toc: true
toc-depth: 2
---

\newpage

# Bem-vindo(a)

Você foi convidado(a) a validar o **Protocolo Vocação UFTM**, um quiz vocacional gamificado em formato de aventura sci-fi (ambientado no ano 2087) que vai rodar na **Feira de Profissões da UFTM em 26/05/2026**.

A ideia: o aluno do Ensino Médio embarca numa missão interplanetária fictícia. Suas decisões nas cenas revelam, sem ele saber, qual papel ele tem na tripulação — que se traduz em **cursos da UFTM compatíveis**. No final, ele recebe o resultado + um "copiloto IA" companheiro em pixel art, pronto pra compartilhar nas redes sociais.

**Versão ao vivo:** https://uftm-teste-vocacional.vercel.app

**O que pedimos de você:** que olhe o(s) curso(s) da **sua área** e nos diga se a forma como o sistema está classificando faz sentido pra você. Esperamos uns 15-20 minutos da sua atenção. Tudo está documentado abaixo.

---

# Como o sistema funciona (sem jargão técnico)

## A ideia básica

Cada curso da UFTM tem um "perfil" expresso em **7 dimensões de personalidade**. O aluno responde 13 mini-decisões durante a aventura, e cada escolha "pontua" em uma ou mais dessas dimensões. No fim, o sistema compara o perfil acumulado do aluno com o perfil de cada curso — o(s) curso(s) mais parecidos com o aluno é(são) o(s) recomendado(s).

## Os 7 eixos de personalidade

| Sigla | Nome | O que significa |
|---|---|---|
| CUI | **Cuidador** | Empatia, cuidar do outro |
| INV | **Investigador** | Curiosidade, pesquisa, "por quê" |
| CON | **Construtor** | Construir coisas físicas, engenharias do mundo real |
| COM | **Comunicador** | Conectar, expressar, ensinar |
| TRA | **Transformador** | Justiça, mudança social, contexto |
| CUL | **Cultivador** | Trabalhar com o vivo, sustentabilidade, natureza |
| TEC | **Decifrador** | Computação, dados, lógica, sistemas digitais |

Esses eixos são inspirados em uma teoria vocacional clássica (RIASEC de Holland, 1959), mas adaptados ao contexto UFTM.

## Como cada curso é "perfilado"

Cada curso é descrito por um vetor de 7 números, cada um indo de **0 a 3** (0 = não tem nada a ver, 3 = afinidade máxima). Por exemplo:

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Medicina | **3** | **3** | 0 | 2 | 2 | 0 | 0 |
| Enfermagem | **3** | 1 | 1 | 2 | 1 | 1 | 0 |
| Engenharia Civil | 0 | 1 | **3** | 1 | 1 | 0 | 0 |
| Banco de Dados | 0 | 0 | 0 | 2 | 0 | 0 | **3** |

Leia "Medicina tem CUI=3 (cuidador máximo) e INV=3 (investigador máximo), com toques de comunicação e transformação social." É essa atribuição que pedimos pra você validar para o(s) curso(s) da sua área.

## Como o aluno é "perfilado"

Durante o quiz, cada opção que o aluno escolhe contribui com pontos para 1-3 eixos. Por exemplo, na Cena "Doença misteriosa", se o aluno escolhe **"Lab AGORA — exames de sangue e imagem, amostras"**, ele ganha 2 pontos em CUI e 2 pontos em INV (postura médica investigativa).

Ao fim das 13 cenas pontuáveis, o aluno tem um vetor próprio (ex: `[10, 10, 0, 4, 3, 2, 4]`) que é comparado com os 31 vetores dos cursos via **similaridade de cosseno** (uma fórmula que mede a "direção" do perfil, não a "força"). Os 3 cursos mais parecidos em direção são apresentados.

## O que ele NÃO é

- **Não é um teste psicométrico validado.** Não passou por análise fatorial nem testes de confiabilidade com amostra grande.
- **Não é diagnóstico.** É uma ferramenta de **engajamento e exploração** — uma conversa estruturada com o aluno.
- **Funciona como um filtro vocacional informal**, ajudando o aluno a saber por quais estandes começar a visita na feira.

Por isso a validação humana é importante: precisamos que docentes da área digam se os perfis fazem sentido institucional, ainda que o método seja simplificado.

\newpage

# O que pedimos de você

Olhe os cursos da sua área no **Apêndice A** (matriz completa). Pra cada curso, responda 3 perguntas:

1. **Os 3 eixos com pontuação mais alta refletem a vocação central do curso?** (Ex: "Medicina é CUI+INV — concordo / discordo")

2. **Tem algum eixo com pontuação muito errada?** (Ex: "Não acho que Eng. Civil deveria ter CUI=0; tem trabalho social na disciplina de Civil também")

3. **A 'persona ideal' descrita no Apêndice B (o tipo de adolescente que escolheria esse curso) bate com seu conhecimento dos perfis de calouros do curso?**

Não precisa ser exaustivo. Mesmo um "concordo, mas TRA poderia ser 2 em vez de 1" já é feedback útil.

## Como mandar feedback

Manda pra **Ana** (anapaula.fernandes@uftm.edu.br) ou **Hebert** com qualquer formato:

- Email curto
- WhatsApp
- Áudio
- Mensagem no Teams

Cita o **nome do curso** + **eixo** + sua **observação**. Exemplo:

> Curso: Engenharia Ambiental.\
> Eixo CUI=0 me parece errado, deveria ser 1 — a área tem componente forte de saúde pública e impacto na comunidade.\
> *— Prof. Fulano, [data]*

**Prazo recomendado:** até **2026-05-24** (3 dias antes da feira) pra dar tempo de incorporar mudanças.

\newpage

# Apêndice A: Matriz completa dos cursos UFTM

Os pesos vão de **0 a 3** em cada eixo. **Em negrito** está o(s) eixo(s) dominante(s) do curso.

## Saúde / Cuidado

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Medicina | **3** | **3** | 0 | 2 | 2 | 0 | 0 | Uberaba |
| Enfermagem | **3** | 1 | 1 | 2 | 1 | 1 | 0 | Uberaba |
| Psicologia | **3** | 2 | 0 | **3** | 1 | 2 | 0 | Uberaba |
| Fisioterapia | **3** | 1 | 2 | 1 | 1 | 0 | 0 | Uberaba |
| Terapia Ocupacional | **3** | 1 | 2 | 2 | 0 | 0 | 0 | Uberaba |
| Nutrição | **3** | 2 | 0 | 0 | 2 | 2 | 0 | Uberaba |
| Serviço Social | **3** | 1 | 0 | 2 | **3** | 0 | 0 | Uberaba |
| Ed. Especial e Inclusiva | **3** | 1 | 1 | 2 | 2 | 0 | 0 | Iturama |

## Investigação / Ciências Naturais

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Biomedicina | 2 | **3** | 0 | 0 | 0 | 1 | 1 | Uberaba/Iturama |
| Ciências Biológicas | 1 | **3** | 0 | 1 | 1 | **3** | 0 | Uberaba/Iturama |
| Física | 0 | **3** | 2 | 0 | 0 | 0 | 1 | Uberaba |
| Química | 1 | **3** | 2 | 0 | 0 | 1 | 0 | Uberaba/Iturama |

## Engenharias

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Engenharia Civil | 0 | 1 | **3** | 1 | 1 | 0 | 0 | Uberaba |
| Engenharia Mecânica | 0 | 2 | **3** | 0 | 0 | 0 | 1 | Uberaba |
| Engenharia Elétrica | 0 | 2 | **3** | 0 | 0 | 0 | 2 | Uberaba |
| Engenharia Química | 0 | **3** | **3** | 0 | 0 | 1 | 0 | Uberaba |
| Engenharia de Produção | 0 | 1 | 2 | 2 | 1 | 0 | 2 | Uberaba |
| Engenharia Ambiental | 0 | 2 | **3** | 0 | 2 | **3** | 0 | Uberaba |
| Engenharia de Alimentos | 1 | 2 | **3** | 0 | 0 | 2 | 0 | Uberaba |

## Tech (Computação + Matemática)

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Banco de Dados | 0 | 0 | 0 | 2 | 0 | 0 | **3** | Uberaba |
| Inteligência Artificial | 0 | **3** | 2 | 0 | 1 | 0 | **3** | Uberaba |
| Matemática | 0 | **3** | 0 | 1 | 0 | 0 | **3** | Uberaba |

## Comunicação / Educação

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Letras (PT/ESP) | 1 | 2 | 1 | **3** | 1 | 0 | 0 | Uberaba |
| Letras (PT/ING) | 1 | 2 | 1 | **3** | 1 | 0 | 0 | Uberaba |
| Pedagogia | **3** | 1 | 1 | **3** | 2 | 0 | 0 | Uberaba |

## Humanidades

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| História | 1 | 2 | 0 | 2 | **3** | 0 | 0 | Uberaba |
| Geografia | 1 | 2 | 0 | 1 | **3** | 2 | 1 | Uberaba |
| Educação Física | 2 | 1 | 2 | 0 | 2 | 1 | 0 | Uberaba |
| Lic. Ed. do Campo | 2 | 1 | 1 | 2 | **3** | **3** | 0 | Uberaba |

## Cultivo / Natureza

| Curso | CUI | INV | CON | COM | TRA | CUL | TEC | Campus |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| Agronomia | 1 | **3** | **3** | 0 | 0 | **3** | 0 | Uberaba/Iturama |
| Zootecnia | **3** | **3** | 1 | 0 | 0 | **3** | 0 | Iturama |

\newpage

# Apêndice B: Persona ideal de cada curso

Pra cada curso, descrevemos o **tipo de adolescente** que provavelmente teria afinidade. Use isso como teste de sanidade: "esse adolescente que vocês descrevem é o tipo que aparece nas turmas do meu curso?"

Os 31 perfis detalhados estão no arquivo \texttt{docs/PERSONAS-IDEAIS.md} (publicado no GitHub do projeto e no painel ao vivo).

**Resumo da validação automática:** 29 de 31 cursos foram alcançáveis como "top 1" quando simulamos um aluno escolhendo o caminho ideal para aquele curso. Os 2 que não passaram (Serviço Social e Banco de Dados) saem como "top 2" ou "top 3" — ainda aparecem como alternativas pra o aluno.

\newpage

# Apêndice C: O que vai acontecer durante a feira

- O aluno escaneia um **QR code** no estande UFTM e entra no quiz no celular dele.
- Joga ~6 minutos.
- Recebe o resultado: 3 cursos compatíveis + 1 "copiloto IA" personalizado (texto gerado por IA — Claude Haiku).
- Tem opção de compartilhar nas redes sociais (Stories Instagram, WhatsApp, X).
- Tem opção de marcar "sim / mais ou menos / não" sobre o resultado — esse feedback alimenta o **painel ao vivo** que mostra estatísticas agregadas, sem identificar ninguém.

**Privacidade:** zero dado pessoal é coletado. O aluno joga com um codinome gerado pelo sistema (ex: "ESTRELA-7"). Não pede nome, email, escola.

**Painel ao vivo na feira:** https://uftm-teste-vocacional.vercel.app/painel

\newpage

# Obrigado

Sua leitura crítica é o que vai transformar isso de "experimento" pra "ferramenta útil pros alunos que visitam a UFTM em 2026". Qualquer dúvida, é só chamar.

— **Ana** (Banco de Dados, PROPPG-UFTM)\
— **Hebert** (UFTM)

*Projeto open-source: https://github.com/ana-mat-br/uftm-teste-vocacional*
