import ItemDetail from "./ItemDetail";
import { useState } from "react";
import { useEffect } from "react"

const ItemDetailContainer = () => {

    const [prod, setProd] = useState();
    useEffect(() => {
        fetch("resources/products.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setProd(data);
        })
    },[]);

    return prod && <ItemDetail prod={prod}/>
}

export default ItemDetailContainer;