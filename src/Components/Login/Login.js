import './Login.css'
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { constants } from '../../shared/constant';


import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



export default function Login({ onClose, registration,loggedIn }) {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors,setErrors] = useState({})

    const validateEmail = (event) =>{
        const mail = event.target.value
        setEmail(mail)
        if(!/\S+@\S+\.\S+/.test(mail) || mail.trim()===""){
            setErrors({...errors,["email"]:"Please enter an valid email"})
        }else{
            delete errors.email
        }
     }



    const validatePassword = (event) =>{
        const pass = event.target.value
        setPassword(pass)
        if(pass==="" || pass.length < 7 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,15}/.test(password)){
            setErrors({...errors,["password"]:"Password should contains at least 8 characters, 1 special character and 1 uppercase letter"})
       }else{
        delete errors.password
       }
     }

    const onSubmit = async (e) =>{

        if(Object.keys(errors).length===0){
            const data = {
                "userName" : email,
                "password" : password,
            }
            const result = await axios.post(constants.url.user.login, data);
            
            loggedIn();
            onClose();
            
           }

    }
    const googleLogin = (data) =>{
        if(Object.keys(errors).length===0){
            loggedIn();
            onClose();
        }

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
                            <div className="content">
                                <div  className='title'> 
                                    <p>Login</p>
                                </div>
                                {/* <div>
                                    <h5>Please sign in</h5>
                                </div> */}
                                <div className='detail'>
                                    <div className='input'>
                                        <label>Email Address</label>
                                        <input type="email" name="username" placeholder='abc@gmail.com' onChange={event => {validateEmail(event)}} className={errors.email!==undefined ? "invalid" : ""}></input>
                                        {errors.email && <span className='errorMsg' style={{  }}>{errors.email}</span>}
                                    </div>

                                    <div className='input'>
                                        <label>Password</label>
                                        <input type="password" name="password"  onChange = {event => validatePassword(event)} className={errors.password!==undefined ? "invalid" : ""}></input>
                                        {errors.password && <span className='errorMsg'>{errors.password}</span>}
                                    </div>

                                    <div className='actionBtn'>
                                        <div className='Btn'>
                                            <button value="signin" onClick={onSubmit}>Sign In</button>
                                        </div>

                                        <div>
                                            <p>or continue with</p>
                                        </div>
                                        <div className="google">
                                            <GoogleLogin
                                                onSuccess={credentialResponse => {
                                                    console.log(credentialResponse);
                                                    googleLogin(credentialResponse)
                                                }}
                                                onError={() => {
                                                    console.log('Login Failed');
                                                }}
                                                size = "medium"
                                            />
                                            {/* <input type="button" value="Google" /> */}
                                        </div>
                                        <div className='hr-line'>
                                            <hr />
                                        </div>
                                        <div>
                                            <p>Not a member yet?<a className="signup" onClick={registration}>Sign Up</a></p>
                                            {/* <button value="create" onClick={registration}>Create an Account </button> */}
                                        </div>
                                    </div>
                                </div>
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