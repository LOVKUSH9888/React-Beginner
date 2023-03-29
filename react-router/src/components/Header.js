import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <header>
        <Link to="/" className="logo">
          <img src={Logo} alt="Routemate Logo" />
          <span>Routemate</span>
        </Link>
        <nav className="navigation">
          <NavLink to="/" className="link" end>
            Home
          </NavLink>
          <NavLink to="/products" className="link">
            Products
          </NavLink>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </nav>
      </header>
    </header>
  );
};

export default Header;
