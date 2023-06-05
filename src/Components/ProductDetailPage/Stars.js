import React from "react";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import styled from 'styled-components';

const  Stars = ({ ratings, reviews }) =>{

  const ratingStar =  Array.from({length:5},(elem,index) =>{
      let number = index + 0.5;
      return (
      <span key={index}>
         {ratings >= index + 1 ? (
            <FaStar className="icon" />
         ) : ratings >= number ? (
            <FaStarHalfAlt className="icon" />
         ) : (
            <AiOutlineStar className="icon" />
         )}
      </span>
      );
   });
     
     return(
      <Wrapper>
        <div>
         <div/>
         {ratingStar}<span>  ({reviews} Customer Ratings)</span>
         </div>
      </Wrapper>



     )

   
  


    
}
const Wrapper = styled.section` `


export default Stars;