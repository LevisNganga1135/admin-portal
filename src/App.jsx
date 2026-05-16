import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/add" element={<div>Add Product</div>} />
        <Route path="/product/:id" element={<div>Product Detail</div>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

