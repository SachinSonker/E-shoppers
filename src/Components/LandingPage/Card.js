import './landing.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import './landing.css';

function LandingCard(props){

    return(
        <div className='card'>
            <CardActionArea>
                <Card sx={{ maxWidth: 250 }} className='card'>
                    <CardMedia
                        component="img"
                        height="352px"
                        image={props.itemImage}
                        alt="No Product Image"
                        position = "absolute"
                        left= "135px"
                        top = "1059px" />
                            <CardContent>
                                <Typography variant="body1" align='center'>
                                <b>{props.itemName.length > 40 ? props.itemName.slice(0,40)+"..." : props.itemName}</b>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <br></br>
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