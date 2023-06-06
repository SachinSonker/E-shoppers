import React from "react";
import img1 from '../../assets/11.png';
import "./ProductDetails.css";

function ProductImages(props){
    return(
        <figure>
            <img
                src={props.prodImage}
                className="box-image--style"
            />
        </figure>
    )
}

export default ProductImages;