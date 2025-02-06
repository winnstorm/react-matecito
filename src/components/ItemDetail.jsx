import { useContext, useState } from "react";
import { Card, Button, Badge, Spinner } from "flowbite-react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    if (cantidad && cantidad > 0) {
      setCantidadAgregada(cantidad);
      addItem(item, parseInt(cantidad));
    }
  };

  if (!item) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <Badge color="success" size="lg">
              Stock disponible: {item.stock || 0}
            </Badge>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              ${item.price ? item.price.toFixed(2) : "0.00"}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>

            {cantidadAgregada === 0 ? (
              <ItemCount
                stock={parseInt(item.stock) || 0}
                initial={1}
                onAdd={handleOnAdd}
              />
            ) : (
              <div className="space-y-4">
                <p className="text-green-600 font-medium">
                  ¡Se agregaron {cantidadAgregada} unidades al carrito!
                </p>
                <div className="space-x-4">
                  <Link to="/cart">
                    <Button gradientDuoTone="purpleToBlue">
                      Terminar compra
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button color="gray">Seguir comprando</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ItemDetail;
