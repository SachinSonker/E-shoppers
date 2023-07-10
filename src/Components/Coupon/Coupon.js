import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState , useEffect} from 'react';
import Checkbox from '@mui/material/Checkbox';
import './Coupon.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function Modalpopup(props) {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = ()=> props.onClose(false);
    const [discountPrice , setDiscountPrice]= useState(0);
    const [secdiscount, setSecDiscount] = useState(0);
    const [click , setClick]= useState(false);
    const [click2 , setClick2]= useState(false);

    useEffect(()=>{
    },[props.OrderTotal]);


    const CalculateDiscountPrice=()=>{
        const totalPrice = props.OrderTotal;
        const discount = totalPrice * 0.5;
        const discountedPrice = totalPrice - discount;
        setDiscountPrice(discountedPrice);
        setClick(true);      
    };

    const SecondDiscount=()=>{
        const totalPrice = props.OrderTotal;
        const discounttwo = totalPrice*0.2;
        const secdiscounted = totalPrice - discounttwo;
        setSecDiscount(secdiscounted);
        setClick2(true);
    }
   
    return (
        <div>
            <Modal
                open={open}
               
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
             >
               <Box sx={style}>
                <Button 
                style={{left:'95%',marginTop:-25,color:'black'}}
                onClick={handleClose}>✖</Button>
                <div>
                    <Typography id="modal-modal-title" style={{fontSize:30, fontFamily:'ui-serif'}}>
                        See Available Coupon's For You
                    </Typography>
                    <div style={{borderStyle:'dashed',padding:20,marginTop:20}}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize:25,fontFamily:'ui-serif'}}>
                        Flat 50% Percent off &nbsp;&nbsp;
                       <br/>
                       <Typography style={{paddingTop:20,paddingBottom:20}}>COUPON CODE :- FLAT50</Typography>
                    </Typography>
                    <Button
                           variant="contained"
                           style={{
                           backgroundColor: "#8B3DFF",
                           borderRadius: 0,
                        color: "White",
                       }}
                        onClick={CalculateDiscountPrice}>
                        APPLY COUPON
                        
                       </Button>
                       {(click)?<div style={{marginLeft:165,marginTop:-45}}><Typography>Original price: {props.OrderTotal}</Typography>
                        <Typography >Coupon Discounted price: {discountPrice.toFixed(2)}</Typography>
                        </div>:null
                    }
                    </div>
                    <div style={{borderStyle:'dashed',padding:20,marginTop:20}}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontSize:25,fontFamily:'ui-serif'}}>
                      Flat 20% Percent off &nbsp;&nbsp;
                      <br/>
                      <Typography style={{paddingTop:20,paddingBottom:20}}>COUPON CODE :- FLAT20</Typography>
                    </Typography>
                    <Button
                           variant="contained"
                           style={{
                           backgroundColor: "#8B3DFF",
                           borderRadius: 0,
                        color: "White",
                       }}
                        onClick={SecondDiscount}>
                        APPLY COUPON
                        
                       </Button>
                       {(click2)?<div style={{marginLeft:165,marginTop:-45}}><Typography>Original price: {props.OrderTotal}</Typography>
                        <Typography >Coupon Discounted price: {secdiscount.toFixed(2)}</Typography>
                         </div> :null      
                        }
                    </div>
                    </div>
                </Box>
            </Modal>
           
        </div>
    )
}

export default Modalpopup