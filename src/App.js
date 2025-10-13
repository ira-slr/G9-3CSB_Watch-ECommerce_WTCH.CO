import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CartCheckout from "./pages/CartCheckout.jsx";
import ProductListing from "./pages/ProductListing.jsx";

function App() {
  // useState ng laman ng cart
  const [cartStorage, setCartStorage] = useState([])

  //AddToCart

  //RemoveCart

  return (


    <Routes>
        <Route path="/" element={<HomePage />} />
        
    </Routes>
  );
}

export default App;
