import React from "react";

export default function CartProduct({ data, quantity, onQuantityChange }) {
  const handleQuantityChange = (e) => {
    onQuantityChange(data.id, e.target.value);
  };
  return (
    <li>
      <div className="img">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="description">
        <span>{data.name} </span>
        <span className="precio"> precio ${data.price} </span>
      </div>
      <input
        className="amount"
        type="number"
        min="0"
        value={quantity}
        onChange={handleQuantityChange}
      />
    </li>
  );
}
