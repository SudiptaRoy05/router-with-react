
export default function User({user}) {

    const userStyle ={
        border : '2px solid tomato',
        padding : '10px',
        margine : '10px',
    }

    const { name, email, phone } =user
   return (
    <div style={userStyle}>
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{phone}</p>
    </div>
  )
}
