import React from "react";

export default function Product({ data, addToCart }) {
  function handleAddToCart() {
    addToCart(data.id);
  }
  return (
    <li>
      <div className="img">
        <img src={data.image} alt={data.name} />
      </div>

      <div className="data">
        <div className="description">
          <span>{data.name} </span>
          <span>precio</span>
          <span className="precio"> {data.price} </span>
        </div>

        <button id="addtocart" className="button" onClick={handleAddToCart}>
          Añadir al Carrito
        </button>
      </div>
    </li>
  );
}
