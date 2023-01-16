import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from "@mui/material/Avatar";
import {NavLink, Link} from "react-router-dom";

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Avatar style={{backgroundColor: '#ef6723'}} onClick={handleClick}>U</Avatar>

            <Menu
                style={{marginTop: '10px', marginLeft: '-65px'}}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                <NavLink to={'/notes'}>
                    <MenuItem>Конспекты</MenuItem>
                </NavLink>
                <Link to={'/schedule'}>
                    <MenuItem>Расписание</MenuItem>
                </Link>
                <NavLink to={'/homework'}>
                    <MenuItem>Домашнее задание</MenuItem>
                </NavLink>
                <NavLink to={'/marks'}>
                    <MenuItem>Оценки</MenuItem>
                </NavLink>
                <NavLink to={'/logout'}>
                    <MenuItem>Выход</MenuItem>
                </NavLink>
            </Menu>
        </div>
    );
}

export default UserMenu;