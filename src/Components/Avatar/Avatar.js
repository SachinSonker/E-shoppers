import React,{useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import img from '../../assets/default_avatar.webp';
function stringToColor(string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
}

function stringAvatar(name) {
    let initials = '';
    let avatarProps = {};
    if (name!== 'null' && name!== null) {
        const nameParts = name.split(' ');
        if (nameParts.length > 1) {
            initials = `${nameParts[0][0]}${nameParts[1][0]}`;
        } else {
            initials = `${nameParts[0][0]}`;
        }
        avatarProps = {
            sx: {
                border: '3px solid',
                borderColor: stringToColor(name),
                bgcolor: '#ffffff',
                color: '#8B3DFF'
            },
            children: initials,
        };
    } else {
        avatarProps = {
            sx: {
                src: img,
            }
        }
    }
    return avatarProps;
}

export default function AccountAvatars() {
    const [userName, setUserName] = useState(null)
    const storeName = sessionStorage.getItem('name')
    useEffect(() => {
        if (storeName) {
            setUserName(storeName)
        }
    }, [sessionStorage.getItem('name')])
    return (
        <>
            <Avatar {...stringAvatar(userName)} />
        </>
    );
}
