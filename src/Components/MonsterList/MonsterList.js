import { useEffect } from 'react'
import { fetchMonsters } from '../../apiCalls'
import './MonsterList.css'

const MonsterList = () => {

  useEffect(() => {
    fetchMonsters('2')
    .then(data => console.log(data.results))
  }, [])

  return(
    <article>
      <p>Goblin</p>
      <p>Hobgoblin</p>
      <p>Bugbear</p>
      <p>Ogre</p>
    </article>
  )
}

export default MonsterList;
