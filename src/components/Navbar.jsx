// Navbar component
// Provides navigation links to all main pages
// Always visible at the top of every page
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      {/* Link to landing page */}
      <Link to="/">Home</Link>
      {/* Link to products list */}
      <Link to="/products">Products</Link>
      {/* Link to add product form */}
      <Link to="/add">Add Product</Link>
    </nav>
  )
}

export default Navbar
