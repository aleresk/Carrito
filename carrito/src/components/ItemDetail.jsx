const ItemDetail = ({prod}) => {
    
    return <div className="prodDetail">
                <div>
                    <img className="mainPic" src={prod[0].url} alt={prod[0].nombre}/>
                </div>
            <div>
                <div className="classProd">
                    <p className="titulo">Producto:</p>
                    {prod[0].nombre} {prod[0].marca}
                </div>
                <div className="classProd">
                    <p className="titulo">Precio:</p>
                    ${prod[0].precio}
                </div>
                <div className="classProd">
                    <p className="titulo">Stock</p>
                    {prod[0].stock} Disponibles
                </div>
            </div>
            </div>
        
}
export default ItemDetail;