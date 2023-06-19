
import React from 'react';
import { Box, Card, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './CartItem.css'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
const CartItem = (props) => {
    let { id, image, name, color, size, qty, price, addQuantity, removeQuantity, deleteItem } = props;
    return (
        <div>
            {/* Card to display the cart item */}
            <Card className='card-container'>
                {/* CardMedia to display the item image */}
                <CardMedia
                    component="img"
                    sx={{ width: '65px', height: '100px' }}
                    image={image}
                    alt='Chair'
                />
                {/* Box to display the item details */}
                <Box className='item-details'>
                    <CardContent className='item-details-content' >
                        {/* Typography to display the item name */}
                        <Typography component='div' variant='h6'>{name}</Typography>
                        {/* Typography to display the item color */}
                        <Typography variant='subtitle1' color='text.secondary' component='div' sx={{ fontSize: '11px' }}>
                            Color: {color}
                        </Typography>
                        {/* Typography to display the item size and quantity */}
                        <Typography variant='subtitle1' color='text.secondary' component='div' sx={{ fontSize: '11px' }}>
                            Size: {size} 
                        </Typography>
                        <Typography variant='subtitle1' color='text.secondary' component='div' sx={{ fontSize: '11px' }}>
                            Qty: {qty}
                        </Typography>
                    </CardContent>
                    {/* Box to display quantity controls */}
                    <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                        {/* IconButton to decrease quantity */}
                         <IconButton sx={{ padding: '0px !important' }} onClick={() => removeQuantity(id)}>
                            <IndeterminateCheckBoxIcon />
                        </IconButton> 
                        {/* IconButton to increase quantity */}
                         <IconButton sx={{ padding: '0px !important' }} onClick={() => addQuantity(id)}>
                            <AddBoxIcon />
                        </IconButton> 
                 </Box> 
                </Box>
                {/* Box to display price and delete button */}
                <Box className='card-footer'>
                    {/* Typography to display the item price */}
                    <Typography component='div' variant='h6' sx={{ display: 'flex', justifyContent: 'right' }}>
                        ₹{Math.round(qty * (price - (price * 0.14)))}
                    </Typography>
                    {/* IconButton to delete the item */}
                    <IconButton className='delete-icon' onClick={() => deleteItem(id)}>
                        <DeleteIcon  />
                    </IconButton>
                </Box>
            </Card>
            {/* Divider to separate each cart item */}
            <Divider variant='middle'/>
        </div>
    )
}

export default CartItem;
