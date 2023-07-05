import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography,Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from '../Cart Item/CartItem';
import { useNavigate } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import axios from 'axios';
import './Cart.css';
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
    onClose();
  };

  // Increase the quantity of a cart item
  const increaseQty = (productId) => {
    const updatedProducts = addCartObject.map((product) => {
      if (product.productId === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setAddCartObject(updatedProducts);
  };

  // Decrease the quantity of a cart item
  const decreaseQty = (productId) => {
    const updatedProducts = addCartObject.map((product) => {
      if (product.productId === productId) {
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
  const calculateTotal = addCartObject.reduce((acc, item) => acc + item.quantity * (item.price - (item.price * 0.14)), 0)
  //cartLength(addCartObject.length)
  return (
    <Box className='popper-container'>
      <Box className='box1'>
        <Typography className='cart-title'>
          Your Bag ({addCartObject.length} items)
        </Typography>
        <IconButton sx={{ marginTop: '12px', marginRight: '15px', '&: hover': { backgroundColor: 'white' } }} onClick={onClose}><CloseIcon /></IconButton>
      </Box>

      <Box className='box2'>

        {
          addCartObject.length === 0 ? <EmptyCart /> : addCartObject.map((data) => (
            <CartItem item={data} key={data.productId} image={"data:image/jpeg;base64," + data.image} name={(data.name.length >= 12) ? (data.name.slice(0, 12) + "...") : data.name} color={data.color} size={data.size} qty={data.quantity} price={data.price} addQuantity={() => increaseQty(data.productId)} removeQuantity={() => decreaseQty(data.productId)} deleteItem={() => deleteProduct(data.productId)} />
          ))
        }

      </Box>

      <Box className='box3' elevation={24}>
        <Box className='totalprice-box'>
          <Typography className='total'>
            Total:
          </Typography>
          <Typography className='price'>
            ₹{Math.round(calculateTotal)}
          </Typography>
        </Box>
        <Box className="checkout-box" >
          <Button className="checkout-button" onClick={handleClick}>
            Go to Checkout</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Cart
