import React from 'react'
import { Typography, styled, Grid,Divider } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
// Custom styled component for Typography
const Typo = styled(Typography)({
  color: "inherit",
  margin: "5px 14px 0",
  fontFamily: 'Mulish',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '21px'
});

const Footer = () => {
  return (
    // <Box sx={{display:"flex",flexWrap:'wrap',position:"sticky",width:'100%',height:'20%',backgroundColor:"white",top:'100vh',marginTop:'20px'}}>
    //   <Box flex={1}> 
    //     <Typo variant='h1'><strong>ABOUT</strong></Typo>
    //     <Typo>About Shoppers</Typo>
    //     <Typo>Locations</Typo>
    //     <Typo>CONTACT US</Typo>
    //   </Box>
    //   <Box flex={1}>
    //     <Typo variant='h1'><strong>CUSTOMER CARE</strong></Typo>
    //       <Typo>FAQs</Typo>
    //       <Typo>Account</Typo>
    //   </Box>
    //   <Box flex={1}>
    //     <Typo variant='h1'><strong>CONNECT</strong></Typo>
    //     <Typo>Instagram</Typo>
    //     <Typo>Facebook</Typo>
    //     <Typo>Twitter</Typo>
    //     <Typo>Pinterest</Typo>
    //   </Box>
    // </Box>
    <>
    <Divider sx={{width:'100%'}} />
      <Grid container spacing={2} sx={{position:'sticky', width:'100%',height:'15%',marginTop:'0% !important',marginLeft:'0% !important',backgroundColor:'#F7F7F7'}}>
        <Grid item xs={4} md={4}>
          <Typo variant='h1'><strong>ABOUT</strong></Typo>
          <Typo>About Shoppers</Typo>
          <Typo>Locations</Typo>
          <Typo>CONTACT US</Typo>
        </Grid>
        <Grid item xs={4} md={4}>
           <Typo variant='h1'><strong>CUSTOMER CARE</strong></Typo>
           <Typo>FAQs</Typo>
           <Typo>Account</Typo>
        </Grid>
        <Grid item xs={4} md={4}>
         <Typo variant='h1'><strong>CONNECT</strong></Typo>
         <Typo>Instagram</Typo>
         <Typo>Facebook</Typo>
         <Typo>Twitter</Typo>
         <Typo>Pinterest</Typo>
        </Grid>
        <Grid item xs={12}>
          <Typo><CopyrightIcon sx={{fontSize:'0.8em'}} /> 2023 Shoppers.All rights reserved</Typo>
          <Typo>Terms of Use | Privacy Policy </Typo>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer

