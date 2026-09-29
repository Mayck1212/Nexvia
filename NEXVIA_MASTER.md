# NEXVIA MASTER

## 1. Objetivo do documento
Este arquivo funciona como o documento central de inteligência e governança do projeto Nexvia. Ele coordena as skills disponíveis, as decisões de design, motion design, animação, implementação e a evolução contínua da arquitetura. Todo agente, IA ou desenvolvedor atuando neste projeto deve consultar este documento antes de propor ou executar mudanças.

## 2. Contexto do Nexvia
A Nexvia é uma marca especializada na criação de landing pages profissionais e personalizadas para negócios. 

A identidade visual deve transmitir:
- Premium
- Moderno
- Sofisticado
- Tecnológico
- Minimalista
- Alto nível de acabamento
- Confiança
- Clareza
- Conversão

A identidade visual atual utiliza principalmente:
- Preto, Branco, Cinza
- Glassmorphism, transparências e blur (efeitos de desfoque)
- Iluminação sutil e elementos cinematográficos
- Microinterações e animações elegantes

**REGRA DE OURO:** O site NÃO deve parecer um template genérico. Ele precisa ter identidade própria.

## 3. Regras permanentes do projeto
Estas regras nunca devem ser quebradas sem autorização explícita do usuário:
- Não recriar o site do zero sem necessidade.
- Não remover funcionalidades existentes sem motivo.
- Não alterar textos aprovados pelo usuário sem autorização.
- Não inventar clientes, depoimentos, resultados ou métricas.
- Não adicionar elementos que prejudiquem a conversão.
- Não transformar o site em algo visualmente exagerado.
- Não utilizar animações apenas porque são tecnicamente possíveis. Toda animação precisa ter propósito (feedback, narrativa ou personalidade).
- Priorizar performance e acessibilidade.
- Preservar responsividade e identidade visual.
- Evitar layout shift (mudanças bruscas de layout).
- Evitar overflow horizontal (rolagem horizontal indesejada).
- Respeitar preferências de acessibilidade (ex: `prefers-reduced-motion`).

## 4. Skills disponíveis

### Apple Design Skill
- **Localização:** `C:\Users\Windows Lite BR\.vscode\skills\apple-design-skill-main`
- **Objetivo:** Fornecer princípios de design e interface baseados na Human Interface Guidelines (HIG) da Apple.
- **O que ela ensina:** 8 princípios de design da Apple (Purpose, Agency, Responsibility, Familiarity, Flexibility, Simplicity, Craft, Delight), acessibilidade, convenções de plataforma, design visual (tipografia, contraste) e interação com o usuário.
- **Quando utilizar:** Para auditorias de design (Design Review), validação de acessibilidade, hierarquia visual, usabilidade de modais/sheets e refinamento estético (ex: aplicação correta de materiais como Liquid Glass).
- **Quando evitar:** Quando o objetivo for apenas refatoração estrutural de código back-end não atrelado à UI.
- **Principais técnicas:** Uso da "Lente de Acessibilidade", "Lente Visual" e "Lente de Plataforma". Aplicação de hierarquia por tamanho e peso tipográfico. Uso de contrastes mínimos (4.5:1 / 3:1).
- **Principais regras:** Texto deve ser legível. Cores não devem ser o único meio de transmitir informação. Todo elemento deve merecer estar na tela (simplicidade).
- **Dependências:** Nenhuma técnica, apenas a leitura das diretrizes.
- **Relação com outras skills:** Define a estrutura e a estética que a `Motion Design Skill` irá animar, e que a `GSAP Skill` ou `Framer Motion` implementarão.
- **Aplicações no Nexvia:** Avaliar se os painéis glassmorphism possuem contraste adequado. Verificar a hierarquia tipográfica (fonte Display vs. Inter) para transmitir a mensagem Premium.

