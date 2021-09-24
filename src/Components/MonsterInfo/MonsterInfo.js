import { useState, useEffect } from 'react'
import { fetchMonsterInfo } from '../../apiCalls'
import Attributes from './infoComponents/Attributes/Attributes'
import './MonsterInfo.css'

const MonsterInfo = (props) => {
  const [monster, setMonster] = useState({})

  useEffect(() => {
    fetchMonsterInfo(props.monsterIndex)
    .then(data => setMonster(data))
  }, [])

  return(
    <article>
      {!monster && <p>Monster Loading</p>}
        <p>{monster.name}</p>
        <Attributes
          str={monster.strength}
          dex={monster.dexterity}
          con={monster.constitution}
          int={monster.intelligence}
          wis={monster.wisdom}
          cha={monster.charisma}
        />
    </article>
  )
}

export default MonsterInfo;
