const Item = ({prod}) => {
    return <div>id {prod.id} nombre: {prod.name} precio: {prod.price} <img src={prod.url} alt={prod.name} title={prod.name}/> Stock Disponible: {prod.stock}</div>
}

export default Item;