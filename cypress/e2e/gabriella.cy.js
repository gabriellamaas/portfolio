// This file is shown in card GM-10 on the board.
// Each it() checks one fact about Gabriella's career on the site itself.
describe('Gabriella Maas', () => {
  beforeEach(() => cy.visit('/'))

  it('has been a QA Analyst since Aug 2022', () => {
    cy.get('[data-testid="gabriella"]').should('contain.text', 'Analista de QA')
    cy.get('[data-testid="card-GM-1"]').click()
    cy.get('#issue').should('contain.text', 'ago/2022')
  })

  it('is currently working at VR Software', () => {
    cy.get('.column[data-status="doing"]').should('contain.text', 'VR Software')
  })

  it('tests from refinement onward (shift-left)', () => {
    cy.get('[data-testid="card-GM-4"]').click()
    cy.get('#issue').should('contain.text', 'shift-left')
  })

  it('automates with Playwright and Cypress', () => {
    cy.get('[data-testid="card-GM-9"]').should('contain.text', 'Playwright')
    cy.get('[data-testid="card-GM-6"]').should('contain.text', 'Cypress')
  })

  it('built an AI-powered QA assistant', () => {
    cy.get('[data-testid="card-GM-8"]').click()
    cy.get('#issue').should('contain.text', 'Jira').and('contain.text', 'IA')
  })

  it('has a card waiting for your team', () => {
    cy.get('.column[data-status="backlog"] [data-testid="card-GM-12"]').click()
    cy.get('#issue a[href^="mailto:"]').should('have.attr', 'href', 'mailto:gabriellamaas26@gmail.com')
  })
})
