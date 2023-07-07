import { Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Wishlist.css'
import WishlistItem from '../Wishlist Item/wishlistItem'
const Wishlist = () => {
    const [addWishlist, setAddWishlist] = useState([]);
  return (
    <div>
        <div className='wishlist-header'>
              <Typography variant="h4" className='wislist-title'>
                  Wishlist(0)
              </Typography>
        </div>
        <Divider />
        <div className='wishlist-content'>
              <WishlistItem />
        </div>  
    </div>
  )
}

export default Wishlist
