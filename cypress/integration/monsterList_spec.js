beforeEach(() => {
  cy.visit('http://localhost:3000/')
  cy.getMonsterList('0')
  cy.get('[href="/monsters/0"]')
    .click()
})

it('should change the url and display monsters', () => {
  cy.url('/monsters/0')
  cy.get('[href="/monsters/0/awakened-shrub"] > p')
    .contains('Awakened Shrub')
  cy.get('[href="/monsters/0/badger"] > p')
    .contains('Badger')
})

it('should display the nav bar', () => {
  cy.get('nav').contains('Monster Stash')
  cy.get('nav').contains('Favorites')
  cy.get('nav').contains('Encounters')
})
