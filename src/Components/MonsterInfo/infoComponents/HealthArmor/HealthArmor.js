import './HealthArmor.css'

const HealthArmor = ({ac, hp, hitDice}) => {

  return(
    <section>
      <p className="health-armor-header">Health and Armor Class</p>
      <div className="health-armor">
        <p>Armor Class: {ac}</p>
        <p>Average Hit Points: {hp}</p>
        <p>Hit Dice: {hitDice}</p>
      </div>
    </section>
  )
}

export default HealthArmor;
