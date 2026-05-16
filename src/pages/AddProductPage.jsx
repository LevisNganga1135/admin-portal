import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'

function AddProductPage() {
  const navigate = useNavigate()
  const { addProduct } = useProducts()
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: ""
  })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function validate() {
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.price || formData.price <= 0) newErrors.price = "Valid price is required"
    if (!formData.stock) newErrors.stock = "Stock is required"
    if (!formData.category) newErrors.category = "Category is required"
    return newErrors
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock)
      })
    })
    const newProduct = await response.json()
    addProduct(newProduct)
    navigate("/products")
  }

  return (
    <div>
      <h1>Add New Supercar</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Lamborghini Urus"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Price ($)</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g. 250000"
          />
          {errors.price && <p>{errors.price}</p>}
        </div>
        <div>
          <label>Stock</label>
          <input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="e.g. 5"
          />
          {errors.stock && <p>{errors.stock}</p>}
        </div>
        <div>
          <label>Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Lamborghini"
          />
          {errors.category && <p>{errors.category}</p>}
        </div>
        <button type="submit">Add Supercar</button>
      </form>
    </div>
  )
}

export default AddProductPage