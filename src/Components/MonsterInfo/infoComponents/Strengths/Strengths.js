import './Strengths.css'

const Strengths = ({resists, immune}) => {


  const createList = (array) => {
    const list = array.map(e => {
      return (
          <p key={e}>{e}</p>
      )
    })
    return list
  }

  const resistanceList = createList(resists)
  const immunityList = createList(immune)
  return(
    <section className="strength-container">
      <p className="strength-header">Strengths</p>
      <article className="strength-content">
        <div className="sub-container">
          <p className="sub-header">Resistances</p>
          {!resists.length && <p>None</p>}
          <div className="sub-content">{resistanceList}</div>
        </div>
        <div className="sub-container">
          <p className="sub-header">Immunites</p>
          {!immune.length && <p>None</p>}
          <div className="sub-content">{immunityList}</div>
        </div>
      </article>
    </section>
  )
}

export default Strengths;
