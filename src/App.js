import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import CartCheckout from "./pages/CartCheckout";

function App() {
  const [cartStorage, setCartStorage] = useState([]);

  const addToCart = (product) => {
    setCartStorage((prevCart) => {
      const existing = prevCart.find((item) => item.model === product.model);
      if (existing) {
        return prevCart.map((item) =>
          item.model === product.model
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartStorage((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route
        path="/products"
        element={<ProductListing addToCart={addToCart} />}
      />

      <Route
        path="/products/:id"
        element={<ProductDetails addToCart={addToCart} />}
      />

      <Route
        path="/cart"
        element={
          <CartCheckout
            cartStorage={cartStorage}
            removeFromCart={removeFromCart}
          />
        }
      />
    </Routes>
  );
}

export default App;
