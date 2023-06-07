import React from 'react';
import { Box, Card, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material';

import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = (props) => {
    let { item, id, image, name, color, size, qty, price, addQuantity, removeQuantity, deleteItem } = props;
    return (
        <div>
            {/* Card to display the cart item */}
            <Card sx={{ display: 'flex', width: '305px', height: '100px', border: 'none', boxShadow: 'none', marginTop: '10px', marginBottom: '10px' }}>
                {/* CardMedia to display the item image */}
                <CardMedia
                    component="img"
                    sx={{ width: '65px', height: '100px' }}
                    image={image}
                    alt='Chair'
                />
                {/* Box to display the item details */}
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '170px', maxHeight: '100px', marginLeft: '10px' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', padding: '0px !important' }}>
                        {/* Typography to display the item name */}
                        <Typography component='div' variant='h6'>{name}</Typography>
                        {/* Typography to display the item color */}
                        <Typography variant='subtitle1' color='text.secondary' component='div' sx={{ fontSize: '11px' }}>
                            Color: {color}
                        </Typography>
                        {/* Typography to display the item size and quantity */}
                        <Typography variant='subtitle1' color='text.secondary' component='div' sx={{ fontSize: '11px' }}>
                            Size: {size} Qty: {qty}
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
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '70px', justifyContent: 'space-between' }}>
                    {/* Typography to display the item price */}
                    <Typography component='div' variant='h6' sx={{ display: 'flex', justifyContent: 'right' }}>
                        ₹{Math.round(qty * price)}
                    </Typography>
                    {/* IconButton to delete the item */}
                    <IconButton sx={{ display: 'flex', justifyContent: 'right', '&:hover': { backgroundColor: 'white' } }} onClick={() => deleteItem(id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Card>
            {/* Divider to separate each cart item */}
            <Divider variant='middle' />
        </div>
    )
}

export default CartItem;
