import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

// TIP: In a real application, you would fetch this data from an API by passing the id to a function
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

export default function BlogPost() {
  const { id } = useParams()
  const post = posts.find((post) => post.id === Number(id)) // TIP: This method replaces fetching the data from an API

  return (
    <>
      <Link to='/blog' className='text-cyan-400'>
        Go back to Blog
      </Link>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </>
  )
}
