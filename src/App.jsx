import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="content">
        <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
      </div>
    </>
  );
}

export default App;
