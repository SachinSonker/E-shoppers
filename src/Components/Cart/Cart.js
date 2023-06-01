import React, { useState } from 'react'
import { Box, IconButton, Typography,Divider, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
// import { useHistory } from 'react-router-dom';
import img1 from '../../assets/11.png';
import img2 from  '../../assets/22.png';
import img3 from '../../assets/33.png';
import CartItem from '../Cart Item/CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = ({ onClose }) => {
  const navigate = useNavigate();

  const [addCartObject,setAddCartObject] = useState([{
    'id': 1,
    'srcImage': img1,
    'name': 'Chair',
    'color': 'stripe',
    'size': 'medium',
    'quantity': 1,
    'price': 115
  },
  {
    'id': 2,
    'srcImage': img2,
    'name': 'Wardrobe',
    'color': 'stripe',
    'size': 'Large',
    'quantity': 1,
    'price': 45
  },
  {
    'id': 3,
    'srcImage': img3,
    'name': 'Living Room Couch Set',
    'color': 'stripe',
    'size': 'Large',
    'quantity': 1,
    'price': 74
    }])
//   const history=useHistory()
  const handleClick = () => {
    navigate('/checkout')
  }
  const increaseQty = (productId) => {
    const updatedProducts = addCartObject.map((product) => {
      if (product.id === productId) {
        return {...product,quantity:product.quantity+1}
      }
      return product;
    })
    setAddCartObject(updatedProducts)
  }
  const decreaseQty = (productId) => {
    const updatedProducts = addCartObject.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity>0 ? product.quantity-1 : product.quantity }
      }
      return product;
    })
    setAddCartObject(updatedProducts)
  }
  const deleteProduct = (productId) => {
    const deletedItems = addCartObject.filter((product) => product.id !== productId)
    setAddCartObject(deletedItems);
  }
  const calculateTotal =addCartObject.reduce((acc,item)=> acc + item.quantity * item.price,0)
  return (
      <Box sx={{backgroundColor: 'white', height:'609px', border:'2px solid'}}>
          <Box  sx={{display: 'flex', justifyContent: 'space-between'}}>
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

          <Box sx={{display:'flex',flexDirection:'column',marginLeft:'13px',maxHeight:'424px',overflow:'auto'}}>
            {
          addCartObject.map((data) => (
            <CartItem item={data} image={data.srcImage} name={(data.name.length >= 12) ? (data.name.slice(0, 12) + "...") : data.name} color={data.color} size={data.size} qty={data.quantity} price={data.price} addQuantity={() => increaseQty(data.id)} removeQuantity={() => decreaseQty(data.id)} deleteItem={()=>deleteProduct(data.id)} />
             ))  
            }

          </Box>
          
      <Box elevation={24} sx={{position: 'fixed', top: 'auto', bottom: 0, backgroundColor: 'background.default', width: '340px', height:'133px', borderTop:1,zIndex:1000}}>
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
              ${calculateTotal}
            </Typography>
          </Box> 
        <Box   sx={{display: 'flex', justifyContent:'center', marginTop:'20px'}}>
          <Button
            sx={{
              backgroundColor: 'black',
              color: 'white',
              width: '314px',
              height: '46px',
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
