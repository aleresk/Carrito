//@ts-check
import ItemDetail from "./ItemDetail";
import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [prod, setProd] = useState();
    let {idItem} = useParams();
    useEffect(() => {
        
        const db = getFirestore();
        
        const auxItem = doc(db, "products", idItem);
            
        getDoc(auxItem).then((snapshot) => {
            const item = snapshot.data();
            item.id = snapshot.id;
            console.log(item);
            setProd(item)
            

        });
    },[idItem]);

    return prod && <ItemDetail prod={prod}/>
}

export default ItemDetailContainer;