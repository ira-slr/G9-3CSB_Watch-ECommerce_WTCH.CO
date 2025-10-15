import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ProductListing from "./pages/ProductListing";
import CartCheckout from "./pages/CartCheckout";

function App() {
  // useState ng laman ng cart
  const [cartStorage, setCartStorage] = useState([]);

  //AddToCart

  //RemoveCart

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/products" element={<ProductListing />} /> */}
      <Route path="/cart" element={<CartCheckout />} />
    </Routes>
  );
}

export default App;
