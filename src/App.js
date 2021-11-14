import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./Components/CartPage";
import Checkout from "./Components/Checkout";
function App() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        setHasError(false);
        setProducts(data);
      })
      .catch((e) => {
        setHasError(true);
      });
  }, []);

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState({});

  function addToCart(id) {
    const newCart = { ...cart, [id]: cart[id] ? cart[id] + 1 : 1 };
    setCart(newCart);
  }

  return (
    <Router>
      <div>
        <Header cart={cart} />
        <main>
          {hasError ? (
            <h1>Error no se pudo cargar</h1>
          ) : products.length == 0 ? (
            <h1>Cargando...</h1>
          ) : (
            <Switch>
              <Route path="/cart">
                <CartPage
                  onCartChange={setCart}
                  products={products}
                  cart={cart}
                />
              </Route>

              <Route path="/checkout">
                <Checkout />
              </Route>

              <Route path="/">
                <Products products={products} addToCart={addToCart} />
              </Route>
            </Switch>
          )}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
