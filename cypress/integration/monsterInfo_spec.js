beforeEach(() => {
  cy.visit('http://localhost:3000/')
  cy.getMonsterList('0')
  cy.get('[href="/monsters/0"]')
    .click()
  cy.getMonster('awakened-shrub')
  cy.get('[href="/monsters/0/awakened-shrub"] > p')
    .click()
})

it('should change the url', () => {
  cy.url('/monsters/0/badger')
})

it('should display a monster info page with respective stats', () => {
  cy.get('.monster-container').contains('Awakened Shrub')
  cy.get('.health-armor').contains('Average Hit Points: 10')
  cy.get('.description-container').contains('Size: Small')
  cy.get('.action-container').contains('Rake')
  cy.get('.strength-container').contains('piercing')
})

it('should display the nav bar', () => {
  cy.get('nav').contains('Monster Stash')
  cy.get('nav').contains('Favorites')
  cy.get('nav').contains('Encounters')
})
