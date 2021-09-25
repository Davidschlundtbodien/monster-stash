import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkStorage, deleteFromStorage} from '../../localStorageHandlers'
import './FavoritesList.css';

const FavoritesList = (props) => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    setMonsters(checkStorage())
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
      <h1>Favorited</h1>
      <article className="monster-list-container">
        {monsterList}
      </article>
    </>
  )
}

export default FavoritesList;
