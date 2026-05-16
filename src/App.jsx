
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {
 

  return ( 
    
    <>
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Landing Page</div>} />
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/add" element={<div>Add Product</div>} />
        <Route path="/product/:id" element={<div>Product Detail</div>} />
      </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
