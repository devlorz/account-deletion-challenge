describe('Transfer', () => {
  it('successful transfer', () => {
    cy.visit('/').wait(1000)
    // transfer page
    cy.getByText('Transfer ownership').should('be.visible')
    cy.getByText(
      'Before you leaving, it is required to transfer your tasks, projects and workspace admin rights to other person.'
    ).should('be.visible')
    cy.getByText('The following workspaces require ownership transfer:').should(
      'be.visible'
    )
    cy.getByText('Next').should('be.disabled')
    cy.get(':nth-child(1) > :nth-child(2) > div > select').select('Riker Lynch')
    cy.get(':nth-child(2) > :nth-child(2) > div > select').select(
      'Edward Bayer'
    )
    cy.getByText('Next').click()

    // feedback
    cy.getByText('Why would you leave us?').should('be.visible')
    cy.getByText('Comments:').should('be.visible')
    cy.getByText('Back').should('be.visible')
    cy.getByText('Next').should('be.disabled')
    cy.getByLabelText('I do not understand how to use this.').check()
    cy.getByLabelText('I do not need this.').check()
    cy.getByLabelText('I prefer other apps.').check()

    cy.get('textarea').type('other reason...')
    cy.getByText('Next').click()

    // confirm
    cy.getByText('Delete account').should('be.visible')
    cy.getByText('This action cannot be undone.').should('be.visible')
    cy.getByText('Please enter your email:').should('be.visible')
    cy.getByLabelText('I understand the consequences.').should('be.visible')
    cy.getByText('Back').should('be.visible')
    cy.getByText('Delete my account').should('be.disabled')
    cy.getByPlaceholderText('ross@example.com').type('ross@example.com')
    cy.getByLabelText('I understand the consequences.').check()
    cy.wait(5000)
      .getByText('Delete my account')
      .click()

    cy.wait(5000)
      .url()
      .should('eq', 'http://www.example.com/')
  })
})
