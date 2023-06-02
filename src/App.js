import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ProductDetails from './Components/ProductDetailPage/ProductDetail';
import Landing from './Components/LandingPageComponent/Landing';
import CheckoutPage from './Components/Checkout/CheckoutPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SuccessPopup from './Components/SuccessPopup/SuccessPopup';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <GoogleOAuthProvider clientId="307607756850-v5ohbkpfepkgfrd2duss39nd5cse9gta.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route path='/' element={
            <div className='App'>
              <Navbar/>
              <Landing/>
              <Footer/>
            </div>
          } />

          {/* Product Details Route */}
          <Route path="productdetails/*" element={
            <div className='App'>
              <Navbar/>
              <ProductDetails/>
              <Footer/>
            </div>
          } />

          {/* Checkout Route */}
          <Route path="checkout/*" element={
            <div className='App'>
              <Navbar/>
              <CheckoutPage/>
              <Footer/>
            </div>
          } />

          {/* Success Popup Route */}
          <Route path="SuccessPopup/*" element={
            <div className='App'>
              <SuccessPopup/>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;