import React from 'react'
import { Typography, Grid, Divider,Box, ListItem, ListItemText,List } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <Divider sx={{ width: '100%' }} />
      <Box className='box'>
      <Grid container spacing={2} className='grid-container'>
        <Grid container className='first'>   
            <Grid item xs={12} md={5} lg={5} >
                <Typography variant='h3' className='footer-title'>Shoppers</Typography>
                <List>
                  <ListItem sx={{ml:'70px'}}>
                  <ListItemText >We are here to help everyone,<br /> anywhere create their feeling of home.</ListItemText>
                  </ListItem>
                </List>
            </Grid>
            <Grid container xs={12} md={7} lg={7} spacing={4}>
              <Grid item xs={4} md={4} >
                <Typography variant='h6'>Customer Service</Typography>
                <List>
                  <ListItem disablePadding> 
                    <ListItemText primary='FAQ' onClick={()=>window.open('/')} sx={{cursor:'pointer'}} />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary='My Account' onClick={() => window.open('/')} sx={{ cursor: 'pointer' }} />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary='Help' onClick={() => window.open('/')} sx={{ cursor: 'pointer' }} />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary='Return Policy' onClick={() => window.open('/')} sx={{ cursor: 'pointer' }} />
                  </ListItem>
                </List>

              </Grid>
              <Grid item xs={4} md={4} >
                <Box sx={{mb:'16px'}}>
                  <Typography variant='h6'>Contact Us</Typography>
                  <List>
                  <ListItem disablePadding>
                      <ListItemText primary='Locations' onClick={() => window.open('https://www.google.co.in/maps')} sx={{ cursor: 'pointer' }}></ListItemText>
                  </ListItem>
                  </List>
                </Box>
                <Box>
                <Typography variant='h6'>Feedback & Reviews</Typography>
                <List>
                  <ListItem disablePadding>
                      <ListItemText primary='Leave a Feedback' onClick={() => window.open('/')} sx={{ cursor: 'pointer' }}></ListItemText>
                  </ListItem>
                  </List>
                </Box>
              </Grid>

              <Grid item xs={4} md={4} sx={{ mb: '10px' }}>
                <Typography variant='h6'>Social Media</Typography>
                <Grid container columnSpacing={1} className='follow-icons'>  
                  <Grid item sx={{paddingRight:'3px',cursor:'pointer'}}>
                    <Typography onClick={() => window.open('https://www.instagram.com')}><InstagramIcon /></Typography>
                  </Grid>
                  <Grid item sx={{ paddingRight: '3px',cursor:'pointer' }}>
                    <Typography onClick={() => window.open('https://www.facebook.com')}><FacebookIcon /></Typography>
                  </Grid>
                  <Grid item sx={{ paddingRight: '3px',cursor:'pointer' }}>  
                    <Typography onClick={() => window.open('https://twitter.com')}><TwitterIcon /></Typography>
                  </Grid>
                  <Grid item sx={{cursor:'pointer'}}>
                    <Typography onClick={() => window.open('https://in.linkedin.com')}><LinkedInIcon /></Typography>
                  </Grid>  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container columnSpacing={1} className='second'>
              <Grid item>
                <Typography sx={{fontSize:'0.8rem'}}><CopyrightIcon sx={{ fontSize: '0.8em' }} /> 2023 Shoppers.All rights reserved</Typography>
              </Grid>
              <Grid item>
              <Typography sx={{ fontSize: '0.8rem' }}>Terms of Use | Privacy Policy </Typography>
                </Grid>
              </Grid> 
          </Grid>
      </Box> 
    </>
  );
}

export default Footer

