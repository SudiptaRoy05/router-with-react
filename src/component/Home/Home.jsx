import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  const navigation = useNavigation();
  const location = useLocation()
  console.log(location);
  return (
    <div style={{ 'margin-left':'50px'}}>
        <Header></Header>
        <h3>Hii welcome HOME</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eum laboriosam ipsum accusantium perspiciatis quia.</p>
        
        {
          navigation.state === 'loading' ? <p>loading...</p>:<Outlet></Outlet>
        }
       
        
       
        <Footer></Footer>
    </div>
  )
}
