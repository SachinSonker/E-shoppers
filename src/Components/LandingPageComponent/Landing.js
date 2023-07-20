import sliderImg1 from '../../assets/130.png';
import sliderImg2 from '../../assets/99.jpg';
import sliderImg3 from '../../assets/100.jpg';
import img1 from '../../assets/11.png';
import img2 from '../../assets/22.png';
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
import { NavLink ,Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const slider_images = [
    { url: sliderImg1 },
    { url: sliderImg2 },
    { url: sliderImg3 }
];

const cart_object = [
    {
        "id": 1,
        "src": img1,
        "name": "Chair",
        "price": "115",
        "strike_price": "135"
    },
    {
        "id": 2,
        "src": img2,
        "name": "Wardrobe",
        "price": "45",
        "strike_price": "56"
    },
    {
        "id": 3,
        "src": img3,
        "name": "Living Room Couch Set",
        "price": "74",
        "strike_price": "80"
    },
    {
        "id": 4,
        "src": img4,
        "name": "Chandliers",
        "price": "78",
        "strike_price": "90"
    },
    {
        "id": 5,
        "src": img5,
        "name": "Armchair",
        "price": "74",
        "strike_price": "80"
    },
    {
        "id": 6,
        "src": img6,
        "name": "Couch Set",
        "price": "174",
        "strike_price": "200"
    },
    {
        "id": 7,
        "src": img7,
        "name": "Coat Hanger",
        "price": "115",
        "strike_price": "135"
    }
];


const Landing=()=>{ 
    
const [categories, setCategories] = useState([]);

            useEffect(()=>{
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                axios.get('http://65.0.17.17:8090/api/category/')
                .then(response=>{
                    setCategories(response.data);
                })
                .catch(error=>{
                    console.log(error);
                });
            },[]);

            const navigate = useNavigate();


    return categories.length == 0 ? (
        <Spinner />
    ) : (
        <div className='landing-page'>
            <SimpleImageSlider
                width='100%'
                height={504}
                images={slider_images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
            />
            <hr className='divider-line'></hr>

            <h4 className='page-title'>CATEGORIES</h4>
            <Grid container spacing={4} className='product-card'>
                {categories.map(category => (
                    <Grid item  key={category.id} style={{ width: "25%", padding: "0px", textAlign: "center"}}>
                    <Link key={category.id}  to={`/products?categoryName=${category.name}`} style={{textTransform:'capitalize', fontSize:'30px', textDecoration:'none'}}>
                        <LandingCard className="card-title" itemID={category.id} itemImage={"data:image/jpeg;base64," + category.image} itemName={category.name} cardType="category"></LandingCard>
                    </Link>
                    </Grid>
                    // <Grid item style={{ width: "25%", padding: "0px", textAlign: "center" }}>
                    //     <LandingCard key={category.id} onClick = {() = >{ navigate("/ProductPage");}} itemImage={"data:image/jpeg;base64," + category.image} itemName={category.name}>
                    //     </LandingCard>   
                    // </Grid>
                ))}
                
            </Grid>
        </div>
    );
}

export default Landing;
