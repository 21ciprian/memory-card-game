describe('First test', () => {
  it('Should find the home page', () => {
    cy.visit('http://127.0.0.1:5500')
  })
  it('Should find the score on the page', () => {
    cy.get('body h3')
      .should('contain', 'Score:')
  })
  it('Should find the updating score on the page', () => {
    cy.get('h3 span#result').should('be.visible')
  })
  it('Should find the grid game and images', () => {
    cy.get('section.grid')
      .find('img')
      .should('have.length', 12)
      .should('have.attr', 'src', 'images/qmark.png')
      .should('have')
  })
  it('Should be able to click on the grid game', () => {
    cy.get('section.grid').click()
  })
  it('Should be able to find the pictures on the grid game and click them', () => {
    cy.get('img').click({ multiple: true })
  })
})