export const fetchMonsters = (challengeRating) => {
  return fetch(`https://www.dnd5eapi.co/api/monsters?challenge_rating=${challengeRating}`)
  .then(response => checkResponse(response))
}

export const fetchMonsterInfo = (monsterIndex) => {
  return fetch(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`)
  .then(response => checkResponse(response))
  
}


const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    return Promise.reject(`error ${response.status}`)
  }
}
