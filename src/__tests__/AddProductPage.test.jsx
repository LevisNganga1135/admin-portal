import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AddProductPage from '../pages/AddProductPage'
import { ProductProvider } from '../context/ProductContext'

describe('AddProductPage', () => {
  test('renders form fields', () => {
    render(
      <MemoryRouter>
        <ProductProvider>
          <AddProductPage />
        </ProductProvider>
      </MemoryRouter>
    )
    expect(screen.getByPlaceholderText(/Lamborghini Urus/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/250000/i)).toBeInTheDocument()
  })

  test('shows validation errors when form is empty', () => {
    render(
      <MemoryRouter>
        <ProductProvider>
          <AddProductPage />
        </ProductProvider>
      </MemoryRouter>
    )
    fireEvent.click(screen.getByText(/Add Supercar/i))
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument()
  })
})