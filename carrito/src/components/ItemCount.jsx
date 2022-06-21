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
        <div>
            <div className="cantProd">
                <div ><button onClick={() => disminuirStock()}> - </button></div> <div>{auxStock}</div><div ><button onClick={() => aumentarStock()}> + </button></div>
            </div>
            <div>
                <button onClick={() => onAdd()}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;