import { useLoaderData } from "react-router-dom"

export default function UserDetails() {
    const user = useLoaderData();
    const{name, email, phone}=user;
    return (
    <div>
        <h4>NAME : {name}</h4>
        <p>{email}</p>
        <p>{phone}</p>
    </div>
  )
}
