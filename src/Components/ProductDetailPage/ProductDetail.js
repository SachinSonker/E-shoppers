import React, { useState } from "react";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { useEffect } from "react";
import axios from "axios";
import { MdSecurity } from "react-icons/md";
import ProductImages from "./ProductImage";
import './ProductDetails.css';
import Stars from "./Stars";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Grid,IconButton } from "@mui/material";
import LandingCard from "../LandingPageComponent/Card";
import { NavLink } from 'react-router-dom';
import '../Wishlist/Wishlist.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { showToast } from '../../services/toastService';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function ProductDetails() {
    const [prodObj, setProdObj] = useState({});
    const [products, setProducts] = useState([]);
    const [params] = useSearchParams();
    const navigate = useNavigate()
    const size = ["S", "M", "L", "XL"];
    const color = ["White", "Olive", "Cream"];


    function getRandomItem(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
        // get random item
        const item = arr[randomIndex];
        return item;
    }

    useEffect(() => {
        axios.get(`http://65.0.17.17:8090/api/product/${params.get('id')}`).then((response) => {
            console.log(response.data)
            setProdObj(response.data)
        });
        axios.get(`http://65.0.17.17:8090/api/product/recommend/${params.get('id')}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, params.get('id'));

    function notifyMe() {
        showToast('Subscribed Successfully !!!', 'success');
    }

    function addToCart() {
        if (sessionStorage.getItem("token") == null) {
            //alert("Please Login First...")
            showToast('Please Login First...', 'info');
        } else {
            const data = {
                "color": getRandomItem(color),
                "productId": params.get('id'),
                "quantity": 1,
                "size": getRandomItem(size)
            }

            axios.post("http://65.0.17.17:8090/api/addtocart", data, {
                headers: { Authorization: "Bearer " + sessionStorage.getItem("token") }
            }).then((response) => {
                console.log(response)
                //alert("Item added successfully...")
                showToast('Item added successfully...', 'success');
            });
        }
    }

    return (
        <React.Fragment>
  <div className="productDetails" >
                {/* <div className='image-selector'>
                    <img src={"data:image/jpeg;base64," + prodObj.image}  />
                </div> */}
                <ProductImages prodImage={"data:image/jpeg;base64," + prodObj.image} />
            <div className="product-data">
                <h1 className="heading">{prodObj.name}</h1>
                <Stars ratings={prodObj.ratings} reviews={25} from="productDetails"/>
                <p className="product-data-price ">Price <s>₹{Math.round(prodObj.price)}</s></p>
                <p className="product-data-price product-data-real-price">Offer Price ₹{Math.round(prodObj.price - (prodObj.price * (prodObj.discountPercent/100)))} ({prodObj.discountPercent}% OFF)</p>
                <br></br>
                <p>
                    <span>
                        Description&nbsp;</span>
                    <div dangerouslySetInnerHTML={{ __html: prodObj.description }} />
                </p>&nbsp;
                <div className="specs">
                    <div className="product-data-warranty">
                        <div className="product-warranty-data">
                            <TbTruckDelivery className="warranty-icon" />
                            <p className="wardata">Free Delivery</p>
                        </div>
                        <div className="product-warranty-data">
                            <TbReplace className="warranty-icon" />
                            <p className="wardata">30 days Replacement</p>
                        </div>
                        <div className="product-warranty-data">
                            <MdSecurity className="warranty-icon" />
                            <p className="wardata">2 Years Warranty</p>
                        </div>
                    </div>&nbsp;
                </div>
                <div className="product-data-info">
                    <p className="text-data">Available&nbsp;
                        <span>{prodObj.totalStock > 0 ? "In Stock" : " Out of Stock"}</span>
                            {/* <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>  */}
                    </p>   
                    {prodObj.totalStock > 0 ? (
                        <div className="buttons">
                            <button className="buttonstl" style={{fontFamily: "ui-serif"}} onClick={() => {navigate('/checkout')}}>Go To Checkout </button>
                            <button className="buttonstl" style={{fontFamily: "ui-serif"}} onClick={addToCart}>Add To Cart</button>
                        </div>
                    ) : (
                        <div className="buttons">
                            <button className="buttonst2" onClick={notifyMe}>Notify Me </button>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
                    <br></br>
                    <>
                        <h4 className='page-title-recomend'>Recomendation</h4>
                        <Grid container spacing={4} className="product-card">
                            {products.map((s) => (
                                <Grid
                                    item key={s.id}
                                    style={{ width: "25%", padding: "0px", textAlign: "center" }}
                                >
                                    <NavLink key={s.id} to={`/productdetails?id=${s.id}`} style={{ textDecoration: 'none' }}>
                                        <LandingCard
                                            itemID={s.id}
                                            itemImage={"data:image/jpeg;base64," + s.image}
                                            itemName={s.name}
                                            itemPrice={s.price}
                                            itemStrikePrice={s.price}
                                            itemRating={s.ratings}
                                            cardType="product"
                                        ></LandingCard>
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                </React.Fragment>
                )
}


                export default ProductDetails;