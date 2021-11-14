import React from "react";
import { Link } from "react-router-dom";

export default function Header({ cart }) {
  let cartTotal = Object.keys(cart).length;

  return (
    <header>
      <a href="principal.html">
        <img src="./assets/logo.jpg" alt="logo empresa" />
      </a>

      <ul>
        <Link to="/">
          <li className="nav-item">Inicio</li>
        </Link>

        <li className="nav-item">
          <Link to="/cart">
            Carrito {cartTotal > 0 && <span id="carttotal"> {cartTotal}</span>}
          </Link>
        </li>
      </ul>
    </header>
  );
}
