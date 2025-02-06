import { createContext, useState } from "react";

export const CartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function getTotalItems() {
    return cartItems.reduce((total, item) => total + item.count, 0);
  }

  function getTotalPrice() {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  }

  function removeItem(id) {
    if (!id) return;
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }

  function addItem(item, quantity) {
    if (!item || !quantity || quantity <= 0) {
      console.warn("Datos inválidos para agregar al carrito:", {
        item,
        quantity,
      });
      return;
    }

    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity)) {
      console.warn("Cantidad inválida:", quantity);
      return;
    }

    if (isInCart(item.title)) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.title === item.title) {
          return {
            ...cartItem,
            count: cartItem.count + parsedQuantity,
          };
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    } else {
      const newItem = {
        id: item.id,
        title: item.title,
        img: item.img,
        count: parsedQuantity,
        price: item.price,
        stock: item.stock,
      };

      setCartItems([...cartItems, newItem]);
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  function countItemsInCart() {
    return cartItems.reduce((total, item) => total + item.count, 0);
  }

  function isInCart(identifier) {
    if (!identifier) return false;
    return cartItems.some((item) => item.id === identifier);
  }

  function hasEnoughStock(itemId, quantity) {
    const item = cartItems.find((item) => item.id === itemId);
    if (!item) return true;
    return item.stock >= item.count + quantity;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
        clearCart,
        isInCart,
        getTotalItems,
        hasEnoughStock,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
