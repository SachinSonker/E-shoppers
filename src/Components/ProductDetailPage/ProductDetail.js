import React from "react";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
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

const cart_object = [
    {
        "src": img1,
        "name": "Chair",
        "price": 115,
        "ratings": "4.1",
        "review": "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "Available": "1"
    },
    {
        "src": img2,
        "name": "Wardrobe",
        "price": "45$",
        "ratings": "4.1",
        "review": "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available": "1"
    },
    {
        "src": img3,
        "name": "Living Room Couch Set",
        "price": "74$",
        "ratings": "4.1",
        "review": "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available": "1"
    },
    {
        "src": img4,
        "name": "Chandliers",
        "price": "78$",
        "ratings": "4.1",
        "review": "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available": "1"
    },
    {
        "src": img5,
        "name": "Armchair",
        "price": "74$",
        "ratings": "4.1",
        "review": "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available": "1"
    },
    {
        "src": img6,
        "name": "Coat Hanger",
        "price": "74$",
        "ratings": "4.1",
        "review": "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available": "1"
    },
    {
        "src": img7,
        "name": "Tulip Chair",
        "price": "115$",
        "ratings": "4.1",
        "review": "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available": "1"
    }
];

function ProductDetails() {
    return (
        <div className="productDetails" >
            <div className="product_images">
                <ProductImages />
            </div>
            <div className="product-data">
                <h1 className="heading">{cart_object[0].name}</h1>
                {/* <p>{cart_object[0].ratings}</p> */}
                <Stars ratings={4.5} reviews={25} />
                {/* <p>Customer Reviews({cart_object[0].review})</p> */}
                <p className="product-data-price ">Price:
                    <del>
                        {cart_object[0].price + 20}$
                        {/* <FormatPrice price = {cart_object[0].price + 20}/> */}

                    </del>
                </p>
                <p className="product-data-price product-data-real-price">
                    Deal of the day :{cart_object[0].price}$ (14% OFF){/*<FormatPrice price = {cart_object[0].price}/>              */}
                </p>
                <p>
                    <span>Description:&nbsp;</span>{cart_object[0].description}
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
                    </div>
                </div>
                <div className="product-data-info">
                    <p className="text-data">Available:
                        <span>{cart_object[0].Available > 0 ? "In Stock" : "Not Available"}</span>
                    </p>

                    <div className="buttons">
                        <button className="buttonstl">Buy Now</button>
                        <button className="buttonstl">Add To Cart</button>
                    </div>
                </div>

            </div>
        </div>
    )




}
export default ProductDetails;