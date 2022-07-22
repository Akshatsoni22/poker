import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { REACT_APP_BASE_URL } from './Config/Config';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { AdminGetProfileAction } from './Redux/Actions/AuthActions';

// Routes
import PrivateRoutes from './Router/PrivateRoutes';

// Dashboard Component
import Dashboard from './Components/Dashboard/Index';

// Auth Component
import Login from './Components/Auth/Login';
import ForgotPassword from './Components/Auth/ForgotPassword';

import Profile from './Components/Auth/Profile';

const App = () => {

  const { status_get_profile } = useSelector((state: any) => state.AdminGetProfileState);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    const isAdminLoginToken = localStorage.getItem('isAdminLoginToken');
    if (isAdminLoginToken) {
      if (status_get_profile === false) {
     
        dispatch(AdminGetProfileAction({}));
       
      }
    }
  }, [status_get_profile]);
  return(
    <>
     <Router>
        <Routes>
        <Route element={<PrivateRoutes/>}>

          {/* Dashboard Routes */}
          <Route path={REACT_APP_BASE_URL} element={<Dashboard/>}/>

           {/* Auth Route */}
           <Route path={REACT_APP_BASE_URL + "profile"} element={<Profile />} />

          
        </Route>
        {/* Auth Route */}
        <Route path={REACT_APP_BASE_URL + "login"} element={<Login />} />
        <Route path={REACT_APP_BASE_URL + "forgotpassword"} element={<ForgotPassword/>} />

       </Routes>
      </Router>
    </>
  )
}

export default App;
