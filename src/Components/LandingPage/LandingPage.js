import React from 'react';
import Landing from '../LandingPageComponent/Landing' ;
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function LandingPage() {
  return (
    <React.Fragment>
      <div className='App'>
      <Navbar />
        <Landing />
      <br></br>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default LandingPage;