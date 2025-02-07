import { Card, Badge } from "flowbite-react";
import { Link } from "react-router-dom";
import "./ItemList.css";

function ItemList({ products }) {
  const getImageUrl = (imageName) => {
    return `/products/${imageName}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="max-w-sm hover:shadow-lg transition-shadow duration-300"
          imgAlt={product.title}
          imgSrc={getImageUrl(product.img)}
        >
          <Link to={`/item/${product.id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <div className="mt-2.5 mb-5 flex items-center">
              <Badge color="success" className="mr-2">
                Stock: {product.stock}
              </Badge>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default ItemList;
