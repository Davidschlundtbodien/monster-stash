export const fetchMonsters = (challengeRating) => {
  return fetch(`https://www.dnd5eapi.co/api/monsters?challenge_rating=${challengeRating}`)
  .then(response => response.json())
  .catch(error => console.log(error))
}

export const fetchMonsterInfo = (monsterURL) => {
  return fetch(`https://www.dnd5eapi.co${monsterURL}`)
  .then(response => response.json())
  .catch(error => console.log(error))
}
