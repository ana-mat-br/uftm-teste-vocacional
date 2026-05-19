# 🛡️ LGPD — Privacidade e Tratamento de Dados

**Versão:** 1.0
**Aplicável:** Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais)

> ⚠️ **Disclaimer:** este documento é uma análise inicial feita pela autora do projeto. Antes do lançamento, deve ser revisado pela Procuradoria Jurídica e pelo DPO (Encarregado) da UFTM.

---

## 1. Dados Coletados

### Dados pessoais identificáveis

| Campo | Obrigatório? | Categoria | Finalidade |
|---|:-:|---|---|
| Primeiro nome | ✅ Sim | Pessoal | Personalizar a carta de resultado |
| @instagram | ❌ Não | Pessoal | Amplificação social (marcar no IG) |
| Cidade | ❌ Não | Pessoal | Métricas de alcance regional |
| Escola | ❌ Não | Pessoal | Métricas de alcance institucional |

### Dados de uso (anonimizados após 90 dias)

| Campo | Categoria | Finalidade |
|---|---|---|
| Respostas do quiz (12 escolhas) | Comportamental | Algoritmo de matching |
| Vetor de eixos calculado | Derivado | Cálculo do curso |
| Curso resultante | Derivado | Estatística agregada |
| Timestamp de início/fim | Técnico | Métricas de duração |
| User-Agent (browser/SO) | Técnico | Compatibilidade |

### Dados NÃO coletados

- ❌ Foto ou imagem do aluno
- ❌ Documento (CPF, RG, etc)
- ❌ Email
- ❌ Telefone
- ❌ Endereço completo
- ❌ Geolocalização precisa (GPS)
- ❌ Cookies de terceiros (sem Google Analytics, Facebook Pixel, etc)

---

## 2. Base Legal (LGPD Art. 7º)

**Base aplicável:** Inciso I — **Consentimento** do titular

O consentimento é coletado de forma **explícita, granular e revogável**:

- ✅ Texto claro, em linguagem simples (não jurídica)
- ✅ Opção de seguir SEM fornecer dados opcionais
- ✅ Direito de revogar a qualquer momento (canal de contato no rodapé)

### Tela de consentimento (mockup)

```
┌────────────────────────────────────────────────┐
│                                                │
│  Antes de começar o Protocolo Vocação:        │
│                                                │
│  ✓ Vou usar seu nome só pra fazer sua carta   │
│    de resultado parecer escrita pra você      │
│                                                │
│  ✓ Seu @ no Insta, cidade e escola são        │
│    opcionais — só pra UFTM saber pra onde     │
│    o protocolo está chegando                  │
│                                                │
│  ✓ Nada disso vira anúncio nem spam           │
│                                                │
│  ✓ Você pode pedir pra apagar seus dados      │
│    qualquer hora pelo email                   │
│    privacidade@uftm.edu.br                    │
│                                                │
│  ✓ A UFTM segue a LGPD (Lei 13.709/2018)      │
│                                                │
│  [ ] Concordo e quero começar                  │
│                                                │
│              [ COMEÇAR ]                       │
└────────────────────────────────────────────────┘
```

---

## 3. Direitos do Titular (LGPD Art. 18)

O aluno tem direito a:

| Direito | Como exerce |
|---|---|
| Confirmação de tratamento | Email a `privacidade@uftm.edu.br` |
| Acesso aos dados | Email a `privacidade@uftm.edu.br` |
| Correção de dados | Email a `privacidade@uftm.edu.br` |
| Anonimização ou eliminação | Email a `privacidade@uftm.edu.br` |
| Portabilidade | Email a `privacidade@uftm.edu.br` (formato JSON) |
| Revogação do consentimento | Email OU link "esquecer meus dados" no rodapé |

**SLA de resposta:** até 15 dias úteis (LGPD permite até 15 dias).

---

## 4. Menor de Idade

A grande maioria do público (16-18 anos) é **menor de idade civil**.

### O que diz a LGPD (Art. 14)

> O tratamento de dados pessoais de crianças e adolescentes deverá ser realizado em seu melhor interesse [...] com o consentimento específico e em destaque dado por pelo menos um dos pais ou pelo responsável legal.

### Aplicação prática

**Problema:** exigir consentimento parental na hora do evento é inviável operacionalmente.

**Mitigação adotada:**
1. **Minimização de dados** — coletamos o estritamente necessário
2. **Tornar opcional** TUDO além do primeiro nome
3. **Não vincular** os dados a perfis externos (não pedimos email, telefone)
4. **Linguagem clara** no consentimento — adolescente de 16 anos entende
5. **Comunicar à escola/responsável** quando a feira convidar as escolas (cabe à UFTM)
6. **Retenção curta** — anonimização em 90 dias

