import { Link } from 'react-router-dom'

// TIP: In a real application, you would fetch this data from an API
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
  return (
    <>
      <Link to='/' className='text-cyan-400'>
        Go back to Home
      </Link>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
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
