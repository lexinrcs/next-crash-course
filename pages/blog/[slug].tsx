import Link from "next/link";
import { useRouter } from "next/router";
import {BiArrowBack} from "react-icons/bi";

export default function Post(props) {
  const router = useRouter()
  return (
    <div className="font-poppins space-y-4">
      <p className="text-xl text-blue-600 hover:underline">
        <Link href="/blog">
          <div className="flex items-center space-x-2"><BiArrowBack />  <small>back to all blog posts</small></div>
        </Link>
      </p>
      <h2 className="text-3xl font-bold">{props.post.title}</h2>
      <p>{props.post.content}</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-900" onClick={() => router.push("/blog")}>
        Click me to programmatically navigate or redirect
      </button>
    </div>
  )
}

export async function getStaticPaths() {
  const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  const data = await response.json()

  const thePaths = data.posts.map(pet => {
    return { params: { slug: pet.slug } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  const data = await response.json()
  const thePost = data.posts.filter(post => post.slug === context.params.slug)[0]

  return {
    props: {
      post: thePost,
      title: thePost.title
    }
  }
}