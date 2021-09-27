import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchMonsterInfo } from '../../apiCalls'
import { setToLocal, deleteFromStorage } from '../../localStorageHandlers'
import Attributes from './infoComponents/Attributes/Attributes'
import Description from './infoComponents/Description/Description'
import HealthArmor from './infoComponents/HealthArmor/HealthArmor'
import Actions from './infoComponents/Actions/Actions'
import Weaknesses from './infoComponents/Weaknesses/Weaknesses'
import Strengths from './infoComponents/Strengths/Strengths'
import './MonsterInfo.css'

const MonsterInfo = (props) => {
  const [monster, setMonster] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMonsterInfo(props.monsterIndex)
    .then(data => setMonster(data))
    .catch(error => setError(error))
  }, [])

  const handleFavorite = () => {
    const monsterSnippet = {
      index: monster.index,
      name: monster.name
    }
    setToLocal(monsterSnippet)
  }

  const handleDelete = (monsterIndex) => {
    deleteFromStorage(monsterIndex)
  }

  return(
    <>
      {error && <p className="error">Error finding monster!</p>}
      {monster &&
        <article className='monster-container'>
            <p className="monster-name">{monster.name}</p>
            <div>
              <button className="fav-button" onClick={() => handleFavorite()}>
                Favorite
              </button>
              <button className="fav-button" onClick={() => handleDelete(monster.index)}>
                <Link className="link" to="/favorites">Unfavorite</Link>
              </button>
            </div>
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
