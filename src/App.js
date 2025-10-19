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
    setCartStorage((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartStorage((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartStorage([]);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route
        path="/products/:id"
        element={<ProductDetails addToCart={addToCart} />}
      />
      <Route
        path="/cart"
        element={
          <CartCheckout
            cartItems={cartStorage}
            setCartItems={setCartStorage}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        }
      />
    </Routes>
  );
}

export default App;
