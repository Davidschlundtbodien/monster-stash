import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMonsters } from '../../apiCalls';
import './MonsterList.css';

const MonsterList = (props) => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetchMonsters(props.rating)
    .then(data => setMonsters(data.results))
  }, [])

  const monsterList = monsters.map(monster => {
    return (
      <Link to={`/monsters/${props.rating}/${monster.index}`} key={monster.index} className="monster-list-item">
        <p>{monster.name}</p>
      </Link>
    )
  })

  return(
    <article className="monster-list-container">
      {monsterList}
    </article>
  )
}

export default MonsterList;
