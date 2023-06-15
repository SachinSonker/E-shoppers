import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import LandingCard from "./Card";

const ProductPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const response = axios
        .get(
          `http://10.53.97.64:8090/api/product/category/${location.state.categoryName}`
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

  //Function to navigate to the product details page
  const navigateToPDP = (itemID) => {
    navigate("/productdetails?id=" + itemID);
  };

  return (
    <>
      <Grid container spacing={4} className="product-card">
        {products.map((s) => (
          <Grid
            item key={s.id}
            style={{ width: "25%", padding: "0px", textAlign: "center" }}
          >
            <LandingCard
              itemID={s.id}
              itemImage={"data:image/jpeg;base64," + s.image}
              itemName={s.name}
              itemPrice={s.price}
              itemStrikePrice={s.price}
              cardType="product"
            ></LandingCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductPage;
