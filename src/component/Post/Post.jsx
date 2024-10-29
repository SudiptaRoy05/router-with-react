import { Link } from "react-router-dom";

export default function Post({post}) {
    const {id, title} = post;
    const userStyle ={
        border : '2px solid tomato',
        padding : '10px',
        margine : '10px',
    }

  return (
    <div style={userStyle}>
        <h4>{id}</h4>
        <p>{title}</p>
        <Link to={`/post/${id}`} >PostDetails</Link>
    </div>
  )
}
