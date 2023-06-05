import './landing.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './landing.css';

// Functional component for a landing card
function LandingCard(props){
    const navigate = useNavigate();

    // Function to navigate to the product details page
    const navigateToPDP = (itemID) => {
        navigate('/productdetails/'+itemID);
    }

    return(
        <div>
            {/* Clickable card area */}
            <CardActionArea onClick={event => {navigateToPDP(props.itemID)}}>
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
                        <Typography className='card-title'>
                            <b>{props.itemName.length > 30 ? props.itemName.slice(0,30)+"..." : props.itemName}</b>
                        </Typography>
                        {/* Item price and rating */}
                        <Typography color="text.secondary">
                            <p className='alignleft'>Price: <b>$ {props.itemPrice}</b> <s>$ {props.itemStrikePrice}</s></p>
                            <p className='alignright'>⭐⭐⭐</p>
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </div>
    )
}

export default LandingCard;
