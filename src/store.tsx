import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AdminDashboardCountReducer } from './Redux/Reducers/DashboardReducers';
import { AdminSidebarReducer, AdminSidebarVerticalReducer } from './Redux/Reducers/CommonReducers';
import { AdminForgotPasswordReducer, AdminGetProfileReducer } from './Redux/Reducers/AuthReducers';

const reducer = combineReducers({
   
    AdminSidebarState: AdminSidebarReducer,
    AdminSidebarVerticalState: AdminSidebarVerticalReducer,

    AdminDashboardCountState: AdminDashboardCountReducer,

    AdminGetProfileState: AdminGetProfileReducer,
    AdminForgotPasswordState: AdminForgotPasswordReducer,

})

let initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;