> Esta abordagem é **uma interpretação razoável** da LGPD pra contextos educacionais transitórios, mas **não é juridicamente garantida**. A UFTM deve obter parecer formal da Procuradoria.

---

## 5. Armazenamento e Segurança

| Item | Configuração |
|---|---|
| **Local** | Supabase (servidores na AWS US-East-1) |
| **Criptografia em trânsito** | HTTPS/TLS 1.3 |
| **Criptografia em repouso** | AES-256 (Supabase padrão) |
| **Acesso** | Apenas Service Role Key (server-side), não exposta ao cliente |
| **Row Level Security (RLS)** | Habilitado em todas as tabelas |
| **Backups** | Supabase faz daily backups (7 dias retenção no free tier) |

### Risco aceito

Supabase está nos EUA. Transferência internacional de dados é permitida pela LGPD (Art. 33), mas idealmente seria em servidor brasileiro. **Mitigação:** se a UFTM exigir, migrar pra Supabase Pro com região São Paulo (US$ 25/mês — fora do free tier).

---

## 6. Retenção e Anonimização

| Dado | Retenção identificável | Anonimização | Eliminação |
|---|---|---|---|
| Nome | 90 dias | → "Aluno {id}" | 1 ano |
| @instagram | 90 dias | → null | 1 ano |
| Cidade/escola | 90 dias | → mantida (não identifica) | nunca (agregado) |
| Respostas | 90 dias | mantidas (agregadas) | nunca (estatística) |
| Logs de acesso (IP) | 30 dias | → null | 90 dias |

**Implementação:** cron job semanal no Supabase Edge Function que aplica essas regras.

---

## 7. Cookies e Rastreamento

| Tipo | Uso? |
|---|---|
| Cookies de sessão | ✅ Sim — armazenam progresso no quiz (localStorage) |
| Cookies de terceiros | ❌ Nenhum |
| Google Analytics | ❌ Não usado |
| Facebook Pixel | ❌ Não usado |
| Vercel Analytics | ✅ Sim — anônimo, sem cookies |

**Banner de cookies:** dispensável pois só há cookies essenciais (sessão local).

---

## 8. Compartilhamento com Terceiros

| Terceiro | O que recebe | Por quê |
|---|---|---|
| **Vercel** (hosting) | Tráfego HTTP, IP (anonimizado) | Necessário pra hospedar |
| **Supabase** (DB) | Todos os dados coletados | Necessário pra persistir |
| **Anthropic** (LLM) | Apenas nome, vetor numérico, curso | Geração da carta |

**Nada é enviado para:**
- Redes sociais
- Anunciantes
- Brokers de dados
- Terceiros não-relacionados ao serviço

### Sobre o LLM (Anthropic)

- Dados enviados: nome do aluno + vetor `[CUI, INV, CON, COM, TRA, CUL]` + curso
- Dados NÃO enviados: @instagram, cidade, escola, respostas individuais
- Anthropic não treina seus modelos com dados de API (política da empresa)

---

## 9. Política de Privacidade Pública

Deve ser publicada em URL acessível, ex: `protocolo.uftm.edu.br/privacidade`

Conteúdo mínimo:
1. Quem é o controlador (UFTM)
2. Quem é o operador (Ana Paula Fernandes — autora do projeto)
3. Dados coletados (esta seção 1 do doc)
4. Base legal e finalidade
5. Compartilhamento (esta seção 8)
6. Direitos do titular (esta seção 3)
7. Como entrar em contato
8. Data da última atualização

---

## 10. Canal de Contato

- **Email do controlador:** `privacidade@uftm.edu.br` (ou DPO oficial da UFTM)
- **Email da operadora do projeto:** `anapaula.fernandes@uftm.edu.br`

---

## ✅ Checklist pré-lançamento

- [ ] Política de privacidade publicada e linkada em todas as páginas
- [ ] Tela de consentimento implementada no início do quiz
- [ ] Botão "esquecer meus dados" funcional
- [ ] RLS configurado no Supabase
- [ ] Variável de ambiente da Anthropic NUNCA exposta ao cliente
- [ ] Cron de anonimização agendado
- [ ] Logs não armazenam payloads sensíveis
- [ ] Parecer formal da Procuradoria Jurídica da UFTM
- [ ] Aprovação do DPO/Encarregado da UFTM
- [ ] Comunicação às escolas convidadas sobre coleta de dados
