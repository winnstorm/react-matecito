import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartWidget.css";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const context = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      className="carrito-widget"
      onClick={() => navigate("/cart")}
      style={{ cursor: "pointer" }}
    >
      <img
        src="/src/assets/shopping.png"
        alt="Carrito"
        className="carrito-icon"
      />
      <span className="notificacion">{context.countItemsInCart()}</span>
    </div>
  );
};

export default CartWidget;
