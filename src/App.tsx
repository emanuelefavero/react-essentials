import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'
import Secret from './pages/Secret'

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
  {
    path: '/blog/:id',
    element: <BlogPost />,
  },

  // * SECRET ROUTE
  {
    path: '/secret',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/secret',
        element: <Secret />,
      },
    ],
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
