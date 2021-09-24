import './Weaknesses.css'

const Weaknesses = ({weaknesses}) => {
  const weaknessList = weaknesses.map(weakness => {
    return (
      <div key={weakness}>
        <p>{weakness}</p>
      </div>
    )
  })

  return(
    <section>
      <p>Weaknesses</p>
      {!weaknesses.length && <p>None</p>}
      <div>{weaknessList}</div>
    </section>
  )
}

export default Weaknesses;
