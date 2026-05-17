// Navbar component
// Provides navigation links to all main pages
// Always visible at the top of every page
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      {/* Site brand/logo */}
      <div className="navbar-brand"> SuperCar Admin</div>
      {/* Navigation links */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add">Add Car</Link>
      </div>
    </nav>
  )
}

export default Navbar
