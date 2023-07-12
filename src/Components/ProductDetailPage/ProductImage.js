import React, { useEffect, useState } from "react";
import img1 from '../../assets/11.png';
import "./ProductDetails.css";
import ReactImageMagnify from 'react-image-magnify';
function ProductImages(props) {
    const [imgId, setImgId] = useState(0)
    useEffect(() => { 
    },[imgId])
    const images = [
        {
            imgUrl:props.prodImage
        },
        {
            imgUrl:img1
        }
    ]
    return (
        // <figure>
        //     <img
        //         src={props.prodImage}
        //         className="box-image--style"
        //     />
        // </figure>
        <div className="product-images">
            <div className="image-grid">
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
            </div>
            <figure>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'xyz',
                    isFluidWidth: true,
                    src: images[imgId].imgUrl,
                },
                largeImage: {
                    src: images[imgId].imgUrl,
                    width: 1800,
                    height: 2500
                    },
                shouldUsePositiveSpaceLens: true,
                enlargedImagePosition: 'beside',
                imageClassName: 'box-image--style',
                enlargedImageContainerDimensions: {
                    width: '100%',
                    height:'150%'
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