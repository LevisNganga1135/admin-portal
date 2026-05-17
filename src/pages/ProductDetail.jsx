// ProductDetail - Shows a single product with edit and delete options
// Uses useFetch custom hook to load product data
// Handles PATCH request to update price/stock
// Handles DELETE request to remove product
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import useFetch from '../hooks/useFetch'

function ProductDetail() {
  // Get the product id from the URL params
  const { id } = useParams()
  const navigate = useNavigate()
  // Access update and delete functions from global context
  const { updateProduct, deleteProduct } = useProducts()
  // Use custom useFetch hook to load product data
  const { data: product, loading, error } = useFetch(`http://localhost:3001/products/${id}`)
  // Toggle between view and edit mode
  const [editMode, setEditMode] = useState(false)
  // Store editable price and stock values
  const [editData, setEditData] = useState({ price: "", stock: "" })

  // PATCH request - update price and stock in json-server
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
    // Update global context with new values
    updateProduct(Number(id), updated)
    setEditMode(false)
    navigate("/products")
  }

  // DELETE request - remove product from json-server
  async function handleDelete() {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    })
    // Remove product from global context
    deleteProduct(Number(id))
    navigate("/products")
  }

  // Show loading state while fetching
  if (loading) return <p>Loading...</p>
  // Show error if fetch failed
  if (error) return <p>Error: {error}</p>
  // Show message if product not found
  if (!product) return <p>Product not found</p>

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>

      {/* Toggle between edit form and read only view */}
      {editMode ? (
        <div>
          <div>
            <label>Price ($)</label>
            <input
              type="number"
              value={editData.price}
              onChange={e => setEditData({ ...editData, price: e.target.value })}
            />
          </div>
          <div>
            <label>Stock</label>
            <input
              type="number"
              value={editData.stock}
              onChange={e => setEditData({ ...editData, stock: e.target.value })}
            />
          </div>
          <button onClick={handleUpdate}>Save Changes</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Price: ${product.price.toLocaleString()}</p>
          <p>Stock: {product.stock}</p>
          {/* Pre-fill edit fields with current values */}
          <button onClick={() => {
            setEditData({ price: product.price, stock: product.stock })
            setEditMode(true)
          }}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

      {/* Navigate back to products list */}
      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  )
}

export default ProductDetail
