import { useState, useEffect } from 'react'
import { fetchMonsterInfo } from '../../apiCalls'
import './MonsterInfo.css'

const MonsterInfo = () => {
  const [monster, setMonster] = useState(null)

  useEffect(() => {
    fetchMonsterInfo('/api/monsters/azer')
    .then(data => setMonster(data))
  }, [])

  return(
    <article>
    </article>
  )
}

export default MonsterInfo;
