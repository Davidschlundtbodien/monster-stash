export const fetchMonsters = (challengeRating) => {
  return fetch(`https://www.dnd5eapi.co/api/monsters?challenge_rating=${challengeRating}`)
  .then(response => response.json())
  .catch(error => console.log(error))
}

export const fetchMonsterInfo = (monsterIndex) => {
  return fetch(`https://www.dnd5eapi.co/monsters/${monsterIndex}`)
  .then(response => response.json())
  .catch(error => console.log(error))
}
