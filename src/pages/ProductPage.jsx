import { useState, useEffect, useRef, useId } from 'react'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'

function ProductPage() {
  const { products, setProducts } = useProducts()
  const [query, setQuery] = useState("")
  const searchRef = useRef(null)
  const inputId = useId()

 useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => {
        console.log("products fetched:", data)
        setProducts(data)
      })
    searchRef.current.focus()
  }, [])

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h1>Our Supercars</h1>
      <label htmlFor={inputId}>Search:</label>
      <input
        id={inputId}
        ref={searchRef}
        type="text"
        placeholder="Search supercars..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage