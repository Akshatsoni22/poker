import { Dispatch } from "react";
import {
    ADMIN_SIDEBAR_SHOW,
    ADMIN_SIDEBAR_HIDE,
    ADMIN_SIDEBAR_VERTICAL_SHOW,
    ADMIN_SIDEBAR_VERTICAL_HIDE
} from "../../Constants/CommonConstants";

export const AdminSidebarVerticalAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try 
    {
        if (payload === true) 
        {
            dispatch({
                type: ADMIN_SIDEBAR_VERTICAL_SHOW,
            })
        } 
        else 
        {
            dispatch({
                type: ADMIN_SIDEBAR_VERTICAL_HIDE,
            })
        }
    } 
    catch (error: any) 
    {
        dispatch({
            type: ADMIN_SIDEBAR_VERTICAL_HIDE,
        });
    }
};

export const AdminSidebarAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try 
    {
        if (payload === true) 
        {
            dispatch({
                type: ADMIN_SIDEBAR_SHOW,
            })
        } 
        else 
        {
            dispatch({
                type: ADMIN_SIDEBAR_HIDE,
            })
        }
    } 
    catch (error: any) 
    {
        dispatch({
            type: ADMIN_SIDEBAR_HIDE,
        });
    }
};