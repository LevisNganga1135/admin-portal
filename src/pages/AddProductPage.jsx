// AddProductPage - Form to add a new supercar
// Handles form state, validation, and POST request to json-server
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import './AddProductPage.css'

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
    category: "",
    image: ""
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
    <div className="add-product-page">
      <h1>Add New Supercar</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Lamborghini Urus"
          />
          {/* Show error if name is missing */}
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Price ($)</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g. 250000"
          />
          {/* Show error if price is invalid */}
          {errors.price && <p className="error">{errors.price}</p>}
        </div>
        <div className="form-group">
          <label>Stock</label>
          <input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="e.g. 5"
          />
          {/* Show error if stock is missing */}
          {errors.stock && <p className="error">{errors.stock}</p>}
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Lamborghini"
          />
          {/* Show error if category is missing */}
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

           {/* Image URL field with preview */}
        <div className="form-group">
          <label>🖼 Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Paste image address here"
          />
        </div>

        {/* Show image preview if URL is entered */}
        {formData.image && (
          <div className="image-preview">
            <img src={formData.image} alt="Preview" />
          </div>
        )}

        <button type="submit">Add Supercar</button>
      </form>
    </div>
  )
}

export default AddProductPage

