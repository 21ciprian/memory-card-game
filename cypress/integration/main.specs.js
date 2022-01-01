describe('Main page', () => {
  it('Should find the home page', () => {
    cy.visit('http://127.0.0.1:5500')
  })
  it('Should find the title on the page', () => {
    cy.get('body h1')
      .should('contain', 'Find the matching fruits :)')
      .should('be.visible')
  })
  it('Should find the timer on the page', () => {
    cy.get('body h3')
      .should('contain', 'Time:')
      .should('be.visible')
  })
  it('Should find the updating timer on the page', () => {
    cy.get('h3 span#timer')
      .should('be.visible')
  })
  it('Should find the score on the page', () => {
    cy.get('body h3')
      .should('contain', 'Score:')
      .should('be.visible')
  })
  it('Should find the updating score on the page', () => {
    cy.get('h3 span#result')
      .should('be.visible')
  })
  it('Should find the grid game and images', () => {
    cy.get('section.grid')
      .find('img')
      .should('have.length', 16)
      .should('have.attr', 'src', 'images/qmark.png')
  })
  it('Should be able to click on the grid game', () => {
    cy.get('section.grid')
      .click()
  })
  it('Should be able to find the pictures on the grid game and click them', () => {
    cy.get('img')
      .click({ multiple: true })
  })
  it('Should have a button to restart the game', () => {
    cy.get('#startGame')
      .should('contain', 'Restart Game')
      .click()
  })
  it('Should find the modal', () => {
    cy.get('#modal')
      .should('not.be.visible')
  })
  it('Should find the content of modal', () => {
    cy.get('#content')
      .should('not.be.visible')
  })
  it('Should find the close symbol of modal', () => {
    cy.get('#close')
      .should('not.be.visible')
  })
  it('Should find the congrats message of modal', () => {
    cy.get('#content h2:nth-child(2)')
      .should('not.be.visible')
      .should('contain', 'WELL DONE FOR FINDING ALL THE MATCHING CARDS!!!')
  })
  it('Should find the congrats message of modal', () => {
    cy.get('#content h3')
      .should('not.be.visible')
      .should('contain', 'Your Time: ')
  })
  it('Should find the "play again" button inside of modal', () => {
    cy.get('#playAgain')
      .should('not.be.visible')
      .should('contain', 'Play Again')
  })
})