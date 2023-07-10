import React from 'react'
import { Card, CardContent, CardActions, CardMedia, Button, Typography } from '@mui/material';
import './wishlistItem.css'
const WishlistItem = (props) => {
    let { image, name, price,description,addToCart } = props;
    return (
      <div>
          <Card className='wishlist-container'>
              {/* CardMedia to display the item image */}
              <CardMedia
                  component="img"
                  sx={{ height: 140 } }
                  image={image}
                  alt='product image'
              />
              {/* div to display the item details */}
              <div className='wishlist-item-details'>
                  <CardContent className='wishlist-item-details-content' >
                      {/* Typography to display the item name */}
                      <Typography component='div' variant='h6'>{name}</Typography>
                      {/* Typography to display the item description */}
                        <Typography variant='body2'>{description}</Typography>
                      {/* Typography to display the item price */}
                        <Typography component='div' variant='h6'>
                            ₹{Math.round((price - (price * 0.14)))}
                        </Typography>
                  </CardContent>
              </div>
              
              <div className='wishlist-footer'>
                  {/* Button to add the item to cart*/}
                  <Button className='addtocart-button' onClick={addToCart}>Add to Cart</Button>
              </div>
          </Card>
    </div>
  )
}

export default WishlistItem
