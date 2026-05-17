// Main App component
// Sets up client side routing using react-router-dom
// Defines all 4 routes for the application
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'
import AddProductPage from './pages/AddProductPage'
import ProductDetail from './pages/ProductDetail'


function App() {
  return (
    <BrowserRouter>
      {/* Navbar is always visible on every page */}
      <Navbar />
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<LandingPage />} />
        {/* Products list route with search */}
        <Route path="/products" element={<ProductPage />} />
        {/* Add new product form route */}
        <Route path="/add" element={<AddProductPage />} />
        {/* Product detail route - id is dynamic */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

