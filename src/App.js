import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import theme from './themes/theme';

import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import News from './components/News/News';
import Form from './components/Form';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Schedule from './components/ForStudent/Schedule/Schedule';
import NewsSingle from './components/News/NewsSingle';
import ProtectedRoute from './components/ProtectedRoute';
import Marks from './components/ForStudent/Marks/Marks';
import { useDispatch } from 'react-redux';
import { checkLogin } from './store/auth.slice';
import Homework from './components/ForStudent/Homework/Homework';
import Notes from './components/ForStudent/Notes/Notes';

//todo refactor auth code & make cookies?
//todo make static components: contacts, about us
//todo make frontpage with slider+
//todo make static footer+
//todo make registration verification middleware
//todo make registration component

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkLogin());
    }, [dispatch])
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index path={'/'} element={<HomePage/>}/>
                    <Route path={'about'} element={<AboutUs/>}/>
                    <Route path={'news'} element={<News/>}/>
                    <Route path={'news/:id'} element={<NewsSingle/>}/>
                    <Route path={'form'} element={<Form/>}/>
                    <Route path={'contacts'} element={<Contacts/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path={'schedule'} element={<Schedule/>}/>
                        <Route path={'marks'} element={<Marks/>}/>
                        <Route path={'homework'} element={<Homework/>}/>
                        <Route path={'notes'} element={<Notes/>}/>
                    </Route>
                    <Route path={'/login'} element={<Login/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    );
};

export default App;