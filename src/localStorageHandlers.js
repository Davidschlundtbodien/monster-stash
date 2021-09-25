export const setToLocal = (monster) => {
  const monsterStorage = checkStorage()
  const newMonsterList = [...monsterStorage, monster]
  const listString = JSON.stringify(newMonsterList)
  localStorage.setItem('favorites', listString)
  return console.log(localStorage);
}

export const checkStorage = () => {
  if(!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', '[]')
  }
  const response = localStorage.getItem('favorites')
  return JSON.parse(response)
}
