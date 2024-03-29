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
import OrderTracking from './Components/OrderTracking/OrderTracking';
import ProductPage from './Components/LandingPageComponent/ProductPage';
import Orders from './Components/Orders/Orders';
import Coupon from './Components/Coupon/Coupon';
import Reviewpage from './Components/Review/Reviewpage';
import Profile from './Components/Profile/Profile';

import { ToastContainer } from 'react-toastify';
import Wishlist from './Components/Wishlist/Wishlist';
function App() {
  return (
    <GoogleOAuthProvider clientId="307607756850-v5ohbkpfepkgfrd2duss39nd5cse9gta.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route path='/' element={
            <React.Fragment>
              <div className='App'>
                <Navbar />
                <Landing />
              </div>
              <Footer />
            </React.Fragment>
          } />

          {/* ProductPage */}
          <Route path="/products/*" element={
            <div>
            <div className='App'>
              <Navbar/>
              <ProductPage/>
            </div>
              <Footer />
            </div>
          } />

          {/* OrdersPage */}
          <Route path="/Orders" element={
            <div>
            <div className='App'>
              <Navbar/>
              <Orders />
            </div>
              <Footer />
            </div>
          } />

          {/* Product Details Route */}
          <Route path="productdetails/*" element={
            <div>
              <div className='App'>
                <Navbar />
                <ProductDetails />
              </div>
              <Footer />
            </div>
          } />

          {/* Checkout Route */}
          <Route path="checkout/*" element={
            <div>
              <div className='App'>
                <Navbar />
                <CheckoutPage />
              </div>
              <Footer />
            </div>
          } />

          {/* Success Popup Route */}
          <Route path="SuccessPopup/*" element={
            <div>
              <div className='App'>
                <Navbar />
                <SuccessPopup />
              </div>
              <Footer />
            </div>
          } />

          {/* ordertracking Route */}
          <Route path="ordertracking/*" element={
            <div>
              <div className='App'>
                <Navbar />
                <OrderTracking />
              </div>
              <Footer />
            </div>
          } />
          {/* coupon Route */}
          <Route path="coupon/*" element={
            <div>
              <div className='App'>
                <Navbar />
                <Coupon />
              </div>
              <Footer />
            </div>
          } />
          <Route path="wishlist/*" element={
            <div>
              <div className='App'>
                <Navbar />
                <Wishlist />
              </div>
              <Footer />
            </div>
          } />
          <Route path="reviews/*" element={
            <div>
              <div className='App'>
                <Navbar />
                <Reviewpage />
              </div>
              <Footer />
            </div>
          } />
          <Route path="profile/*" element={
            <div>
              <div className='App'>
                <Navbar />
                <Profile />
              </div>
              <Footer />
            </div>
          } />
          </Routes>
      </BrowserRouter>
      <ToastContainer />
    </GoogleOAuthProvider>
  );
}

export default App;