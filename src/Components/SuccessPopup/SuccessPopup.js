import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './successPopup.css';
const SuccessPopup = () => {

  const navigate = useNavigate();
  return (
    <div>
      <div className="modalSuccess">
        <div className="header"> Woo hoo!! </div>
        <div><img src="https://www.freeiconspng.com/uploads/white-smiley-face-png-20.png" style={{ width: 100, marginLeft: 95, marginTop: 30 }} /></div>
        <div className="content">
          {' '}
          Congrats !!You have successfully Placed Your Order....
          <Button variant="contained" disableElevation style={{ backgroundColor: '#8B3DFF', marginTop: 20, marginBottom: 20, borderRadius: 0, color: 'black', borderRadius: 5, color: 'white' }} onClick={() => { console.log("redirecting....."); navigate("/"); }}>Continue Shopping</Button>
        </div>

      </div>
    </div>
  )
}

export default SuccessPopup
