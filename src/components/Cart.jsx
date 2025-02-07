import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, removeItem, clear, getTotalPrice } =
    useContext(CartContext);
  const total = getTotalPrice();

  const getImageUrl = (imageName) => {
    return `/products/${imageName}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <div className="border-b pb-3 mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Mi Carrito</h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg mb-4">Tu carrito está vacío</p>
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Comenzar a comprar
            </Link>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="py-6">
                  <div className="flex items-center space-x-6">
                    <img
                      src={getImageUrl(item.img)}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Cantidad: {item.count}
                      </p>
                      <p className="text-gray-800 font-medium mt-1">
                        ${item.price} c/u
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">
                        ${item.price * item.count}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 mt-2"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t mt-6 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold text-gray-800">
                  Total:
                </span>
                <span className="text-2xl text-green-800 font-bold">
                  ${total}
                </span>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={clear}
                  className="text-red-600 hover:text-red-800 font-medium px-4 py-2"
                >
                  Vaciar carrito
                </button>
                <div className="space-x-4">
                  <Link
                    to="/"
                    className="text-blue-600 hover:text-blue-800 font-medium px-4 py-2"
                  >
                    Seguir comprando
                  </Link>
                  <Link
                    to="/checkout"
                    className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Finalizar Compra
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
