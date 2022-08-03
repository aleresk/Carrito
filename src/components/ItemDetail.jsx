//@ts-check
import ItemCount from "./ItemCount";

const onAdd = () => {
    return alert("Presionaste el botón Agregar al Carrito")
}

const ItemDetail = ({prod}) => {
    
    return <div className="prodDetail">
                <div>
                    <img className="mainPic" src={prod.url} alt={prod.nombre}/>
                </div>
            <div>
                <div className="classProd">
                    <p className="titulo">Producto:</p>
                    {prod.nombre} {prod.marca}
                </div>
                <div className="classProd">
                    <p className="titulo">Precio:</p>
                    ${prod.price}
                </div>
                <div className="classProd">
                    <p className="titulo">Stock</p>
                    {prod.stock} Disponibles
                </div>
                <ItemCount Stock={5} Initial={1} onAdd={onAdd}/>
            </div>
            
            </div>

    
}
export default ItemDetail;