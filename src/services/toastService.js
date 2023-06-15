import React from 'react'
import {  toast } from 'react-toastify';

export const showToast = (message, type = 'default', options = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    theme: 'colored'
}) => {
    const typeToast = toast[type];
    typeToast(message, options);    
}