import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to the Admin Portal</h1>
      <p>Manage your e-commerce products in one place.</p>
      <button onClick={() => navigate('/products')}>Browse Products</button>

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