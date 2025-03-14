import React, { useState } from "react";
import logo from "../images/logo-m.png";
import { LuShoppingCart, LuMenu, LuX } from "react-icons/lu";
import "../styles/Navbar.css";
import { Services } from "./ServicesNavbar";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo fisioterapeuta M" id="logo" />
        </Link>
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <LuX size={30} /> : <LuMenu size={30} />}
      </div>

      <div className={`filter-products-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <Services onItemClick={() => setIsMobileMenuOpen(false)} />
        <Link to="/Contact" onClick={() => setIsMobileMenuOpen(false)}>
          <p>Contacto</p>
        </Link>
        <Link to="/AboutMe" onClick={() => setIsMobileMenuOpen(false)}>
          <p>Nosotros</p>
        </Link>
      </div>

      <div className="cart-container">
        <Link to="/cart" className="cart-link">
          <LuShoppingCart className="carrito" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
}