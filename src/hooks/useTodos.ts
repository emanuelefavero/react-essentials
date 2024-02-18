import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Todo {
  id: string
  text: string
}

export default function useTodos(initialTodos: Todo[]) {
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: uuidv4() as string,
        text,
      },
    ])
  }

  return {
    todos,
    addTodo,
  }
}
