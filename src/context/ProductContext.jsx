import { createContext, useState, useContext } from 'react'

const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])

  function addProduct(newProduct) {
    setProducts([...products, newProduct])
  }

  function updateProduct(id, changes) {
    setProducts(products.map(p => p.id === id ? { ...p, ...changes } : p))
  }

  function deleteProduct(id) {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  return useContext(ProductContext)
}