describe('qualidade do quadro', () => {
  beforeEach(() => cy.visit('/'))

  it('monta as 4 colunas com 12 cards', () => {
    cy.get('.column').should('have.length', 4)
    cy.get('.card').should('have.length', 12)
    cy.get('.column[data-status="done"] .column-count').should('have.text', '6')
  })

  it('abre o card pelo teclado e devolve o foco ao fechar', () => {
    cy.get('[data-testid="card-GM-5"]').focus().type('{enter}')
    cy.get('#issue').should('have.attr', 'open')
    cy.location('hash').should('eq', '#GM-5')
    cy.get('#issue-title').should('contain.text', 'VR Software')
    cy.get('#issue [data-action="close"]').click()
    cy.get('#issue').should('not.have.attr', 'open')
    cy.location('hash').should('eq', '')
    cy.focused().should('have.attr', 'data-key', 'GM-5')
  })

  it('abre um card direto pelo link (#GM-8)', () => {
    cy.visit('/#GM-8')
    cy.get('#issue').should('have.attr', 'open')
    cy.get('[data-testid="report"]').should('contain.text', 'TC01')
  })

  it('mostra no card GM-10 o arquivo de teste real', () => {
    cy.readFile('cypress/e2e/gabriella.cy.js').then(file => {
      cy.visit('/#GM-10')
      cy.get('[data-testid="code"]').should('have.text', file)
    })
  })

  it('filtra por tipo e por busca', () => {
    cy.get('.chip[data-filter="exp"]').click().should('have.attr', 'aria-pressed', 'true')
    cy.get('.card').should('have.length', 4)
    cy.get('.chip[data-filter="all"]').click()
    cy.get('#search').type('jenkins')
    cy.get('.card').should('have.length', 1).and('contain.text', 'Aliare')
    cy.get('#search').clear().type('xyz')
    cy.get('.column-empty').should('have.length', 4)
  })

  it('troca para inglês e lembra a escolha', () => {
    cy.get('.lang-btn[data-lang="en"]').click().should('have.attr', 'aria-pressed', 'true')
    cy.get('html').should('have.attr', 'lang', 'en')
    cy.get('h1').should('have.text', 'Board')
    cy.get('.column[data-status="done"] .column-head').should('contain.text', 'Done')
    cy.get('.cv-link').first().should('have.attr', 'href', 'assets/Resume-Gabriella-Maas-QA-EN.pdf')
    cy.reload()
    cy.get('html').should('have.attr', 'lang', 'en')
  })

  it('abre direto em inglês com ?lang=en', () => {
    cy.visit('/?lang=en')
    cy.get('[data-testid="card-GM-12"]').should('contain.text', 'Hire a QA')
  })

  it('serve os arquivos locais usados na página', () => {
    const urls = new Set(['cypress/e2e/gabriella.cy.js'])
    cy.get('a[href^="assets/"], img[src^="assets/"], link[href^="assets/"]').each($el => {
      urls.add($el.attr('href') || $el.attr('src'))
    }).then(() => {
      urls.forEach(url => cy.request(url).its('status').should('eq', 200))
    })
  })

  it('troca o fundo do quadro e lembra a escolha', () => {
    cy.get('#bgBtn').click().should('have.attr', 'aria-expanded', 'true')
    cy.get('.bg-swatch[data-bg="ocean"]').click().should('have.attr', 'aria-pressed', 'true')
    cy.get('#columns').invoke('attr', 'style').should('contain', '#1C7ED6')
    cy.reload()
    cy.get('#columns').invoke('attr', 'style').should('contain', '#1C7ED6')
  })

  it('move o card de contratação para Concluído e mostra o convite', () => {
    cy.visit('/#GM-12')
    cy.get('#statusSelect').select('done')
    cy.get('#hire').should('have.attr', 'open')
    cy.get('#hire a[href^="mailto:"]').should('have.attr', 'href', 'mailto:gabriellamaas26@gmail.com')
    cy.get('#hire a[href*="linkedin.com"]').should('exist')
    cy.get('#hire [data-action="hire-close"]').click()
    cy.get('.column[data-status="done"] [data-testid="card-GM-12"]').should('exist')
    cy.get('#resetBoard').should('be.visible').click()
    cy.get('.column[data-status="backlog"] [data-testid="card-GM-12"]').should('exist')
    cy.get('#resetBoard').should('not.be.visible')
  })

  it('tem metadados para compartilhamento', () => {
    cy.get('meta[property="og:title"]').should('have.attr', 'content').and('not.be.empty')
    cy.get('meta[property="og:image"]').should('have.attr', 'content').and('match', /og-image\.png$/)
    cy.get('link[rel="icon"]').should('have.attr', 'href', 'assets/favicon.svg')
  })

  it('abre o menu lateral no celular', () => {
    cy.viewport(390, 844)
    cy.get('#sidebar').should('not.be.visible')
    cy.get('#menuBtn').click().should('have.attr', 'aria-expanded', 'true')
    cy.get('#sidebar a[href="#GM-12"]').should('be.visible').click()
    cy.get('#issue').should('have.attr', 'open')
  })
})
