import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ProductDetails from './Components/ProductDetailPage/ProductDetail';
import LandingPage from './Components/LandingPage/LandingPage';
import CheckoutPage from './Components/Checkout/CheckoutPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="productDetails/*" element={<ProductDetails />} />
        <Route path="checkout/*" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
