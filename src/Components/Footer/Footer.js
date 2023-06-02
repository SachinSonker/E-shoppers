import React from 'react'
import { Box, Typography, styled } from '@mui/material'

// Custom styled component for Typography
const Typo = styled(Typography)({
  color: "#646464",
  margin: "5px 14px 0",
  fontFamily: 'Mulish',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '21px'
});

const Footer = () => {
  return (
    <Box sx={{display:"flex",position:"absolute",width:'99%',height:'150px',backgroundColor:"#F7F7F7"}}>
      <Box flex={1}> 
        <Typo variant='h1'><strong>ABOUT</strong></Typo>
        <Typo>About Shoppers</Typo>
        <Typo>Locations</Typo>
        <Typo>CONTACT US</Typo>
      </Box>
      <Box flex={1}>
        <Typo variant='h1'><strong>CUSTOMER CARE</strong></Typo>
          <Typo>FAQs</Typo>
          <Typo>Account</Typo>
      </Box>
      <Box flex={1}>
        <Typo variant='h1'><strong>CONNECT</strong></Typo>
        <Typo>Instagram</Typo>
        <Typo>Facebook</Typo>
        <Typo>Twitter</Typo>
        <Typo>Pinterest</Typo>
      </Box>
    </Box>
  );
}

export default Footer

