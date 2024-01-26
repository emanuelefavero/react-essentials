import { useState } from 'react'
import MemoizedButton from './MemoizedButton'

export default function CounterMemo() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <h2>Counter memo</h2>
      <p className='text-3xl'>{count}</p>
      <MemoizedButton increment={increment} />
    </>
  )
}
