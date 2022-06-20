import cartLogo from './../logo_cart.png';
const CartWidget = ({cant}) => {
    return (
    <div className='carro'>
        <img src={cartLogo} className="cartLogo" alt='AR Technology' title='AR Technology'/>
        <p>{cant}</p>
    </div>
    ) 
}

export default CartWidget;