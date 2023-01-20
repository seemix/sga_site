import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => {
    return (
        <div className={'page_wrap'}>
            <Header/>
            <Outlet/>
            <Footer/>
            <ScrollToTop component={'↑'} style={{ backgroundColor: '#eeeeee', color: '#020024FF', fontSize: '20px' }}
                         smooth/>
        </div>

    );
};

export default Layout;