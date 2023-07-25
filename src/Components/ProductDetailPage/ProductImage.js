import React, { useEffect, useState } from "react";
import img1 from '../../assets/11.png';
import "./ProductDetails.css";

import ReactImageMagnify from 'react-image-magnify';
import { IconButton } from "@mui/material";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function ProductImages(props) {
    // const [imgId, setImgId] = useState(0)
    // useEffect(() => { 
    // },[imgId])
    // const images = [
    //     {
    //         imgUrl:props.prodImage
    //     },
    //     {
    //         imgUrl:img1
    //     }
    // ]
    return (
        // <figure>
        //     <img
        //         src={props.prodImage}
        //         className="box-image--style"
        //     />
        // </figure>
        <div className="product-images">
            {/* <div className="image-grid">
                <ul className="image-list">
                    {
                        images.map((images, id) => (
                            <li>
                                <div className="image-selector">
                                    <img id={images} src={images.imgUrl} onMouseOver={() => setImgId(id)} />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div> */}
            <IconButton className="favorite-icon">
                <FavoriteBorderIcon />
            </IconButton>
            <figure>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'xyz',
                    //isFluidWidth: true,
                    width: 500,
                    height: 520,
                    src: props.prodImage,
                },
                largeImage: {
                    src: props.prodImage,
                    width: 1800,
                    height: 2500
                    },
                shouldUsePositiveSpaceLens: true,
                enlargedImagePosition: 'beside',
                imageClassName: 'box-image--style',
                enlargedImageContainerDimensions: {
                    width: '120%',
                    height:'100%'
                },
                enlargedImageContainerClassName: 'zoomed-image',
                isHintEnabled: true,
                shouldHideHintAfterFirstActivation:false
                }} /> 
            </figure>
        </div>    
    )
}

export default ProductImages;