import React, { useState,useEffect } from 'react';
import { Box, IconButton, Typography, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import { useHistory } from 'react-router-dom';
import img1 from '../../assets/11.png';
import img2 from '../../assets/22.png';
import img3 from '../../assets/33.png';
import CartItem from '../Cart Item/CartItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = ({ onClose, itemRemove }) => {
  const navigate = useNavigate();

  // State to store the cart items
  const [addCartObject, setAddCartObject] = useState([
  ]);

  useEffect(() => {
    getAllCartItems();
  }, []);

  const getAllCartItems = () => {
      axios
      .get("http://10.53.97.64:8090/api/cartDetails", {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => {
        console.log("from cart popup", response)
        // setCartItems(response.data);
        // setData(response.data);
        setAddCartObject(response.data)
      });
  }
  // Handle click event for "Go to Checkout" button
  const handleClick = () => {
    navigate('/checkout');
  };

  // Increase the quantity of a cart item
  const increaseQty = (productId) => {
    const updatedProducts = addCartObject.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setAddCartObject(updatedProducts);
  };

  // Decrease the quantity of a cart item
  const decreaseQty = (productId) => {
    const updatedProducts = addCartObject.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity > 0 ? product.quantity - 1 : product.quantity
        };
      }
      return product;
    });
    setAddCartObject(updatedProducts);
  };

  // Delete a cart item
  const deleteProduct = (productId) => {
    axios.delete(`http://10.53.97.64:8090/api/cartDetails/${productId}`, {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    })
      .then((response) => {
        getAllCartItems();
    })
    itemRemove()
  }
  const calculateTotal =addCartObject.reduce((acc,item)=> acc + item.quantity * item.price,0)
  return (
    <Box sx={{ backgroundColor: 'white', width: '344px', height: '570px', border: '2px solid', marginTop: '10px', '@media(max-width:1000px)': { height: '462px' }, '@media(max-width:800px)': { height: '412px' }, '@media(max-width:690px)': { width: '200px', height: '380px' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', '@media(max-width:690px)': {width:'200px'} }}>
            <Typography
                sx={{
                  marginTop: '25px',
                  marginLeft: '14px',
                  marginBottom: '17px',
                  fontFamily: 'Ovo',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '37px'
                }}>
               Your Bag
            </Typography>
            <IconButton sx={{marginTop: '12px', marginRight:'15px','&: hover':{backgroundColor:'white'}}} onClick={onClose}><CloseIcon /></IconButton>
          </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '13px', maxHeight: '424px', overflowY: 'scroll', overflowX: 'hidden', '@media(max-width:1000px)': { maxHeight: '250px' }, '@media(max-width:800px)': { maxHeight: '200px' } ,'@media(max-width:690px)':{width:'200px',height:'168px'}}}>
        
          {
            addCartObject.length === 0 ? <Typography>Your Cart is Empty</Typography> : addCartObject.map((data) => (
              <CartItem item={data} key={data.productId} image={"data:image/jpeg;base64," + data.image} name={(data.name.length >= 12) ? (data.name.slice(0, 12) + "...") : data.name} color={data.color} size={data.size} qty={data.quantity} price={data.price} addQuantity={() => increaseQty(data.productId)} removeQuantity={() => decreaseQty(data.productId)} deleteItem={() => deleteProduct(data.productId)} />
            ))
          }

          </Box>
          
      <Box elevation={24} sx={{ position: 'fixed', top: 'auto', bottom: 0, backgroundColor: 'background.default', width: '344px', height: '133px', borderTop: 1, zIndex: 1000, '@media(max-width:690px)': { width: '200px' } }}>
          <Box sx={{display: 'flex', justifyContent:'space-between', margin:'17px 17px 0'}}>
            <Typography sx={{
                  fontFamily: 'Muli SemiBold',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '27px'              
              }}>
                Total:
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Muli SemiBold',
                fontSize: '15px',
                lineHeight: '27px', 
                }}>
              ₹{Math.round(calculateTotal)}
            </Typography>
          </Box> 
        <Box   sx={{display: 'flex', justifyContent:'center', marginTop:'20px'}}>
          <Button
            sx={{
              backgroundColor: 'black',
              color: 'white',
              width: '70%',
              height: '10%',
              fontFamily: 'Mulish',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '25px',
              '&: hover': {
                backgroundColor: 'black',
                color: 'white'
              }

            }} onClick={handleClick}>
            Go to Checkout</Button>
          </Box>
      </Box>
      </Box>
  )
}

export default Cart
