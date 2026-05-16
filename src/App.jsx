import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'
import AddProductPage from './pages/AddProductPage'
import ProductDetail from './pages/ProductDetail'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/add" element={<AddProductPage/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

