// useFetch - Custom hook for data fetching
// Accepts a URL and returns data, loading state, and error state
// Reusable across any component that needs to fetch data
import { useState, useEffect } from 'react'

function useFetch(url) {
  // Store the fetched data
  const [data, setData] = useState(null)
  // Track loading state to show loading indicator
  const [loading, setLoading] = useState(true)
  // Track any errors during fetch
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => {
        // Throw error if response is not ok
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then(data => {
        // Store fetched data and stop loading
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        // Store error message and stop loading
        setError(err.message)
        setLoading(false)
      })
  }, [url]) // Re-fetch whenever url changes

  return { data, loading, error }
}

export default useFetch
