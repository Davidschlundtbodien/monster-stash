import { useState, useEffect } from 'react'
import { fetchMonsters } from '../../apiCalls'
import './MonsterList.css'

const MonsterList = (props) => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetchMonsters(props.rating)
    .then(data => setMonsters(data.results))
  }, [])

  return(
    <article>
    </article>
  )
}

export default MonsterList;
