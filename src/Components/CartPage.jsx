import React from "react";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

export default function CartPage({ cart, products, onCartChange }) {
  let total = 0;
  let cartIds = Object.keys(cart);
  let cartProducts = products.filter((product) => {
    return cartIds.includes(product.id.toString());
  });
  cartProducts.forEach((product) => {
    total = total + product.price * cart[product.id.toString()];
  });
  const handleQuantityChange = (id, newQuantity) => {
    let newCart = { ...cart, [id]: newQuantity };
    onCartChange(newCart);
  };

  return (
    <main>
      <div>
        <ul id="products" className="cart">
          {Object.keys(cart).length == 0 ? (
            <h1>No hay productos...</h1>
          ) : (
            Object.keys(cart).map((id) => (
              <CartProduct
                onQuantityChange={handleQuantityChange}
                quantity={cart[id]}
                key={id}
                data={products.find((product) => product.id.toString() === id)}
              />
            ))
          )}
        </ul>
      </div>

      <div className="total">
        <span>Total </span>
        <span id="total"> ${total}</span>
      </div>

      <Link to="/Checkout">
        <button id="buybutton" className="button">
          Comprar
        </button>
      </Link>
    </main>
  );
}
