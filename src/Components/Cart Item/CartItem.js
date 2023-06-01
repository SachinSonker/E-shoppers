import React from 'react'
import { Box, Card, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material'

import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
const CartItem = (props) => {
    let { item,id,image,name,color,size,qty,price, addQuantity, removeQuantity,deleteItem }=props
    return (
        <div>
        <Card sx={{ display: 'flex',width:'305px',height:'100px',border:'none',boxShadow:'none',marginTop:'10px',marginBottom:'10px'}}>
            <CardMedia
                component="img"
                sx={{ width:'65px',height:'100px'}}
                image={image}
                alt='Chair'
            />
            <Box sx={{display:'flex',flexDirection:'column',width:'170px',maxHeight:'100px',marginLeft:'10px'}}>
                <CardContent sx={{ display:'flex' , flexDirection:'column', padding: '0px !important'}}>
                        <Typography component='div' variant='h6'>{name}</Typography>
                    <Typography variant='subtitle1' color='text.secondary' component='div' sx={{fontSize:'11px'}}>
                        Color:{color}
                    </Typography>
                    <Typography variant='subtitle1' color='text.secondary' component='div' sx={{fontSize:'11px'}}>
                        Size:{size} Qty:{qty}
                    </Typography>          
                </CardContent>
                <Box sx={{display:'flex',justifyContent:'left'}}>
                        <IconButton sx={{padding:'0px !important'}} onClick={()=>removeQuantity(id)}><IndeterminateCheckBoxIcon /></IconButton>
                        <IconButton sx={{padding:'0px !important'}} onClick={()=> addQuantity(id)} ><AddBoxIcon /></IconButton>
                </Box> 
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',width:'70px',justifyContent:'space-between'}}>
                <Typography component='div' variant='h6' sx={{ display: 'flex', justifyContent: 'right' }}>${qty*price}</Typography>
                <IconButton sx={{ display: 'flex', justifyContent:'right','&: hover':{backgroundColor:'white'}}} onClick={()=>deleteItem(id)}><DeleteIcon /></IconButton>
            </Box>
        </Card>
        <Divider variant='middle'/>
        </div>
  )
}

export default CartItem
    