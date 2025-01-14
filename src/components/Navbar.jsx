import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
          <img
            src="/src/assets/Matecito.png"
            alt="Logo matecito"
            className="logo"
          />
          </Link>
        </div>

        <div className="links">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/category/mates">Mates</NavLink>
          <NavLink to="/category/yerba">Yerba</NavLink>
          <NavLink to="/category/accesorios">Accesorios</NavLink>
        </div>

        <div className="carrito-container">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
