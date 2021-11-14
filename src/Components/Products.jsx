import React, { useState } from "react";
import Product from "./Product";

export default function Products({ addToCart, products }) {
  const [filter, setFilter] = useState("");

  const filterProducts = products.filter(
    (product) => product.category == filter || filter == ""
  );

  return (
    <div>
      <div className="top">
        <h1>Productos</h1>

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Todos</option>
          <option value="juguetes">Juguetes</option>
          <option value="mordillos">Mordillos</option>
          <option value="baberos">Baberos</option>
          <option value="muselinas">Muselinas</option>
          <option value="portachupetes">Portachupetes</option>
          <option value="chuprtes">Chupetes</option>
          <option value="vasos">Vasos</option>
          <option value="rebozos">Rebozos</option>
          <option value="platos">Platos</option>
        </select>
      </div>

      <div className="products">
        {filterProducts.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
