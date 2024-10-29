import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div style={{ 'margin-left':'50px'}}>
        <Header></Header>
        <h3>Hii welcome HOME</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eum laboriosam ipsum accusantium perspiciatis quia.</p>
        
        <Outlet></Outlet>
       
        <Footer></Footer>
    </div>
  )
}
