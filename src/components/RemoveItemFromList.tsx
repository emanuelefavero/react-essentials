import { useState } from 'react'

export default function RemoveItemFromList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  const removeItem = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove))
  }

  return (
    <>
      <h2>RemoveItemFromList</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index} className='mb-2'>
            {item}
            <button
              className='bg-rose-600 text-white ml-2 px-1 py-1'
              onClick={() => removeItem(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
