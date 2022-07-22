import React,{useState} from "react";
import { REACT_APP_BASE_URL } from "../Config/Config";
import { NavLink } from "react-router-dom";
import Logo from '../Assets/Images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AdminSidebarAction, AdminSidebarVerticalAction } from '../Redux/Actions/CommonActions';
import ImageHelper from '../Utils/imageHelper';
import { VALIDATION_MESSAGE } from '../Constants/Constants';
import { POSTAUTHAPI } from '../Api/Index';
import Swal from 'sweetalert2'

const Header = () => {

    const dispatch = useDispatch<any>();
	const [showProfileBox, setshowProfileBox] = useState(false);

    const handleLogout = () => {
		Swal.fire({
			title: VALIDATION_MESSAGE?.LOGOUT_MODEL_TITLE,
			text: VALIDATION_MESSAGE?.LOGOUT_MODEL_TEXT,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#31CE36',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ok'
		}).then((result) => {
			if (result.isConfirmed) {
				logoutDone();
			}
		});
	}
	const logoutDone = async () => {
		await POSTAUTHAPI('logout', {'token':localStorage.getItem('isAdminLoginToken')});
		localStorage.clear();
		sessionStorage.clear()
		window.location.href = REACT_APP_BASE_URL
	}
    

    const { data_get_profile } = useSelector((state: any) => state.AdminGetProfileState);
	const { status_show_sidebar } = useSelector((state: any) => state.AdminSidebarState);
	const { status_show_sidebar_vertical } = useSelector((state: any) => state.AdminSidebarVerticalState);
    return (
        <>
            <div className="main-header">
				<div className="logo-header" data-background-color="blue">
					<NavLink to={REACT_APP_BASE_URL} className="logo">
						<img src={Logo} alt="navbar brand" className="navbar-brand" />
					</NavLink>
					<button className="navbar-toggler sidenav-toggler ml-auto" onClick={() => { dispatch(AdminSidebarAction(!status_show_sidebar)); }}>
						<span className="navbar-toggler-icon">
							<i className="icon-menu"></i>
						</span>
					</button>
					<button className="topbar-toggler more" onClick={() => { dispatch(AdminSidebarVerticalAction(!status_show_sidebar_vertical)); }}><i className="icon-options-vertical"></i></button>
					<div className="nav-toggle" onClick={() => { dispatch(AdminSidebarAction(!status_show_sidebar)); }}>
						<button className="btn btn-toggle toggle-sidebar">
							<i className="icon-menu"></i>
						</button>
					</div>
				</div>
				<nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
					<div className="container-fluid">
						<ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
							<li className="nav-item dropdown hidden-caret">
								<NavLink to="#" className="dropdown-toggle profile-pic" onClick={() => { setshowProfileBox(!showProfileBox); }}>
									<div className="avatar-sm">
										<img src={data_get_profile?.profile_image_full ? data_get_profile?.profile_image_full : String(ImageHelper.AvatarImage)} alt="..." className="avatar-img rounded-circle" />
									</div>
								</NavLink>
								<ul className={`dropdown-menu dropdown-user animated fadeIn ${showProfileBox ? 'show' : ''}`}>
									<div className="dropdown-user-scroll scrollbar-outer">
										<li>
											<div className="user-box">
												<div className="avatar-lg">
													<img src={data_get_profile?.profile_image_full ? data_get_profile?.profile_image_full : String(ImageHelper.AvatarImage)} alt="image profile" className="avatar-img rounded" />
												</div>
												<div className="u-text">
													<h4>{data_get_profile?.full_name}</h4>
													<p className="text-muted">{data_get_profile?.email}</p>
													{/* <NavLink to={REACT_APP_BASE_URL + "profile"} className="btn btn-xs btn-secondary btn-sm">View Profile</NavLink> */}
												</div>
											</div>
										</li>
										<li>
											<div className="dropdown-divider"></div>
											<NavLink to={REACT_APP_BASE_URL + "profile"} className="dropdown-item">My Profile</NavLink>
											<div className="dropdown-divider"></div>
											<NavLink to={REACT_APP_BASE_URL + "change-password"} className="dropdown-item">Change Password</NavLink>
											<div className="dropdown-divider"></div>
											<NavLink to={"#"} onClick={handleLogout} className="dropdown-item cursor-pointer">Logout</NavLink>
										</li>
									</div>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>
        </>
    )
}

export default Header;