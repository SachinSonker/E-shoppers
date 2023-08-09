import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Grid } from "@mui/material";
import LandingCard from "./Card";
import { NavLink } from 'react-router-dom';
import './ProductPage.css';
import { useSearchParams } from "react-router-dom";
import { Spinner } from '../Spinner/Spinner';
import { showToast } from '../../services/toastService';
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [params] = useSearchParams();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    try {
      const response = axios
        .get(
          `http://13.126.90.64:8090/api/product/category/${params.get('categoryName')}`
        )
        .then((response) => {
          //var arr = [response.data];
          setProducts(response.data);
          //console.log(response.data);
          return response;
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addToWishlist = (productId, event) => {
    event.stopPropagation();
    event.preventDefault();
    if (sessionStorage.getItem("token") == null) {
      //alert("Please Login First...")
      showToast('Please Login First...', 'info');
    } else {
      const data = {
        productId:productId
      }
      axios
        .post(`http://13.126.90.64:8090/api/wishlist/${productId}`, data, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
          }
        })
        .then((response) => {
          showToast('Item added successfully to Wishlist', 'success');
        })
    }
  }


  return products.length === 0 ? (
    <Spinner />
) : (
    <>
      <h4 className='page-title'>PRODUCTS</h4>
      <Grid container spacing={4} className="product-card">
        {products.map((s) => (
          <Grid
            className="box"
            item key={s.id}
            style={{ maxWidth: "25%", paddingTop: "20px", paddingBottom:"20px", paddingLeft:0,paddingRight:0, textAlign: "center" }}
          >
          <NavLink key={s.id}  to={`/productdetails?id=${s.id}`} style={{textDecoration:'none'}}>
            <LandingCard
              itemID={s.id}
              itemImage={"data:image/jpeg;base64," + s.image}
              itemName={s.name}
              itemPrice={s.discountedPrice}
              itemStrikePrice={s.price}
              itemRating={s.ratings}
              itemDiscount={s.discountPercent}
                addToWishlist={(event) => addToWishlist(s.id, event)} 
              cardType="product"
            ></LandingCard>
          </NavLink>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductPage;
