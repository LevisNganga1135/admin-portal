// AddProductPage - Form to add a new supercar
// Handles form state, validation, and POST request to json-server
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'

function AddProductPage() {
  // useNavigate for redirecting after form submission
  const navigate = useNavigate()
  // Access addProduct function from global context
  const { addProduct } = useProducts()

  // Controlled form state for all input fields
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: ""
  })

  // State to store validation error messages
  const [errors, setErrors] = useState({})

  // Update formData when any input changes
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Validate form fields before submission
  function validate() {
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.price || formData.price <= 0) newErrors.price = "Valid price is required"
    if (!formData.stock) newErrors.stock = "Stock is required"
    if (!formData.category) newErrors.category = "Category is required"
    return newErrors
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault()
    // Run validation and stop if errors exist
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    // POST request - add new product to json-server
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        // Convert price and stock to numbers
        price: Number(formData.price),
        stock: Number(formData.stock)
      })
    })
    const newProduct = await response.json()
    // Update global context with new product
    addProduct(newProduct)
    // Redirect to products page after successful submission
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
          {/* Show error if name is missing */}
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
          {/* Show error if price is invalid */}
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
          {/* Show error if stock is missing */}
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
          {/* Show error if category is missing */}
          {errors.category && <p>{errors.category}</p>}
        </div>
        <button type="submit">Add Supercar</button>
      </form>
    </div>
  )
}

export default AddProductPage
