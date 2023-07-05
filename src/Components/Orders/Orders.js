
import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import img1 from '../../assets/11.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './Orders.css';
import { useEffect } from 'react';
import axios from 'axios';

export default function Orders(){
    const theme = useTheme();
    const [orderList,setOrderList ] = useState([])

    useEffect(() => {
      axios.get("http://10.53.97.64:8090/api/vieworders",{
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }).then((response) => {
        setOrderList(response.data);
        console.log("data",response.data)
      });
  }, []);

  return (
   <div className='orderList'>
    {
      orderList.length > 0 ? ( 
        orderList.map((res)=>(
            <div className='order'>
        <div className='orderStatus'>
            <div className="orderIcon">
                <LocalMallIcon sx={{ color: 'white' }} />
            </div>
            <div className='status'>
                <div>
                    <h4>Order Confirmed</h4>
                </div>
                <div>
                    <p>Arriving by Thus, 15 Jun</p>
                </div>
            </div>
        </div>
    <Card sx={{ display: 'flex', boxShadow : 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
       <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={"data:image/jpeg;base64,"+res.image}
        // {"data:image/jpeg;base64,"+s.image}
        alt="Live from space album cover"
      />
    
      <Box className="orderBox" sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className='cardDetails' sx={{ flex: '1 0 auto' }}>
            <div className='orderInfo'>
            <Typography component="div" variant="h6">
            {res.productName}
          </Typography>
          {/* <Typography variant="subtitle1" color="text.secondary" component="div">
            {console.log(res.productName)}
          </Typography> */}
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Size : {res.size}
            
          </Typography>
            </div>
          <div>
          <button className='trackButton'>Track order</button>
          </div>
        </CardContent>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box> */}
      </Box>
      </Card>
      </div>
        ))
    ) : ( <h5>No Orders</h5> )
      }</div>
      
  );
}