// ProductPage - Displays all products with live search
// Fetches products from json-server on mount
// Uses useState, useEffect, useRef, useId hooks
import { useState, useEffect, useRef, useId } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'

function ProductPage() {
  // Access global products state and setter from context
  const { products, setProducts } = useProducts()
  // State for search query input
  const [query, setQuery] = useState("")
  // useRef to auto focus the search input on mount
  const searchRef = useRef(null)
  // useId generates a unique id for accessible label pairing
  const inputId = useId()

  useEffect(() => {
    // GET request - fetch all products from json-server
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => {
        console.log("products fetched:", data)
        // Update global products state with fetched data
        setProducts(data)
      })
    // Auto focus the search input when page loads
    searchRef.current.focus()
  }, []) // Empty array means this runs once on mount

  // Filter products dynamically based on search query
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h1>Our Supercars</h1>

      {/* Accessible search input with label */}
      <label htmlFor={inputId}>Search:</label>
      <input
        id={inputId}
        ref={searchRef}
        type="text"
        placeholder="Search supercars..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {/* Render filtered product cards */}
      <div>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
