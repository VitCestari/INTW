# Projeto CSS Zen Garden

## Autor
Vitória Cestari Duarte

## Tema
Minimalismo Monocromático e Tipográfico

## Design de Referência
White Space / Clean Slate

## Link de Referência
https://www.csszengarden.com/218/

## Descrição
O projeto adota uma abordagem minimalista inspirada no design editorial suíço, onde o "espaço vazio" é utilizado como elemento ativo do layout para guiar a leitura. 

Para a estrutura macro, foi utilizado o **CSS Grid Layout** criando uma composição centralizada e assimétrica em telas grandes, separando o conteúdo principal da barra lateral de forma sutil. O **Flexbox** foi aplicado para transformar as listas verticais em menus horizontais limpos e para alinhar os blocos de texto internos. 

A paleta de cores é estritamente baseada em tons de branco, cinza-claro e grafite escuro, garantindo excelente contraste e acessibilidade. A tipografia utiliza fontes modernas sem serifa com espaçamento entre letras ajustado (`letter-spacing`) para conferir sofisticação ao texto sem a necessidade de elementos gráficos ou imagens.

## Recursos Utilizados
- **CSS Grid Layout:** Organização das seções principais (`.intro`, `.main`, `.sidebar`) e alinhamento assimétrico de blocos.
- **Flexbox:** Distribuição e alinhamento dos links de navegação e componentes do rodapé.
- **Variáveis CSS (:root):** Centralização da paleta de cores monocromática e tamanhos de fonte escaláveis.
- **Media Queries:** Adaptação do layout para uma única coluna fluida em dispositivos móveis e expansão para grid multi-colunas em desktops.
- **Propriedades Tipográficas Avançadas:** Ajustes de `line-height` para legibilidade e `letter-spacing` para identidade visual minimalista.
- **Efeitos de Transição (`transition`):** Efeitos sutis de opacidade no `:hover` dos links.
