import { Divider, Typography,Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Wishlist.css'
import img from '../../assets/44.png'
import LandingCard from '../LandingPageComponent/Card';
import axios from 'axios';
import { showToast } from '../../services/toastService';
import { NavLink } from 'react-router-dom';
const Wishlist = () => {
  const [addWishlist, setAddWishlist] = useState([]);
  const size = ["S", "M", "L", "XL"];
  const color = ["White", "Olive", "Cream"];
  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
  }
  useEffect(() => {
    getAllWishlistItems();
  }, [])
  const getAllWishlistItems = () => {
    axios
      .get("http://localhost:8090/api/wishlist/", {
        headers: {
          Authorization:"Bearer " + sessionStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log("From wishlist", response)
        setAddWishlist(response.data)
      })
  }
  const rmvItemFromWishlist = (wishlistId, event) => {
    event.stopPropagation()
    event.preventDefault();
    axios.delete(`http://localhost:8090/api/wishlist/${wishlistId}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token")
      }
    })
      .then(() => {
        getAllWishlistItems();
      })
  }
  const addToCart = (productId, event) => {
    event.stopPropagation()
    event.preventDefault();
    if (sessionStorage.getItem("token") == null) {
      //alert("Please Login First...")
      showToast('Please Login First...', 'info');
    } else {
      const data = {
        "color": getRandomItem(color),
        "productId": productId,
        "size": getRandomItem(size)
      }

      axios.post("http://localhost:8090/api/addtocart", data, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") }
      }).then((response) => {
        console.log(response)
        // rmvItemFromWishlist(wishlistId,event)
        //alert("Item added successfully...")
        showToast('Item added successfully to Cart', 'success');
      });
    }
  }
  return (
    <div>
        <div className='wishlist-header'>
              <Typography className='wishlist-title'>
          Wishlist ({addWishlist.length})
              </Typography>
        </div>
        <Divider className='divider' />
        <div className='wishlist-content'>
        <Grid container spacing={4} className='wishlist-grid'>
          {
            addWishlist.map((data) => (
              <Grid className='wishlist-card'>
                <NavLink key={data.product.id} to={`/productdetails?id=${data.product.id}`} style={{ textDecoration: 'none' }}>
                  <LandingCard addToCart={(event) => addToCart(data.product.id, event)} rmvItem={(event) => rmvItemFromWishlist(data.wishlistId, event)} itemImage={"data:image/jpeg;base64," + data.product.image} itemName={data.product.name} itemRating={data.product.ratings} itemPrice={data.product.price} itemStrikePrice={data.product.discountedPrice} cardType="wishlist" />
                </NavLink>  
              </Grid>
            ))
          }
        </Grid>
          
        </div>  
    </div>
  )
}

export default Wishlist
