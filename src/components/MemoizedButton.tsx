import { memo } from 'react'

interface Props {
  increment: () => void
}

// TIP: memo is used to prevent unnecessary re-renders of a component
// Memoize the button so that it is only created once

export default memo(function MemoizedButton({ increment }: Props) {
  console.log('rendering MemoizedButton')

  const buttonStyle =
    'bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 mr-1 uppercase'

  return (
    <>
      <button onClick={increment} className={`${buttonStyle}`}>
        Increment
      </button>
    </>
  )
})
