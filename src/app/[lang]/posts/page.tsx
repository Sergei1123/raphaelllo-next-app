import Link from 'next/link'
import { cacheLife } from 'next/cache'

const PostsPage = async () => {
  'use cache'
  cacheLife({
    stale: 0,
    revalidate: 0,
  })

  const date = new Date().toLocaleString('ru-RU')

  return (
    <div>
      <span>{date}</span>
      <Link href="/posts/create">Create Post</Link>
    </div>
  )
}

export default PostsPage