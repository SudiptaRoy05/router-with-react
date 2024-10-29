import { useLoaderData } from "react-router-dom"
import User from "../User/User";

export default function Users() {
    const users = useLoaderData();

  return (
    <div>
        <h3>See our users : {users.length}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequatur nisi adipisci incidunt quod deleniti fugit.</p>
        <div>
            {
                users.map((user,idx) => <User key={idx} user={user}></User>)
            }
        </div>
    </div>
  )
}
