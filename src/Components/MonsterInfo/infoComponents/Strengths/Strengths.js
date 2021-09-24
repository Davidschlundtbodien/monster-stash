import './Strengths.css'

const Strengths = ({resists, immune}) => {


  const createList = (array) => {
    const list = array.map(e => {
      return (
        <div key={e}>
          <p>{e}</p>
        </div>
      )
    })
    return list
  }

  const resistanceList = createList(resists)
  const immunityList = createList(immune)
  return(
    <section>
      <p>Strengths</p>
      <div>
        <p>Resistances</p>
        {!resists.length && <p>None</p>}
        <div>{resistanceList}</div>
      </div>
      <div>
        <p>Immunites</p>
        {!immune.length && <p>None</p>}
        <div>{immunityList}</div>
      </div>
    </section>
  )
}

export default Strengths;
