Cypress.Commands.add('getMonsterList', (cr) => {
  cy.intercept('GET', `https://www.dnd5eapi.co/api/monsters?challenge_rating=${cr}`, {
    body: {
      "results": [
        {
          "index": "awakened-shrub",
          "name": "Awakened Shrub",
          "url": "/api/monsters/awakened-shrub"
        },
        {
          "index": "baboon",
          "name": "Baboon",
          "url": "/api/monsters/baboon"
        },
        {
          "index": "badger",
          "name": "Badger",
          "url": "/api/monsters/badger"
        }
      ]
    }
  })
})
