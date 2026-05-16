import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import useFetch from '../hooks/useFetch'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { updateProduct, deleteProduct } = useProducts()
  const { data: product, loading, error } = useFetch(`http://localhost:3001/products/${id}`)
  const [editMode, setEditMode] = useState(false)
  const [editData, setEditData] = useState({ price: "", stock: "" })

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
    <div>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>

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
          <button onClick={() => {
            setEditData({ price: product.price, stock: product.stock })
            setEditMode(true)
          }}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  )
}

export default ProductDetail