import { useState, useEffect } from 'react'
import { fetchMonsters } from '../../apiCalls'
import './MonsterList.css'

const MonsterList = (props) => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetchMonsters(props.rating)
    .then(data => setMonsters(data.results))
  }, [])

  const monsterList = monsters.map(monster => {
    return (
      <p key={monster.index}>{monster.name}</p>
    )
  })

  return(
    <article>
      {monsterList}
    </article>
  )
}

export default MonsterList;
