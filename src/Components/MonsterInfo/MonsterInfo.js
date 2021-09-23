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
      {!monster && <p>Monster Loading</p>}
      <p>{monster.name}</p>
      <p>HP - {monster.hit_points}</p>
      <p>Hit Dice - {monster.hit_dice}</p>
      <p>AC - {monster.armor_class}</p>
    </article>
  )
}

export default MonsterInfo;
