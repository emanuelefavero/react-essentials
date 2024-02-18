import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

const router = createBrowserRouter([
  // * HOME
  {
    path: '/',
    element: <Home />,
  },

  // * BLOG
  {
    path: '/blog',
    element: <Blog />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
