import React from 'react';
import Landing from '../LandingPageComponent/Landing' ;
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import CheckoutPage from '../Checkout/CheckoutPage';

function LandingPage() {
  return (
    <React.Fragment>
      <div className='App'>
        <Navbar />
        <Landing />
        <CheckoutPage />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default LandingPage;