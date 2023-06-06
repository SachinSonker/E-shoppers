import React, { useState, useEffect } from 'react';
import { AppBar, styled, Toolbar, Typography, Box, Button, IconButton, Popper, Popover, TextField, endAdornment, Container, ClickAwayListener } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './Navbar.css';
import Cart from '../Cart/Cart';
import LogoutIcon from '@mui/icons-material/Logout';


const Search = styled("div")({
    marginRight: "11px",
    width: "600px",
})

const SignIn = styled(Button)({
    textTransform: "none",
    border: "1px solid #A0A0A0",
    boxSizing: 'border-box',
    width: '100%',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '25px',
    color: "white",
    backgroundColor: '#8B3DFF',
    '&:hover': {
        backgroundColor: '#7300e6'
    },
    margin: '0 10px 0'
})
const LogOut = styled(Button)({
    textTransform: "none",
    border: "1px solid #A0A0A0",
    boxSizing: 'border-box',
    width: '100%',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '25px',
    color: "white",
    backgroundColor: '#8B3DFF',
    '&:hover': {
        backgroundColor: '#7300e6'
    },
    margin: '0 10px 0',
    '@media(max-width:690px)': {
        display:'none'
    }
})

const Navbar = () => {
    const [isOpen, setModalOpen] = useState(false);
    const [registration, setRegistration] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [placement, setPlacement] = useState();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [noOfItem, setItem] = useState(3);

    useEffect(() => {
        if(sessionStorage.getItem("token")){
            setSignIn(true)
        }
      }, []);

    const openModal = () => {
        setModalOpen(true)
    }
    function closeModal() {
        setModalOpen(false)
        console.log(isOpen)
    }
    function createAccount() {
        setRegistration(true)
        setModalOpen(false)
    }
    function itemDelete() {
        const no = noOfItem - 1
        setItem(no)
    }

    function openSignIn() {
        console.log("called login")
        setRegistration(false)
        setModalOpen(true)
    }
    function login() {
        setSignIn(true)
    }
    function logout(){
        sessionStorage.removeItem("token")
        setSignIn(false)
    }
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickAway = () => {
        setAnchorEl(false)
        setOpen(false)
    }
    return (
        <Container className='container'>
            <AppBar color='transparent' elevation={0} sx={{ position: 'sticky', marginTop: '5px' }}>
                <Toolbar sx={{ backgroundColor: "white", borderBottom: 1, paddingBottom: '15px' }}>
                    {/* <Box flex={1}><Shop>Shop</Shop></Box>    */}

                    <Box>
                        <Typography
                            variant="h3"
                            component="h1"
                            sx={{
                                fontFamily: 'Palanquin Dark',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '48px',
                                lineHeight: '25px',
                                letterSpacing: '-0.055em',
                                marginRight: '1rem',
                                '@media (max-width: 600px)': {
                                    fontSize: '25px',
                                    lineHeight: '20px',
                                    letterSpacing: '-0.045em',
                                    marginRight: '0.5em',
                                },
                            }}
                        >
                            Shoppers
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%', flexGrow: 1 }}>
                        <Search >
                            {/* <TextField placeholder='search...' variant='outlined' inputProps={{ endAdornment: (<IconButton><SearchIcon /></IconButton>)}}/> */}
                            <TextField
                                variant='outlined'
                                placeholder='Search...'
                                InputProps={{
                                    endAdornment: (
                                        <IconButton><SearchIcon sx={{ color: '#8B3DFF' }} /></IconButton>
                                    )
                                }}
                                size='small'
                                sx={{ paddingRight: '0px !important', width: '100%' }}
                            />
                            {/* <IconButton><SearchIcon /></IconButton> */}
                        </Search>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Box>
                                <Button sx={{ color: 'white', width: '90%', margin: "0 10px 0", backgroundColor: '#8B3DFF', '&:hover': { backgroundColor: '#7300e6' }, height: '39px', '@media(max-width:690px)': { display: 'none' } }} variant="contained" endIcon={<ShoppingBagIcon />} onClick={handleClick('bottom')}>
                                                <Typography sx={{ marginTop: '5px', textTransform: "none", fontSize: "15px", fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 400, lineHeight: '27px'}}>{noOfItem} Items</Typography>
                                </Button>
                                <IconButton sx={{ '@media(min-width:690px)': { display: 'none', '&:hover': { backgroundColor: 'white' } } }} onClick={handleClick('bottom')}><ShoppingBagIcon sx={{ color:'#8B3DFF'}} /></IconButton>
                                {open ? (<Popper
                                                open={open}
                                                disablePortal={true}
                                                anchorEl={anchorEl}
                                                placement={placement}
                                                onClose={handleClose}
                                                sx={{ zIndex: 1500, width: '344px', height: '609px' }}>
                                                <Cart onClose={handleClose} itemRemove={itemDelete} />
                                </Popper>) : null}

                                        {isOpen ? <Login onClose={closeModal} registration={createAccount} loggedIn={login} /> : ""}
                                        {registration ? <Signup onClose={() => setRegistration(false)} signin={openSignIn} loggedIn={login} /> : ""}
                            </Box>
                        </ClickAwayListener>   
                        <Box>
                            {!signIn ? <SignIn variant='contained' onClick={openModal}>Sign In</SignIn> : ""}
                            {/* {signIn ? <AccountCircleRoundedIcon sx={{ color: '#8B3DFF', fontSize: '2.5em', margin: '0 10px 0' }} /> : ""} */}
                            {signIn ?(<>
                                <LogOut><LogoutIcon  onClick={logout}/></LogOut>

                                <IconButton sx={{ '@media(min-width:690px)': { display: 'none' }, }}><LogoutIcon sx={{ color:'#8B3DFF'}} /></IconButton>
                            </>): ""}
                        </Box>
                    </Box>
                </Toolbar >
            </AppBar >
        </Container >
    )
}

export default Navbar
