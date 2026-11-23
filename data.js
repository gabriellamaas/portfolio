// Conteúdo do quadro em português e inglês.
// Cada card é uma "issue": tipo, status, labels, descrição, critérios de aceite e campos laterais.
window.BOARD = {
  pt: {
    ui: {
      title: 'Gabriella Maas · Quadro de carreira',
      skip: 'Pular para o quadro',
      project: 'Carreira de QA',
      projectSub: 'Projeto de software',
      navBoard: 'Quadro',
      navAbout: 'Sobre mim',
      navHire: 'Contato',
      navCv: 'Baixar currículo',
      navGithub: 'GitHub',
      crumbs: 'Projetos',
      boardTitle: 'Quadro',
      intro: 'Gabriella Maas, Analista de QA. Minha carreira organizada como um quadro: clique em um card para abrir os detalhes ou arraste entre as colunas.',
      search: 'Buscar no quadro',
      filters: 'Filtros rápidos',
      fAll: 'Tudo',
      fExp: 'Experiência',
      fProj: 'Projetos',
      fEdu: 'Formação',
      fProfile: 'Perfil',
      empty: 'Nenhum card com esse filtro.',
      cols: { backlog: 'Backlog', doing: 'Em andamento', review: 'Em validação', done: 'Concluído' },
      types: { exp: 'Experiência', proj: 'Projeto', edu: 'Formação', profile: 'Perfil' },
      prio: { highest: 'Mais alta', high: 'Alta', medium: 'Média' },
      description: 'Descrição',
      criteria: 'Critérios de aceite',
      details: 'Detalhes',
      status: 'Status',
      assignee: 'Responsável',
      type: 'Tipo',
      priority: 'Prioridade',
      labels: 'Labels',
      links: 'Links',
      close: 'Fechar',
      copyLink: 'Copiar link do card',
      copied: 'Link copiado',
      code: 'Código',
      report: 'Prévia de uma análise (exemplo fictício)',
      cvFile: 'assets/Curriculo-Gabriella-Maas-QA.pdf',
      lang: 'Idioma',
      menu: 'Menu',
      tools: 'Ferramentas e técnicas',
      movedTo: 'Card movido para',
      reset: 'Restaurar quadro',
      hireTitle: 'Vamos conversar?',
      hireText: 'Você moveu "Contratar uma QA para o seu time" para Concluído. Agora só falta a parte de verdade.',
      hireClose: 'Continuar explorando',
      related: 'Cards relacionados',
      ctaTitle: 'Quer ver os resultados?',
      ctaText: 'Os números e resultados de cada experiência estão no currículo.',
      bgButton: 'Mudar fundo',
      bgTitle: 'Fundo do quadro',
      bgNames: { lilac: 'Lilás', ocean: 'Oceano', sunset: 'Pôr do sol', forest: 'Floresta', night: 'Noite', candy: 'Algodão doce', graphite: 'Grafite', peach: 'Pêssego', sky: 'Céu' }
    },
    cards: [
      { key: 'GM-12', type: 'profile', status: 'backlog', prio: 'highest', labels: ['aberta a oportunidades', 'remoto', 'presencial em Cascavel', 'presencial em outras localidades'],
        title: 'Contratar uma QA para o seu time',
        desc: 'Este card está no backlog esperando por você. Para movê-lo para Concluído, basta uma mensagem.',
        criteria: [['Conhecer os cards deste quadro', true], ['Baixar o currículo', false], ['Mandar uma mensagem', false]],
        fields: [['Local', 'Cascavel, PR'], ['Modelo de trabalho', 'Remoto, presencial em Cascavel ou presencial em outras localidades']],
        actions: 'hire' },
      { key: 'GM-11', type: 'profile', status: 'backlog', prio: 'high', labels: ['sobre'],
        title: 'Conhecer a Gabriella',
        desc: 'Sou de Cascavel (PR) e meu primeiro emprego em tecnologia já foi em QA, em 2022. Desde então passei por varejo, gestão da qualidade, agronegócio e publicidade, e o que mais gosto é entender o produto a fundo: descobrir, ainda no refinamento, o que pode quebrar quando algo muda. Comecei estudando UX antes de entrar em QA e nunca parei: sigo estudando e me atualizando nas diretrizes de acessibilidade, então olho para usabilidade e acessibilidade com o mesmo cuidado que dou às regras de negócio. Também gosto de criar ferramentas que deixam o trabalho do time mais rápido, como o QAnalisa. Apaixonada por pets, arte e tecnologia.',
        about: true,
        skills: [
          ['Qualidade', 'Testes funcionais, exploratórios, regressivos, E2E, de API e de performance; análise de requisitos, riscos e impacto; acessibilidade (WCAG)'],
          ['Automação', 'Playwright, Cypress, JavaScript, TypeScript, Python, Page Object Model, Postman, SQL'],
          ['CI/CD e ambiente', 'Jenkins, GitHub Actions, Docker, BrowserStack, Lighthouse, JMeter'],
          ['Ferramentas', 'Jira, Azure DevOps, Git, GitFlow, Linux, Scrum, Kanban'],
          ['Idiomas', 'Português nativo, inglês avançado (C1)']
        ] },
      { key: 'GM-5', type: 'exp', status: 'doing', prio: 'high', labels: ['ERP', 'Fiscal', 'Playwright'],
        title: 'Analista de QA na VR Software',
        desc: 'A VR Software desenvolve o VRSuper, um ERP web para o varejo supermercadista usado por milhares de lojas no Brasil. Atuo nas áreas Fiscal/Tributária e Financeira, onde uma regra mal interpretada pode virar imposto calculado errado, nota rejeitada ou fechamento financeiro inconsistente.',
        sections: [
          { h: 'Como eu trabalho', p: 'Entro nas histórias ainda no refinamento. Leio a regra fiscal ou financeira, levanto dúvidas e lacunas com Produto e Desenvolvimento, mapeio quais módulos podem ser afetados pela mudança e, a partir disso, defino o que precisa de teste novo e o que entra na regressão. Depois da entrega, executo os testes, investigo as falhas até a origem e acompanho a homologação.' },
          { h: 'Onde eu atuo além dos testes', list: [
            'Criei o QAnalisa, assistente com IA que apoia a análise de histórias do time.',
            'Comecei o VR Atlas, um mapa de dependências do ERP que virou projeto interno.',
            'Participo da avaliação do novo Design System, olhando consistência visual, comportamento dos componentes, usabilidade e acessibilidade com base na WCAG.'
          ] }
        ],
        criteria: [
          ['Analisar histórias fiscais, tributárias e financeiras desde o refinamento, antecipando riscos e impactos entre módulos', true],
          ['Definir a estratégia de regressão de cada entrega a partir da análise de impacto', true],
          ['Planejar e executar testes funcionais, exploratórios e regressivos sobre regras de negócio, cálculos, permissões e persistência de dados', true],
          ['Automatizar com Playwright as novas funcionalidades de cada sprint, rodando em ambiente de testes com Docker', true],
          ['Validar e automatizar testes de API com Postman e conferir dados com SQL, isolando a origem das falhas', true],
          ['Definir comportamentos esperados com Produto e Desenvolvimento e apoiar a homologação', true]
        ],
        tools: ['Playwright', 'Docker', 'Postman', 'SQL', 'API REST', 'WCAG', 'IA generativa'],
        related: ['GM-8', 'GM-7'],
        fields: [['Empresa', 'VR Software'], ['Período', 'out/2025 – atual'], ['Modelo', 'Remoto']],
        cta: true },
      { key: 'GM-8', type: 'proj', status: 'doing', prio: 'highest', labels: ['IA', 'Python', 'Jira'],
        title: 'QAnalisa: assistente de QA com IA',
        desc: 'Ferramenta de linha de comando que criei para acelerar a análise de histórias. Ela lê o card no Jira, entende de qual parte do produto a história trata e devolve uma análise de testes organizada, pronta para eu revisar. Nasceu no meu dia a dia na VR e virou uma versão open-source genérica, sem dados da empresa.',
        sections: [
          { h: 'O problema', p: 'Em um ERP grande, analisar uma história bem exige lembrar de regras espalhadas por vários módulos e de bugs que já aconteceram antes. Esse conhecimento costuma ficar na cabeça de poucas pessoas. Eu queria que cada análise começasse com esse contexto já organizado.' },
          { h: 'Como funciona', list: [
            'Busca a história no Jira Cloud (somente leitura) ou lê um arquivo local.',
            'Cruza o texto com uma base de conhecimento que descreve módulos, funcionalidades, riscos conhecidos e relações de impacto entre eles.',
            'Envia a história e esse contexto para a IA em duas etapas: primeiro os fatos do requisito, depois o plano de testes.',
            'Gera um relatório com contexto, dúvidas do requisito, possíveis impactos em outros módulos e cenários obrigatórios, de regressão e exploratórios.',
            'Detalha qualquer cenário em passos, escreve rascunhos de bug a partir do que observei e faz a triagem de uma fila de cards por risco.'
          ] },
          { h: 'Decisões que tomei', list: [
            'Cada item do relatório mostra a origem: escrito na tarefa (✓), conhecimento do time (★), inferido pela IA (≈) ou informação faltando (?). Hipótese nunca aparece como regra.',
            'A ferramenta nunca altera nada no Jira e não guarda credenciais no código.',
            'Análises ficam em cache, então reabrir uma história não gasta IA de novo.',
            'Os prompts e a base de conhecimento são configuráveis, para servir a qualquer produto.'
          ] }
        ],
        report: true,
        criteria: [['Integração com Jira Cloud', true], ['Base de conhecimento com módulos, riscos e relações de impacto', true], ['Testes automatizados e CI no GitHub Actions', true], ['Versão open-source sem dados da empresa', true]],
        tools: ['Python', 'Typer', 'Pydantic', 'Jira Cloud API', 'Claude Code', 'pytest', 'GitHub Actions'],
        related: ['GM-5', 'GM-7'],
        fields: [['Contexto', 'Projeto autoral, usado na VR Software']],
        links: [['Código no GitHub', 'https://github.com/gabriellamaas/qanalisa']],
        cta: true },
      { key: 'GM-7', type: 'proj', status: 'doing', prio: 'medium', labels: ['análise de impacto'],
        title: 'VR Atlas: mapa de dependências do ERP',
        desc: 'Iniciativa que comecei no meu PDI na VR para responder a uma pergunta que aparece em toda história: se isso mudar, o que mais pode quebrar?',
        sections: [
          { h: 'Por que começou', p: 'Boa parte da análise de impacto dependia de memória e de conversa. Comecei a registrar, de forma estruturada, como processos, funcionalidades e regras de negócio do ERP se relacionam, e quais impactos uma mudança em um ponto costuma ter em outro.' },
          { h: 'No que se transformou', p: 'O mapeamento cresceu e virou um projeto interno multidisciplinar, com outras áreas contribuindo. Hoje ele organiza o conhecimento sobre dependências do produto e apoia análises de impacto e decisões de regressão.' }
        ],
        criteria: [['Iniciar o mapeamento como parte do PDI', true], ['Estruturar relações entre processos, funcionalidades, regras e impactos', true], ['Evoluir para um projeto interno com outras áreas', true]],
        tools: ['Análise de impacto', 'Regras de negócio', 'Documentação'],
        related: ['GM-5', 'GM-8'],
        fields: [['Contexto', 'Iniciativa interna na VR Software']] },
      { key: 'GM-2', type: 'edu', status: 'review', prio: 'high', labels: ['Univel'],
        title: 'Graduação: Tecnólogo em Análise e Desenvolvimento de Sistemas',
        desc: 'Curso superior de tecnologia na Univel Centro Universitário, em Cascavel. A formação cobre o ciclo completo de um software, da análise do problema à entrega, e conversa diretamente com o meu trabalho em QA.',
        sections: [
          { h: 'O que estudei', list: [
            'Lógica de programação e algoritmos',
            'Desenvolvimento de software e programação orientada a objetos',
            'Desenvolvimento web e APIs',
            'Banco de dados: modelagem e SQL',
            'Análise de sistemas e levantamento de requisitos',
            'Engenharia de software e modelagem de sistemas',
            'Metodologias ágeis e gestão de projetos',
            'Qualidade e testes de software'
          ] }
        ],
        criteria: [['Cursar todas as disciplinas', true], ['Colação de grau em jan/2027', false]],
        fields: [['Instituição', 'Univel Centro Universitário'], ['Período', '2023 – 2026'], ['Colação', 'jan/2027']] },
      { key: 'GM-4', type: 'exp', status: 'done', prio: 'high', labels: ['SaaS', 'shift-left'],
        title: 'Analista de QA na ForLogic',
        desc: 'A ForLogic desenvolve o Qualiex, um software SaaS de gestão da qualidade usado por empresas para controlar documentos, riscos, auditorias, planos de ação e indicadores.',
        sections: [
          { h: 'Como eu trabalhava', p: 'O time trabalhava em modelo shift-left, então boa parte do meu trabalho acontecia antes do código: reuniões com Produto, refinamento e estudo dos requisitos. Com as regras claras, eu desenhava os cenários e casos de teste de cada entrega e só depois partia para a execução. As sprints eram mensais e cada uma trazia um volume grande de cenários para elaborar.' },
          { h: 'Módulos em que atuei', p: 'Passei um pouco por cada módulo do Qualiex, com foco em Gestão de Riscos, Documentos, Planos e Estratégias e Atas.' }
        ],
        criteria: [
          ['Participar de refinamentos e reuniões com Produto, antecipando riscos e lacunas antes do desenvolvimento', true],
          ['Elaborar cenários e casos de teste a partir de requisitos, critérios de aceite e regras de negócio', true],
          ['Executar testes funcionais, regressivos e de API, priorizando fluxos críticos', true],
          ['Validar funcionalidades e correções antes das releases', true],
          ['Acompanhar as homologações com Produto, garantindo aderência aos critérios de aceite', true]
        ],
        tools: ['Testes de API', 'Critérios de aceite', 'Shift-left'],
        fields: [['Empresa', 'ForLogic'], ['Período', 'mar/2025 – ago/2025']],
        cta: true },
      { key: 'GM-3', type: 'exp', status: 'done', prio: 'high', labels: ['Cypress', 'Jenkins', 'BI'],
        title: 'Analista de Testes Automatizados na Aliare',
        desc: 'A Aliare é um dos maiores grupos de software de gestão para o agronegócio no Brasil. Atuei na automação de testes do Vistra BI, a plataforma de business intelligence, onde o foco era garantir que dashboards e gráficos mostrassem os dados certos.',
        sections: [
          { h: 'O desafio', p: 'A suíte de testes existente tinha passado por várias refatorações que não funcionavam, e muitos testes estavam quebrados. A cada sprint eu assumia um arquivo de testes inteiro, revisava cenário por cenário, corrigia o que estava instável e criava novos testes quando faltava cobertura.' },
          { h: 'Como eu trabalhava', p: 'Os fluxos de BI eram longos: para validar um gráfico, muitas vezes era preciso automatizar antes as pré-condições em outras partes do sistema, como login e cadastros. As validações conferiam principalmente se os gráficos e indicadores exibiam os valores corretos.' },
          { h: 'Melhorias de processo', list: [
            'Ajudei a integrar os testes ao pipeline de CI/CD no Jenkins, junto com um time multidisciplinar, com execução diária (nightly).',
            'Implementei o GitFlow e o code review via pull requests nas automações do time.'
          ] }
        ],
        criteria: [
          ['Refatorar e estabilizar a suíte Cypress do Vistra BI', true],
          ['Automatizar fluxos E2E de validação de dashboards e gráficos', true],
          ['Integrar os testes ao CI/CD no Jenkins com execução nightly', true],
          ['Implementar GitFlow e code review via pull requests', true],
          ['Complementar a automação com testes funcionais e de API', true]
        ],
        tools: ['Cypress', 'JavaScript', 'Jenkins', 'GitLab', 'Git', 'GitFlow', 'CI/CD'],
        fields: [['Empresa', 'Aliare'], ['Período', 'jun/2024 – dez/2024']],
        cta: true },
      { key: 'GM-1', type: 'exp', status: 'done', prio: 'high', labels: ['adtech', 'mobile', 'Postman'],
        title: 'Analista de QA na AdGrowth',
        desc: 'A AdGrowth é uma adtech de publicidade para aplicativos móveis. Foi meu primeiro emprego em tecnologia e onde construí minha base em QA, passando por quase todas as etapas do desenvolvimento.',
        sections: [
          { h: 'Produtos que eu testava', list: [
            'Painel de gestão de campanhas, usado por anunciantes.',
            'Integrações com ad networks.',
            'Solução de ad verification, que monitora anúncios display, in-app e in-game para conferir se foram exibidos onde e como deveriam.'
          ] },
          { h: 'Como eu trabalhava', p: 'Criava cenários e casos de teste a partir dos requisitos, executava testes funcionais, exploratórios e regressivos em web e mobile, e acompanhava cada bug do registro até a correção. Com o tempo, estruturei a automação de testes da área e passei a cobrir também performance.' }
        ],
        criteria: [
          ['Estruturar a automação de testes com Cypress (interface) e Postman (API)', true],
          ['Executar testes web e mobile com BrowserStack', true],
          ['Rodar testes de performance com Lighthouse e Apache JMeter', true],
          ['Validar APIs REST e conferir dados com SQL', true],
          ['Documentar e acompanhar bugs durante todo o ciclo de desenvolvimento', true]
        ],
        tools: ['Cypress', 'Postman', 'BrowserStack', 'Lighthouse', 'Apache JMeter', 'SQL', 'API REST'],
        fields: [['Empresa', 'AdGrowth'], ['Período', 'ago/2022 – jun/2024']],
        cta: true },
      { key: 'GM-9', type: 'proj', status: 'done', prio: 'medium', labels: ['Playwright', 'TypeScript', 'a11y'],
        title: 'Suíte de testes com Playwright e TypeScript',
        desc: 'Projeto de portfólio que mostra o ciclo completo de QA: análise de risco, desenho de testes, automação, investigação de falhas e integração contínua. Os testes rodam contra o Tasklane, uma aplicação web de tarefas que criei para o projeto, com login, perfis de acesso e regras de negócio reais.',
        sections: [
          { h: 'O que a suíte cobre', list: [
            'Autenticação, incluindo login inválido, campos obrigatórios e páginas protegidas.',
            'Criação, edição, exclusão, busca e filtros de tarefas.',
            'Contratos de API, validações de entrada e regras de permissão por perfil (membro e administrador).',
            'Consistência entre o que a interface mostra e o que a API grava.',
            'Acessibilidade com axe (WCAG) e navegação apenas por teclado.',
            'Responsividade em celular, tablet e desktop.'
          ] },
          { h: 'Decisões técnicas', list: [
            'Estratégia baseada em risco: cada risco recebeu uma nota de probabilidade e impacto antes de qualquer teste ser escrito.',
            'Validações combinatórias ficam na camada de API, onde são rápidas; a interface prova só o que só ela pode provar.',
            'Localizadores acessíveis, page objects e nenhuma espera fixa.',
            'Cada teste cria e limpa os próprios dados, o que permite rodar tudo em paralelo.',
            'Defeitos foram injetados de propósito na aplicação para conferir se a suíte os encontrava.',
            'O CI falha se um teste só passa na segunda tentativa, para não esconder instabilidade.'
          ] }
        ],
        criteria: [['Matriz de riscos e cenários documentada', true], ['UI, API, integração, acessibilidade e responsividade', true], ['Execução paralela com isolamento de dados', true], ['CI no GitHub Actions com relatórios e traces', true]],
        tools: ['Playwright', 'TypeScript', 'axe-core', 'Node.js', 'GitHub Actions'],
        links: [['Código no GitHub', 'https://github.com/gabriellamaas/playwright-qa-automation']] },
      { key: 'GM-6', type: 'proj', status: 'done', prio: 'medium', labels: ['Cypress', 'POM'],
        title: 'Framework E2E com Cypress',
        desc: 'Framework de automação E2E e de API com Cypress, JavaScript e Page Object Model, construído sobre uma loja virtual de demonstração e uma API pública de exemplo.',
        sections: [
          { h: 'Cenários automatizados', list: [
            'Login com sucesso, logout, credenciais inválidas, usuário bloqueado e campos obrigatórios.',
            'Carrinho: adicionar e remover itens pela vitrine e pelo carrinho.',
            'Ordenação de produtos por nome e por preço.',
            'Checkout completo, conferindo produto, subtotal e total com imposto, e validação dos dados do cliente.',
            'Testes de API com GET, POST, parâmetros de busca e recurso inexistente.'
          ] },
          { h: 'Boas práticas aplicadas', list: [
            'Seletores estáveis com atributos data-test.',
            'Page Objects para separar seletores e ações dos testes.',
            'Login em cache com cy.session.',
            'Dados de teste em fixtures e testes orientados a dados para as validações.',
            'Lint (ESLint) e formatação (Prettier) verificados no CI antes dos testes.',
            'Relatórios HTML com Mochawesome e screenshots em caso de falha.'
          ] }
        ],
        criteria: [['Fluxos de login, carrinho, ordenação e checkout', true], ['Testes de API', true], ['Lint, testes e relatórios no CI', true]],
        tools: ['Cypress', 'JavaScript', 'Page Object Model', 'Mochawesome', 'ESLint', 'GitHub Actions'],
        links: [['Código no GitHub', 'https://github.com/gabriellamaas/qa-automation-framework-cypress']] },
      { key: 'GM-10', type: 'proj', status: 'done', prio: 'medium', labels: ['Cypress', 'CI'],
        title: 'Testes E2E deste portfólio',
        desc: 'Este site também é testado. O código abaixo é o arquivo real do repositório, e roda no GitHub Actions a cada push.',
        sections: [
          { h: 'O que é verificado', list: [
            'Cada fato do quadro é conferido por um teste: se o conteúdo mudar sem querer, o CI avisa.',
            'Abrir e fechar cards pelo teclado, com o foco voltando ao card certo.',
            'Links diretos para cada card, busca, filtros, troca de idioma e de fundo.',
            'Arquivos linkados na página respondendo e menu funcionando no celular.',
            'O código mostrado aqui é comparado com o arquivo real do repositório.'
          ] }
        ],
        codeFile: 'cypress/e2e/gabriella.cy.js',
        criteria: [['Cada fato do quadro é conferido por um teste', true], ['CI roda a cada push', true]],
        tools: ['Cypress', 'JavaScript', 'GitHub Actions'],
        links: [['Ver os testes no GitHub', 'https://github.com/gabriellamaas/portfolio/tree/main/cypress/e2e'], ['Execuções no GitHub Actions', 'https://github.com/gabriellamaas/portfolio/actions']] }
    ],
    report: [
      ['head', 'SHOP-101  Aplicar cupom percentual no checkout'],
      ['ok', '✓', 'Desconto máximo de 50% por pedido'],
      ['team', '★', 'Cupom com frete grátis já causou bug no resumo'],
      ['ai', '≈', 'Pode afetar: Resumo do pedido, Notas fiscais'],
      ['ask', '?', 'O cupom vale para itens em promoção?'],
      ['tc', 'TC01', 'obrigatório', 'Aplicar cupom válido'],
      ['tc', 'TC02', 'regressão', 'Recalcular total com frete'],
      ['tc', 'TC03', 'borda', 'Cupom de 50% em pedido de R$ 0,01']
    ]
  },

  en: {
    ui: {
      title: 'Gabriella Maas · Career board',
      skip: 'Skip to the board',
      project: 'QA Career',
      projectSub: 'Software project',
      navBoard: 'Board',
      navAbout: 'About me',
      navHire: 'Contact',
      navCv: 'Download résumé',
      navGithub: 'GitHub',
      crumbs: 'Projects',
      boardTitle: 'Board',
      intro: 'Gabriella Maas, QA Analyst. My career organized as a board: click any card to open the details, or drag it between columns.',
      search: 'Search the board',
      filters: 'Quick filters',
      fAll: 'All',
      fExp: 'Experience',
      fProj: 'Projects',
      fEdu: 'Education',
      fProfile: 'Profile',
      empty: 'No cards match this filter.',
      cols: { backlog: 'Backlog', doing: 'In progress', review: 'In validation', done: 'Done' },
      types: { exp: 'Experience', proj: 'Project', edu: 'Education', profile: 'Profile' },
      prio: { highest: 'Highest', high: 'High', medium: 'Medium' },
      description: 'Description',
      criteria: 'Acceptance criteria',
      details: 'Details',
      status: 'Status',
      assignee: 'Assignee',
      type: 'Type',
      priority: 'Priority',
      labels: 'Labels',
      links: 'Links',
      close: 'Close',
      copyLink: 'Copy card link',
      copied: 'Link copied',
      code: 'Code',
      report: 'Analysis preview (fictional example)',
      cvFile: 'assets/Resume-Gabriella-Maas-QA-EN.pdf',
      lang: 'Language',
      menu: 'Menu',
      tools: 'Tools and techniques',
      movedTo: 'Card moved to',
      reset: 'Reset board',
      hireTitle: 'Shall we talk?',
      hireText: 'You moved "Hire a QA for your team" to Done. Now only the real part is left.',
      hireClose: 'Keep exploring',
      related: 'Related cards',
      ctaTitle: 'Want to see the results?',
      ctaText: 'The numbers and results for each role are in the résumé.',
      bgButton: 'Change background',
      bgTitle: 'Board background',
      bgNames: { lilac: 'Lilac', ocean: 'Ocean', sunset: 'Sunset', forest: 'Forest', night: 'Night', candy: 'Cotton candy', graphite: 'Graphite', peach: 'Peach', sky: 'Sky' }
    },
    cards: [
      { key: 'GM-12', type: 'profile', status: 'backlog', prio: 'highest', labels: ['open to work', 'remote', 'on-site in Cascavel', 'on-site elsewhere'],
        title: 'Hire a QA for your team',
        desc: 'This card is sitting in the backlog waiting for you. One message is all it takes to move it to Done.',
        criteria: [['Browse the cards on this board', true], ['Download the résumé', false], ['Send a message', false]],
        fields: [['Location', 'Cascavel, Brazil'], ['Work model', 'Remote, on-site in Cascavel or on-site elsewhere']],
        actions: 'hire' },
      { key: 'GM-11', type: 'profile', status: 'backlog', prio: 'high', labels: ['about'],
        title: 'Get to know Gabriella',
        desc: 'I am from Cascavel, Brazil, and my first job in tech was already in QA, back in 2022. Since then I have worked in retail, quality management, agribusiness and advertising, and what I enjoy most is understanding the product in depth: finding out, still at refinement, what might break when something changes. I started studying UX before moving into QA and never stopped: I keep learning and staying up to date with accessibility guidelines, so I give usability and accessibility the same care I give to business rules. I also like building tools that make the team faster, like QAnalisa. Passionate about pets, art and technology.',
        about: true,
        skills: [
          ['Quality', 'Functional, exploratory, regression, E2E, API and performance testing; requirements, risk and impact analysis; accessibility (WCAG)'],
          ['Automation', 'Playwright, Cypress, JavaScript, TypeScript, Python, Page Object Model, Postman, SQL'],
          ['CI/CD and environment', 'Jenkins, GitHub Actions, Docker, BrowserStack, Lighthouse, JMeter'],
          ['Tools', 'Jira, Azure DevOps, Git, GitFlow, Linux, Scrum, Kanban'],
          ['Languages', 'Portuguese (native), English (advanced, C1)']
        ] },
      { key: 'GM-5', type: 'exp', status: 'doing', prio: 'high', labels: ['ERP', 'Tax', 'Playwright'],
        title: 'QA Analyst at VR Software',
        desc: 'VR Software builds VRSuper, a web ERP for supermarket retail used by thousands of stores in Brazil. I work on the Tax and Financial modules, where a misread rule can turn into a wrong tax calculation, a rejected invoice or an inconsistent financial close.',
        sections: [
          { h: 'How I work', p: 'I join stories at refinement. I read the tax or financial rule, raise questions and gaps with Product and Development, map which modules the change might affect and, from there, decide what needs new tests and what goes into regression. After delivery, I run the tests, trace failures to their root cause and support user acceptance testing.' },
          { h: 'Beyond testing', list: [
            'Built QAnalisa, an AI assistant that supports the team’s story analysis.',
            'Started VR Atlas, an ERP dependency map that became an internal project.',
            'Take part in evaluating the new Design System, looking at visual consistency, component behavior, usability and accessibility based on WCAG.'
          ] }
        ],
        criteria: [
          ['Analyze tax and financial stories from refinement onward, anticipating risks and cross-module impacts', true],
          ['Define the regression strategy for each delivery based on impact analysis', true],
          ['Plan and run functional, exploratory and regression tests on business rules, calculations, permissions and data persistence', true],
          ['Automate each sprint’s new features with Playwright in a Docker-based test environment', true],
          ['Validate and automate API tests with Postman and check data with SQL, isolating the root cause of failures', true],
          ['Define expected behavior with Product and Development and support user acceptance testing', true]
        ],
        tools: ['Playwright', 'Docker', 'Postman', 'SQL', 'REST API', 'WCAG', 'Generative AI'],
        related: ['GM-8', 'GM-7'],
        fields: [['Company', 'VR Software'], ['Period', 'Oct 2025 – present'], ['Work model', 'Remote']],
        cta: true },
      { key: 'GM-8', type: 'proj', status: 'doing', prio: 'highest', labels: ['AI', 'Python', 'Jira'],
        title: 'QAnalisa: AI-powered QA assistant',
        desc: 'A command-line tool I built to speed up story analysis. It reads the card in Jira, works out which part of the product the story is about and returns an organized test analysis, ready for me to review. It was born from my daily work at VR and became a generic open-source version, with no company data.',
        sections: [
          { h: 'The problem', p: 'In a large ERP, analyzing a story well means remembering rules spread across many modules and bugs that have happened before. That knowledge usually lives in a few people’s heads. I wanted every analysis to start with that context already organized.' },
          { h: 'How it works', list: [
            'Fetches the story from Jira Cloud (read-only) or reads a local file.',
            'Matches the text against a knowledge base that describes modules, features, known risks and the impact relationships between them.',
            'Sends the story and that context to the AI in two steps: first the facts of the requirement, then the test plan.',
            'Produces a report with context, open questions, possible impacts on other modules, and required, regression and exploratory scenarios.',
            'Breaks any scenario into steps, drafts bug reports from what I observed and triages a queue of cards by risk.'
          ] },
          { h: 'Decisions I made', list: [
            'Every item in the report shows where it came from: written in the task (✓), team knowledge (★), inferred by the AI (≈) or missing information (?). A hypothesis never shows up as a rule.',
            'The tool never changes anything in Jira and keeps no credentials in the code.',
            'Analyses are cached, so reopening a story does not spend AI again.',
            'Prompts and the knowledge base are configurable, so it works for any product.'
          ] }
        ],
        report: true,
        criteria: [['Jira Cloud integration', true], ['Knowledge base with modules, risks and impact relationships', true], ['Automated tests and CI on GitHub Actions', true], ['Open-source version with no company data', true]],
        tools: ['Python', 'Typer', 'Pydantic', 'Jira Cloud API', 'Claude Code', 'pytest', 'GitHub Actions'],
        related: ['GM-5', 'GM-7'],
        fields: [['Context', 'Personal project, used at VR Software']],
        links: [['Code on GitHub', 'https://github.com/gabriellamaas/qanalisa']],
        cta: true },
      { key: 'GM-7', type: 'proj', status: 'doing', prio: 'medium', labels: ['impact analysis'],
        title: 'VR Atlas: ERP dependency map',
        desc: 'An initiative I started in my development plan at VR to answer a question that comes up in every story: if this changes, what else might break?',
        sections: [
          { h: 'Why it started', p: 'Much of the impact analysis relied on memory and conversations. I started recording, in a structured way, how the ERP’s processes, features and business rules relate to each other, and what impact a change in one place tends to have elsewhere.' },
          { h: 'What it became', p: 'The map grew into a cross-functional internal project, with other teams contributing. Today it organizes knowledge about product dependencies and supports impact analysis and regression decisions.' }
        ],
        criteria: [['Start the map as part of my development plan', true], ['Structure the relationships between processes, features, rules and impacts', true], ['Grow it into an internal project with other teams', true]],
        tools: ['Impact analysis', 'Business rules', 'Documentation'],
        related: ['GM-5', 'GM-8'],
        fields: [['Context', 'Internal initiative at VR Software']] },
      { key: 'GM-2', type: 'edu', status: 'review', prio: 'high', labels: ['Univel'],
        title: 'Degree: Technologist in Systems Analysis and Development',
        desc: 'A technology degree at Univel University Center, in Cascavel. The program covers the full life of a piece of software, from analyzing the problem to delivery, and connects directly with my work in QA.',
        sections: [
          { h: 'What I studied', list: [
            'Programming logic and algorithms',
            'Software development and object-oriented programming',
            'Web development and APIs',
            'Databases: modeling and SQL',
            'Systems analysis and requirements gathering',
            'Software engineering and systems modeling',
            'Agile methodologies and project management',
            'Software quality and testing'
          ] }
        ],
        criteria: [['Complete all courses', true], ['Graduation ceremony in Jan 2027', false]],
        fields: [['Institution', 'Univel University Center'], ['Period', '2023 – 2026'], ['Graduation', 'Jan 2027']] },
      { key: 'GM-4', type: 'exp', status: 'done', prio: 'high', labels: ['SaaS', 'shift-left'],
        title: 'QA Analyst at ForLogic',
        desc: 'ForLogic builds Qualiex, a SaaS quality management platform that companies use to manage documents, risks, audits, action plans and KPIs.',
        sections: [
          { h: 'How I worked', p: 'The team worked shift-left, so much of my work happened before any code: meetings with Product, refinement and studying the requirements. With the rules clear, I designed the scenarios and test cases for each delivery and only then moved on to execution. Sprints were monthly, and each one brought a large set of scenarios to design.' },
          { h: 'Modules I worked on', p: 'I touched a bit of every Qualiex module, with a focus on Risk Management, Documents, Plans and Strategies, and Meeting Minutes.' }
        ],
        criteria: [
          ['Join refinement sessions and meetings with Product, anticipating risks and gaps before development', true],
          ['Design scenarios and test cases from requirements, acceptance criteria and business rules', true],
          ['Run functional, regression and API tests, prioritizing critical flows', true],
          ['Validate features and fixes before releases', true],
          ['Support user acceptance testing with Product, ensuring the acceptance criteria were met', true]
        ],
        tools: ['API testing', 'Acceptance criteria', 'Shift-left'],
        fields: [['Company', 'ForLogic'], ['Period', 'Mar 2025 – Aug 2025']],
        cta: true },
      { key: 'GM-3', type: 'exp', status: 'done', prio: 'high', labels: ['Cypress', 'Jenkins', 'BI'],
        title: 'Test Automation Analyst at Aliare',
        desc: 'Aliare is one of the largest groups of agribusiness management software in Brazil. I worked on test automation for Vistra BI, its business intelligence platform, where the focus was making sure dashboards and charts showed the right data.',
        sections: [
          { h: 'The challenge', p: 'The existing test suite had been through several refactors that did not work, and many tests were broken. Each sprint I took over an entire spec file, reviewed it scenario by scenario, fixed what was flaky and wrote new tests where coverage was missing.' },
          { h: 'How I worked', p: 'BI flows were long: to validate a chart, I often had to automate the preconditions in other parts of the system first, such as login and setup data. The checks mainly verified that charts and indicators displayed the correct values.' },
          { h: 'Process improvements', list: [
            'Helped integrate the tests into the Jenkins CI/CD pipeline, together with a cross-functional team, with daily (nightly) runs.',
            'Implemented GitFlow and code review through pull requests for the team’s automation.'
          ] }
        ],
        criteria: [
          ['Refactor and stabilize the Vistra BI Cypress suite', true],
          ['Automate E2E flows that validate dashboards and charts', true],
          ['Integrate the tests into Jenkins CI/CD with nightly runs', true],
          ['Implement GitFlow and code review through pull requests', true],
          ['Complement automation with functional and API testing', true]
        ],
        tools: ['Cypress', 'JavaScript', 'Jenkins', 'GitLab', 'Git', 'GitFlow', 'CI/CD'],
        fields: [['Company', 'Aliare'], ['Period', 'Jun 2024 – Dec 2024']],
        cta: true },
      { key: 'GM-1', type: 'exp', status: 'done', prio: 'high', labels: ['adtech', 'mobile', 'Postman'],
        title: 'QA Analyst at AdGrowth',
        desc: 'AdGrowth is a mobile app advertising adtech. It was my first job in tech and where I built my QA foundation, working across almost every stage of development.',
        sections: [
          { h: 'Products I tested', list: [
            'The campaign management dashboard used by advertisers.',
            'Integrations with ad networks.',
            'The ad verification solution, which monitors display, in-app and in-game ads to check they were shown where and how they should be.'
          ] },
          { h: 'How I worked', p: 'I wrote scenarios and test cases from requirements, ran functional, exploratory and regression tests on web and mobile, and followed each bug from report to fix. Over time I set up the team’s test automation and started covering performance as well.' }
        ],
        criteria: [
          ['Set up test automation with Cypress (UI) and Postman (API)', true],
          ['Run web and mobile tests with BrowserStack', true],
          ['Run performance tests with Lighthouse and Apache JMeter', true],
          ['Validate REST APIs and check data with SQL', true],
          ['Document and follow bugs throughout the development cycle', true]
        ],
        tools: ['Cypress', 'Postman', 'BrowserStack', 'Lighthouse', 'Apache JMeter', 'SQL', 'REST API'],
        fields: [['Company', 'AdGrowth'], ['Period', 'Aug 2022 – Jun 2024']],
        cta: true },
      { key: 'GM-9', type: 'proj', status: 'done', prio: 'medium', labels: ['Playwright', 'TypeScript', 'a11y'],
        title: 'Test suite with Playwright and TypeScript',
        desc: 'A portfolio project that shows the full QA cycle: risk analysis, test design, automation, failure investigation and continuous integration. The tests run against Tasklane, a task management web app I built for the project, with login, access roles and real business rules.',
        sections: [
          { h: 'What the suite covers', list: [
            'Authentication, including invalid login, required fields and protected pages.',
            'Creating, editing, deleting, searching and filtering tasks.',
            'API contracts, input validation and role-based permissions (member and admin).',
            'Consistency between what the UI shows and what the API stores.',
            'Accessibility with axe (WCAG) and keyboard-only navigation.',
            'Responsive layout on phone, tablet and desktop.'
          ] },
          { h: 'Technical decisions', list: [
            'Risk-based strategy: every risk was scored by likelihood and impact before any test was written.',
            'Combinatorial validation lives at the API layer, where it is fast; the UI proves only what only the UI can prove.',
            'Accessible locators, page objects and no fixed waits.',
            'Each test creates and cleans up its own data, so everything runs in parallel.',
            'Defects were injected into the app on purpose to check that the suite caught them.',
            'CI fails if a test only passes on retry, so flakiness is never hidden.'
          ] }
        ],
        criteria: [['Documented risk and scenario matrix', true], ['UI, API, integration, accessibility and responsive tests', true], ['Parallel runs with data isolation', true], ['CI on GitHub Actions with reports and traces', true]],
        tools: ['Playwright', 'TypeScript', 'axe-core', 'Node.js', 'GitHub Actions'],
        links: [['Code on GitHub', 'https://github.com/gabriellamaas/playwright-qa-automation']] },
      { key: 'GM-6', type: 'proj', status: 'done', prio: 'medium', labels: ['Cypress', 'POM'],
        title: 'E2E framework with Cypress',
        desc: 'An E2E and API automation framework with Cypress, JavaScript and Page Object Model, built on a demo online store and a public sample API.',
        sections: [
          { h: 'Automated scenarios', list: [
            'Successful login, logout, invalid credentials, locked-out user and required fields.',
            'Cart: adding and removing items from the product list and from the cart.',
            'Sorting products by name and by price.',
            'Full checkout, checking product, subtotal and total with tax, plus customer data validation.',
            'API tests with GET, POST, query parameters and a missing resource.'
          ] },
          { h: 'Good practices', list: [
            'Stable selectors with data-test attributes.',
            'Page Objects to keep selectors and actions out of the specs.',
            'Cached login with cy.session.',
            'Test data in fixtures, and data-driven tests for validations.',
            'Linting (ESLint) and formatting (Prettier) checked in CI before the tests.',
            'HTML reports with Mochawesome and screenshots on failure.'
          ] }
        ],
        criteria: [['Login, cart, sorting and checkout flows', true], ['API tests', true], ['Linting, tests and reports in CI', true]],
        tools: ['Cypress', 'JavaScript', 'Page Object Model', 'Mochawesome', 'ESLint', 'GitHub Actions'],
        links: [['Code on GitHub', 'https://github.com/gabriellamaas/qa-automation-framework-cypress']] },
      { key: 'GM-10', type: 'proj', status: 'done', prio: 'medium', labels: ['Cypress', 'CI'],
        title: 'E2E tests for this portfolio',
        desc: 'This site is tested too. The code below is the real file in the repository, and it runs on GitHub Actions on every push.',
        sections: [
          { h: 'What gets checked', list: [
            'Every fact on the board is checked by a test: if the content changes by accident, CI flags it.',
            'Opening and closing cards with the keyboard, with focus returning to the right card.',
            'Direct links to each card, search, filters, language and background switching.',
            'Linked files responding and the menu working on mobile.',
            'The code shown here is compared with the real file in the repository.'
          ] }
        ],
        codeFile: 'cypress/e2e/gabriella.cy.js',
        criteria: [['Every fact on the board is checked by a test', true], ['CI runs on every push', true]],
        tools: ['Cypress', 'JavaScript', 'GitHub Actions'],
        links: [['See the tests on GitHub', 'https://github.com/gabriellamaas/portfolio/tree/main/cypress/e2e'], ['Runs on GitHub Actions', 'https://github.com/gabriellamaas/portfolio/actions']] }
    ],
    report: [
      ['head', 'SHOP-101  Apply a percentage coupon at checkout'],
      ['ok', '✓', 'Maximum discount of 50% per order'],
      ['team', '★', 'A free-shipping coupon once broke the order summary'],
      ['ai', '≈', 'May affect: Order summary, Invoices'],
      ['ask', '?', 'Does the coupon apply to items on sale?'],
      ['tc', 'TC01', 'required', 'Apply a valid coupon'],
      ['tc', 'TC02', 'regression', 'Recalculate total with shipping'],
      ['tc', 'TC03', 'edge', '50% coupon on a $0.01 order']
    ]
  }
};
