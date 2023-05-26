import sliderImg1 from '../assets/130.png';
import sliderImg2 from '../assets/99.jpg';
import sliderImg3 from '../assets/100.jpg';
import img1 from '../assets/11.png';
import img2 from  '../assets/22.png';
import img3 from '../assets/33.png';
import img4 from '../assets/140.png';
import img5 from '../assets/44.png';
import img6 from '../assets/66.png';
import img7 from '../assets/77.png';
import './landing.css';
import SimpleImageSlider from "react-simple-image-slider";
import * as React from 'react';
import LandingCard from './Card'; 
import { Grid } from '@mui/material';

const slider_images = [
    { url: sliderImg1 }, 
    { url: sliderImg2 }, 
    { url: sliderImg3 }
];

const cart_object = [
    {
        "src" : img1,
        "name" : "Chair",
        "price" : "115$"
    },
    {
        "src" : img2,
        "name" : "Wardrobe",
        "price" : "45$"
    },
    {
        "src" : img3,
        "name" : "Living Room Couch Set",
        "price" : "74$"    
    },
    {
        "src" : img4,
        "name" : "Chandliers",
        "price" : "78$"
    },
    {
        "src" : img5,
        "name" : "Armchair",
        "price" : "74$"
    },
    {
        "src" : img6,
        "name" : "Couch Set",
        "price" : "74$"
    },
    {
        "src" : img7,
        "name" : "Coat Hanger",
        "price" : "115$"
    }
];



function Landing(){
    return(
        <div className='landing'>
                <div className = "slider">{/*<img src = {abc} name="sliderImg"></img> */}
                    <SimpleImageSlider
                        width='100%'
                        height={504}
                        images={slider_images}
                        // text = {text}
                        showBullets={true}
                        showNavs={true}
                        autoPlay ={true}
                    />
                </div>

                <div>
                <hr className="line2"></hr></div>
                <div>
                    <div className='text'>
                        <h4>PRODUCTS</h4>
                    </div>
                    <Grid container spacing={4} className='product'>
                        {cart_object.map((s) =>(
                            <LandingCard itemImage={s.src} itemName={s.name} itemPrice={s.price}></LandingCard>
                        ))}
                    </Grid>
                </div>
        </div>
    )
}

export default Landing;