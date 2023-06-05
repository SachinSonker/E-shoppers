import React from "react";
import img1 from '../../assets/11.png';
import "./ProductDetails.css";

function ProductImages(){
    return(
        <figure>
            <img
                src={img1}
                className="box-image--style"
            />
        </figure>
    )
}

export default ProductImages;