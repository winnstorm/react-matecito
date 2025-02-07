import { Link } from "react-router-dom";
import Button from "./Button";
import "./CardProduct.css";

function Item(props) {
  const { price, title, text, img, id } = props;

  const getImageUrl = (imageName) => {
    return `/products/${imageName}`;
  };

  return (
    <div className="card" style={{ width: "300px", height: "400px" }}>
      <div style={{ height: "130px" }}>
        <img
          src={getImageUrl(img)}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div>
          <p className="card-price">$ {price}</p>
        </div>
        <Link to={`/item/${id}`}>
          <Button>Ver Detalle</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
