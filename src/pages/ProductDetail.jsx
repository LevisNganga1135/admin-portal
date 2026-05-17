// ProductDetail - Shows a single product with edit and delete options
// Uses useFetch custom hook to load product data
// Handles PATCH request to update price/stock
// Handles DELETE request to remove product
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import useFetch from '../hooks/useFetch'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { updateProduct, deleteProduct } = useProducts()
  // Use custom useFetch hook to load product data
  const { data: product, loading, error } = useFetch(`http://localhost:3001/products/${id}`)
  const [editMode, setEditMode] = useState(false)
  const [editData, setEditData] = useState({ price: "", stock: "" })

  // PATCH request - update price and stock
  async function handleUpdate() {
    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: Number(editData.price),
        stock: Number(editData.stock)
      })
    })
    const updated = await response.json()
    updateProduct(Number(id), updated)
    setEditMode(false)
    navigate("/products")
  }

  // DELETE request - remove product
  async function handleDelete() {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    })
    deleteProduct(Number(id))
    navigate("/products")
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!product) return <p>Product not found</p>

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="category">{product.category}</p>

      {/* Product image */}
      <img src={product.image} alt={product.name} className="detail-image" />

      {/* Toggle between edit form and read only view */}
      {editMode ? (
        <div className="edit-form">
          <div className="form-group">
            <label>Price ($)</label>
            <input
              type="number"
              value={editData.price}
              onChange={e => setEditData({ ...editData, price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Stock</label>
            <input
              type="number"
              value={editData.stock}
              onChange={e => setEditData({ ...editData, stock: e.target.value })}
            />
          </div>
          <div className="edit-buttons">
            <button onClick={handleUpdate}>Save Changes</button>
            <button className="cancel-btn" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="detail-info">
          <p className="price">${product.price.toLocaleString()}</p>
          <p>Stock: {product.stock}</p>
          <div className="detail-buttons">
            {/* Pre-fill edit fields with current values */}
            <button onClick={() => {
              setEditData({ price: product.price, stock: product.stock })
              setEditMode(true)
            }}>Edit</button>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}

      {/* Navigate back to products list */}
      <button className="back-btn" onClick={() => navigate("/products")}>
        ← Back to Products
      </button>
    </div>
  )
}

export default ProductDetail
