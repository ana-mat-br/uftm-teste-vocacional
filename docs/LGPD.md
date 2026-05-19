# 🛡️ LGPD — Privacidade

**Versão:** 2.0 (simplificada após decisão de não coletar PII)
**Aplicável:** Lei nº 13.709/2018

---

## Resumo

**Este projeto não coleta dados pessoais identificáveis (PII) dos usuários.**

Decisão tomada em 2026-05-19 para reduzir risco jurídico e acelerar entrega em 7 dias.

---

## O que coletamos (anônimo agregado)

| Dado | Por quê | É PII? |
|---|---|---|
| Codinome gerado pelo sistema (ex: "ESTRELA-7") | Identificar a sessão e personalizar a carta | ❌ Não — gerado, não fornecido |
| Respostas das 12 cenas | Algoritmo de matching | ❌ Não identifica ninguém |
| Vetor de eixos calculado | Estatística agregada | ❌ Não |
| Curso resultado (top 1, 2, 3) | Estatística agregada | ❌ Não |
| Timestamp de início e fim | Métricas de duração | ❌ Não |
| Cliques em compartilhar | Métricas de viralidade | ❌ Não |
| Tipo de browser/SO (mobile-ios, etc) | Compatibilidade | ❌ Não |
| Nome do bixinho gerado pelo LLM | Estatística (palavras mais comuns) | ❌ Não |

## O que NÃO coletamos

- ❌ Nome real do aluno
- ❌ @instagram, @twitter ou qualquer rede social
- ❌ Email, telefone
- ❌ Foto
- ❌ Documento (CPF, RG)
- ❌ Endereço, cidade, escola
- ❌ Geolocalização (GPS)
- ❌ IP (Supabase configurado pra não logar)
- ❌ Cookies de terceiros (sem Google Analytics, Facebook Pixel etc)

---

## Por que isto **não exige tratamento LGPD complexo**

A LGPD (Art. 5º, I) define **dado pessoal** como "informação relacionada a pessoa natural identificada ou identificável". Como nada do que coletamos identifica (nem permite identificar por combinação razoável) uma pessoa específica, o conteúdo está fora do escopo de aplicação da lei.

**Não precisamos de:**
- Consentimento formal do titular
- Política de privacidade extensa
- Encarregado de dados (DPO) específico para este projeto
- Procedimento de exclusão de dados sob demanda
- Base legal específica do Art. 7º
- Comunicação parental para menores

---

## Mini-política (a publicar no rodapé do site)

> **Privacidade.** Este projeto **não coleta nenhuma informação pessoal sobre você**. Não pedimos nome, email, telefone, endereço, nem qualquer rede social. Salvamos apenas suas respostas anônimas e o curso resultante para fins estatísticos da UFTM. Em caso de dúvida: anapaula.fernandes@uftm.edu.br

---

## Cuidados técnicos para manter a anonimidade

| Cuidado | Implementação |
|---|---|
| Supabase não loga IP | Configurar `log_destination` sem IP |
| Sem cookies de terceiros | Não integrar GA, Facebook Pixel, etc |
| User-Agent simplificado | Salvar só "mobile-ios" / "mobile-android" / "desktop", não a string completa |
| Vercel Analytics anônimo | Habilitar opção "Privacy-friendly mode" |
| Codinome **não vinculável** | Gerado aleatoriamente, sem padrão que aproxime de identidade |
| Prompt do LLM sem PII | Anthropic recebe só vetor numérico + codinome + curso |

---

## Limite: o que **continua** sendo cuidado

Mesmo sem PII, mantemos:

- ✅ HTTPS em produção
- ✅ Service Role Key do Supabase só no servidor, nunca exposta ao cliente
- ✅ API Key da Anthropic só no servidor
- ✅ Comunicar à UFTM (PROEXT/Comissão da Feira) que estamos rodando — não como aprovação jurídica, mas como cortesia institucional

---

## Se mudar de ideia no futuro (v2)

Se em uma versão futura você quiser coletar email pra envio da carta, ou @instagram pra amplificação, o tratamento LGPD volta ao escopo completo:

- Tela de consentimento explícita
- Base legal definida (provavelmente consentimento Art. 7º I)
- Política de privacidade robusta
- Canal de exclusão funcional
- Consulta à Procuradoria
- Aprovação do DPO da UFTM

Ver [LGPD versão 1.0 no histórico do git](../) se precisar resgatar o texto completo.
