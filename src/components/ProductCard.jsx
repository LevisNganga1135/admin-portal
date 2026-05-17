// ProductCard - Displays a single product summary
// Clicking View Details navigates to the product detail page
import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
  // useNavigate for programmatic navigation to detail page
  const navigate = useNavigate()

  return (
    <div>
      {/* Product name */}
      <h2>{product.name}</h2>
      {/* Format price with commas */}
      <p>Price: ${product.price.toLocaleString()}</p>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
      {/* Navigate to detail page with product id */}
      <button onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
    </div>
  )
}

export default ProductCard
