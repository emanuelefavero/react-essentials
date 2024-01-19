import { useState } from 'react'

interface Data {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    city: string
  }
}

export default function useFetchOnClick() {
  const [data, setData] = useState<Data | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = (url: string) => {
    setLoading(true)
    setError(null)

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }

  return { data, loading, error, fetchData }
}
