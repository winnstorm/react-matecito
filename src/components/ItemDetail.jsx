import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail(props) {
  const { price, title, description, text, img } = props;

  return (
    <div className="">
      <img src={img} width="150" height="150" alt="product img" />
      <div className="">
        <h3 className="titulo">{title}</h3>
        <p className="detalle">{text}</p>
        <div>
          <p className="precio">$ {price}</p>
        </div>
        <p className="descripcion">{description}</p>
        <ItemCount stock={10} inicial={1} />
      </div>
      <div>
        <p>Productos similares</p>
        <Link to="/item/10">Producto 10</Link>
      </div>
    </div>
  );
}

export default ItemDetail;
