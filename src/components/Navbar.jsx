import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";

function NavBar() {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path
      ? "text-blue-600 font-medium"
      : "text-gray-700 hover:text-blue-600";
  };

  return (
    <div className="mb-8">
      <Navbar
        fluid
        className="fixed w-full z-50 top-0 left-0 border-b bg-white shadow-sm py-4"
      >
        <Navbar.Brand as={Link} to="/">
          <img
            src="/src/assets/Matecito.png"
            className="mr-3 h-8 sm:h-9"
            alt="Logo"
          />
        </Navbar.Brand>

        <div className="flex md:order-2 gap-4 items-center">
          <CartWidget />
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="md:mx-8">
          <Navbar.Link
            as={Link}
            to="/"
            className={`${isActiveLink(
              "/"
            )} transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50`}
          >
            Inicio
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/category/mates"
            className={`${isActiveLink(
              "/category/mates"
            )} transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50`}
          >
            Mates
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/category/yerba"
            className={`${isActiveLink(
              "/category/yerba"
            )} transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50`}
          >
            Yerba
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/category/accesorios"
            className={`${isActiveLink(
              "/category/accesorios"
            )} transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50`}
          >
            Accesorios
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
