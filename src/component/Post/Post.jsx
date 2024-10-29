import { Link, useNavigate } from "react-router-dom";

export default function Post({post}) {
    const {id, title} = post;
    const navigate = useNavigate();
    const userStyle ={
        border : '2px solid tomato',
        padding : '10px',
        margine : '10px',
    }

    const handleShowDetails =()=>{
        navigate(`/post/${id}`)
    }

  return (
    <div style={userStyle}>
        <h4>{id}</h4>
        <p>{title}</p>
        {/* <Link to={`/post/${id}`} >PostDetails</Link> */}
        <button onClick={handleShowDetails}>Click to see details</button>
    </div>
  )
}
