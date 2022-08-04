import { createContext, useState } from "react";

export const cartContainer = createContext();

export default function CartContext({children}){

    const [cart, setCart] = useState([]);

    function addItem(item, quantity){

    }

    function removeItem(itemId){

    }

    function clear(){

    }

    const isInCart = (id) => {

    }

    return <cartContainer.Provider value={cart, setCart, addItem, removeItem, clear, isInCart}>
        {children}
    </cartContainer.Provider>

}