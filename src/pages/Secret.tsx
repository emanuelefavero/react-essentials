import { Link } from 'react-router-dom'

export default function Secret() {
  return (
    <>
      <Link to='/' className='text-cyan-400'>
        Go back to Home
      </Link>
      <h2 className='text-2xl text-green-400 font-bold'>Secret Page!</h2>
      <p className='max-w-sm'>
        Change <span className='text-purple-400'>isAuthenticated</span> to{' '}
        <span className='text-rose-400'>false</span> in{' '}
        <span className='text-amber-400'>hooks/useAuth</span> and this page will
        be hidden
      </p>
    </>
  )
}
