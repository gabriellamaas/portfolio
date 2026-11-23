# Gabriella Maas · QA Portfolio

[![e2e](https://github.com/gabriellamaas/portfolio/actions/workflows/e2e.yml/badge.svg)](https://github.com/gabriellamaas/portfolio/actions/workflows/e2e.yml)

Portfólio profissional de QA, em português e inglês: https://gabriellamaas.github.io/portfolio/

O site é um quadro de tarefas: cada experiência, projeto e formação é um card. Ao clicar, abre a "issue" com descrição, critérios de aceite e detalhes.

## Estrutura

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Estrutura do quadro (barra superior, menu lateral e modal da issue) |
| `styles.css` | Estilos e layout responsivo |
| `data.js` | Conteúdo dos cards e textos da interface em português e inglês |
| `app.js` | Monta o quadro, filtros, busca, modal, troca de idioma e links diretos |
| `assets/` | Currículos em PDF, retrato, favicon e imagem de compartilhamento |

O site não tem build nem dependências em produção.

## Links diretos para cards

Cada card tem um endereço próprio. Por exemplo, para abrir a experiência na VR Software:

https://gabriellamaas.github.io/portfolio/#GM-5

O card GM-10 mostra o arquivo `cypress/e2e/gabriella.cy.js`, carregado direto do repositório, e um teste garante que o conteúdo exibido é igual ao arquivo.

## Idioma

O seletor PT/EN fica no topo e a escolha é lembrada no navegador. Para mandar o link já em inglês, use `?lang=en`:

https://gabriellamaas.github.io/portfolio/?lang=en

## Rodando localmente

```bash
python3 -m http.server 8080
```

E abra http://localhost:8080.

## Testes E2E

```bash
npm ci
npm run test:e2e
```

O CI (`.github/workflows/e2e.yml`) roda os testes a cada push. Para testar o site publicado:

```bash
CYPRESS_BASE_URL=https://gabriellamaas.github.io/portfolio/ npm run test:e2e
```
