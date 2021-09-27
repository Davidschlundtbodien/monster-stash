import {Link} from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <>
      <p className="error-header">404 Page not found!</p>
      <Link to="/" className="link">
        <p className="return-link">Click here to return Home.</p>
      </Link>
    </>
  )
}

export default PageNotFound;
