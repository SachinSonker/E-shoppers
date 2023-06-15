import React from 'react'
import { Typography, Grid, Divider } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <Divider sx={{ width: '100%' }} />
      <Grid container spacing={2} className='grid-container'>
        <Grid item xs={4} md={4} sx={{ mb: '10px' }} >
          <Typography variant='h6'>ABOUT</Typography>
          <Typography>About Shoppers</Typography>
          <Typography>Locations</Typography>
          <Typography>CONTACT US</Typography>
        </Grid>
        <Grid item xs={4} md={4} sx={{ mb: '10px' }}>
          <Typography variant='h6'>CUSTOMER CARE</Typography>
          <Typography>FAQs</Typography>
          <Typography>Account</Typography>
        </Grid>
        <Grid item xs={4} md={4} sx={{ mb: '10px' }}>
          <Typography variant='h6'>CONNECT</Typography>
          <Typography>Instagram</Typography>
          <Typography>Facebook</Typography>
          <Typography>Twitter</Typography>
          <Typography>Pinterest</Typography>
        </Grid>
        <Divider sx={{ bgcolor: 'white', width: '100%' }} />
        <Grid item xs={4} sx={{ pb: '7px' }}>
          <Typography><CopyrightIcon sx={{ fontSize: '0.8em' }} /> 2023 Shoppers.All rights reserved</Typography>
        </Grid>
        <Grid item xs={6} sx={{ pb: '7px' }}>
        </Grid>
        <Grid item xs={2} sx={{ pb: '7px' }}>
          <Typography>Terms of Use | Privacy Policy </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer

