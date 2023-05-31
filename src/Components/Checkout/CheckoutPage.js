
import React, { Component } from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DeleteIcon from '@mui/icons-material/Delete';
import {useState , useEffect} from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useForm, Controller } from "react-hook-form";
import { NavLink } from "react-router-dom";
import './CheckoutPage.css';



const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

export default function CheckoutPage() {

  //dummy data
  const [data , setData] = useState([
    {
        'id':1,
        'image' : '/image1.jpg',
        'name':'Chair',
        'color':'Blue',
        'quantity':1,
        'unit_price':1150.00
        
    },
    {
        'id':2,
        'image' : '/image2.jpg',
        'name':'Wardrobe',
        'color':'black',
        'quantity':1,
        'unit_price':1245.00
        
    },
    {
        'id':3,
        'image' : '/image2.jpg',
        'name':'Pen',
        'color':'Red',
        'quantity':1,
        'unit_price':1352.00
        
    },
    {
        'id':4,
        'image' : '/image2.jpg',
        'name':'Cycle',
        'color':'Aqua',
        'quantity':1,
        'unit_price':1999.00
        
    },
    {
        'id':5,
        'image' : '/image2.jpg',
        'name':'Laptop',
        'color':'Metal Black',
        'quantity':1,
        'unit_price':1853.00
        
    }
]);

       //product increment decrement 
        const incrementQuantity = (itemId) => {
          const updatedItems = data.map((item) => {
          if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
          }
          return item;
          });
          setData(updatedItems);
          };
          
          const decrementQuantity = (itemId) => {
          const updatedItems = data.map((item) => {
          if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
          }
          return item;
          });
          setData(updatedItems);
          };

        //calculating Total price
        const calculateTotalPrice = (unit_price, quantity) => {
            let totalPrice = 0;
            totalPrice += unit_price * quantity;

            return totalPrice;
        };

        //Calculating Subtotal
        const calculateSubTotal = () => {
            let subTotal = 0;

            data.map((item)=> {
                subTotal += item.unit_price * item.quantity;
            });

            return subTotal;
        }

        //deleting items
        const deleteItem = (itemId)=>{
          const updatedItems = data.filter((item) => item.id !== itemId);
          setData(updatedItems);
        }
        //forms
        const [address1, setAddress1] = useState("")
        const [address2, setAddress2] = useState("")
        const [postalcode, setPostalCode] = useState("")
        

        //getting state and country data
            const [state, setState] = useState({
              country: "",
              region: ""
            })
          
            const selectCountry = (val) => {
                setState({ ...state, country: val });
            }
          
            const selectRegion = (val) =>{
                setState({ ...state, region: val });
            }
            const { country, region } = state;
        
        
        
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item style={{borderRadius:0, border:'none'}}>
          <section className="section-pagetop bg">
        <div className="container">
            <h2 className="title-page" style ={{textAlign:'Left',paddingLeft:75, fontSize:30, fontWeight:400, fontFamily:'ui-serif'}}>Your Shopping Bag</h2>
        </div> 
        </section>
        
        <section className="section-content padding-y">
        <div className="container">
        
        <div className="row">
            <main className="col-md-9">
        <div className="card">
        
        <table className="table table-borderless table-shopping-cart" style = {{paddingRight:30, paddingLeft:30}}>
        <thead className="text-muted" style = {{backgroundColor:'#dedcdc' }}>
        <tr className="small text-uppercase">
        <th className="table_heading"scope="col">Product Name</th>
        <th className="table_heading"scope="col" width="120">Unit Price</th>
        <th className="table_heading"scope="col" width="120">Qunatity</th>
        <th className="table_heading"scope="col" width="120">Sub Total</th>
        <th className="table_heading"scope="col" width="120">Remove</th>
        {/* <th scope="col" className="text-right" width="200"> </th> */}
        </tr>
        </thead>

        <tbody>
    { data.map((item)=> {

     
        return<tr key={item.id}>
            <td>
                <figure className="itemside" style = {{display:'flex'}}>
                    <div className="aside"><img src={item.image}style={{width: 100,height: 100}} /></div>
                    <figcaption className="info" style = {{padding:5}}>
                        <a href="#" className="title text-dark" style={{textDecoration:'none',color:'black',fontSize:16, fontFamily:'ui-serif'}}>{item.name}</a>
                        <p className="text-muted small"style={{textDecoration:'none',color:'black',fontSize:16, fontFamily:'ui-serif'}}>Color: {item.color}</p>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <div className="price-wrap"style = {{position : 'absolute',marginLeft:20}}> 
                    <var className="price">${item.unit_price}</var> 
                </div> 
            </td>
            <td>
            <div style= {{display: 'flex'}}>
            <Box component="span" border={1} borderColor='black' style={{width: 20,height: 20,marginTop:20,}}>{item.quantity}</Box>
            <button onClick={()=>incrementQuantity(item.id)} variant="contained" style={{width: 20,height: 20,backgroundColor:'black',color:'white',marginTop:20,marginRight:10,marginLeft:10,}}>+</button>
            <button onClick={()=>decrementQuantity(item.id)} variant="contained" style={{width: 20,height: 20,backgroundColor:'black',color:'white',marginTop:20,}}>-</button>
            </div>
            </td>
            <td> 
                <div className="price-wrap"style = {{position : 'absolute',marginLeft:20}}> 
                    <var className="price">${calculateTotalPrice(item.unit_price, item.quantity)}</var> 
                </div> 
            </td>
            <td>
            <Grid item xs={8}>
                <DeleteIcon style = {{marginLeft:20,marginTop:20}} onClick={()=> deleteItem(item.id)}></DeleteIcon>
            </Grid>
            </td>
        </tr>
         }
        )}

        </tbody>
        </table>
        
        </div> 
        
            </main>
            
        </div>
        
        </div> 
        </section>
          </Item>
        </Grid>
        <Grid xs={4} style={{paddingTop:70, paddingRight:30}}>
          <Item style={{borderRadius:0}}>
          <div className="cart-form">
         <Typography variant="h6" gutterBottom>Summary</Typography>
         <hr/>
         <Typography variant="h6" gutterBottom style={{textAlign:'Left',fontSize:16,marginLeft:30}}>Address</Typography>
         <Typography variant="h6" gutterBottom style={{textAlign:'Left',fontSize:16,marginLeft:30}}>Name</Typography>
         <Typography variant="h6" gutterBottom style={{textAlign:'Left',fontSize:16,marginLeft:30}}>Mobile</Typography>
         <hr/>
            <div className='details'>
                    <label>Address Line 1</label>
                    <input type="text" name="address1" placeholder='Line 1' onChange={event => setAddress1(event.target.value)}></input>
                    <label>Address Line 2</label>
                    <input type="text" name="address2" placeholder='Line 2' onChange={event => setAddress2(event.target.value)}></input>
                    
                <div className="wrapper" style={{display:'flex'}}>
                <span className="selectrow">
                <CountryDropdown
                value={country}
                country={country}
                onChange={(val) => selectCountry(val)} 
                />
                </span>
                <span className="selectrow">
               <RegionDropdown
               country={country}
                value={region}
                onChange={(val) => selectRegion(val)} />
                </span>
               </div> 
               <label>Postal Code</label>
               <input type="text" name="postalcode" placeholder='Postal Code' style={{width:140}} onChange={event => setPostalCode(event.target.value)}></input>             
            </div>
        <hr/>
        <Typography variant="h6" style={{textAlign:'Left',fontSize:14,marginLeft:30}}>Sub Total &nbsp;<span style={{marginRight:190}}></span> ${calculateSubTotal()}</Typography>
        <Typography variant="h6" style={{textAlign:'Left',fontSize:14,marginLeft:30}}>Shipping</Typography>
        <Typography variant="h6" style={{textAlign:'Left',fontSize:14,marginLeft:30}}>Order Total</Typography>
        <hr/>
        <Button variant="contained" disableElevation style={{backgroundColor: 'black', width : '80%' , marginTop: 20, marginBottom: 20, borderRadius: 0, }}>Place Order</Button>
      </div>
      
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}


