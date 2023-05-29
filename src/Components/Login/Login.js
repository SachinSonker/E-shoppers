import './Login.css'
import React,{useState} from 'react';
// import {GoogleLogin , GoogleLogout} from 'react-google-login';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close'


export default function Login({onClose,registration}) {

  return <>
  <Modal
  open={true}
  onClose={onClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <div className='modal'>
    <div className='modal-content'>
  <div className="loginpopup">
    
    <div className="loginTemplate">
     <div className='closeIcon'>
      <CloseIcon onClick={onClose} />
    </div>
      <div>
        <h1>Welcome Back!</h1>
      </div>
      <div>
        <h5>Please sign in</h5>
      </div>
      <div className='details'>
        <label>Email Address:</label>
        <input type="text" name="username" placeholder='abc@gmail.com'></input>
        <label>Password:</label>
        <input type="password" name="password"></input>
      </div>
      <div className='Btn'>
        <button value="signin">Sign In</button>
      </div>
      <div>
        <h5>Or continue with</h5>
      </div>
      <div className='Btn'>
        {/* <button>Google</button> */}
        <input type="button" value="Google" />
      </div>
      <div className='Btn'>
        <button value="create" onClick={registration}>Create an Account </button>
      </div>
    </div>
    {/* <div className="ecommImg">
      <img src='https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632379.jpg&fm=jpg' height="100%" width="100%"/>
    </div> */}
  </div>
  </div>
  </div>
  </Modal>
  </>
}