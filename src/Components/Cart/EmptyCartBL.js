import React from 'react'
import { Box, Typography, IconButton, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import EmptyCartImage from './EmptyCartImage';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const EmptyCartBeforeLogin = ({ onClose, openLogin }) => {
    return (
        <div>
            <Box sx={{ backgroundColor: 'white', marginTop: '10px',border:'1px solid' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton sx={{ marginRight: '2px', '&: hover': { backgroundColor: 'white' } }} onClick={onClose}><CloseIcon /></IconButton>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <EmptyCartImage />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '1.5rem' }}>Your cart is Empty</Typography>
                    <Typography sx={{ fontSize: '0.8rem'}}>Please LogIn to view the previously added item</Typography>
                </Box>
                <Box sx={{ display: 'flex',flexDirection:'row',justifyContent:'space-around' }}> 
                    {/* <Button startIcon={<ArrowBackIcon />} sx={{ border: '1px solid #8B3DFF', color: 'white !important', backgroundColor: '#8B3DFF !important', textTransform: 'none', margin: '10px 0 10px'}} >Continue Shopping</Button> */}
                    <Button startIcon={<LoginIcon />} sx={{ border: '1px solid #8B3DFF', color: 'white !important', backgroundColor: '#8B3DFF !important', textTransform: 'none', margin: '10px 0 10px', width:'30%' }} onClick={openLogin}>LogIn</Button>
                </Box>
            </Box>
        </div>
    )
}

export default EmptyCartBeforeLogin