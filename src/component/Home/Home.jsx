import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Home() {
  return (
    <div style={{ 'margin-left':'50px'}}>
        <Header></Header>
        <h3>Hii welcome HOME</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque earum corrupti! Aut perferendis illo saepe eveniet similique repellendus, molestiae, iure facilis excepturi culpa eligendi? Non consectetur cupiditate ullam in!</p>
        <Outlet></Outlet>
    </div>
  )
}
