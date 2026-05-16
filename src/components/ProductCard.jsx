import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toLocaleString()}</p>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
      <button onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
    </div>
  )
}

export default ProductCard