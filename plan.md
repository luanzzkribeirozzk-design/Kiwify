# Renda Mobile — implementação e direção visual

## Implementação

A landing page será uma aplicação React + TypeScript + Vite de página única, sem backend, banco de dados, Firebase ou segredos no frontend. O único fluxo externo será o checkout oficial da Kiwify (`https://pay.kiwify.com.br/XbnRc5z`), usado em todos os CTAs de compra. A publicação será estática, com build para `dist/` e a rota declarada em `public/manus-routes.json`.

### Estrutura do projeto

- `index.html`: entrada HTML, SEO básico, tema do navegador e favicon.
- `src/main.tsx`: composição da página, dados curtos de recursos/estatísticas/passos/FAQ e comportamento de expansão do FAQ.
- `src/styles.css`: sistema visual responsivo, componentes de layout, estados de interação, animações leves e desenho CSS/SVG do mockup de celular.
- `public/favicon.svg`: marca visual simples do Renda Mobile para favicon e compartilhamento local.
- `public/manus-routes.json`: manifesto da única rota pública (`/`).
- `app.config.ts`: metadado de logo do projeto para a plataforma.
- `package.json`, `tsconfig.json`, `vite.config.ts`: toolchain mínima com scripts de desenvolvimento, typecheck, lint e build.

## Direção visual aprovada

- **Movimento:** editorial tech / cyber-minimalism — uma página de produto digital com o contraste de uma interface premium e o ritmo de uma campanha de lançamento.
- **Princípios:** clareza antes de volume; contraste alto com respiros generosos; prova visual por módulos e números; conversão sem pressão exagerada.
- **Filosofia de cor:** base azul-marinho quase preta para transmitir foco; violeta elétrico como assinatura de transformação; azul-cobalto e rosa neon aparecem como sinais de movimento, tecnologia e energia — nunca como ruído decorativo.
- **Paradigma de layout:** uma narrativa vertical em faixas de largura variável, alternando blocos editoriais assimétricos, uma “janela” de produto em forma de telefone e uma faixa de números que funciona como prova rápida.
- **Elementos-assinatura:** marca RM em um quadrado inclinado; linha de luz violeta/azul atravessando cards; mockup de celular com biblioteca modular e chips flutuantes.
- **Interação:** CTAs usam contraste e microcopy objetivo; cards sobem poucos pixels no hover; FAQ usa `details/summary` nativo para manter acessibilidade e baixo custo de JavaScript.
- **Animação:** entrada suave de elementos, brilho pulsante discreto no mockup e movimento reduzido quando `prefers-reduced-motion` estiver ativo. Nada deve competir com o CTA.
- **Tipografia:** `Inter`/`ui-sans-serif` para leitura e `Space Grotesk`/`Inter` para títulos curtos, com caixa alta apenas em labels e CTAs.
- **Essência da marca:** uma plataforma direta para aprender, testar e organizar possibilidades de renda online pelo celular — prática, visual e responsável. Personalidade: **direta, exploratória, confiável**.
- **Voz:** headlines curtas e afirmativas; microcopy transparente, sem promessa de ganho garantido. Exemplos: “Aprenda. Use. Conquiste.” e “Conteúdo para sair da ideia e ir para a prática.”
- **Wordmark/logo:** monograma “RM” em uma janela arredondada com um traço de progresso diagonal, acompanhado pelo nome em peso forte.
- **Cor proprietária:** violeta elétrico `#a78bfa`, usado como sinal de ação e reconhecimento da marca.

## Conteúdo e restrições

A página mantém apenas os principais pontos pedidos: hero, recursos, números, público, três passos, oferta e FAQ curto. O texto evita promessas de ganhos, valores diários ou renda garantida e enquadra o produto como aprendizado, ferramentas, estratégias e aplicação prática. O preço exibido é `R$ 24,90`.

## Servindo e publicação

O Vite escutará em `0.0.0.0:3000` para o Preview do projeto. O build estático será gerado em `dist/`. Como não há dados privados nem APIs, server/database permanecem desligados e a página pode ser publicada como saída estática.
