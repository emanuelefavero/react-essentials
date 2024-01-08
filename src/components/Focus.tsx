import { useRef, useEffect } from 'react'

export default function Focus() {
  const inputRef = useRef<HTMLInputElement>(null)

  const focus = () => inputRef.current?.focus()
  const blur = () => inputRef.current?.blur()

  // focus on mount
  useEffect(() => {
    focus()
  }, [])

  return (
    <div className='flex flex-col'>
      <h2 className='mb-2'>Focus</h2>
      <input
        ref={inputRef} // ? ref allows you to access the DOM element
        type='text'
        placeholder='Focus here'
        className='
        w-32 mb-2 text-gray-600 p-1 focus:outline-none focus:ring-4 focus:ring-pink-600 focus:border-transparent
      '
      />
      <button onClick={focus} className='bg-green-600 p-1'>
        Focus
      </button>
      <button onClick={blur} className='bg-rose-600 p-1'>
        Blur
      </button>
    </div>
  )
}
