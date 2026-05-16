import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { updateProduct, deleteProduct } = useProducts()
  const [product, setProduct] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [editData, setEditData] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setEditData({ price: data.price, stock: data.stock })
      })
  }, [id])

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
    setProduct(updated)
    setEditMode(false)
  }

  async function handleDelete() {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    })
    deleteProduct(Number(id))
    navigate("/products")
  }

  if (!product) return <p>Loading...</p>

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
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  )
}

export default ProductDetail