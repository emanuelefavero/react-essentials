import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function User() {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <h2>User</h2>
      <p className='text-purple-400 font-semibold text-2xl'>{user}</p>

      <button
        onClick={() => setUser(user === 'John' ? 'Jane' : 'John')}
        className='bg-green-600 p-1'
      >
        Change User
      </button>
    </div>
  )
}
