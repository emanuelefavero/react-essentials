import { useState } from 'react'
import useTodos from '../hooks/useTodos'
import { v4 as uuidv4 } from 'uuid'

export default function ListWithCustomHook() {
  const [text, setText] = useState('')

  // TIP: useTodos is a custom hook
  const { todos, addTodo } = useTodos([
    { id: uuidv4() as string, text: 'Sleep' },
    { id: uuidv4() as string, text: 'Eat' },
    { id: uuidv4() as string, text: 'Work' },
  ])

  return (
    <>
      <h2>ListWithCustomHook</h2>

      {/* Add new todo */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodo(text)
          setText('')
        }}
      >
        <input
          className='text-black py-1 px-2'
          placeholder='Add todo'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='bg-fuchsia-500 py-1 px-2' type='submit'>
          +
        </button>
      </form>

      {/* Todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}
