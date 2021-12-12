import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./Components/CartPage";
import Login from "./Components/Login";
import NewUser from "./Components/NewUser";
function App() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8020/products")
      .then((response) => response.json())
      .then((data) => {
        setHasError(false);
        setProducts(data);
      })
      .catch((e) => {
        setHasError(true);
      });
  }, []);

  const [user, setUser] = useState();

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState({});

  function addToCart(id) {
    const newCart = { ...cart, [id]: cart[id] ? cart[id] + 1 : 1 };
    setCart(newCart);
  }

  return (
    <Router>
      <div>
        <Header cart={cart} user={user} />
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
                  user={user}
                />
              </Route>

              <Route path="/newuser">
                <NewUser />
              </Route>

              <Route path="/login">
                <Login setUser={setUser} />
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
