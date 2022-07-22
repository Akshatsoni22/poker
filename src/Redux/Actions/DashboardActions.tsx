import { Dispatch } from "react";
import {
    ADMIN_DASHBOARD_COUNT_RESET,
    ADMIN_DASHBOARD_COUNT_REQUEST,
    ADMIN_DASHBOARD_COUNT_SUCCESS,
    ADMIN_DASHBOARD_COUNT_FAIL,  
} from "../../Constants/DashboardConstants";
import { POSTAUTHAPI } from '../../Api/Index';

export const AdminDashboardCountAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    if (payload === 'RESET') {
        dispatch({ type: ADMIN_DASHBOARD_COUNT_RESET });
    }
    else {
        try {
            dispatch({
                type: ADMIN_DASHBOARD_COUNT_REQUEST
            });
            let data = await POSTAUTHAPI('get-user-by-role-count', payload);
            if (data && data?.status === true) {
                dispatch({
                    type: ADMIN_DASHBOARD_COUNT_SUCCESS,
                    payload: data?.data
                });
            }
            else {
                dispatch({
                    type: ADMIN_DASHBOARD_COUNT_FAIL,
                    payload: data
                });
            }
        }
        catch (error: any) {
            dispatch({
                type: ADMIN_DASHBOARD_COUNT_FAIL,
                payload: error.message
            });
        }
    }
};