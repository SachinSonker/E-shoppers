import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
// import react from " React";
// import Product_details from "./Product_details";
import styled from 'styled-components';
const ratings = 4.5;
const stars = 4;
// const review = "(28 customer reviews)";
const  Stars = ({ ratings, reviews }) =>{

  const ratingStar =  Array.from({length:5},(elem,index) =>{
      let number = index + 0.5;
      //debugger;
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
         <div className = "icon"/>
         {ratingStar}<span><p>({reviews} Customer Ratings)</p></span>
      
      </Wrapper>



     )

   
  


    
}
const Wrapper = styled.section` `


export default Stars;