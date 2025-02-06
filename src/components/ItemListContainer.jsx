import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Spinner, Card } from "flowbite-react";
import getAsyncData, { getAsyncItemsByCategory } from "../../database";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catid } = useParams();

  useEffect(() => {
    setLoading(true);
    if (catid === undefined) {
      const respuestaPromise = getAsyncData();
      respuestaPromise
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false);
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
        });
    } else {
      const respuestaPromise = getAsyncItemsByCategory(catid);
      respuestaPromise
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false);
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
        });
    }
  }, [catid]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="xl" aria-label="Cargando productos..." />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {catid
              ? `Categoría: ${catid.charAt(0).toUpperCase() + catid.slice(1)}`
              : "Todos los Productos"}
          </h2>
          {props.greeting && (
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {props.greeting}
            </p>
          )}
        </div>
      </Card>

      {products.length === 0 ? (
        <Card>
          <div className="text-center py-8">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No hay productos disponibles en esta categoría
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <ItemList products={products} />
          </Card>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
