import React from 'react'
import { Box, Typography,Container, styled } from '@mui/material'

const Typo = styled(Typography)({
  color: "#646464",
  margin: "5px 14px 0",
  fontFamily: 'Mulish',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '21px'
})
const Footer = () => {

  return (
    <Box sx={{display:"flex",justifyContent:"center",position:"absolute",width:"100%",backgroundColor:"#F7F7F7",height:"35px" }}>
          <Typo>FAQs</Typo>
          <Typo>Orders & Return</Typo>
          <Typo>Account</Typo>
          <Typo>About Us</Typo>
    </Box>
  )
}

export default Footer
