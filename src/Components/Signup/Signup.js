import './Signup.css';
import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { constants } from '../../shared/constant';
import axios from 'axios';

export default function Signup({ onClose, signin, loggedIn }) {

  // State variables for form inputs and errors
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validate email input
  const validateEmail = (event) => {
    const mail = event.target.value;
    setEmail(mail);
    if (!/\S+@\S+\.\S+/.test(mail) || mail.trim() === "") {
      setErrors({ ...errors, ["email"]: "Please enter a valid email" });
    } else {
      delete errors.email;
    }
  };

  // Validate name input
  const validateName = (event) => {
    const fullName = event.target.value;
    setName(fullName);
    if (fullName.trim() === "") {
      setErrors({ ...errors, ["name"]: "Please enter a valid name" });
    } else {
      delete errors.name;
    }
  };

  // Validate phone input
  const validatePhone = (event) => {
    const no = event.target.value;
    setPhone(no);
    if (no === "" || no.length !== 10 || !/^\d+$/.test(no)) {
      setErrors({ ...errors, ["phone"]: "Please enter a valid phone number" });
    } else {
      delete errors.phone;
    }
  };

  // Validate password input
  const validatePassword = (event) => {
    const pass = event.target.value;
    setPassword(pass);
    if (
      pass === "" ||
      pass.length < 7 ||
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,15}/.test(password)
    ) {
      setErrors({
        ...errors,
        ["password"]:
          "Password should contain at least 8 characters, 1 special character, and 1 uppercase letter",
      });
    } else {
      delete errors.password;
    }
  };

  // Validate confirm password input
  const validateConfirmPassword = (event) => {
    const confPass = event.target.value;
    setConfirmPassword(confPass);
    if (confPass !== password) {
      setErrors({ ...errors, ["confirmPassword"]: "Passwords do not match" });
    } else {
      delete errors.confirmPassword;
    }
  };

  async function login() {
    const data = {
      "userName": email,
      "password": password,
    }

    const result = await axios.post(constants.url.user.login, data).then((res) => {
      sessionStorage.setItem("token", res.data.jwtToken)
      sessionStorage.setItem("name", res.data.name)
      sessionStorage.setItem("phone", res.data.phoneNo)
      sessionStorage.setItem("email", res.data.email)


    })
  }
  // Submit form data
  const onSubmit = async (e) => {
    if (Object.keys(errors).length === 0) {
      const data = {
        email: email,
        name: name,
        phoneNo: phone,
        password: password,
        role: "",
        cart: {}
      };
      // const result = await axios.post(constants.url.user.register, data);
      const result = await axios.post(constants.url.user.register, data).then((res) => {

        // sessionStorage.setItem("token",res.data.jwtToken)

        login();
        loggedIn();

        onClose();

      }).catch((err) => {

        if (err.request.status == 403) {

          alert("Invalid username or password")

        }
        else {
          alert("Something went wrong!")
        }


      });
      loggedIn();
      onClose();
    }
  };

  // Handle Google login
  const googleLogin = (data) => {
    if (Object.keys(errors).length === 0) {
      loggedIn();
      onClose();
    }
  };

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
              <div className='content'>
                <div className='title'>
                  <h4 className="creatText">Create an Account </h4>
                </div>
                {/* <div>
                        <h5>Please sign up</h5>
                    </div> */}
                <div className='details'>
                  <div className='input'>
                    {/* <label>Full Name</label> */}
                    <input type="text" name="name" onChange={event => validateName(event)} className={errors.name !== undefined ? "invalid" : ""} placeholder="Name"></input>
                    {errors.name && <span className='errorMsg'>{errors.name}</span>}
                  </div>

                  <div className='input'>
                    {/* <label>Email Address</label> */}
                    <input type="text" name="username" placeholder='Email' onChange={event => { validateEmail(event) }} className={errors.email !== undefined ? "invalid" : ""}></input>
                    {console.log(errors.email, "Email Errors")}
                    {errors.email && <span className='errorMsg'>{errors.email}</span>}
                  </div>

                  <div className='input'>
                    {/* <label>Phone No</label> */}
                    <input type="text" name="phone" placeholder='Phone' onChange={event => validatePhone(event)} className={errors.phone !== undefined ? "invalid" : ""}></input>
                    {errors.phone && <span className='errorMsg'>{errors.phone}</span>}
                  </div>

                  <div className='input'>
                    {/* <label>Password</label> */}
                    <input type="password" name="password" placeholder='Password' onChange={event => validatePassword(event)} className={errors.password !== undefined ? "invalid" : ""}></input>
                    {errors.password && <span className='errorMsg'>{errors.password}</span>}
                  </div>

                  <div className='input'>
                    {/* <label>Confirm Password </label> */}
                    <input type="password" name="confirm-password" placeholder='Confirm Password' onChange={event => validateConfirmPassword(event)} className={errors.confirmPassword !== undefined ? "invalid" : ""}></input>
                    {errors.confirmPassword && <span className='errorMsg'>{errors.confirmPassword}</span>}
                  </div>

                  <div className='actionBtn'>
                    <div className='signInBtn'>
                      <button name="signin" onClick={onSubmit}>Sign Up</button>
                    </div>
                    <div>
                      <h5>Or continue with</h5>
                    </div>
                    {/* <div className='signInBtn'>
                                <input type="button" value="Google" />
                            </div> */}
                    <div className="google">
                      {/* <input type="button" value="Google" /> */}
                      <GoogleLogin
                        onSuccess={credentialResponse => {
                          console.log(credentialResponse);
                          googleLogin(credentialResponse)

                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                        size="medium"
                        text="signup_with"
                      />
                    </div>
                    <div className='hr-line'>
                      <hr />
                    </div>
                    <div>
                      <p className="text">Already have an account?<a className="signup" onClick={signin}>Sign In</a></p>
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