import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMonsters } from '../../apiCalls';
import './MonsterList.css';

const MonsterList = (props) => {
  const [monsters, setMonsters] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMonsters(props.rating)
    .then(data => setMonsters(data.results))
    .catch(error => setError(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const monsterList = monsters.map(monster => {
    return (
      <Link to={`/monsters/${props.rating}/${monster.index}`} key={monster.index} className="monster-list-item">
        <p>{monster.name}</p>
      </Link>
    )
  })

  return(
    <>
      {error && <p className="error">There was an error loading the list</p>}
      <article className="monster-list-container">
        {monsterList}
      </article>
    </>
  )
}

export default MonsterList;
