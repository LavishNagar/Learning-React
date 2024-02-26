import { Logo_Cdn_url } from "../constants";

export const Header=()=>(
    <div className="header">
  <Title/>
  <ul className="nav-items">
    <li>Home</li>
    <li>About</li>
    <li>Contact us</li>
    <li>Cart</li>
  </ul>
  </div>
    
)

const Title = () => (
    //for reloading by on click on logo
    <a href="/">  
  <img alt="Title or logo image" src={Logo_Cdn_url} width={"100px"} height={"80px"}/>
    </a>
  )