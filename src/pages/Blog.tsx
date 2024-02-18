import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
      <h2>Blog</h2>
      <Link to='/' className='text-cyan-400'>
        Go back to Home
      </Link>
    </>
  )
}
