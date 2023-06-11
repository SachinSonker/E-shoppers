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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductDetails() {
    const [prodObj, setProdObj] = useState({});
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
        axios.get(`http://10.53.97.64:8090/api/product/${params.get('id')}`).then((response) => {
            console.log(response.data)
            setProdObj(response.data)
        });
    }, params.get('id'));

    function addToCart() {
        if (sessionStorage.getItem("token") == null) {
            //alert("Please Login First...")
            toast.info('Please Login First...', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                theme: 'colored'
            });
        } else {
            const data = {
                "color": getRandomItem(color),
                "productId": params.get('id'),
                "quantity": 1,
                "size": getRandomItem(size)
            }

            axios.post("http://10.53.97.64:8090/api/addtocart", data, {
                headers: { Authorization: "Bearer " + sessionStorage.getItem("token") }
            }).then((response) => {
                console.log(response)
                //alert("Item added successfully...")
                toast.success('Item added successfully...', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    theme: 'colored'
                });
            });
        }
    }

    return (
        <div className="productDetails" >
            <div className="product_images">
                <ProductImages prodImage={"data:image/jpeg;base64," + prodObj.image} />
            </div>
            <div className="product-data">
                <h1 className="heading">{prodObj.name}</h1>
                <Stars ratings={prodObj.ratings} reviews={25} />
                <p className="product-data-price ">Price: <s>₹ {Math.round(prodObj.price)}</s></p>
                <p className="product-data-price product-data-real-price">Deal of the day : ₹  {Math.round(prodObj.price - (prodObj.price * 0.14))}(14% OFF)</p>
                <p>
                    <span>
                        Description:&nbsp;</span>
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
                    <p className="text-data">Available:
                        <span>{prodObj.totalStock > 0 ? "In Stock" : "Not Available"}</span>
                    </p>
                    <div className="buttons">
                        <button className="buttonstl" onClick={() => {navigate('/checkout')}}>Go To Checkout </button>
                        <button className="buttonstl" onClick={addToCart}>Add To Cart</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}


export default ProductDetails;