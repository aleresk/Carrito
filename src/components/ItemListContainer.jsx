import ItemList from "./ItemList";
import { useState } from "react"
import { useEffect } from "react"

const ProductList = () => {

const [Productos, setProductos] = useState([]);
    useEffect(() => {
        let listaProductos = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve([{id: 1, name: "Laptop Lenovo", price: 2000, url:"media/img/lenovo.webp", stock: 9},
                         {id: 2, name: "Desktop HP", price: 1900, url:"media/img/hp.webp", stock: 14},
                         {id: 3, name: "Tablet Samsung", price: 2300, url:"media/img/tablet.jpg", stock: 21},
                         {id: 4, name: "Smartphone Samsung", price: 2400, url:"media/img/smartphone.png", stock: 8}])
            },2000);

        })
        
        listaProductos.then((resultado) => {
                            setProductos(resultado);
        })

    },[])
    return <div >{Productos && <ItemList arrayProd={Productos}/>}</div>
}
export default ProductList;
