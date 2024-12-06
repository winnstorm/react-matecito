import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="carrito-widget">
      <img
        src="/src/assets/shopping.png"
        alt="Carrito"
        className="carrito-icon"
      />
      <span className="notificacion">5</span>
    </div>
  );
};

export default CartWidget;
