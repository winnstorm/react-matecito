import getAsyncData, { getAsyncItemsByCategory } from "../../getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  console.log("%cRender de ItemListContainer", "color: yellow");
  const { catid } = useParams();

  useEffect(() => {
    if (catid === undefined) {
      const respuestaPromise = getAsyncData();
      console.log(respuestaPromise);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    } else {
      const respuestaPromise = getAsyncItemsByCategory(catid);
      console.log(respuestaPromise);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    }
  }, [catid]); // Agregamos catid como dependencia

  return (
    <div>
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}

export default ItemListContainer;