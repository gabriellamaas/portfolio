// Este arquivo aparece no card GM-10 do quadro.
// Cada it() confere, no próprio site, um fato da carreira da Gabriella.
describe('Gabriella Maas', () => {
  beforeEach(() => cy.visit('/'))

  it('é Analista de QA desde ago/2022', () => {
    cy.get('[data-testid="gabriella"]').should('contain.text', 'Analista de QA')
    cy.get('[data-testid="card-GM-1"]').click()
    cy.get('#issue').should('contain.text', 'ago/2022')
  })

  it('está com a VR Software em andamento', () => {
    cy.get('.column[data-status="doing"]').should('contain.text', 'VR Software')
  })

  it('testa desde o refinamento (shift-left)', () => {
    cy.get('[data-testid="card-GM-4"]').click()
    cy.get('#issue').should('contain.text', 'shift-left')
  })

  it('automatiza com Playwright e Cypress', () => {
    cy.get('[data-testid="card-GM-9"]').should('contain.text', 'Playwright')
    cy.get('[data-testid="card-GM-6"]').should('contain.text', 'Cypress')
  })

  it('criou um assistente de QA com IA', () => {
    cy.get('[data-testid="card-GM-8"]').click()
    cy.get('#issue').should('contain.text', 'Jira').and('contain.text', 'IA')
  })

  it('tem um card esperando o seu time', () => {
    cy.get('.column[data-status="backlog"] [data-testid="card-GM-12"]').click()
    cy.get('#issue a[href^="mailto:"]').should('have.attr', 'href', 'mailto:gabriellamaas26@gmail.com')
  })
})
