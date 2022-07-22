import {
    ADMIN_SIDEBAR_SHOW,
    ADMIN_SIDEBAR_HIDE,

    ADMIN_SIDEBAR_VERTICAL_SHOW,
    ADMIN_SIDEBAR_VERTICAL_HIDE
} from "../../Constants/CommonConstants";

export const AdminSidebarReducer = (state = { status_show_sidebar: false }, action: any) => {
    switch (action.type) {
        case ADMIN_SIDEBAR_SHOW:
            return {
                status_show_sidebar: true
            }
        case ADMIN_SIDEBAR_HIDE:
            return {
                status_show_sidebar: false
            }
        default:
            return state;
    }
};

export const AdminSidebarVerticalReducer = (state = { status_show_sidebar_vertical: false }, action: any) => {
    switch (action.type) {
        case ADMIN_SIDEBAR_VERTICAL_SHOW:
            return {
                status_show_sidebar_vertical: true
            }
        case ADMIN_SIDEBAR_VERTICAL_HIDE:
            return {
                status_show_sidebar_vertical: false
            }
        default:
            return state;
    }
}; 