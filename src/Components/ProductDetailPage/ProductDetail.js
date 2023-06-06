import React, { useState } from "react";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { useEffect } from "react";
import axios from "axios";
// import parse from 'html-react-parser';
import { MdSecurity } from "react-icons/md";
import img1 from '../../assets/11.png';
import img2 from '../../assets/22.png';
import img3 from '../../assets/33.png';
import img4 from '../../assets/140.png';
import img5 from '../../assets/44.png';
import img6 from '../../assets/66.png';
import img7 from '../../assets/77.png';
import ProductImages from "./ProductImage";
import './ProductDetails.css';
import Stars from "./Stars";
import { useSearchParams } from "react-router-dom";

function ProductDetails() {
    const [prodObj, setProdObj] = useState({});
    const [params] = useSearchParams();

    useEffect(() => {
        axios.get(`http://10.53.97.64:8090/api/product/${params.get('id')}`).then((response) => {
        //   setProductList(response.data);
        console.log(response)
            setProdObj(response.data)
        });
        console.log("params",params.get('id'))
    }, []);

    function addToCart(){
        const data = {
                "color": prodObj.color[0],
                "productId": params.get('id'),
                "quantity": 1,
                "size": "s"
        }

        axios.post("http://10.53.97.64:8090/api/addtocart",data, {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") }
        })
        .then((response) => {
            console.log(response)
            alert("Item added successfully...")
        });

    }

    return (
        <div className="productDetails" >
            <div className="product_images">
                <ProductImages  prodImage={"data:image/jpeg;base64,"+prodObj.image}/>
            </div>
            <div className="product-data">
                <h1 className="heading">{prodObj.name}</h1>
                {/* <p>{cart_object[0].ratings}</p> */}
                <Stars ratings={prodObj.ratings} reviews={25} />
                {/* <p>Customer Reviews({cart_object[0].review})</p> */}
                <p className="product-data-price ">Price:
                    <del>
                        {prodObj.price + 20}$
                        {/* <FormatPrice price = {cart_object[0].price + 20}/> */}

                    </del>
                </p>
                <p className="product-data-price product-data-real-price">
                    Deal of the day :{prodObj.price}$ (14% OFF){/*<FormatPrice price = {cart_object[0].price}/>              */}
                </p>
                <p>
                    <span>
                        Description:&nbsp;</span>
                        <div dangerouslySetInnerHTML={{ __html:prodObj.description }} />
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
                        <button className="buttonstl">Buy Now</button>
                        <button className="buttonstl" onClick={addToCart}>Add To Cart</button>
                    </div>
                </div>

            </div>
        </div>
    )




}
export default ProductDetails;