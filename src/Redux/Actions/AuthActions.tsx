import { Dispatch } from "react";
import { renderFormData } from "../../Utils/Helper";
import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,

    

    ADMIN_FORGOT_PASSWORD_REQUEST,
    ADMIN_FORGOT_PASSWORD_SUCCESS,
    ADMIN_FORGOT_PASSWORD_FAIL,

   

    ADMIN_UPDATE_PROFILE_RESET,
    ADMIN_UPDATE_PROFILE_REQUEST,
    ADMIN_UPDATE_PROFILE_SUCCESS,
    ADMIN_UPDATE_PROFILE_FAIL,

    ADMIN_GET_PROFILE_REQUEST,
    ADMIN_GET_PROFILE_SUCCESS,
    ADMIN_GET_PROFILE_FAIL
} from "../../Constants/AuthConstants";
import { POSTAPI, PUTAUTHAPI, GETAUTHAPI } from '../../Api/Index';


export const AdminLoginAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST
        });
        let data = await POSTAPI('signin', payload);
        if (data && data?.status === true) {
            localStorage.setItem('isAdminLoginToken', data?.token);
            sessionStorage.setItem('user', JSON.stringify(data));
            dispatch({
                type: ADMIN_LOGIN_SUCCESS,
                payload: data
            });
        }
        else {
            dispatch({
                type: ADMIN_LOGIN_FAIL,
                payload: data
            });
        }
    }
    catch (error: any) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: error.message
        });
    }
};



export const AdminForgotPasswordAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: ADMIN_FORGOT_PASSWORD_REQUEST
        });
        let data = await POSTAPI('forgot-password', payload);
        if (data && data?.status === true) {
            dispatch({
                type: ADMIN_FORGOT_PASSWORD_SUCCESS,
                payload: data
            });
        }
        else {
            dispatch({
                type: ADMIN_FORGOT_PASSWORD_FAIL,
                payload: data
            });
        }
    }
    catch (error: any) {
        dispatch({
            type: ADMIN_FORGOT_PASSWORD_FAIL,
            payload: error.message
        });
    }
};



export const AdminUpdateProfileAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    if (payload === 'RESET') {
        dispatch({ type: ADMIN_UPDATE_PROFILE_RESET });
    }
    else {
        try {
            dispatch({
                type: ADMIN_UPDATE_PROFILE_REQUEST
            });
            let payloadData = await renderFormData(payload);
            let data = await PUTAUTHAPI('update-profile', payloadData);
            if (data && data?.status === true) {
                dispatch({
                    type: ADMIN_UPDATE_PROFILE_SUCCESS,
                    payload: data
                });
            }
            else {
                dispatch({
                    type: ADMIN_UPDATE_PROFILE_FAIL,
                    payload: data
                });
            }
        }
        catch (error: any) {
            dispatch({
                type: ADMIN_UPDATE_PROFILE_FAIL,
                payload: error.message
            });
        }
    }
};

export const AdminGetProfileAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: ADMIN_GET_PROFILE_REQUEST
        });
        let data = await GETAUTHAPI('profile', payload);
        if (data && data?.status === true) {
            dispatch({
                type: ADMIN_GET_PROFILE_SUCCESS,
                payload: data
            });
        }
        else {
            dispatch({
                type: ADMIN_GET_PROFILE_FAIL,
                payload: data
            });
        }
    }
    catch (error: any) {
        dispatch({
            type: ADMIN_GET_PROFILE_FAIL,
            payload: error.message
        });
    }
};