import { useState, useEffect, useRef } from 'react'

export default function OffCanvas() {
  const [show, setShow] = useState(false)
  const offCanvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Function to handle click event
    const handleClickOutside = (event: MouseEvent) => {
      if (
        offCanvasRef.current &&
        !offCanvasRef.current.contains(event.target as Node)
      ) {
        setShow(false)
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      // Remove event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [offCanvasRef])

  return (
    <>
      <div className='py-4'>
        {/* Button to open the off canvas */}
        <button
          onClick={() => setShow(!show)}
          className='bg-purple-600 hover:bg-purple-700 text-white py-2 px-4'
        >
          {show ? 'Close Off Canvas' : 'Open Off Canvas'}
        </button>

        {/* Off Canvas */}
        <div
          ref={offCanvasRef}
          className={`fixed top-0 left-0 w-64 h-full text-left p-4 bg-white text-black shadow-lg transform ease-in-out transition-all duration-300 ${
            show ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            className='p-2 text-red-500 font-bold text-xl absolute top-0 right-0'
            onClick={() => setShow(false)}
          >
            X
          </button>
          <h2 className='font-bold'>Off Canvas</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            similique.
          </p>
        </div>
      </div>
    </>
  )
}
