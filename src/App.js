import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ProductDetails from './Components/ProductDetailPage/ProductDetail';
import LandingPage from './Components/LandingPage/LandingPage';
import CheckoutPage from './Components/Checkout/CheckoutPage';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <GoogleOAuthProvider clientId="307607756850-v5ohbkpfepkgfrd2duss39nd5cse9gta.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="productDetails/*" element={<ProductDetails />} />
          <Route path="checkout/*" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
