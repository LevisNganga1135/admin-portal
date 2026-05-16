import { renderHook, waitFor } from '@testing-library/react'
import useFetch from '../hooks/useFetch'

global.fetch = jest.fn()

describe('useFetch', () => {
  test('returns data on successful fetch', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: 1, name: 'Lamborghini Huracan' })
    })

    const { result } = renderHook(() => useFetch('http://localhost:3001/products/1'))

    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.data).toEqual({ id: 1, name: 'Lamborghini Huracan' })
  })

  test('returns error on failed fetch', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({})
    })

    const { result } = renderHook(() => useFetch('http://localhost:3001/products/99'))

    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.error).toBe('Failed to fetch')
  })
})