### GSAP Skill
- **Localização:** `C:\Users\Windows Lite BR\.vscode\skills\gsap-skills-main`
- **Objetivo:** Orientar a implementação de animações em JavaScript de alta performance usando a GreenSock Animation Platform (GSAP), integrando-a corretamente com React.
- **O que ela ensina:** Uso de `gsap.to()`, `gsap.timeline()`, `ScrollTrigger` para animações baseadas no scroll, e o hook `@gsap/react` (`useGSAP`).
- **Quando utilizar:** Ao criar timelines complexas, sequências encadeadas, animações controladas pela posição do scroll, e situações onde a performance é crítica.
- **Quando evitar:** Em transições CSS extremamente simples ou se o projeto já tiver outra biblioteca pesada instalada atrelada a lógicas que não se quer migrar (ex: microinterações básicas do botão).
- **Principais técnicas:** Usar `timeline` para encadear em vez de `delay`, `ScrollTrigger.refresh()` para mudanças de layout dinâmicas, `autoAlpha` em vez de `opacity`, e scoping pelo `useGSAP`.
- **Principais regras:** Animar propriedades aceleradas por GPU (`x`, `y`, `scale`, `rotation`, `opacity`). Nunca animar propriedades de reflow de layout se puder ser evitado.
- **Dependências:** Pacote NPM `gsap` e `@gsap/react`.
- **Relação com outras skills:** A `GSAP Skill` viabiliza tecnicamente a coreografia ditada pela `Motion Design Skill`.
- **Aplicações no Nexvia:** Refatorar, se aprovado, trechos mais densos do site (como sequências de seções roláveis e sincronia com vídeos) que atualmente utilizam `Framer Motion` e dependem da rolagem da página.

### Motion Design Skill
- **Localização:** `C:\Users\Windows Lite BR\.vscode\skills\motion-design-skill-main`
- **Objetivo:** Fornecer princípios de direção de arte em movimento, assegurando emoções adequadas e timing perfeito (chancela LottieFiles / Disney).
- **O que ela ensina:** Aplicação da tríade "Intenção Emocional", "Narrativa Visual" e "Craft". Uso de arquétipos de Personalidade de Motion, durações por contexto, easings corretos, Regras de 1/3 e divisão de movimento (Primário, Secundário, Ambiente).
- **Quando utilizar:** Ao decidir durações, curvas de aceleração/desaceleração (easing) e propriedades animadas de qualquer interação.
- **Quando evitar:** Ao focar no "código" e não na "sensação" (a skill não determina a sintaxe, apenas os valores conceituais).
- **Principais técnicas:** Easing-out para Entradas, Easing-in para Saídas. Usar "Premium" (350-600ms, curva suave sem overshoot) ou "Corporate" (200-400ms, limpo).
- **Principais regras:** Menos é mais (Simplicity threshold). Duração escala com a distância. Entradas devem ser visivelmente mais longas (30-50%) que saídas.
- **Dependências:** Nenhuma de código, apenas os valores a aplicar na tecnologia usada (CSS, Framer ou GSAP).
- **Relação com outras skills:** Direciona os timings das implementações do `GSAP Skill` respeitando os layouts da `Apple Design Skill`.
- **Aplicações no Nexvia:** Adequar a identidade do "Nexvia" para o arquétipo **Premium**. Reduzir bounces, criar tempos de settle (assentamento) sofisticados, manter movimentos fluidos (cubic-bezier(0.4,0,0.2,1)) focando na opacidade e na escala.

