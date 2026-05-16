import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'

describe('LandingPage', () => {
  test('renders welcome heading', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Welcome to the Admin Portal/i)).toBeInTheDocument()
  })

  test('renders Browse Products button', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Browse Products/i)).toBeInTheDocument()
  })
})