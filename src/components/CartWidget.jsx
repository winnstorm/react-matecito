import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "./CartWidget.css";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const context = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      className="carrito-widget flex items-center cursor-pointer"
      onClick={() => navigate("/cart")}
    >
      <div className="relative">
        <HiShoppingCart className="h-6 w-6 text-white hover:text-gray-200" />
        {context.countItemsInCart() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {context.countItemsInCart()}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartWidget;
