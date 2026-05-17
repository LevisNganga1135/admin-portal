// LandingPage - Home page of the admin portal
// Describes the site and provides navigation to products
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to the Admin Portal</h1>
      <p>Manage your e-commerce products in one place.</p>

      {/* Button navigates to products page */}
      <button onClick={() => navigate('/products')}>Browse Products</button>

      {/* Feature highlight cards */}
      <div>
        <div>
          <h3>Manage</h3>
          <p>View and edit all your products easily.</p>
        </div>
        <div>
          <h3>Add</h3>
          <p>Add new products to your store quickly.</p>
        </div>
        <div>
          <h3>Search</h3>
          <p>Find any product instantly with live search.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
