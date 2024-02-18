import { useState, useTransition } from 'react'

export default function UseTransitionHook() {
  const [isPending, startTransition] = useTransition() // * useTransition hook
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)

    // * useTransition hook - startTransition
    // startTransition is a function that takes a callback function as an argument.
    // startTransition is useful when you have a task that might take a long time to complete and is affecting performance
    // startTransition will allow you to delay the rendering of the new state until the task is complete
    // NOTE: only use startTransition when needed since it will double the renders (in this instance there will be a render for setInput and a render for setOutput)
    startTransition(() => {
      const SIZE = 20000
      const list = []

      for (let i = 0; i < SIZE; i++) {
        list.push(e.target.value + i) // adds 20k items to the list
      }

      setOutput(list)
    })
  }

  return (
    <>
      <h2>UseTransitionHook</h2>
      <input
        type='text'
        value={input}
        onChange={handleChange}
        className='text-black'
      />

      {/* isPending allows you to show a loading indicator until the task is complete */}
      {isPending ? 'Loading...' : null}

      <ul>
        {output.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
