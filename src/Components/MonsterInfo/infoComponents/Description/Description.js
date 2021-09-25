import './Description.css'

const Description = ({xp, size, type, align}) => {

  return(
    <section className="description-container">
      <p className="description-header">Description</p>
      <div className="description-content">
        <p>Experience: {xp}</p>
        <p>Size: {size}</p>
        <p>Monster Type: {type}</p>
        <p>Alignment: {align}</p>
      </div>
    </section>
  )
}

export default Description;
