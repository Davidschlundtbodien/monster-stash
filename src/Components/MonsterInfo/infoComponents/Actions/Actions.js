import './Actions.css';

const Actions = ({actions}) => {
  const actionsList = actions.map(action => {
    return (
      <div key={action.name} className="action-content">
        <p className="action-name">{action.name}</p>
        <p className="action-description">{action.desc}</p>
      </div>
    )
  })

  return (
    <section className="action-container">
      <p className="action-header">Actions</p>
      {actionsList}
    </section>
  )
}

export default Actions;
