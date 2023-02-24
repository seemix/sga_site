import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const { auth } = useSelector(state => state.authStore);
    // console.log(auth);
    return (
        auth ? <Outlet/> : <Navigate to={'/login'}/>
    );
};

export default ProtectedRoute;