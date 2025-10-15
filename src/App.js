import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import CartCheckout from "./pages/CartCheckout";

function App() {
  // useState ng laman ng cart
  const [cartStorage, setCartStorage] = useState([]);

  //AddToCart

  //RemoveCart
  const [cartStorage, setCartStorage] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartCheckout />} />
    </Routes>
  );
}

export default App;
