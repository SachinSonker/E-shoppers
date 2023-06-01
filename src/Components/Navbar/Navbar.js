import React, {useState} from 'react';
import { AppBar, styled, Toolbar, Typography, Box, Button, IconButton, Popper , TextField, endAdornment, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './Navbar.css';
import Cart from '../Cart/Cart';


const noOfItems = 0;

const Search = styled("div")({
    marginRight: "11px",
    width: "600px",
})
// const Shop = styled(Button)({
//     textTransform: "none",
//     color: "ButtonText",
//     '&:hover,&:active': {
//         textDecoration:'underline',
//         backgroundColor:'transparent'
//     },
//     fontSize: "15px",
//     margin: "0 10px 0",
//     fontFamily: 'Mulish',
//     fontStyle: "normal",
//     fontWeight: "400",
//     lineHeight: "5px"
// })
const SignIn = styled(Button)({
    textTransform: "none",
    border: "1px solid #A0A0A0",
    boxSizing: 'border-box',
    width:'110px',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '25px',
    color: "white",
    backgroundColor:'#8B3DFF',
    '&:hover': {
        backgroundColor:'#7300e6'
    }
})

const Navbar = () => {
    const [isOpen, setModalOpen] = useState(false);
    const [registration, setRegistration] = useState(false);
    const [signIn , setSignIn] = useState(false);
    const [placement, setPlacement] = useState();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const openModal= ()=>{
      setModalOpen(true)
    }
    function closeModal(){
      setModalOpen(false)
      console.log(isOpen)
    } 
    function createAccount(){
        setRegistration(true)
        setModalOpen(false)
    }

    function openSignIn(){
        console.log("called login")
        setRegistration(false)
        setModalOpen(true)
    }
    function login(){
        setSignIn(true)
    }
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleClose = () => {
        setOpen(false)
    }


    return (
        <Container className='container'>
        <AppBar  color='transparent' elevation={0} sx={{position:'sticky',marginTop:'25px'}}>
        <Toolbar sx={{ display: "flex", flex :'1 1 auto', backgroundColor: "white",borderBottom:1,paddingBottom:'20px',justifyContent:'space-between'}} disableGutters>
                {/* <Box flex={1}><Shop>Shop</Shop></Box>    */}
                    
                <Box>
                    <Typography
                                    variant='h3'
                                    component={'h1'}
                                    sx={{ fontFamily: 'Palanquin Dark',
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            fontSize: "48px",
                                            lineHeight: "25px",
                                            letterSpacing: "-0.055em",
                                            //marginLeft: '110px'
                                            }} >Shoppers</Typography>
                </Box>
                <Box>
                    <Search >
                            {/* <TextField placeholder='search...' variant='outlined' inputProps={{ endAdornment: (<IconButton><SearchIcon /></IconButton>)}}/> */}
                                <TextField fullWidth
                                variant='outlined'
                                placeholder='Search...'
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton><SearchIcon sx={{color:'#8B3DFF'}}/></IconButton>
                                        )
                                    }}
                                    size='small'
                                    sx={{paddingRight:'0px !important'}}
                                />
                        {/* <IconButton><SearchIcon /></IconButton> */}
                    </Search>
                    </Box>
                    <Box>
                        <Button sx={{ color:'white',width:'110px', margin: "0 10px 0", boxSizing: "border-box", backgroundColor:'#8B3DFF','&:hover': {backgroundColor:'#7300e6'},height:'39px'}} variant="contained" endIcon={<ShoppingBagIcon />} onClick={handleClick('bottom-end')}>
                                <Typography sx={{marginTop:'5px',textTransform: "none", fontSize: "15px", fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 400, lineHeight: '27px'}}>{noOfItems} Items</Typography>
                            </Button>   
                            <Popper
                                open={open}
                                anchorEl={anchorEl}
                                placement={placement}
                                onClose={handleClose}
                                sx={{ zIndex : 1500, width:'344px', height:'609px'}}
                                >
                                <Cart onClose={handleClose}
                                />
                            </Popper>
                        { !signIn ?  <SignIn variant='contained' onClick={openModal}>Sign In</SignIn>: ""}
                        { signIn ? <AccountCircleRoundedIcon /> : ""}
                        {isOpen ?  <Login onClose={closeModal} registration={createAccount} loggedIn={login}/>:""}
                        {registration ?  <Signup onClose={()=> setRegistration(false)} signin={openSignIn} loggedIn={login} />:""}
                    </Box>
                </Toolbar>
        </AppBar>
        </Container>
    )
}

export default Navbar
