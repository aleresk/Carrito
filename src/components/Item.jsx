const Item = ({prod}) => {
    return <div className="prodCard"><div>{prod.name}</div> <div><img src={prod.url} className="imgCard"alt={prod.name} title={prod.name}/></div><div>Precio: ${prod.price}</div><div>Stock Disponible: {prod.stock}</div></div>
}

export default Item;