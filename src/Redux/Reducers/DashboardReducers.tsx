
import {
    ADMIN_DASHBOARD_COUNT_RESET,
    ADMIN_DASHBOARD_COUNT_REQUEST,
    ADMIN_DASHBOARD_COUNT_SUCCESS,
    ADMIN_DASHBOARD_COUNT_FAIL,
} from "../../Constants/DashboardConstants";

const initialStateAdminDashboardCount = {
    loading_admin_dashboard_count: false,
    status_admin_dashboard_count: false,
    data_admin_dashboard_count: null,
    error_admin_dashboard_count: null,
};
export const AdminDashboardCountReducer = (state = initialStateAdminDashboardCount, action: any) => {
    switch (action.type) {
        case ADMIN_DASHBOARD_COUNT_RESET:
            return {
                ...initialStateAdminDashboardCount,
            }
        case ADMIN_DASHBOARD_COUNT_REQUEST:
            return {
                ...state,
                loading_admin_dashboard_count: true,
            }
        case ADMIN_DASHBOARD_COUNT_SUCCESS:
            return {
                ...state,
                loading_admin_dashboard_count: false,
                status_admin_dashboard_count: true,
                data_admin_dashboard_count: action.payload
            }
        case ADMIN_DASHBOARD_COUNT_FAIL:
            return {
                ...state,
                loading_admin_dashboard_count: false,
                status_admin_dashboard_count: false,
                error_admin_dashboard_count: action.payload
            }
        default:
            return state;
    }
};