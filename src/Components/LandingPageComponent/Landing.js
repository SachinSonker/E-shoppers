import sliderImg1 from '../../assets/130.png';
import sliderImg2 from '../../assets/99.jpg';
import sliderImg3 from '../../assets/100.jpg';
import img1 from '../../assets/11.png';
import img2 from  '../../assets/22.png';
import img3 from '../../assets/33.png';
import img4 from '../../assets/140.png';
import img5 from '../../assets/44.png';
import img6 from '../../assets/66.png';
import img7 from '../../assets/77.png';
import * as React from 'react';
import './landing.css';
import SimpleImageSlider from "react-simple-image-slider";
import LandingCard from './Card'; 
import { Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';

const slider_images = [
    { url: sliderImg1 }, 
    { url: sliderImg2 }, 
    { url: sliderImg3 }
];

const cart_object = [
    {
        "id": 1,
        "src" : img1,
        "name" : "Chair",
        "price" : "115",
        "strike_price" : "135"
    },
    {
        "id": 2,
        "src" : img2,
        "name" : "Wardrobe",
        "price" : "45",
        "strike_price" : "56"
    },
    {
        "id": 3,
        "src" : img3,
        "name" : "Living Room Couch Set",
        "price" : "74",
        "strike_price" : "80"
    },
    {
        "id": 4,
        "src" : img4,
        "name" : "Chandliers",
        "price" : "78",
        "strike_price" : "90"
    },
    {
        "id": 5,
        "src" : img5,
        "name" : "Armchair",
        "price" : "74",
        "strike_price" : "80"
    },
    {
        "id": 6,
        "src" : img6,
        "name" : "Couch Set",
        "price" : "174",
        "strike_price" : "200"
    },
    {
        "id": 7,
        "src" : img7,
        "name" : "Coat Hanger",
        "price" : "115",
        "strike_price" : "135"
    }
];



function Landing(){
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
          setProductList(response.data);
        });
    }, []);

    console.log(productList)

    return productList.length == 0 ? (
        <Spinner />
    ) : (
        <div className='landing-page'>
            <SimpleImageSlider
                width='100%'
                height={504}
                images={slider_images}
                showBullets={true}
                showNavs={true}
                autoPlay ={true}
            />
            <hr className='divider-line'></hr>
            <h4 className='page-title'>PRODUCTS</h4>
            <Grid container spacing={4} className='product-card'>
                {/* {productList.map((s) =>(
                    <LandingCard itemID= {s.id} itemImage={s.images[0]} itemName={s.title} itemPrice={s.price} itemStrikePrice={s.price}></LandingCard>
                ))} */}
                {cart_object.map((s) =>(
                    <Grid item style={{width: "24%", padding: "0px", textAlign: "center"}}>
                    <LandingCard itemID= {s.id} itemImage={s.src} itemName={s.name} itemPrice={s.price} itemStrikePrice={s.strike_price}></LandingCard>
                    </Grid>
                ))}
            </Grid>
        </div>
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
                    <div className = "textcontainer" style={{marginLeft:'auto',marginRight:'auto',position:'absolute',color:'white',textAlign:'center'}}>
                    <h1>Affordable Appliances That Keep Up</h1>
                    <h3>Work Hard Appliances.. Feel Good Prices!!</h3>
                    </div>
                </div>
                <div>
                <hr className="line2"></hr></div>
                <div>
                    <div className='text'>
                        <h4>PRODUCTS</h4>
                    </div>
                    <Grid container spacing={4} className='product'>
                        {productList.map((s) =>(
                            <LandingCard itemID= {s.id} itemImage={s.images[0]} itemName={s.title} itemPrice={s.price} itemStrikePrice={s.price}></LandingCard>
                        ))}
                        {/* {cart_object.map((s) =>(
                            <LandingCard itemImage={s.src} itemName={s.name} itemPrice={s.price} itemStrikePrice={s.strike_price}></LandingCard>
                        ))} */}
                    </Grid>
                </div>
        </div>
    );
}

export default Landing;