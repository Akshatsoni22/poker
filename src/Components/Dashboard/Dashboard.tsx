import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminDashboardCountAction } from '../../Redux/Actions/DashboardActions';
import Spinner from '../../Layouts/Spinner';

const Dashboard = () => {
    const dispatch = useDispatch<any>();
    const { data_admin_dashboard_count, status_admin_dashboard_count, error_admin_dashboard_count, loading_admin_dashboard_count } = useSelector((state: any) => state.AdminDashboardCountState);

    useEffect(() => {
        dispatch(AdminDashboardCountAction({}));
    }, [dispatch]);
    return (
        <>
            {loading_admin_dashboard_count ? <Spinner />:""}
            <div className="page-inner">
                <div className="page-header">
                    <h4 className="page-title">Dashboard</h4>
                </div>
                <div className="row">
                {data_admin_dashboard_count?.length > 0 ?
                        data_admin_dashboard_count?.map((d: any, i: any) => {
                            return (
                                <div className="col-md-3 text-center" key={i}>
                                    <div className="card full-height">
                                        <div className="card-body">
                                            <div className="card-title">{d?.name}</div>
                                            <h6 className="fw-bold mt-3 mb-0">{d?.userCount}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : ""}
                </div>
            </div>
        </>
    )
}

export default Dashboard;

