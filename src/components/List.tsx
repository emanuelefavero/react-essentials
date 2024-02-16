import { useState } from 'react'

export default function RemoveItemFromList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])
  const [newItem, setNewItem] = useState('')

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem])
      setNewItem('')
    } else {
      alert('Please enter a value')
    }
  }

  const removeItem = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove))
  }

  return (
    <>
      <h2>List</h2>

      {/* Add new item */}
      <form
        data-testid='list-form'
        className='mb-4'
        onSubmit={(e) => {
          e.preventDefault()
          addItem()
        }}
      >
        <input
          data-testid='list-input'
          className='text-slate-600 px-2 py-1 mr-2 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent'
          type='text'
          placeholder='new item...'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className='bg-green-600 text-white px-2 py-1' type='submit'>
          +
        </button>
      </form>

      <ul data-testid='list'>
        {items.map((item, index) => (
          <li key={index} className='mb-2'>
            {item}
            <button
              data-testid='list-remove-item-button'
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
