import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({Stock, Initial, onAdd}) => {
    
    const [auxStock, setAuxStock] = useState(Stock);
    const [auxIntial, setAuxInitial] =useState(Initial);

    useEffect(() => {
        setAuxStock(auxIntial);
    },[])
    

    const aumentarStock = () => {
            
        auxStock < Stock ? setAuxStock(auxStock + 1) : setAuxStock(auxStock)
    }

    const disminuirStock = () => {
        auxStock >= Initial ? setAuxStock(auxStock - 1) : setAuxStock(auxStock)  
    }

    return(
        <div className="contCarrito">
            <div className="cantProd">
                <div ><button className="botonSuma" onClick={() => disminuirStock()}> - </button></div> <div>{auxStock}</div><div ><button className="botonSuma" onClick={() => aumentarStock()}> + </button></div>
            </div>
            <div>
                <button className="botonAgregarCarrito" onClick={() => onAdd()}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;