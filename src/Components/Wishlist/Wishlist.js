import { Divider, Typography,Grid } from '@mui/material'
import React, { useState } from 'react'
import './Wishlist.css'
import img from '../../assets/44.png'
import LandingCard from '../LandingPageComponent/Card';
const Wishlist = () => {
  const [addWishlist, setAddWishlist] = useState([]);
  return (
    <div>
        <div className='wishlist-header'>
              <Typography className='wishlist-title'>
                  Wishlist (0)
              </Typography>
        </div>
        <Divider className='divider' />
        <div className='wishlist-content'>
        <Grid container spacing={4} className='wishlist-grid'>
          <Grid className='wishlist-card'>
            <LandingCard itemImage={img} itemName="Item" itemPrice="$NaN" cardType="wishlist" />
          </Grid>
          <Grid className='wishlist-card'>
            <LandingCard itemImage={img} itemName="Item" itemPrice="$NaN" cardType="wishlist" />
          </Grid>
          <Grid className='wishlist-card'>
            <LandingCard itemImage={img} itemName="Item" itemPrice="$NaN" cardType="wishlist" />
          </Grid>
          <Grid className='wishlist-card'>
            <LandingCard itemImage={img} itemName="Item" itemPrice="$NaN" cardType="wishlist" />
          </Grid>
          <Grid className='wishlist-card'>
            <LandingCard itemImage={img} itemName="Item" itemPrice="$NaN" cardType="wishlist" />
          </Grid>
          <Grid className='wishlist-card'>
            <LandingCard itemImage={img} itemName="Item" itemPrice="$NaN" cardType="wishlist" />
          </Grid>
        </Grid>
          
        </div>  
    </div>
  )
}

export default Wishlist
