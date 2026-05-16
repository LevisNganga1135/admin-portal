import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const mockProduct = {
  id: 1,
  name: "Lamborghini Huracan",
  price: 248000,
  stock: 3,
  category: "Lamborghini"
}

describe('ProductCard', () => {
  test('renders product name', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    )
    expect(screen.getByText(/Lamborghini Huracan/i)).toBeInTheDocument()
  })

  test('renders product price', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    )
    expect(screen.getByText(/248,000/i)).toBeInTheDocument()
  })

  test('renders View Details button', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    )
    expect(screen.getByText(/View Details/i)).toBeInTheDocument()
  })
})