// ProductCard - Displays a single product summary with image
// Clicking View Details navigates to the product detail page
import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
    
  const navigate = useNavigate()

  return (
    <div className="product-card">
      {/* Product image from URL */}
      <img src={product.image} alt={product.name} className="product-image" />
      {/* Product name */}
      <h2>{product.name}</h2>
      {/* Format price with commas */}
      <p className="price">${product.price.toLocaleString()}</p>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
      {/* Navigate to detail page with product id */}
      <button onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
    </div>
  )
}

export default ProductCard
