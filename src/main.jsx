// Entry point of the application
// Wraps the app with ProductProvider so all components can access global state
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ProductProvider wraps App so all pages can access product state */}
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>
)
