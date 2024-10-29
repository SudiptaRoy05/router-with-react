import { NavLink } from "react-router-dom";
import './Header.css'
export default function Header() {
  return (
    <div>
        <nav >
            <NavLink style={{'margin-right':'20px'}} to="/">Home</NavLink>
            <NavLink style={{'margin-right':'20px'}} to="/about">About</NavLink>
            <NavLink style={{'margin-right':'20px'}} to="/contact">Contact</NavLink>
            <NavLink style={{'margin-right':'20px'}} to="/users">Users</NavLink>
            <NavLink style={{'margin-right':'20px'}} to="/posts">Posts</NavLink>
        </nav>
    </div>
  )
}
