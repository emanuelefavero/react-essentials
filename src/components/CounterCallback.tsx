import { useState, useCallback } from 'react'

export default function CounterCallback() {
  const [count, setCount] = useState(0)

  // TIP: useCallback is used to prevent unnecessary re-renders
  // Memoize the increment function so that it is only created once
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  const buttonStyle =
    'bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 mr-1 uppercase'

  return (
    <>
      <h2>CounterCallback</h2>
      <p className='text-3xl'>{count}</p>
      <button onClick={increment} className={`${buttonStyle}`}>
        Increment
      </button>
    </>
  )
}
