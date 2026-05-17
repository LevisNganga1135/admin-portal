// ProductContext - Global state management
// Provides products array and CRUD functions to all components
// useProducts is a custom hook that simplifies consuming the context
import { createContext, useState, useContext } from 'react'

// Create the context object
const ProductContext = createContext()

export function ProductProvider({ children }) {
  // Global products state shared across all pages
  const [products, setProducts] = useState([])

  // Add a new product to the global state
  function addProduct(newProduct) {
    setProducts([...products, newProduct])
  }

  // Update an existing product by id
  function updateProduct(id, changes) {
    setProducts(products.map(p => p.id === id ? { ...p, ...changes } : p))
  }

  // Remove a product from global state by id
  function deleteProduct(id) {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    // Provide state and functions to all child components
    <ProductContext.Provider value={{ products, setProducts, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

// Custom hook to access ProductContext easily in any component
export function useProducts() {
  return useContext(ProductContext)
}
