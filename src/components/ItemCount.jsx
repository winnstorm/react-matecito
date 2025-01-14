import React, { useState } from "react";

const ItemCount = ({ stock, inicial, agregar }) => {
  const [count, setCount] = useState(inicial);

  const subeStock = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const bajarStock = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
    <div>
      <button onClick={bajarStock}>-</button>
      <input type="text" value={count} readOnly />
      <button onClick={subeStock}>+</button>
    </div>
    <div>
      <button onClick={() => agregar(count)}>Agregar al carrito</button>
    </div>
    </>
  );
};

export default ItemCount;
