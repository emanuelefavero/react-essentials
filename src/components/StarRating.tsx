import { useState } from 'react'
import './StarRating.css' // Assume the CSS is saved in this file

export default function StarRating() {
  const [rating, setRating] = useState(0)
  const [submittedRating, setSubmittedRating] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmittedRating(`Your submitted rating is ${rating}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='star-rating'>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1

          return (
            <label key={index}>
              <input
                type='radio'
                name='rating'
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <span
                style={{
                  color: ratingValue <= rating ? 'gold' : 'gray',
                  fontSize: '2rem',
                  cursor: 'pointer',
                }}
              >
                ★
              </span>
            </label>
          )
        })}
      </div>
      <button
        className='bg-amber-500 py-1 px-2 active:bg-amber-600'
        type='submit'
      >
        Submit
      </button>
      <h2>{rating}</h2>
      <h3>{submittedRating && submittedRating}</h3>
    </form>
  )
}
