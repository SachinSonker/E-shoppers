import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Grid } from "@mui/material";
import LandingCard from "./Card";
import { NavLink } from 'react-router-dom';
import './ProductPage.css';
import { useSearchParams } from "react-router-dom";
import { Spinner } from '../Spinner/Spinner';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [params] = useSearchParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    try {
      const response = axios
        .get(
          `http://65.0.17.17:8090/api/product/category/${params.get('categoryName')}`
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
            style={{ width: "25%", paddingTop: "20px", paddingBottom:"20px", paddingLeft:0,paddingRight:0, textAlign: "center" }}
          >
          <NavLink key={s.id}  to={`/productdetails?id=${s.id}`} style={{textDecoration:'none'}}>
            <LandingCard
              itemID={s.id}
              itemImage={"data:image/jpeg;base64," + s.image}
              itemName={s.name}
              itemPrice={s.price}
              itemStrikePrice={s.price}
              itemRating={s.ratings}
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
