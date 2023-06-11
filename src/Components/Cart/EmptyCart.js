import React from 'react'
import { Box, Typography, IconButton,Link } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
const EmptyCart = ({onClose,openLogin}) => {
  return (
    <div>
          <Box sx={{ backgroundColor: 'white', border: '2px solid', marginTop: '10px', height: '100px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ padding: '1em 1em 0', fontSize: '20px' }}><LoginIcon sx={{ fontSize: "1em" }} /> Please <Link onClick={openLogin}>SignIn</Link> to see items you added</Typography>
                  <IconButton sx={{ marginTop: '12px', marginRight: '15px', '&: hover': { backgroundColor: 'white' } }} onClick={onClose}><CloseIcon /></IconButton>
              </Box>
          </Box> 
    </div>
  )
}

export default EmptyCart
