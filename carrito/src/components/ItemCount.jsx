const ItemCount = ({Stock, Initial, onAdd}) => {
    return(
        <div>
            <p>El stock es: {Stock}</p>
            <p>El initial es: {Initial}</p>
            {onAdd()}
        </div>
    )
}

export default ItemCount;