import { useLoaderData, useNavigate } from "react-router-dom"

export default function PostDetails() {
    const post = useLoaderData();
    const {id, title, body}=post;
    const userStyle ={
        border : '2px solid tomato',
        padding : '10px',
        margine : '10px',
    }
    const navigate = useNavigate();
    const handleGoBackBtn = () =>{
        navigate(-1)
    }

  return (
    <div style={userStyle}>
        <h6>{id}</h6>
        <h3>{title}</h3>
        <p>{body}</p>
        <button onClick={handleGoBackBtn}>Go back</button>
    </div>
  )
}
