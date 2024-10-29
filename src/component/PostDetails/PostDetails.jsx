import { useLoaderData } from "react-router-dom"

export default function PostDetails() {
    const post = useLoaderData();
    const {id, title, body}=post;
    const userStyle ={
        border : '2px solid tomato',
        padding : '10px',
        margine : '10px',
    }

  return (
    <div style={userStyle}>
        <h6>{id}</h6>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  )
}
