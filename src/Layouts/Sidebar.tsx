import React,{useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { REACT_APP_BASE_URL } from '../Config/Config';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImageHelper from '../Utils/imageHelper';

const Sidebar = () => {

    const location = useLocation();
	const current_page = location?.pathname;
	const [showProfileBox, setshowProfileBox] = useState(false);
	const [showSubMenu, setshowSubMenu] = useState(0);
    
    const handleLogout = () => {
		localStorage.clear();
		sessionStorage.clear()
		window.location.href = REACT_APP_BASE_URL + '/login'
	}

    const { data_get_profile } = useSelector((state: any) => state.AdminGetProfileState);
	var IsMenuActive = 0;
	var IsSubMenuActive = 0;
	if (current_page === "") {
		IsMenuActive = 1;
	}
	else if (current_page === REACT_APP_BASE_URL) {
		IsMenuActive = 1;
	}

    const Menus = [
		{
			Name: "Dashboard",
			Route: REACT_APP_BASE_URL,
			Icon: "fas fa-tachometer-alt",
			IsMenuId: 1,
			IsMenuActive: IsMenuActive,
			IsSubMenu: false,
			Module: "dashboard",
		},
    ]

    const onMenuClick = (i: any) => {
		if (Number(showSubMenu) === Number(i)) {
			setshowSubMenu(Number(0));
		} else {
			setshowSubMenu(Number(i));
		}
	};
	useEffect(() => {
	}, [showSubMenu]);
    return (
        <>
            <div className="sidebar sidebar-style-2">
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">
                        <div className="user">
                            <div className="avatar-sm float-left mr-2">
                                <img src={data_get_profile?.profile_image_full ? data_get_profile?.profile_image_full : String(ImageHelper.AvatarImage)} alt="..." className="avatar-img rounded-circle" />
                            </div>
                            <div className="info">
                                <NavLink data-toggle="collapse" to={"#"} onClick={() => { setshowProfileBox(!showProfileBox); }}>
                                    <span>
                                        <span className="user-level">{data_get_profile?.full_name}</span>
                                    </span>
                                </NavLink>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        {Menus.length > 0 && (
                        <>
                            <ul className="nav nav-primary">
                            {Menus.map((m, i) => {
										if (m.IsSubMenu ) {
											var isActive = false;
											if (Number(showSubMenu) === Number(m.IsMenuId)) {
												isActive = true;
											}
											if (Number(m.IsMenuId) === Number(m.IsMenuActive)) {
												isActive = true;
											}
											return (
												<li key={i} className={`nav-item ${isActive ? "active show submenu" : ""}`}>
													<NavLink
														data-toggle={`${isActive ? "" : "collapse"}`}
														to={`#sub_menu_${i}`}
														aria-expanded={isActive}
														onClick={() => {
															onMenuClick(m.IsMenuId);
														}}
													>
														<i className={`fas ${m?.Icon}`}></i>
														<p>{m.Name}</p>
														<span className="caret"></span>
													</NavLink>
													<div className={`collapse ${isActive ? "show" : ""}`} id={`sub_menu_${i}`}>
														<ul className="nav nav-collapse">
															{/* {m?.SubMenu.map((ms, is) => {
																var isSubActive = false;
																if (Number(ms.IsMenuId) === Number(ms.IsSubMenuActive)) {
																	isSubActive = true;
																}
																return (
																	<li className={`${isSubActive ? "active" : ""}`} key={is}>
																		<NavLink to={ms.Route}>
																			<span className="sub-item">{ms.Name}</span>
																		</NavLink>
																	</li>
																)
															})} */}
														</ul>
													</div>
												</li>
											);
										}
										else {
											var isParentActive = false;
											if (Number(m.IsMenuId) === Number(m.IsMenuActive)) {
												isParentActive = true;
											}
											return (
												<li className={`nav-item ${isParentActive ? "active" : ""}`} key={i}>
													<NavLink to={m.Route}>
														<i className={`fas ${m?.Icon}`}></i>
														<p>{m.Name}</p>
													</NavLink>
												</li>
											);
										}
									})};
                            </ul>
                        </>
                                )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
																
															
										
										