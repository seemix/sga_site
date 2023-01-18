import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";

import theme from './themes/theme';

import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import News from "./components/News/News";
import Form from "./components/Form";
import Contacts from "./components/Contacts/Contacts";
import Login from "./components/Login/Login";
import Schedule from "./components/ForStudent/Schedule/Schedule";
import NewsSingle from "./components/News/NewsSingle";
import ProtectedRoute from "./components/ProtectedRoute";
import Marks from "./components/ForStudent/Marks/Marks";

//todo make welcome {name}
//todo make logout component
// make remember me logic

//todo make picture overlay component
//todo make pagination (front + back)

//todo make registration component
//todo make other protected components & routes
//todo add linter

const App = () => {
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
                    </Route>
                    <Route path={'/login'} element={<Login/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    );
};

export default App;