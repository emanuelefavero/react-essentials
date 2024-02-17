describe('Todo List Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  // * ADD A NEW ITEM
  it('should add a new item to the list', () => {
    // Check if the list has 3 items
    cy.get('[data-testid="list"]').find('li').should('have.length', 3)

    // Add a new item
    cy.get('[data-testid="list-input').type('New Item')
    cy.get('[data-testid="list-form"]').submit()

    // Check if the new item was added
    cy.get('[data-testid="list"]').find('li').should('have.length', 4)
    cy.get('[data-testid="list"]')
      .find('li')
      .last()
      .should('contain', 'New Item')
  })

  // * REMOVE AN ITEM
  it('should remove an item from the list', () => {
    // Check if the list has 3 items
    cy.get('[data-testid="list"]').find('li').should('have.length', 3)

    // Remove the first item
    cy.get('[data-testid="list"')
      .find('li')
      .first()
      .find('[data-testid="list-remove-item-button"]')
      .click()

    // Check if the first item was removed
    cy.get('[data-testid="list"]').find('li').should('have.length', 2)
  })

  // * PREVENT ADDING EMPTY ITEM
  it('should prevent adding an empty item to the list', () => {
    // Attempt to add an empty item
    cy.get('[data-testid="list-input').type(' ')
    cy.get('[data-testid="list-form"]').submit()

    // Check if the empty item was not added
    cy.get('[data-testid="list"]').find('li').should('have.length', 3)
  })
})
