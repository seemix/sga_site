import React from 'react';
import {Link, NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Header.css';
import logo from '../../images/h2.webp';
import {useDispatch, useSelector} from "react-redux";
import {setOpenMenu} from "../../store/theme.slice";


//TODO make burger resposive menu

const Header = () => {
    const isAuth = true;
    const dispatch = useDispatch();
    const {openMenu} = useSelector(state => state.themeStore);
    // const [openMenu, setOpenMenu] = useState(false);
    // console.log(openMenu);

    function handleMenuButton() {
        dispatch(setOpenMenu());
    }
    return (
        <div className={'navbar'}>
            <div>
                <img src={logo} alt="logo" width={'120px'}/>
            </div>
            <div className={openMenu ? 'menu_wrapper' + ' ' + 'show_element1' : 'menu_wrapper'}>
                <div>
                    <NavLink className={({isActive}) => (isActive ? 'link' + " " + 'active' : 'link')}
                             to={'/'}>главная
                    </NavLink>
                </div>
                <div>
                    <NavLink to={'/news'}
                             className={({isActive}) => (isActive ? 'link' + " " + 'active' : 'link')}
                    >новости</NavLink>
                </div>
                <div>
                    <NavLink to={'/about'}
                             className={({isActive}) => (isActive ? 'link' + " " + 'active' : 'link')}
                    >о нас</NavLink>
                </div>
                <div>
                    <NavLink to={'/form'}
                             className={({isActive}) => (isActive ? 'link' + " " + 'active' : 'link')}
                    >анкета</NavLink>
                </div>

                <div>
                    <NavLink to={'/contacts'}
                             className={({isActive}) => (isActive ? 'link' + " " + 'active' : 'link')}
                    >контакты</NavLink>
                </div>
                <div className={isAuth ? 'menu' : 'menu' + ' ' + 'hide_element'}>
                    <ul>
                        <li><Link to={'#'}
                                     className={'link' + ' ' + 'add_row'}>студенту
                        </Link>
                            <ul>
                                <li><NavLink to={'/notes'}>конспекты</NavLink></li>
                                <li><NavLink to={'/schedule'}>расписание</NavLink></li>
                                <li><NavLink to={'/homework'}>дз</NavLink></li>
                                <li><NavLink to={'/marks'}>оценки</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div><NavLink to={'/login'}
                              className={({isActive}) => (isActive ? 'link' + " " + 'active' : 'link')}>login</NavLink>
                </div>
            </div>
            <div className={'menu_button'} style={{position: 'absolute', top: '30px', right: '30px'}}
                 onClick={handleMenuButton}>
                <MenuIcon fontSize={'large'} style={{display: !openMenu ? "block" : "none"}}/>
            </div>
            <div className={'menu_button'} style={{position: 'absolute', top: '30px', right: '30px'}} onClick={handleMenuButton}>
                <CloseIcon fontSize={'large'} style={{display: openMenu ? 'block' : 'none'}}/>
            </div>
        </div>);
};

export default Header;