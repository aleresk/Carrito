import CartWidget from "./CartWidget";
const NavBar = () => {
    return(
        <>
        <div className = 'container'>
            <div className ="logo">
                <h1>AR Technology</h1>
            </div>

        <nav>
        <ul>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Desktops</a></li>
            <li><a href="#">Tablets</a></li>
        </ul>
        
    
        </nav>
        <div className="cartWidget">
            <CartWidget cant={11}/>            
        </div>
        </div></>
    )
}

export default NavBar;