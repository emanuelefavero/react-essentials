import { useState, useMemo } from 'react'

export default function CounterMemo() {
  const [count, setCount] = useState(1)

  // TIP: useMemo is used to prevent unnecessary re-renders
  // TIP: The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function
  const isEven = useMemo(() => {
    console.log('Computing isEven...')
    return count % 2 === 0
  }, [count])

  const buttonStyle =
    'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mr-1 uppercase'

  return (
    <>
      <h2>CounterMemo</h2>
      <p className='text-3xl'>
        {count} is {isEven ? 'Even' : 'Odd'}
      </p>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        className={`${buttonStyle}`}
      >
        Increment
      </button>
    </>
  )
}
