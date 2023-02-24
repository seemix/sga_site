import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

import './Header.css';
import logo from '../../images/h2.webp';
import { scrollNav, setOpenMenu } from '../../store/theme.slice';
import UserMenu from './UserMenu';

//TODO center items in responsive menu

const Header = () => {
    const dispatch = useDispatch();
    const { openMenu, scrollMenu } = useSelector(state => state.themeStore);
    const { auth } = useSelector(state => state.authStore);
    const handleMenuButton = () => {
        dispatch(setOpenMenu());
    }

    const changeNavBack = () => {
        if (window.scrollY > 100) {
            dispatch(scrollNav(true));
        } else dispatch(scrollNav(false))
    }

    window.addEventListener('scroll', changeNavBack);

    return (
        <div className={scrollMenu ? 'navbar navbar_scroll' : 'navbar'}>
            <div>
                <img src={logo} alt="logo" className={scrollMenu ? 'logo_scroll' : 'logo'}/>
            </div>
            <ul className={openMenu ? 'menu' + ' ' + 'show_element' : 'menu'}>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'link' + ' ' + 'active' : 'link')}
                             to={'/'}>главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/news'}
                             className={({ isActive }) => (isActive ? 'link' + ' ' + 'active' : 'link')}
                    >новости</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}
                             className={({ isActive }) => (isActive ? 'link' + ' ' + 'active' : 'link')}
                    >о нас</NavLink>
                </li>
                <li>
                    <NavLink to={'/form'}
                             className={({ isActive }) => (isActive ? 'link' + ' ' + 'active' : 'link')}
                    >анкета</NavLink>
                </li>
                <li>
                    <NavLink to={'/contacts'}
                             className={({ isActive }) => (isActive ? 'link' + ' ' + 'active' : 'link')}
                    >контакты</NavLink>
                </li>

                <li className={!auth ? '' : 'hide_element'}>
                    <NavLink to={'/login'} style={{ position: 'relative' }}
                             className={({ isActive }) => (isActive ? 'link' + ' ' + 'active' : 'link')}>
                        {/*<PersonRoundedIcon/>*/}
                        вход
                    </NavLink>
                </li>
            </ul>
            <div className={openMenu ? 'hide_element' : 'show_element'} style={{ margin: 'auto 0' }}>
                {auth ? <UserMenu/> : ''}
            </div>
            <div>
                <div className={'menu_button'} style={{ position: 'absolute', top: '25px', right: '25px' }}
                     onClick={handleMenuButton}>
                    <MenuIcon fontSize={'large'} style={{ display: !openMenu ? 'block' : 'none' }}/>
                </div>
                <div className={'menu_button'} style={{ position: 'absolute', top: '25px', right: '25px' }}
                     onClick={handleMenuButton}>
                    <CloseIcon fontSize={'large'} style={{ display: openMenu ? 'block' : 'none' }}/>
                </div>
            </div>
        </div>)
};

export default Header;