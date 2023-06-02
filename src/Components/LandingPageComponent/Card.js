import './landing.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './landing.css';

function LandingCard(props){
    const navigate = useNavigate();

    const navigateToPDP = (itemID) => {
        navigate('/productdetails/'+itemID)
    }

    return(
        <div>
            <CardActionArea onClick={event => {navigateToPDP(props.itemID)}}>
                <Card className='card-tile'>
                    <CardMedia
                        component="img"
                        height="80%"
                        image={props.itemImage}
                        alt="No Product Image"
                    />
                    <CardContent>
                        <Typography align='center'>
                        <b>{props.itemName.length > 40 ? props.itemName.slice(0,40)+"..." : props.itemName}</b>
                        </Typography>
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