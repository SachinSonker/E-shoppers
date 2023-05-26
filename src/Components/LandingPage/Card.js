import './landing.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

function LandingCard(props){
    return(
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="352px"
                    image={props.itemImage}
                    alt="Paella dish"
                    position = "absolute"
                    left= "135px"
                    top = "1059px" />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" align='center'>
                                {props.itemName}<br/>
                                ${props.itemPrice}
                                </Typography>
                            </CardContent>

            </Card>
        </div>
    )
}
export default LandingCard;