import React from "react";
import styled from "styled-components";
// import Product_details from "./Product_details";
import img1 from '../../assets/11.png';
import img2 from  '../../assets/22.png';
import img3 from '../../assets/33.png';
import img4 from '../../assets/140.png';
import img5 from '../../assets/44.png';
import img6 from '../../assets/66.png';
import img7 from '../../assets/77.png';
import "./ProductDetails.css";

const cart_object = [
    {
        "index": 1,
        "src" : img1,
        "name" : "Chair",
        "price" : 115,
        "ratings" : "4.1",
        "customer_review" : "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available" : "1"
    },
    {
        "index": 2,
        "src" : img2,
        "name" : "Wardrobe",
        "price" : "45$",
        "ratings" : "4.1",
        "customer_review" : "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available" : "1"
    },
    {
        "index": 3,
        "src" : img3,
        "name" : "Living Room Couch Set",
        "price" : "74$" ,  
        "ratings" : "4.1",
        "customer_review" : "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available" : "1"
    },
    {
        "index": 4,
        "src" : img4,
        "name" : "Chandliers",
        "price" : "78$",
         "ratings" : "4.1",
        "customer_review" : "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available" : "1"
    },
    {
        "index":5,
        "src" : img5,
        "name" : "Armchair",
        "price" : "74$",
         "ratings" : "4.1",
        "customer_review" : "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available" : "1"
    },
    {
        "index": 6,
        "src" : img6,
        "name" : "Coat Hanger",
        "price" : "74$", "ratings" : "4.1",
        "customer_review" : "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available" : "1"
    },
    {
        "index": 7,
        "src" : img7,
        "name" : "Tulip Chair",
        "price" : "115$",
        "ratings" : "4.1",
        "customer_review" : "27",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        "Available" : "1"
    }
];
function ProductImages(imgs){
    return(
        // <Wrapper className="wrap">
            <div className="">
                {/* { cart_object.map((curEle,index) => {
                  return(
                   <figure>
                       
                       <img
                         src={cart_object.curEle.src}  
                         alt={cart_object.curEle.name}
                         className="box-image--style"
                          key = {cart_object.index}
                        />
                    </figure>
                  )


                })} ; */}

                   <figure>
                       
                       <img
                         src={cart_object[0].src}  
                        //  alt={cart_object.curEle.name}
                         className="box-image--style"
                        //   key = {cart_object.index}
                        />
                    </figure>
          
          
          
            </div>
        // </Wrapper>

        
    )

}
const Wrapper = styled.section`
display : grid;
grid-template-columns : 0.4fr 1fr;
gap : 1rem;

.grid {
    flex-directiom : row;
      justify_items: center;
  align_items: center;
}
`
export default ProductImages;