//@ts-check
import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({ Stock, Initial, onAdd }) => {

    //CONVIERTO LAS PROP A ESTADOS
    const [auxStock, setAuxStock] = useState(Stock);
    const [auxIntial, setAuxInitial] = useState(Initial);

    //ESTABLEZCO EL VALO EN INICIAL EN EL PRIMER MONTAJE
    useEffect(() => {
        setAuxStock(auxIntial);
    }, [])

    //FUNCION PARA INCREMENTAR EL STOCK, CONDICIONADO POR EL MAXIMO STOCK CON OPERADORES TERNARIOS
    const aumentarStock = () => {

        auxStock < Stock && setAuxStock(auxStock + 1)
    }

    //FUNCION PARA RESTAR EL STOCK, CONDICIONADO POR EL INITIAL STOCK CON OPERADORES TERNARIOS
    const disminuirStock = () => {
        auxStock > Initial && setAuxStock(auxStock - 1)
    }

    return (
        <div className="contCarrito">
            <div className="cantProd">
                <div ><button className="botonSuma" onClick={() => disminuirStock()}> - </button></div> <div>{auxStock}</div><div ><button className="botonSuma" onClick={() => aumentarStock()}> + </button></div>
            </div>
            <div>
                <button className="botonAgregarCarrito" onClick={() => onAdd(auxStock)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;