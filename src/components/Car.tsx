import { useState } from 'react'

interface Car {
  brand: string
  model: string
  color: 'red' | 'blue'
}

export default function Car() {
  const [car, setCar] = useState<Car>({
    brand: 'Toyota',
    model: 'Yaris',
    color: 'red',
  })

  const changeColor = () => {
    // TIP: By passing prev as a parameter to the setCar function, you can access the previous state so only color is updated
    setCar((prev) => {
      return {
        ...prev,
        color: prev.color === 'red' ? 'blue' : 'red',
      }
    })
  }

  return (
    <div>
      <h2>
        {car.brand} {car.model}
      </h2>
      <p className='text-4xl'>{car.color === 'red' ? '🚗' : '🚙'}</p>
      <button
        type='button'
        onClick={changeColor}
        className='bg-slate-700 text-white p-1'
      >
        Change Color
      </button>
    </div>
  )
}
