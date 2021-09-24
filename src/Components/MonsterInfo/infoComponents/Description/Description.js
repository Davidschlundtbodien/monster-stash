import './Description.css'

const Description = ({xp, size, type, align}) => {

  return(
    <section>
      <p>Description</p>
      <p>Experience: {xp}</p>
      <p>Size: {size}</p>
      <p>Monster Type: {type}</p>
      <p>Alignment: {align}</p>
    </section>
  )
}

export default Description;
