import React, { useState } from 'react'

export default function Autocomplete() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const fetchSuggestions = (query: string) => {
    if (query === '') return []

    const suggestions = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']

    return suggestions.filter((suggestion) => {
      return suggestion.toLowerCase().startsWith(query.toLowerCase())
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setQuery(value)
    const newSuggestions = fetchSuggestions(value)
    setSuggestions(newSuggestions)
  }

  const handleSelect = (value: string) => {
    setQuery(value)
    setSuggestions([])
  }

  return (
    <>
      <h2>Autocomplete</h2>

      <input
        className='text-slate-600 focus:ring-4 focus:ring-indigo-500 focus:outline-none'
        type='text'
        value={query}
        onChange={handleChange}
        placeholder='Type a fruit'
      />

      <ul>
        {suggestions.map((suggestion, index) => (
          <li
            className='text-white text-2xl'
            key={index}
            onClick={() => handleSelect(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </>
  )
}
