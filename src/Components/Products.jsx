import React, { useState } from "react";
import Product from "./Product";

export default function Products({ addToCart, products }) {
  const [filter, setFilter] = useState("");
  const filteredProducts = products.filter(
    (product) => product.category == filter || filter == ""
  );
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <div className="top">
        <h1>Productos</h1>

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Todos</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
