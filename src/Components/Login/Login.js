import './Login.css';
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { constants } from '../../shared/constant';

// Login component
export default function Login({ onClose, registration, loggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});

    // Function to validate email input
    const validateEmail = (event) => {
        const mail = event.target.value;
        setEmail(mail);
        if (!/\S+@\S+\.\S+/.test(mail) || mail.trim() === "") {
            setErrors({ ...errors, ["email"]: "Please enter a valid email" });
        } else {
            delete errors.email;
        }
    }

    // Function to validate password input
    const validatePassword = (event) => {
        const pass = event.target.value;
        setPassword(pass);
        if (pass === "") {
            setErrors({ ...errors, ["password"]: "Password is required" });
        } else {
            delete errors.password;
        }
    }

    // Function to handle form submission
    const onSubmit = async (e) => {
        if (Object.keys(errors).length === 0) {

            const data = {

                "userName": email,

                "password": password,

            }

            const result = await axios.post(constants.url.user.login, data).then((res)=>{

                sessionStorage.setItem("token",res.data.jwtToken)

                loggedIn();

                onClose();

            }).catch((err)=>{

                if(err.request.status==401){

                    alert("Invalid username or password")

                }
                

            });

        }
    }

    // Function to handle Google login
    const googleLogin = (data) => {
        if (Object.keys(errors).length === 0) {
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
                                <div className='title'>
                                    <h4>Login</h4>
                                </div>
                                <div className='detail'>
                                    <div className='input'>
                                        <input type="email" name="username" placeholder='Email' onChange={event => { validateEmail(event) }} className={errors.email !== undefined ? "invalid" : ""}></input>
                                        {errors.email && <span className='errorMsg'>{errors.email}</span>}
                                    </div>

                                    <div className='input'>
                                        <input type="password" name="password" placeholder='Password' onChange={event => validatePassword(event)} className={errors.password !== undefined ? "invalid" : ""}></input>
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
                                                width='270'
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
                    </div>
                </div>
            </div>
        </Modal>
    </>
}