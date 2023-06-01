import React from 'react';
import Button from '@mui/material/Button';
import './successPopup.css';
const successPopup = () => {
  return (
    <div>
      <div className="modal">
        <div className="header"> Woo hoo!! </div>
        <div><img src="https://www.freeiconspng.com/uploads/white-smiley-face-png-20.png" style={{width:100,marginLeft:95,marginTop: 30}}/></div>
        <div className="content">
          {' '}
          Congrats !!You have successfully Placed Your Order....
          <Button variant="contained" disableElevation style={{backgroundColor: '#C01CB5', marginTop: 20, marginBottom: 20, borderRadius: 0, }}>Continue Shopping</Button>
        </div>
        
      </div>
    </div>
  )
}

export default successPopup
