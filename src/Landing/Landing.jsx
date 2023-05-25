import a from '../assets/130.png';
import b from '../assets/99.jpg';
import c from '../assets/100.jpg';
//import  from '../assets/130.png';
import abcc from '../assets/11.png';
import abb from  '../assets/22.png';
import d from '../assets/33.png';
import e from '../assets/140.png';
import f from '../assets/44.png';
import g from '../assets/66.png';
import h from '../assets/77.png';
import './landing.css';
import SimpleImageSlider from "react-simple-image-slider";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
//import FavoriteIcon from '@mui/icons-material/Favorite';
const images = [
    { url: a }, 
    { url: b }, 
    { url: c }
  ];


function Landing(){
    return(
        <div className='landing'>
            <div>
                  <div className = "slider">{/*<img src = {abc} name="sliderImg"></img> */}
                 <SimpleImageSlider
        width={896}
        height={504}
        images={images}
       // text = {text}
        showBullets={true}
        showNavs={true}
        autoPlay ={true}

      />
            </div>
            <hr className="line2"></hr>
            <div>
                <div className='text'>
                    <h4>PRODUCTS</h4>
                </div>
                <div className='products'>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
        
                    <CardMedia
                        component="img"
                        height="352px"
                        image={abcc}
                        alt="Paella dish"
                        position = "absolute"
                        left= "135px"
                        top = "1059px"                    />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" align='center'>
                                    Chair<br/>
                                    $115
                                    </Typography>
                                </CardContent>
    
                </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
        
                    <CardMedia
                        component="img"
                        height="354px"
                        image={abb}
                        alt="Paella dish"
                        position = "absolute"
                        left= "135px"
                        top = "1059px"                    />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" align='center'>
                                    Wardorbe<br/>
                                    $45
                                    </Typography>
                                </CardContent>
    
                </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
        
                    <CardMedia
                        component="img"
                        height="352px"
                        image={d}
                        alt="Paella dish"
                        position = "absolute"
                        left= "135px"
                        top = "1059px"                    />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" align='center'>
                                   Living Room couch set<br/>
                                    $74
                                    </Typography>
                                </CardContent>
    
                </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
        
                    <CardMedia
                        component="img"
                        height="352px"
                        image={e}
                        alt="Paella dish"
                        position = "absolute"
                        left= "135px"
                        top = "1059px"                    />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" align='center'>
                                   Chandliers<br/>
                                    $78
                                    </Typography>
                                </CardContent>
    
                </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
        
                    <CardMedia
                        component="img"
                        height="352px"
                        image={f}
                        alt="Paella dish"
                        position = "absolute"
                        left= "135px"
                        top = "1059px"                    />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" align='center'>
                                   Armchair<br/>
                                    $74
                                    </Typography>
                                </CardContent>
    
                </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
        
                    <CardMedia
                        component="img"
                        height="352px"
                        image={g}
                        alt="Paella dish"
                        position = "absolute"
                        left= "135px"
                        top = "1059px"                    />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" align='center'>
                                   Coat Hanger<br/>
                                    $115
                                    </Typography>
                                </CardContent>
    
                </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
        
                    <CardMedia
                        component="img"
                        height="352px"
                        image={h}
                        alt="Paella dish"
                        position = "absolute"
                        left= "135px"
                        top = "1059px"                    />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" align='center'>
                                   Coat Hanger<br/>
                                    $115
                                    </Typography>
                                </CardContent>
    
                </Card>
                </div>
                </div>
                
            </div>
            </div>
             <div></div>
            
                
                <div>

            
            </div>
        </div>
    )
}

export default Landing;