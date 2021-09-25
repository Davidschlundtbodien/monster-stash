import './Weaknesses.css'

const Weaknesses = ({weaknesses}) => {
  const weaknessList = weaknesses.map(weakness => {
    return (
        <p key={weakness}>{weakness}</p>
    )
  })

  return(
    <section className="weakness-container">
      <p className="weakness-header">Weaknesses</p>
      {!weaknesses.length && <p>None</p>}
      <div className="weakness-content">{weaknessList}</div>
    </section>
  )
}

export default Weaknesses;
