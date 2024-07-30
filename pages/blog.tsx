import Link from "next/link"

export default function Blog({posts}) {
  return (
    <div className="font-poppins space-y-8">
      <h1 className="text-4xl font-bold">The Blog</h1>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h3>
              <Link className="text-blue-600 font-semibold text-2xl hover:underline" href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  const data = await response.json()

  return {
    props: {
      posts: data.posts
    }
  }
}