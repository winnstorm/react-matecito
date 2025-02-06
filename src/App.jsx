import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./components/CartContext";
import Checkout from "./components/Checkout";
import CustomFooter from "./components/Footer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
            }
          />
          <Route
            path="/category/:catid"
            element={<ItemListContainer greeting="Compras por categoría" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      <CustomFooter />
    </CartContextProvider>
  );
}

export default App;
