import { Link } from "react-router-dom";
import Item from "./Item";

const ItemList = ({arrayProd}) => {
    
    return <div className="prodCardContainer">{arrayProd.map((productos) => (<Link to={"/item/"+productos.id}><Item key={productos.id} prod={productos}/></Link>))}</div>
}
export default ItemList;