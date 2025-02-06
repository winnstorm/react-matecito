import { useState, useEffect } from "react";
import { getAsyncItemById } from "../../database";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      const data = await getAsyncItemById(id);
      setItem(data);
      setLoading(false);
    }
    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
