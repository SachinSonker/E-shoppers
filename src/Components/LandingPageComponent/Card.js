import './landing.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../Wishlist/Wishlist.css'
import Stars from '../ProductDetailPage/Stars';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// Functional component for a landing card
function LandingCard(props) {
    return (
        <div>
            {/* Clickable card area */}
            <CardActionArea>
                {/* Card component */}
                <Card className='card-tile'>
                    {/* Card media (image) */}
                    <CardMedia
                        component="img"
                        height="80%"
                        image={props.itemImage}
                        alt="No Product Image"
                    />
                    {
                        props.cardType == 'wishlist'
                            ? <IconButton className='cancel-icon'>
                                <CloseIcon />
                            </IconButton>
                            : props.cardType == 'product' ?
                                <IconButton className='wishlist-icon'>
                                    <FavoriteBorderIcon />
                                </IconButton>
                                : ""
                    }
                    <CardContent>
                        {/* Item name */}
                        <Typography className='card-title' style={{textTransform:'capitalize', textDecoration:'none', textAlign:'left'}}>
                            <b>{props.itemName.length > 25 ? props.itemName.slice(0, 25) + "..." : props.itemName}</b>
                        </Typography>
                        {/* Item price and rating */}
                        {props.cardType == "product" ? <Typography color="text.secondary">
                            <p className='alignleft'>Price  <b>₹{Math.round((props.itemPrice - (props.itemPrice * 0.14)))}</b> &nbsp;&nbsp;<s>₹{Math.round(props.itemStrikePrice)}</s></p>
                            <Stars ratings={props.itemRating} reviews={25} />
                            {console.log(props.itemRating)}
                            {/* <p className='alignright'>⭐⭐⭐</p> */}
                        </Typography> : props.cardType == 'wishlist'
                            ? <>
                                    <Typography color="text.secondary">
                                        <p>₹{Math.round((props.itemPrice - (props.itemPrice * 0.14)))}</p>
                                    </Typography>
                                    {/* <Button className='wishlist-addtocart' onClick={props.addToCart} startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>        */}
                                </>
                         : ""}
                    </CardContent>
                    <CardActions sx={{padding: '0px !important'}}>
                        {props.cardType == 'wishlist'
                            ? <Button className='wishlist-addtocart' onClick={props.addToCart} startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
                    :""
                    }
                    </CardActions>
                </Card>
            </CardActionArea>
        </div>
    )
}

export default LandingCard;
