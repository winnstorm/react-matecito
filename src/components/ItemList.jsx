import Item from "./Item";
import "./ItemList.css";

function ItemList(props) {
  return (
    <div className="container">
      <h2>{props.greeting}</h2>
      <div className="products-grid">
        {props.products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.description}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
