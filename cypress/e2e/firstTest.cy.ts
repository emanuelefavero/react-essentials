describe('template spec', () => {
  it('renders the h1 title', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-testid="hello"]').should('exist').should('have.text', 'Hello')
  })
})
