import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../Config/Config';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { AdminLoginAction, AdminGetProfileAction } from '../../Redux/Actions/AuthActions';
import { VALIDATION_MESSAGE } from '../../Constants/Constants';

function Login() {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required(VALIDATION_MESSAGE?.EMAIL_REQUIRED)
            .email(VALIDATION_MESSAGE?.VALID_EMAIL)
            .matches(/^\S*$/, VALIDATION_MESSAGE?.NO_SPACE_ALLOWED),

        password: Yup.string()
            .required(VALIDATION_MESSAGE?.PASSWORD_REQUIRED)
            .min(8, VALIDATION_MESSAGE?.PASSWORD_MIN_CHAR)
            .max(16, VALIDATION_MESSAGE?.PASSWORD_MAX_CHAR)
            .matches(/^\S*$/, VALIDATION_MESSAGE?.NO_SPACE_ALLOWED)
            .matches(/^(?=.*[A-Z])/, VALIDATION_MESSAGE?.PASSWORD_UPPER_CASE)
            .matches(/^(?=.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/, VALIDATION_MESSAGE?.PASSWORD_SPECIAL_CASE)
            .matches(/^(?=.{6,20}$)\D*\d/, VALIDATION_MESSAGE?.PASSWORD_NUMBER_CASE),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const [passwordType, setPasswordType] = useState(false);
    const { status_get_profile, error_get_profile, loading_get_profile } = useSelector((state: any) => state.AdminGetProfileState);
    const onSubmit = async (payload: any) => {
        dispatch(AdminLoginAction(payload));
        // dispatch(AdminGetProfileAction({}));
    };
    useEffect(() => {
        if (status_get_profile) {
            // navigate(REACT_APP_BASE_URL, { replace: true })
            window.location.href = REACT_APP_BASE_URL
        }
    }, [dispatch, status_get_profile, navigate])
    return (
        <Fragment>
            <section className="login">
                <div className="wrapper wrapper-login">
                    <div className="container container-login animated fadeIn">
                        <h3 className="text-center">Sign In To Admin</h3>
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group form-floating-label">
                                    <input
                                        type="email"
                                        placeholder="Enter Email Address"
                                        className="form-control input-border-bottom"
                                        {...register("email")}
                                    />
                                    <p className="text-danger">{errors?.email?.message ?? error_get_profile?.errors?.email?.msg}</p>
                                </div>
                                <div className="form-group form-floating-label">
                                    <div className="position-relative">
                                        <div className="show-password">
                                            <span className={`${passwordType ? "fas fa-eye-slash" : "fas fa-eye"}`} onClick={() => { setPasswordType(!passwordType); }}></span>
                                        </div>
                                        <input
                                            type={passwordType ? "text" : "password"}
                                            placeholder="Enter Password"
                                            className="form-control input-border-bottom"
                                            {...register('password')}
                                        />
                                    </div>
                                    <p className="text-danger">{errors?.password?.message ?? error_get_profile?.errors?.password?.msg}</p>
                                </div>
                                <div className="row form-sub m-0">
                                    <div className="custom-control custom-checkbox">
                                        {/* <input type="checkbox" className="custom-control-input" id="rememberme" />
                                        <label className="custom-control-label" htmlFor="rememberme">Remember Me</label> */}
                                    </div>
                                    <Link to={REACT_APP_BASE_URL + "forgot-password"} className="link float-right">Forget Password ?</Link>
                                </div>
                                <div className="form-action mb-3">
                                    <button type="submit" className="btn btn-primary btn-rounded btn-login">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
                autoClose={500}
                hideProgressBar={true}
                className="toast-immunoshop"
                position="bottom-center"
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
        </Fragment>
    );
}
export default Login;