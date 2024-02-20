import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Link to='/' className='text-cyan-400'>
        Go back to Home
      </Link>

      <h1
        className='
        text-4xl
        text-center
        text-slate-400
        font-bold
      '
      >
        404
      </h1>
      <p
        className='
        text-center
        text-2xl
        text-slate-400
        font-bold
      '
      >
        Not Found
      </p>
    </>
  )
}
