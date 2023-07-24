import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Popper, TextField, Container, ClickAwayListener, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './Navbar.css';
import Cart from '../Cart/Cart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import EmptyCartBeforeLogin from '../Cart/EmptyCartBL';
import Account from '../Account/Account';

const Navbar = () => {
    const [isOpen, setModalOpen] = useState(false);
    const [registration, setRegistration] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [placement, setPlacement] = useState();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [noOfItem, setItem] = useState(0);
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
    const closeModal=()=> {
        setModalOpen(false)
    }
    const createAccount = () => {
        setRegistration(true)
        setModalOpen(false)
    }
    const itemDelete= () => {
        const no = noOfItem - 1
        setItem(no)
    }
    const openSignIn = () => {
        setRegistration(false)
        setModalOpen(true)
    }
    const login = () => {
        setSignIn(true)
    }
    const logout = () => {
        // sessionStorage.removeItem("token")
        sessionStorage.clear()
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
            axios.get(`http://localhost:8090/api/search/${searchText}`).then((response) => {
                console.log(response)
                setOptionList(response.data)
            });
        } else {
            setShowOption(false)
        }
    }
    return (
        <Container className='container'>
            <AppBar color='transparent' elevation={0} className='app-bar'>
                <Toolbar className='tool-bar'>
                    <Box>
                        <Typography
                            variant="h3"
                            component="h1"
                            className='site-title'
                        >
                            <Link to='/' style={{ color: '#000000', textDecoration: 'none' }}>
                                Shoppers
                            </Link>
                        </Typography>
                    </Box>
                    <Box className='searchBox'>
                        <Box className='search'>
                            <TextField 
                                variant='outlined'
                                placeholder='Search...'
                                onChange={event => handleSearch(event.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton><SearchIcon sx={{ color: '#8B3DFF' }} /></IconButton>
                                    )
                                }}
                                className='search-field'
                                size='small'
                            />
                            {showOption ? <Box className="optionList">
                                {optionList.map((item) => (
                                    <option className='option' onClick={() => { setShowOption(false); navigate(`/productdetails?id=${item.id}`) }}>{item.name} </option>))}</Box>
                            : ""}
                        </Box>
                    </Box>
                        <ClickAwayListener onClickAway={handleClickAway}>
                        <Box>
                        
                                <Button className='cart-button' variant="contained" endIcon={<ShoppingBagIcon />} onClick={handleClick('bottom')}>
                                <Typography className='my-cart'>My Cart</Typography>
                                </Button>
                                <IconButton className='cart-icon' onClick={handleClick('bottom')}><ShoppingBagIcon sx={{ color: '#8B3DFF' }} /></IconButton>
                            
                                {open ? (<Popper
                                    open={open}
                                    disablePortal={false}
                                    keepMounted
                                    anchorEl={anchorEl}
                                    placement={placement}
                                    onClose={handleClose}
                                    className='popper'>
                                {signIn ?
                                    <Cart onClose={handleClose} itemRemove={itemDelete} />
                                    : ""}
                                    {!signIn ? <EmptyCartBeforeLogin onClose={handleClose} openLogin={openModal}  /> : ""}
                                    </Popper>) : null}
                                {isOpen ? <Login onClose={closeModal} registration={createAccount} loggedIn={login} /> : ""}
                                {registration ? <Signup onClose={() => setRegistration(false)} signin={openSignIn} loggedIn={login} /> : ""}
                            </Box>
                        </ClickAwayListener>
                        <Box>
                            {!signIn ? <Button className='sign-in' variant='contained' onClick={openModal}>Sign In</Button> : ""}
                        {signIn ? (<>
                            <Account logout={logout}/>
                            {/* <Button className='logout' onClick={logout}><LogoutIcon  /></Button> */}
                                {/* <IconButton className='logout-icon'  onClick={logout}><LogoutIcon sx={{ color: '#8B3DFF' }} /></IconButton> */}
                            </>) : ""}
                        </Box>
                </Toolbar >
            </AppBar >
        </Container >
    )
}

export default Navbar
