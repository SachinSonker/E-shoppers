import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material'
import {React,useState} from 'react'
import AccountAvatars from '../Avatar/Avatar'
import OutboxIcon from '@mui/icons-material/Outbox';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Account = ({logout}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<>
      <div style={{ marginLeft:'10px' }}>
            <IconButton size='small' onClick={handleClick}>
              <AccountAvatars />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose} 
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
          }}
          
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
          <MenuItem onClick={()=>{navigate('/profile')}}>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color:'#8B3DFF'}} /> 
            </ListItemIcon>
            My Profile
          </MenuItem>  
          <MenuItem onClick={()=>{navigate('/orders')}}>
            <ListItemIcon>
              <OutboxIcon sx={{ color: '#8B3DFF' }} />
            </ListItemIcon>
            My Orders
          </MenuItem>
          <MenuItem onClick={() => { navigate('/wishlist') }}>
            <ListItemIcon>
              <FavoriteBorderIcon sx={{ color:'#8B3DFF'}} />
            </ListItemIcon>
            My Wishlist
          </MenuItem>
          <Divider />
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: '#8B3DFF' }} />
            </ListItemIcon>
            Log Out  
          </MenuItem>
          </Menu>
      </div>
  </>  
  )
}

export default Account
