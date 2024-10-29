import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post";

export default function Posts() {
    const posts = useLoaderData();

  return (
    <div>
        <h5>Post: {posts.length}</h5>
        <div>
            {
                posts.map((post) => <Post key={post.id} post={post}></Post>)
            }
        </div>
    </div>
  )
}