## 5. Sistema de descoberta de novas skills
Sempre que um agente de inteligência artificial ou desenvolvedor operar neste projeto, ele DEVE checar a pasta `C:\Users\Windows Lite BR\.vscode\skills\` (ou no diretório global aplicável). 
Se aparecer uma nova pasta:
1. Reconhecer a nova skill.
2. Ler todo o `README.md` e `SKILL.md` referentes.
3. Entender a sua finalidade.
4. Registrar a skill na seção 4 deste `NEXVIA_MASTER.md`.
5. Identificar como ela complementa as skills atuais ou se gera conflitos.
6. Atualizar a Matriz de Decisão (abaixo).
7. Levar a nova skill em consideração para qualquer plano futuro.

**NOTA:** O conjunto atual de skills (Apple, GSAP, Motion) nunca é definitivo.

## 6. Matriz de decisão das skills

| Problema / Necessidade | Skill(s) Relevante(s) | Como usar |
| --- | --- | --- |
| **Design visual, tipografia, contraste e clareza estrutural** | Apple Design Skill | Garantir acessibilidade (Lente 1) e clareza (Simplicity/Familiarity) baseando-se em pesos, proporções e espaços consistentes. |
| **Definir personalidade e comportamento das transições** | Motion Design Skill | Determinar qual emoção a interação precisa causar. Aplicar o arquétipo Premium e as regras de duração (ex: 350-600ms p/ grandes revelações). |
| **Implementação complexa de animação via JavaScript (Timelines, Scroll)** | GSAP Skill | Usar GSAP para escrever a timeline ou o ScrollTrigger com alta performance, implementando exatamente os valores da Motion Design. |
| **Microinterações rápidas (hovers, tooltips)** | CSS / Motion Design | Aplicar as tabelas de Timing do Motion Design (80-150ms) diretamente em Tailwind ou CSS, sem onerar com frameworks JS pesados. |

## 7. Hierarquia entre as skills
Quando múltiplas skills forem necessárias para criar um componente ou uma página:

**PRINCÍPIO E COMPOSIÇÃO (Apple Design)** -> **DIREÇÃO DE MOTION (Motion Design)** -> **IMPLEMENTAÇÃO (GSAP / Framer / Tailwind)**

Ou seja:
1. Primeiro decidimos o design puro, estrutura, tipografia e acessibilidade (Apple).
2. Em seguida, desenhamos mentalmente a coreografia, emoção, duração e easing (Motion).
3. Finalmente, escrevemos o código otimizado (GSAP/CSS).

## 8. Sistema de aprendizado com o usuário (User Feedback & Learned Preferences)

Este sistema é crítico para rastrear os gostos e preferências repetidas do proprietário/usuário.
*(Uma preferência isolada não deve ditar todas as regras, requer repetição documentada)*

- **O que foi aprovado:** [Pendente de feedback / interações]
- **O que foi rejeitado:** [Pendente de feedback / interações]
- **O que o usuário pediu para alterar repetidamente:** [Pendente]
- **Padrões de design preferidos:** [Pendente]
- **Animações consideradas boas/exageradas:** [Pendente]
- **Decisões recorrentes de código:** [Pendente]

## 9. Sistema de evolução (Evolution Log)

Toda vez que o usuário avaliar uma implementação significativa, registre-a aqui.

| Data | Alteração/Etapa | Avaliação do Usuário | O que funcionou | O que não funcionou | Insight | Skills Envolvidas | Impacto Futuro |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 28/09/2026 | Criação do NEXVIA MASTER e Auditoria Inicial | Aguardando | Arquitetura das skills foi mapeada | N/A | Centralização das regras de conduta visual e técnica. | Todas | Permite decisões mais maduras nos próximos passos. |

## 10. Auditoria Atual do Nexvia (Baseada nas Skills)

### DESIGN & APPLE-STYLE DESIGN
- **Aspectos Positivos:** O site adota um design Premium focado em texturas escuras (bg-black), glassmorphism (`backdrop-blur`) e layout centralizado e bem espaçado.
- **Pontos de Atenção:**
  - **Contraste:** A Lens 1 da Apple Skill dita um contraste mínimo. Há trechos de texto usando `text-[#555]` sobre fundo preto que podem ser muito difíceis de ler para usuários com restrições visuais (frequentemente reprovados no índice 4.5:1).
  - **Familiaridade e Craft:** Botões e componentes usam o paradigma clássico moderno (Tailwind), o que é ótimo, contudo, a estruturação semântica e os "focus-rings" (navegação via teclado) precisarão de testes.

### UX
- **Aspectos Positivos:** O fluxo da página é extremamente narrativo (Hero -> Dores -> Solução -> Como Funciona -> Diferenciais -> Showcase -> Preços -> FAQ), criando um funil coerente.
- **Pontos de Atenção:** A fricção parece baixa, com CTAs de WhatsApp consistentes. A hierarquia (Tipografia Display pesada vs. Textos de leitura limpos) é assertiva e legível.

### MOTION DESIGN
- **Aspectos Positivos:** O site possui movimentos contínuos (Prismas, elementos de vídeo e pequenas iluminações).
- **Pontos de Atenção:** 
  - Muitas seções (como as de "Transition" e "PainSection") dependem da mesma lógica de transição com Framer Motion (ex: `opacity: 0, y: 20` para `opacity: 1, y: 0`). Isso funciona, mas a `Motion Design Skill` recomenda planejar "Staggers" (cascatas) e dividir os componentes em Camada Primária vs. Secundária para não parecer repetitivo.
  - O arquétipo atual parece pender para o **Corporate**, mas considerando a marca Nexvia, um leve viés para **Premium** (350-600ms, 0% overshoot, easings com deceleração forte no final como `ease: [0.22, 1, 0.36, 1]`) está sendo usado e deve ser padronizado e aprimorado aplicando staggers precisos.

### GSAP / IMPLEMENTAÇÃO
- **Aspectos Positivos:** Utilização do `framer-motion` que é moderno para React.
- **Pontos de Atenção:** O prompt e a diretriz da `GSAP Skill` sugerem que animações atreladas à rolagem e orquestrações avançadas (como parar ou iniciar vídeos no scroll, parallax ou transições de blocos compostos) são mais controláveis e performáticas através de timelines do GSAP com ScrollTrigger, em oposição a múltiplas instâncias isoladas de `useInView`.
- O cursor de mouse personalizado (glow) requer otimização (é atualizado via listener global no `page.tsx`), podendo gerar recálculos de estilo excessivos e Layout Shifts implícitos.

## 11. Classificação dos Resultados

- **[ALTO] CONTRASTE (Acessibilidade):**
  - **Problema:** Textos `#555` e `#888` sobre fundo preto (`#000`) podem não ter contraste suficiente.
  - **Evidência:** Arquivo `PainSection.tsx` e `Hero.tsx`.
  - **Impacto:** Dificuldade de leitura e reprovação sob Apple's HIG Lens 1.
  - **Skill:** Apple Design Skill.
  - **Solução:** Substituir tons cinzas para `#888` ou `#999` p/ subtítulos essenciais a fim de atingir nível AA/AAA, mantendo a sofisticação sem prejudicar leitura.

- **[ALTO] GESTÃO DE PERFORMANCE DO SCROLL E STAGGER:**
  - **Problema:** Vários hooks `useInView` orquestrando vídeos e opacidades individualmente sem coordenação rítmica fina (faltam regras de stagger 1/3).
  - **Evidência:** Em `Hero.tsx` e `PainSection.tsx`.
  - **Impacto:** Animações entram em bloco simultaneamente e perdem a sensação de coreografia intencional e elegância.
  - **Skill:** GSAP Skill / Motion Design Skill.
  - **Solução:** Introduzir uma timeline GSAP ou Framer Stagger para orquestrar as entradas.

- **[MÉDIO] MICROINTERAÇÃO DE CURSOR:**
  - **Problema:** Cursor glow usa atualização inline via React/DOM (em `page.tsx`).
  - **Evidência:** `cursorRef.current.style.left` atrelado a `mousemove` global sem debounce.
  - **Impacto:** Pode onerar Main Thread desnecessariamente em um site de alto impacto.
  - **Skill:** GSAP Skill / Performance.
  - **Solução:** Utilizar CSS Transforms (`translate3d`) acelerados via GPU ou `gsap.quickTo()` para lidar de forma suave e performática com cursores.

- **[OPORTUNIDADE] COREOGRAFIA "PREMIUM" COM HERO ELEMENT:**
  - **Problema:** Muitas seções animam seus filhos inteiros de baixo para cima (Y: 20), faltando um elemento surpresa (Hero element) e propriedades secundárias polidas.
  - **Evidência:** Padrões repetitivos em `Hero.tsx` e blocos adjacentes.
  - **Impacto:** A experiência se torna previsível.
  - **Skill:** Motion Design Skill.
  - **Solução:** Ao longo das atualizações, criar variações sutis para as entradas de seções (Scale sutil na imagem principal, fade lateral suave para labels).

## 12. Plano de Melhoria (Recommended Improvement Roadmap)

- **FASE 1 — Correções importantes (Acessibilidade e Cores):** Ajustar paleta de cinzas secundários p/ tons legíveis (contraste > 4.5:1 p/ pequenos textos).
- **FASE 2 — UX e design (Tipografia e Alinhamentos):** Garantir que o espaçamento "Simplicity" (respiro) das guidelines Apple está perfeito em componentes modais/cartões.
- **FASE 3 — Motion design estrutural:** Atualizar os timings (durações) e easings do projeto inteiro para seguir rigidamente a personalidade **Premium** da documentação (ex: 350-600ms p/ seções).
- **FASE 4 — Microinterações:** Refatorar botões e interações contínuas de cursor para alta performance (CSS transform puro ou GSAP quickTo).
- **FASE 5 — GSAP/ScrollTrigger (Opcional & Progressivo):** Avaliar migração de seções-chave muito ricas de mídias (Vídeos e Telas sobrepostas) para timelines unificadas do GSAP controladas pelo Scroll.
- **FASE 6 — Refinamento final:** Verificação minuciosa de resiliência, layout-shift contido e preferências de `reduced-motion`.

## 13. Execução

1. As mudanças NÃO devem ser implementadas todas de uma vez de forma "monstruosa".
2. Para cada ação:
   - Identificar o objetivo.
   - Selecionar as skills necessárias.
   - Verificar os efeitos colaterais.
   - Implementar controladamente.
   - Testar desktop, mobile, performance e aderência às regras Apple.

## 14. Sistema de decisão
Se o Agente / Desenvolvedor estiver em dúvida entre duas escolhas, avaliar pela seguinte ordem:
1. Identidade Nexvia (O que fortalece o produto?);
2. Clareza e Legibilidade;
3. Experiência do Usuário (Menor fricção e peso);
4. Estética (Aparência premium);
5. Propósito da Interação (Animações têm motivo?);
6. Performance / GSAP;
7. Acessibilidade (Lens 1) e Responsividade;
8. Manutenção de Código;
9. Feedback histórico do Usuário.
*Nunca escolha uma solução apenas porque parece tecnicamente complexa ou impressionante de programar.*

## 15. Proteção contra regressões
Antes de finalizar / commitar:
- Assegurar que nenhum elemento vital (CTAs, WhatsApp) quebrou ou sumiu.
- Verificar responsividade em telas pequenas (`320px`, sem overflow-x).
- Verificar se textos originais de conversão e promessas permanecem intactos.
- Checar se nenhuma animação engasga ou quebra por causa de reflow pesado.
- Garantir adesão ao "prefers-reduced-motion".

## 16. Princípio Central
**O objetivo não é tornar o site "mais cheio de efeitos".** O objetivo é fazer o Nexvia parecer cada vez mais **PRECISO, SOFISTICADO, FLUIDO, INTENCIONAL, MODERNO e PROFISSIONAL**. 
Toda decisão deve responder: **"Isso realmente melhora a experiência ou só adiciona complexidade?"**

## 17. Atualização Contínua
Este `NEXVIA_MASTER.md` deve ser um repositório orgânico (documento vivo). 
Sempre que uma nova skill aparecer ou o usuário aprovar/rejeitar abordagens com base em feedback, este arquivo deverá ser editado na seção "Sistema de Aprendizado" e "Evolution Log".
O conhecimento construído nunca deve ser apagado sem motivo justificável (como a quebra de uma regra técnica obsoleta).

---

## 18. Sistema de Motion Design Unificado (adicionado em 28/09/2026)

### Arquivo central: `nexvia/lib/motion.ts`
Todo componente do projeto usa os tokens deste arquivo. **Nunca inventar valores de duração, easing ou stagger ad-hoc.**

| Token | Valor | Uso |
|---|---|---|
| `EASE_PREMIUM` | `[0.22, 1, 0.36, 1]` | Entrada principal (ease-out agressivo) |
| `EASE_SMOOTH` | `[0.25, 0.1, 0.25, 1]` | Hover / on-screen transitions |
| `DUR_MICRO` | `0.15s` | Hover, press settle |
| `DUR_QUICK` | `0.4s` | Badge, ícone isolado |
| `DUR_STANDARD` | `0.7s` | Card isolado |
| `DUR_SECTION` | `0.85s` | Bloco de texto, reveal de seção |
| `DUR_DRAMATIC` | `1.0s` | Hero, CTA Final, vídeos |
| `Y_REVEAL` | `20px` | Distância vertical padrão |
| `Y_REVEAL_LARGE` | `32px` | Hero panel, CTA Final |
| `STAGGER_CHILDREN` | `0.08s` | Entre cards / steps de uma lista |
| `STAGGER_TEXT` | `0.07s` | Entre linhas de texto (eyebrow → título → subtítulo) |

### Regras de orquestração por seção
1. **Header de seção:** eyebrow entra como bloco — sem stagger interno (bloco único)
2. **Conteúdo texto + visual lado-a-lado:** texto sempre primeiro (`delay: 0`), visual com `delay: 0.22s`
3. **Listas de cards:** stagger calculado por índice `0.12 + i * STAGGER_CHILDREN`
4. **FAQ / listas longas:** stagger limitado a 4 níveis máximo com `Math.min(i, 3)`
5. **blur de entrada:** PROIBIDO como efeito geral. Apenas o Hero pode ter caso seja reintroduzido com aprovação explícita.

### Hierarquia de entrada padrão por seção
```
[0ms]   → Painel / bloco da seção
[+100ms] → Eyebrow / badge
[+170ms] → Título principal  
[+240ms] → Subtítulo / descrição
[+310ms] → CTAs
```

---

## 19. Evolution Log

### Entrada 1 — 28/09/2026 | Sessão 1 (Manhã)
**Data:** 28/09/2026  
**Alteração:** Fase 1 — Correções de acessibilidade (contraste de texto)  
**Avaliação do usuário:** Aprovado implicitamente (sem feedback negativo)  
**O que funcionou:** Elevar `#555` e `#777` para `#999` em Hero e PainSection  
**O que não funcionou:** —  
**Insight aprendido:** O projeto tinha textos abaixo de 4.5:1 de contraste em seções críticas. Textos descritivos secundários precisam de no mínimo `#888` em fundos pretos.  
**Impacto futuro:** Todos os textos descritivos do site foram padronizados para `#888` mínimo.  
**Skills envolvidas:** Apple Design Skill (Lens 1 — Acessibilidade)

---

### Entrada 2 — 28/09/2026 | Sessão 1-2
**Data:** 28/09/2026  
**Alteração:** Fase 2 — Sistema de Motion Design Premium + refinamento de todos os componentes  
**Avaliação do usuário:** Aprovado (usuário solicitou a implementação completa)  
**O que funcionou:**
- Criação do arquivo `lib/motion.ts` com tokens centralizados eliminou inconsistências
- Stagger de 4 camadas no Hero (badge → título → subtítulo → CTA) cria narrativa visual clara
- Limitar stagger do FAQ a 4 níveis máximos (era 8) corrige o problema de itens tardios
- Remoção do blur de entrada no CTAFinal e TrustSection (únicos casos com blur inconsistente) unifica a linguagem visual
- Hierarquia texto→vídeo em PainSection e SolutionSection (delay 0.22s para o vídeo) conduz o olhar corretamente

**O que não funcionou:** —  
**Insight aprendido:**
- O principal problema do motion do Nexvia não era falta de efeitos, mas **inconsistência de valores** (y:15 em um lugar, y:25 em outro, y:40 em outro)
- Blur de entrada não deve ser usado como efeito decorativo geral — reservar para momentos cinematográficos pontuais com aprovação
- Stagger de 8 itens individuais em listas longas cria uma percepção de lentidão; o usuário sente que a página está "travada"

**Impacto futuro:** Qualquer novo componente DEVE usar os tokens de `lib/motion.ts`. Não criar valores ad-hoc.  
**Skills envolvidas:** Motion Design Skill (arquétipo Premium), Apple Design Skill (Craft + Simplicity)

---

## 20. User Feedback & Learned Preferences

### Preferências confirmadas
- **Animações com propósito:** O usuário quer que cada animação comunique algo. Não animar por animar.
- **Premium, cinematográfico, calmo, preciso, sofisticado, intencional** — estes foram os adjetivos explicitamente usados pelo usuário para descrever a sensação desejada.
- **Identidade própria:** O site não deve parecer template. Identidade visual atual (preto/glassmorphism/cinza) é aprovada.
- **Framer Motion x GSAP:** Usuário aprovou manter Framer Motion onde já funciona. GSAP só entra onde oferece vantagem real.

### Preferências em observação (não são regras permanentes ainda)
- Blur de entrada pode ser reintroduzido em elementos específicos se houver propósito narrativo claro
- Stagger entre elementos pode ser ajustado por feedback visual futuro

### Rejeições confirmadas
- Animações exageradas / bounce / elasticidade
- Elementos "voando pela tela"
- blur como efeito decorativo genérico em múltiplos componentes simultaneamente
- Valores de timing inconsistentes entre seções

### Entrada 3 — 28/09/2026 | Sessão 3
**Data:** 28/09/2026  
**Alteração:** Fase 3 — Auditoria e migração para GSAP  
**Avaliação do usuário:** Auditoria guiada por regras de priorização de performance  
**O que funcionou:**
- **GSAP:** Migração apenas do **Cursor Glow** (`app/page.tsx`) para GSAP. O efeito anterior atualizava `.style.left` e `.style.top` a cada `mousemove`, forçando recálculos pesados de layout no navegador (reflow contínuo no Main Thread). Com GSAP `quickTo()`, as atualizações são passadas diretamente para as propriedades de `transform` (`x` e `y`), isolando a animação na GPU e gerando interpolação super fluída de 120Hz com um arrasto (trailing effect) sofisticado, graças ao `power3.out`. 
- Adicionada verificação inteligente para desativar eventos em dispositivos de toque (`window.matchMedia("(pointer: coarse)")`), economizando bateria no mobile.
- **Framer Motion mantido no resto do site:** A auditoria mostrou que as entradas, vídeos, staggers e elementos `FloatingPrisms` já estavam extremamente otimizados. Os prismas usam o hook `useSpring`, que contorna o ciclo de vida de re-render do React de forma nativa e segura. Implementar ScrollTrigger seria um *overengineering* desnecessário que poderia gerar atritos onde não havia. O site mantém uma única linguagem de motion.

**Impacto futuro:**
- Cursor muito mais liso e sem impactar scroll da página.
- Evitamos o erro clássico de "encher o site de GSAP" sem motivo.
**Skills envolvidas:** GSAP Skill, Motion Design Skill
