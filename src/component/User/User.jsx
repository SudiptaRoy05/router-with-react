import { Link } from "react-router-dom"

export default function User({user}) {

    const userStyle ={
        border : '2px solid tomato',
        padding : '10px',
        margine : '10px',
    }

    const {id, name } =user
   return (
    <div style={userStyle}>
        <h4>{name}</h4>
        <Link to={`/user/${id}`}>Show Data</Link>
    </div>
  )
}
