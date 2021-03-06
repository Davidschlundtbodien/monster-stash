import './Attributes.css'

const Attributes = ({str, dex, con, int, wis, cha}) => {

  return(
    <section className="attr-container">
      <p className="attr-header">Attributes</p>
      <div className="attr-content">
        <p>Strength || {str}</p>
        <p>Dexterity || {dex}</p>
        <p>Constitution || {con}</p>
        <p>Intelligence || {int}</p>
        <p>Wisdom || {wis}</p>
        <p>Charisma || {cha}</p>
      </div>
    </section>
  )
}

export default Attributes;
