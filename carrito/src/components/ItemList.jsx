import Item from "./Item";

const ItemList = ({arrayProd}) => {
    
    return <div className="prodCardContainer">{arrayProd.map((productos) => (<Item prod={productos}/>))}</div>
}
export default ItemList;