//@ts-check
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <>
        <div className = 'container'>
            <div className ="logo">
                <h1><Link to={"/"}>AR Technology</Link></h1>
            </div>

        <nav>
        <ul>
            <li><Link to={"/category/Laptop"}>Laptops</Link></li>
            <li><Link to={"/category/Desktop"}>Desktops</Link></li>
            <li><Link to={"/category/Tablet"}>Tablets</Link></li>
        </ul>
        
    
        </nav>
        <div className="cartWidget">
            <CartWidget cant={11}/>            
        </div>
        </div></>
    )
}

export default NavBar;