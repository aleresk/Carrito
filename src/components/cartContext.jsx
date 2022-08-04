import React from "react";
import { createContext, useState } from "react";

export const cartContext = createContext();

export default function cartContext({children}){

    const [cart, setCart] = useState([]);

    function addItem(item, quantity){

    }

    function removeItem(itemId){

    }

    function clear(){

    }

    const isInCart = (id) => {
        
    }

}