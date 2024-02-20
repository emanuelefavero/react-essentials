import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// TIP: In real world, you would fetch this data from an API
const posts = [
  {
    id: 1,
    title: 'Blog Post 1',
    content: 'This is the first blog post',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content: 'This is the second blog post',
  },
  {
    id: 3,
    title: 'Blog Post 3',
    content: 'This is the third blog post',
  },
]

export default function Blog() {
  const [searchResults, setSearchResults] = useState(posts)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const searchQuery = queryParams.get('search') // assuming the query param is named 'search'

    if (searchQuery) {
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(filteredPosts)
    } else {
      setSearchResults(posts)
    }
  }, [location.search])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    navigate(`?search=${searchValue}`)
  }

  return (
    <>
      <Link to='/' className='text-cyan-400'>
        Go back to Home
      </Link>
      <h1>Blog</h1>
      <input
        type='text'
        placeholder='Search posts...'
        onChange={handleSearch}
        className='p-1 text-black'
      />
      <ul>
        {searchResults.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className='text-cyan-400'>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
