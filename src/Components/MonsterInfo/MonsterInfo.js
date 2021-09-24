import { useState, useEffect } from 'react'
import { fetchMonsterInfo } from '../../apiCalls'
import Attributes from './infoComponents/Attributes/Attributes'
import Actions from './infoComponents/Actions/Actions'
import Weaknesses from './infoComponents/Weaknesses/Weaknesses'
import './MonsterInfo.css'

const MonsterInfo = (props) => {
  const [monster, setMonster] = useState(null)

  useEffect(() => {
    fetchMonsterInfo(props.monsterIndex)
    .then(data => setMonster(data))
  }, [])

  return(
    <>
      {monster &&
        <article>
            <p>{monster.name}</p>
            <Attributes
              str={monster.strength}
              dex={monster.dexterity}
              con={monster.constitution}
              int={monster.intelligence}
              wis={monster.wisdom}
              cha={monster.charisma}
            />
            <Actions actions={monster.actions}/>
            <Weaknesses weaknesses={monster.damage_vulnerabilities}/>
        </article>
      }
    </>
  )
}

export default MonsterInfo;
