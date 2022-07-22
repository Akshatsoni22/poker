import React from "react";
import { REACT_APP_BASE_URL } from "../Config/Config";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
    const location = useLocation();
    const isAdminLoginToken = localStorage.getItem('isAdminLoginToken');
    return isAdminLoginToken
       ? <Outlet/>
       : <Navigate to={REACT_APP_BASE_URL + 'login'} replace state = '{{from: location}}'/>
       
    
}

export default PrivateRoutes;