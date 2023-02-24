import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth.slice';

const UserMenu = () => {
    const { user } = useSelector(state => state.authStore);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
                <Avatar style={{ backgroundColor: '#ef6723', cursor: 'pointer' }} onClick={handleClick}>
                    {user?.name[0]}
                </Avatar>
                <Menu
                    style={{ marginTop: '10px', marginLeft: '-5px', cursor: 'pointer' }}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}>
                    <NavLink to={'/notes'}>
                        <MenuItem>Конспекты</MenuItem>
                    </NavLink>
                    <Link to={'/schedule'}>
                        <MenuItem>Расписание</MenuItem>
                    </Link>
                    <NavLink to={'/homework'}>
                        <MenuItem>Домашнее задание</MenuItem>
                    </NavLink>
                    <Link to={'/marks'}>
                        <MenuItem>Оценки</MenuItem>
                    </Link>
                    <MenuItem onClick={() => dispatch(logout(localStorage.getItem('refreshToken')))}>
                        <LogoutIcon/>
                        Выход
                    </MenuItem>
                </Menu>
            </div>
            <div style={{ marginLeft: '15px' }}>
                <span onClick={handleClick} style={{ cursor: 'pointer' }}> Welcome, {user?.name}</span>
            </div>
        </div>
    );
}
export default UserMenu;