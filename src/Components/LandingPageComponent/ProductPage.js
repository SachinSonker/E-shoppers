import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Grid } from "@mui/material";
import LandingCard from "./Card";
import { NavLink } from 'react-router-dom';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      const response = axios
        .get(
          `http://65.0.17.17:8090/api/product/category/${location.state.categoryName}`
        )
        .then((response) => {
          var arr = [response.data];
          setProducts(response.data);
          console.log(response.data);
          return response;
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h4 className='page-title'>PRODUCTS</h4>
      <Grid container spacing={4} className="product-card">
        {products.map((s) => (
          <Grid
            item key={s.id}
            style={{ width: "25%", padding: "0px", textAlign: "center" }}
          >
            <NavLink key={s.id} to={`/productdetails?id=${s.id}`} state={{ 'categoryName': s.id }}>
              <LandingCard
                itemID={s.id}
                itemImage={"data:image/jpeg;base64," + s.image}
                itemName={s.name}
                itemPrice={s.price}
                itemStrikePrice={s.price}
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
