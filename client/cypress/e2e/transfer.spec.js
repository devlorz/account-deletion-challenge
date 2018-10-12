describe('Transfer', () => {
  it('successful transfer', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > :nth-child(2) > div > select').select('Riker Lynch')
    cy.get(':nth-child(2) > :nth-child(2) > div > select').select(
      'Edward Bayer'
    )
    cy.getByText('Next').click()

    cy.getByLabelText('I do not understand how to use this.').check()
    cy.getByLabelText('I do not need this.').check()
    cy.getByLabelText('I prefer other apps.').check()

    cy.get('textarea').type('other reason...')
    cy.getByText('Next').click()

    cy.getByPlaceholderText('ross@example.com').type('ross@example.com')
    cy.getByLabelText('I understand the consequences.').check()
    cy.getByText('Delete my account').click()

    // cy.getByText('Example Domain').should('exist')
  })
})
