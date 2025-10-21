import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage.js";
import ProductDetails from "./pages/ProductDetails.js";
import CartCheckout from "./pages/CartCheckout.js";
import ProductListing from "./pages/ProductListing.js";

function App() {
  // useState ng laman ng cart
  const [cartStorage, setCartStorage] = useState([])

  //AddToCart

  //RemoveCart

  return (
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Added other placeholder routes for a full e-commerce flow */}
      </Routes>
  );
}

export default App;
