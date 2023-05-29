import './Signup.css'
import React,{useState} from 'react';
// import {GoogleLogin , GoogleLogout} from 'react-google-login';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close'
// import ModalClose from '@mui/joy/ModalClose';


export default function Signup({onClose}) {
 const [name, setName] = useState("")
 const [phone, setPhone] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [confirmPassword, setConfirmPassword] = useState("")

 function handleNameChange(){

 }

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
                    <h1>Create an  Account</h1>
                </div>
                <div>
                    <h5>Please sign up</h5>
                </div>
                <div className='details'>
                    <label>Full Name:</label>
                    <input type="text" name="name" onChange={event => setName(event.target.value)}></input>
                    <label>Email Address:</label>
                    <input type="text" name="username" placeholder='abc@gmail.com' onChange={event => setEmail(event.target.value)}></input>
                    <label>Phone No:</label>
                    <input type="text" name="phone" placeholder='+91 99999 99999' onChange = {event => setPhone(event.target.value)}></input>
                    <label>Password:</label>
                    <input type="password" name="password" onChange = {event => setPassword(event.target.value)}></input>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirm-password" onChange = {event => setConfirmPassword(event.target.value)}></input>
                </div>
                <div className='signInBtn'>
                    <button name="signin">Sign In</button>
                </div>
                <div>
                    <h5>Or continue with</h5>
                </div>
                <div className='signInBtn google'>
                    {/* <button>Google</button> */}
                    <input type="button" value="Google" />
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