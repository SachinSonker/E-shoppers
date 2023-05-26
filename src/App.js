import Landing from './Components/LandingPage/Landing' ;
import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
import './App.css';


function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Navbar />
        <Landing/>
      </div>
      <Footer />
      
    </React.Fragment>
  );
}

export default App;
