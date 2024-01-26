import { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer'

// TIP: This counter uses a reducer to manage state

export default function CounterUseReducer() {
  const [state, dispatch] = useReducer(counterReducer, 0)

  const buttonStyle =
    'bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 mr-1 uppercase'

  return (
    <div className='flex justify-center items-center'>
      <h1 className='mr-2'>Counter useReducer: </h1>
      <p className='text-3xl mr-2 text-indigo-300'>{state}</p>
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className={`${buttonStyle}`}
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className={`${buttonStyle}`}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className={`${buttonStyle}`}
      >
        Reset
      </button>
    </div>
  )
}
