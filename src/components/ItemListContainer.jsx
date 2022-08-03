//@ts-check
import ItemList from "./ItemList";
import { useState } from "react"
import { useEffect } from "react"
import { collection, getDocs, query, getFirestore, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [Productos, setProductos] = useState([]);
    let {idCategory} = useParams();
    console.log(idCategory);
    
    useEffect(() => {
        
        const db = getFirestore();
        
        if (!idCategory){
            const items = query(collection(db, "products"));
            
            getDocs(items).then((snapshot) => {
                const auxArray = snapshot.docs.map((item) => ({ ...item.data(), id: item.id}));
                console.log("Los productos son: " + snapshot.size);
                console.log(auxArray);
                setProductos(auxArray);

            });
            }else{
            const items = query(collection(db, "products"), where("nombre", "==", idCategory));
            getDocs(items).then((snapshot) => {
                const auxArray = snapshot.docs.map((item) => ({ ...item.data(), id: item.id}));
                console.log("Las items son: " + snapshot.size);
                console.log(auxArray);
                setProductos(auxArray);

            });
        }
        
        
    }, [idCategory])
    return <div >{Productos && <ItemList arrayProd={Productos} />}</div>
}
export default ItemListContainer;
