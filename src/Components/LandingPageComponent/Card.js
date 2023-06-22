import './landing.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import './landing.css';

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
                    <CardContent>
                        {/* Item name */}
                        <Typography className='card-title' style={{textTransform:'capitalize'}}>
                            <b>{props.itemName.length > 30 ? props.itemName.slice(0, 30) + "..." : props.itemName}</b>
                        </Typography>
                        {/* Item price and rating */}
                        {props.cardType == "product" ? <Typography color="text.secondary">
                            <p className='alignleft'>Price: <b>₹ {Math.round((props.itemPrice - (props.itemPrice * 0.14)))}</b> &nbsp;<s>₹ {Math.round(props.itemStrikePrice)}</s></p>
                            <p className='alignright'>⭐⭐⭐</p>
                        </Typography> : ""}
                    </CardContent>
                </Card>
            </CardActionArea>
        </div>
    )
}

export default LandingCard;
