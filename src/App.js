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
import { Divider } from '@mui/material';
import ProductPage from './Components/LandingPageComponent/ProductPage';

function App() {
  return (
    <GoogleOAuthProvider clientId="307607756850-v5ohbkpfepkgfrd2duss39nd5cse9gta.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route path='/' element={
            <React.Fragment>
              <div className='App'>
                <Navbar/>
                <Landing/>
              </div>
              <Footer />
            </React.Fragment>
          } />

          {/* ProductPage */}
          <Route path="/products/:categoryId" element={
            <div>
            <div className='App'>
              <Navbar/>
              <ProductPage/>
            </div>
              <Footer />
            </div>
          } />

          {/* Product Details Route */}
          <Route path="productdetails/*" element={
            <div>
            <div className='App'>
              <Navbar/>
              <ProductDetails/>
            </div>
              <Footer />
            </div>
          } />

          {/* Checkout Route */}
          <Route path="checkout/*" element={
            <div>
            <div className='App'>
              <Navbar/>
              <CheckoutPage/>
            </div>
              <Footer />
            </div>
          } />

          {/* Success Popup Route */}
          <Route path="SuccessPopup/*" element={
            <div>
            <div className='App'>
              <Navbar/>
              <SuccessPopup/>
            </div>
              <Footer />
            </div>
          } />
          
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;