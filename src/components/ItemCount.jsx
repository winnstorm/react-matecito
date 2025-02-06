import { useState } from "react";
import { Button } from "flowbite-react";
import { HiMinus, HiPlus } from "react-icons/hi";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <Button color="gray" size="sm" onClick={decrement}>
          <HiMinus className="h-4 w-4" />
        </Button>
        <span className="text-xl font-medium text-gray-900 dark:text-white">
          {count}
        </span>
        <Button color="gray" size="sm" onClick={increment}>
          <HiPlus className="h-4 w-4" />
        </Button>
      </div>
      <Button
        gradientDuoTone="purpleToBlue"
        onClick={() => onAdd(count)}
        disabled={!stock}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
