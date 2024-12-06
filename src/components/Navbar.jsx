import React from "react";
import CartWidget from "./CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="/src/assets/Matecito.png"
            alt="Logo matecito"
            className="logo"
          />
        </div>

        <div className="links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/tienda" className="nav-link">
            Tienda
          </a>
          <a href="/acerca" className="nav-link">
            Acerca
          </a>
          <a href="/contacto" className="nav-link">
            Contacto
          </a>
        </div>

        <div className="carrito-container">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
