import React from 'react'
import { Box, Typography } from '@mui/material'
import EmptyCartImage from './EmptyCartImage';
const EmptyCart = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: 'white', marginTop: '10px' }}>
        <Box sx={{ width: '100%' }}>
          <EmptyCartImage />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '1.5rem' }}>Your cart is Empty</Typography>
                </Box>
            </Box>
        </div>
    )
}

export default EmptyCart
