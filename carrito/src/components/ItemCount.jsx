import { useState } from "react";

const ItemCount = ({Stock, Initial, onAdd}) => {
    
    const [auxStock, setauxStock] = useState(Stock);
    const [auxIntial, setauxInitial] =useState(Initial);

    
    return(
        <div>
            <p>El stock es: {Stock}</p>
            <p>El initial es: {Initial}</p>
            {onAdd()}
        </div>
    )
}

export default ItemCount;