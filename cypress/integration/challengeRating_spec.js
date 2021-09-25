beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

it('should display a nav bar with title', () => {
  cy.get('nav')
    .contains('Monster Stash')
})

it('should display a nav bar with two links', () => {
  cy.get('nav')
    .contains('Favorites')
  cy.get('nav')
    .contains('Encounters')
})

it('should display a list of challenge rating links', () => {
  cy.get('[href="/monsters/0"] > p')
    .contains('Challenge Rating: 0')
  cy.get('[href="/monsters/30"] > p')
    .contains('Challenge Rating: 30')
})
