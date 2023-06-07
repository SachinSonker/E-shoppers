import React, { useState, useEffect } from 'react';
import { AppBar, styled, Toolbar, Typography, Box, Button, IconButton, Popper, Popover, TextField, endAdornment, Container, ClickAwayListener } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './Navbar.css';
import Cart from '../Cart/Cart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

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
        display: 'none'
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
    const [showOption, setShowOption] = useState(false)
    const [optionList, setOptionList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setSignIn(true)
        }
    }, []);

    const openModal = () => {
        setModalOpen(true)
        setOpen(false)
        setAnchorEl(null)
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
    function logout() {
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
        setOpen(false)
        setAnchorEl(null)
    }
    const handleSearch = (searchText) => {

        console.log("search", searchText)

        if (searchText !== "") {

            setShowOption(true)

            axios.get(`http://10.53.97.64:8090/api/search/${searchText}`).then((response) => {

                console.log(response)

                setOptionList(response.data)

            });

        } else {

            setShowOption(false)

        }

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
                            <Link to='/' style={{ color: '#000000', textDecoration: 'none' }}>
                                Shoppers
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%', flexGrow: 1 }}>
                        <Search className='searchBox'>
                            {/* <TextField placeholder='search...' variant='outlined' inputProps={{ endAdornment: (<IconButton><SearchIcon /></IconButton>)}}/> */}
                            <TextField
                                variant='outlined'
                                placeholder='Search...'
                                onChange={event => handleSearch(event.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton><SearchIcon sx={{ color: '#8B3DFF' }} /></IconButton>
                                    )
                                }}
                                size='small'
                                sx={{ paddingRight: '0px !important', width: '100%' }}
                            />
                            {/* <IconButton><SearchIcon /></IconButton> */}
                            {showOption ? <Box className="optionList">

                                {optionList.map((item) => (

                                    <option className='option' onClick={() => { setShowOption(false); navigate(`/productdetails?id=${item.id}`) }}>{item.name} </option>))}

                            </Box> : ""}
                        </Search>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Box>
                                <Button sx={{ color: 'white', width: '90%', margin: "0 10px 0", backgroundColor: '#8B3DFF', '&:hover': { backgroundColor: '#7300e6' }, height: '39px', '@media(max-width:690px)': { display: 'none' } }} variant="contained" endIcon={<ShoppingBagIcon />} onClick={handleClick('bottom')}>
                                    <Typography sx={{ marginTop: '5px', textTransform: "none", fontSize: "15px", fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: 400, lineHeight: '27px' }}>My Cart</Typography>
                                </Button>
                                <IconButton sx={{ '@media(min-width:690px)': { display: 'none', '&:hover': { backgroundColor: 'white' } } }} onClick={handleClick('bottom')}><ShoppingBagIcon sx={{ color: '#8B3DFF' }} /></IconButton>
                                {open ? (<Popper
                                    open={open}
                                    disablePortal={false}
                                    keepMounted
                                    anchorEl={anchorEl}
                                    placement={placement}
                                    onClose={handleClose}
                                    sx={{
                                        zIndex: 1500,
                                        width: '344px',
                                        height: '570px',
                                        '@media(max-width:1000px)': { height: '462px' },
                                        '@media(max-width:800px)': { height: '412px' },
                                        '@media(max-width:690px)': { width: '200px', height: '380px' }
                                    }}>
                                    {signIn ? <Cart onClose={handleClose} itemRemove={itemDelete} /> : ""}
                                    {!signIn ? <Box sx={{ backgroundColor: 'white', border: '2px solid', marginTop: '10px' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>Please <Link onClick={openModal}>SignIn</Link> to see items you added</Typography>
                                            <IconButton sx={{ marginTop: '12px', marginRight: '15px', '&: hover': { backgroundColor: 'white' } }} onClick={handleClose}><CloseIcon /></IconButton></Box>
                                    </Box> : ""
                                    }                                </Popper>) : null}

                                {isOpen ? <Login onClose={closeModal} registration={createAccount} loggedIn={login} /> : ""}
                                {registration ? <Signup onClose={() => setRegistration(false)} signin={openSignIn} loggedIn={login} /> : ""}
                            </Box>
                        </ClickAwayListener>
                        <Box>
                            {!signIn ? <SignIn variant='contained' onClick={openModal}>Sign In</SignIn> : ""}
                            {/* {signIn ? <AccountCircleRoundedIcon sx={{ color: '#8B3DFF', fontSize: '2.5em', margin: '0 10px 0' }} /> : ""} */}
                            {signIn ? (<>
                                <LogOut><LogoutIcon onClick={logout} /></LogOut>

                                <IconButton sx={{ '@media(min-width:690px)': { display: 'none' }, }}><LogoutIcon sx={{ color: '#8B3DFF' }} /></IconButton>
                            </>) : ""}
                        </Box>
                    </Box>
                </Toolbar >
            </AppBar >
        </Container >
    )
}

export default Navbar
