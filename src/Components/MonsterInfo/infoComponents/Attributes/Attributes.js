import './Attributes.css'

const Attributes = ({str, dex, con, int, wis, cha}) => {

  return(
    <section>
      <p>Attributes</p>
      <p>Strength || {str}</p>
      <p>Dexterity || {dex}</p>
      <p>Constitution || {con}</p>
      <p>Intelligence || {int}</p>
      <p>Wisdom || {wis}</p>
      <p>Charisma || {cha}</p>
    </section>
  )
}

export default Attributes;
