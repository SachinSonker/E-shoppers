import React from 'react'
import { AppBar, styled, Toolbar, Typography, Box, Button, IconButton , TextField, endAdornment,Container} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './Navbar.css'
const noOfItems = 0;

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    width: "200px",
}))
const Shop = styled(Button)({
    textTransform: "none",
    color: "ButtonText",
    '&:hover,&:active': {
        textDecoration:'underline',
        backgroundColor:'transparent'
    },
    fontSize: "15px",
    margin: "0 10px 0",
    fontFamily: 'Mulish',
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "5px"
})
const SignIn = styled(Button)({
    textTransform: "none",
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '25px',
    color: "#000000",
    '&:hover': {
        backgroundColor:'transparent'
    }
})
const Navbar = () => {
    return (
        <Container className='container'>
        <AppBar  color='transparent' elevation={0} sx={{position:'sticky'}}>
            <Toolbar sx={{ display: "flex",backgroundColor: "white",borderBottom:1,paddingBottom:'20px'}}>
                <Box flex={1}>
                            <Shop>Shop</Shop>
                </Box>
                      
                <Box flex={1}>
                            <Typography
                                variant='h3'
                                component={'h1'}
                                sx={{ fontFamily: 'Palanquin Dark',
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "48px",
                                        lineHeight: "25px",
                                        letterSpacing: "-0.055em"}} >Shoppers</Typography>
                </Box>
                <Box>
                    <Search >
                                <TextField
                                    placeholder='search...'
                                    variant='outlined'
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton><SearchIcon /></IconButton>
                                        )
                                    }}
                                    size="small"
                                />
                    </Search>
                </Box> 
                <Box>
                    <SignIn>Sign In</SignIn>
                    <Button sx={{ textTransform:"none",color: "ButtonText", borderColor: "ButtonText",fontSize:"13px",margin:"0 10px 0",border:"1px solid #A0A0A0",fontFamily: 'Mulish',fontStyle: 'normal',fontWeight: 400,lineHeight:'27px',boxSizing:"border-box" }} endIcon={<ShoppingBagIcon />}>{noOfItems} items</Button>
                </Box>                                
                </Toolbar>
        </AppBar>
        </Container>
    )
}

export default Navbar