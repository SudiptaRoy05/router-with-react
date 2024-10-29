import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <nav >
            <Link style={{'margin-right':'20px'}} to="/">Home</Link>
            <Link style={{'margin-right':'20px'}} to="/about">About</Link>
            <Link style={{'margin-right':'20px'}} to="/contact">Contact</Link>
            <Link style={{'margin-right':'20px'}} to="/users">Users</Link>
        </nav>
    </div>
  )
}
