import { useState, useEffect } from 'react'
import { fetchMonsterInfo } from '../../apiCalls'
import './MonsterInfo.css'

const MonsterInfo = (props) => {
  const [monster, setMonster] = useState(null)

  useEffect(() => {
    fetchMonsterInfo(props.monsterIndex)
    .then(data => setMonster(data))
  }, [])

  return(
    <article>
    </article>
  )
}

export default MonsterInfo;
