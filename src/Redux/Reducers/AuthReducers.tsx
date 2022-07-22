import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,

   

    ADMIN_FORGOT_PASSWORD_REQUEST,
    ADMIN_FORGOT_PASSWORD_SUCCESS,
    ADMIN_FORGOT_PASSWORD_FAIL,

    
    ADMIN_UPDATE_PROFILE_REQUEST,
    ADMIN_UPDATE_PROFILE_SUCCESS,
    ADMIN_UPDATE_PROFILE_FAIL,

    ADMIN_GET_PROFILE_REQUEST,
    ADMIN_GET_PROFILE_SUCCESS,
    ADMIN_GET_PROFILE_FAIL
} from "../../Constants/AuthConstants";

// const initialStateAdminChangePassword = {
//     loading_change_password: false,
//     status_change_password: false,
//     data_change_password: null,
//     error_change_password: null,
// };


export const AdminForgotPasswordReducer = (state = { status_forgot_password: false }, action: any) => {
    switch (action.type) {
        case ADMIN_FORGOT_PASSWORD_REQUEST:
            return {
                loading_forgot_password: true,
                status_forgot_password: false,
                data_forgot_password: null,
                error_forgot_password: null
            }
        case ADMIN_FORGOT_PASSWORD_SUCCESS:
            return {
                loading_forgot_password: false,
                status_forgot_password: true,
                data_forgot_password: action.payload
            }
        case ADMIN_FORGOT_PASSWORD_FAIL:
            return {
                loading_forgot_password: false,
                status_forgot_password: false,
                error_forgot_password: action.payload
            }
        default:
            return state;
    }
};


export const AdminGetProfileReducer = (state = { status_get_profile: false }, action: any) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
        case ADMIN_UPDATE_PROFILE_REQUEST:
        case ADMIN_GET_PROFILE_REQUEST:
            return {
                loading_get_profile: true,
                status_get_profile: false,
                data_get_profile: null,
                error_get_profile: null
            }
        case ADMIN_LOGIN_SUCCESS:
        case ADMIN_UPDATE_PROFILE_SUCCESS:
        case ADMIN_GET_PROFILE_SUCCESS:
            return {
                loading_get_profile: false,
                status_get_profile: true,
                data_get_profile: action.payload?.data
            }
        case ADMIN_LOGIN_FAIL:
        case ADMIN_UPDATE_PROFILE_FAIL:
        case ADMIN_GET_PROFILE_FAIL:
            return {
                loading_get_profile: false,
                status_get_profile: false,
                error_get_profile: action.payload
            }
        default:
            return state;
    }
}; 
