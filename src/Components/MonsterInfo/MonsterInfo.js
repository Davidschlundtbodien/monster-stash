import { useEffect } from 'react'
import { fetchMonsterInfo } from '../../apiCalls'
import './MonsterInfo.css'

const MonsterInfo = () => {

  useEffect(() => {
    fetchMonsterInfo('/api/monsters/azer')
    .then(data => console.log(data))
  }, [])

  return(
    <article>
      <p>Goblin</p>
      <p>Hp</p>
      <p>AC</p>
      <p>STATS</p>
    </article>
  )
}

export default MonsterInfo;
