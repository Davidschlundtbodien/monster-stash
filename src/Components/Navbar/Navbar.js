import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav>
      <h1><Link to="/" className="link">Monster Stash</Link></h1>
      <div className='nav-links'>
        <p><Link to='/favorites' className="link">Favorites</Link></p>
        <p>Encounters</p>
      </div>
    </nav>
  )
}

export default Navbar;
