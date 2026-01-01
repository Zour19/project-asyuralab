import { useState, useEffect } from 'react'
import { fetchBlogs } from '../utils/api'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchBlogs().then((data) => { if (mounted) setBlogs(data.slice(0, 10)) }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  return (
    <section>
      <h1 className="text-2xl font-semibold">Blog</h1>
      {loading ? (
        <p className="mt-3 text-gray-600">Loading posts…</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {blogs.map((post) => (
            <article key={post.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-gray-700">{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
