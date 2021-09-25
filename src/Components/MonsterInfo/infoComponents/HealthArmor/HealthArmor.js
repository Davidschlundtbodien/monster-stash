import './HealthArmor.css'

const HealthArmor = ({ac, hp, hitDice}) => {

  return(
    <section className="health-armor">
      <p>Armor Class: {ac}</p>
      <p>Average Hit Points: {hp}</p>
      <p>Hit Dice: {hitDice}</p>
    </section>
  )
}

export default HealthArmor;
