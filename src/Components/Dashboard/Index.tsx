import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Layouts/Header";
import Sidebar from "../../Layouts/Sidebar";
import Footer from "../../Layouts/Footer";
import Dashboard from "./Dashboard";

const Index = () => {
    const { status_show_sidebar } = useSelector((state: any) => state.AdminSidebarState);
    const { status_show_sidebar_vertical } = useSelector((state: any) => state.AdminSidebarVerticalState);
    return(
        <>
            <div className={`wrapper ${status_show_sidebar ? 'sidebar_minimize nav_open' : ''} ${status_show_sidebar_vertical ? 'topbar_open' : ''}`}>
              <Header/>
              <Sidebar/>
                <div className="main-panel">
                    <div className="container">
                        <Dashboard />
                    </div>
                </div>
                <Footer/>
            </div>
               
        </>
    )
}

export default Index;
                   