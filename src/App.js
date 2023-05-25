import Landing from './Landing/Landing' ;
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Landing/>
      <Footer />
      
    </React.Fragment>
  );
}

export default App;
