import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function ProtectedRoute() {
  const isAuthenticated = useAuth() // useAuth is a custom hook that returns a boolean

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to='/login' replace />
  }

  return <Outlet /> // Continue rendering the child routes if authenticated
}
