export const setToLocal = (monster) => {
  const monsterStorage = checkStorage()
  const isRepeat = monsterStorage.find(e => e.index === monster.index)

  if(isRepeat) {
    return
  }
  
  const newMonsterList = [...monsterStorage, monster]
  const listString = JSON.stringify(newMonsterList)
  localStorage.setItem('favorites', listString)
}

export const checkStorage = () => {
  if(!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', '[]')
  }
  const response = localStorage.getItem('favorites')
  return JSON.parse(response)
}
