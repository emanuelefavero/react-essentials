import useCounterStore from '../store/useCounterStore'

interface CounterStore {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

// TIP: Zustand is a state management solution similar to Redux but simpler

export default function ZustandCounter() {
  const { count, increment, decrement, reset } =
    useCounterStore() as CounterStore

  return (
    <>
      <h2>ZustandCounter</h2>
      <p>Count: {count}</p>
      <button
        className='bg-green-600 py-1 px-2 active:bg-green-700'
        onClick={increment}
      >
        Increment
      </button>
      <button
        className='bg-fuchsia-600 py-1 px-2 active:bg-fuchsia-700'
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        className='bg-slate-600 py-1 px-2 active:bg-slate-700'
        onClick={reset}
      >
        Reset
      </button>
    </>
  )
}
