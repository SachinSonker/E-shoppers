import React from 'react'
import { AppBar, styled, Toolbar, Typography, Box, Button, IconButton , TextField, endAdornment, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const noOfItems = 14;

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    width: "150px",
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
        <Container>
        <Box  sx={{ padding:"2px 10px 20px",borderBottom:1,height:"calc(100vh-86.8px)" }} >
        <AppBar  color='transparent' elevation={0} sx={{position:'sticky'}}>
            <Toolbar sx={{ display: "flex",backgroundColor: "white"}}>
                <Box flex={1}><Shop>Shop</Shop></Box>        
                <Box flex={1}>
                            <Typography
                                variant='title'
                                component={'h1'}
                                sx={{ fontFamily: 'Palanquin Dark',
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "48px",
                                        lineHeight: "25px",
                                        letterSpacing: "-0.055em"}} >E-Shopper's</Typography>
                </Box>
                    <Search >
                            {/* <TextField placeholder='search...' variant='outlined' inputProps={{ endAdornment: (<IconButton><SearchIcon /></IconButton>)}}/> */}
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
                        {/* <IconButton><SearchIcon /></IconButton> */}
                    </Search>
                    <SignIn>Sign In</SignIn>
                    <Button sx={{ textTransform:"none",color: "ButtonText", borderColor: "ButtonText",fontSize:"13px",margin:"0 10px 0",border:"1px solid #A0A0A0",fontFamily: 'Mulish',fontStyle: 'normal',fontWeight: 400,lineHeight:'27px',boxSizing:"border-box" }} endIcon={<ShoppingBagIcon />}>{noOfItems} items</Button>
            </Toolbar>
        </AppBar>
        </Box>
        </Container>
    )
}

export default Navbar
