import { useState, useEffect } from 'react'
import { fetchMonsterInfo } from '../../apiCalls'
import { setToLocal } from '../../localStorageHandlers'
import Attributes from './infoComponents/Attributes/Attributes'
import Description from './infoComponents/Description/Description'
import HealthArmor from './infoComponents/HealthArmor/HealthArmor'
import Actions from './infoComponents/Actions/Actions'
import Weaknesses from './infoComponents/Weaknesses/Weaknesses'
import Strengths from './infoComponents/Strengths/Strengths'
import './MonsterInfo.css'

const MonsterInfo = (props) => {
  const [monster, setMonster] = useState(null)

  useEffect(() => {
    fetchMonsterInfo(props.monsterIndex)
    .then(data => setMonster(data))
  }, [])

  const handleFavorite = () => {
    const monsterSnippet = {
      index: monster.index,
      name: monster.name
    }
    setToLocal(monsterSnippet)
  }

  return(
    <>
      {monster &&
        <article className='monster-container'>
            <p className="monster-name">{monster.name}</p>
            <button onClick={() => handleFavorite()}>Favorite</button>
            <HealthArmor
              ac={monster.armor_class}
              hp={monster.hit_points}
              hitDice={monster.hit_dice}
            />
            <Description
              xp={monster.xp}
              size={monster.size}
              type={monster.type}
              align={monster.alignment}
            />
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
            <Strengths
              resists={monster.damage_resistances}
              immune={monster.damage_immunities}
              conditions={monster.condition_immunities}
            />
        </article>
      }
    </>
  )
}

export default MonsterInfo;
