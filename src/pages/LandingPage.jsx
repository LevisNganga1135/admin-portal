// LandingPage - Home page of the admin portal
// Describes the site and provides navigation to products
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate()

  return (
    <div className="landing">
      <h1>Super<span>Car</span> Admin</h1>
      <p>The ultimate portal to manage your luxury supercar inventory.</p>

      {/* Button navigates to products page */}
      <button className="landing-btn" onClick={() => navigate('/products')}>
        Browse Cars
      </button>

      {/* Feature highlight cards */}
      <div className="features">
        <div className="feature-card" onClick={() => navigate('/products')} style={{cursor: 'pointer'}}>
          <h3>Manage</h3>
          <p>View and edit all your supercars easily.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/add')} style={{cursor: 'pointer'}}>
          <h3>Add</h3>
          <p>Add new supercars to your store quickly.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/products')} style={{cursor: 'pointer'}}>
          <h3>Search</h3>
          <p>Find any supercar instantly with live search.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

