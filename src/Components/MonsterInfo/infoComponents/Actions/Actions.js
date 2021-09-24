import './Actions.css';

const Actions = ({actions}) => {
  const actionsList = actions.map(action => {
    return (
      <div key={action.name}>
        <p>{action.name}</p>
        <p>{action.desc}</p>
      </div>
    )
  })

  return (
    <section>
      {actionsList}
    </section>
  )
}

export default Actions;
