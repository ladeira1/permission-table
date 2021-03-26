describe('Test App', () => {
  it('should render app', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'hi')
  })
})