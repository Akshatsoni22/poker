import React, { Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { AdminForgotPasswordAction } from '../../Redux/Actions/AuthActions';
import { VALIDATION_MESSAGE } from '../../Constants/Constants';
import Spinner from '../../Layouts/Spinner';
function ForgotPassword() {
    const dispatch = useDispatch<any>();
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required(VALIDATION_MESSAGE?.EMAIL_REQUIRED)
            .email(VALIDATION_MESSAGE?.VALID_EMAIL)
            .matches(/^\S*$/, VALIDATION_MESSAGE?.NO_SPACE_ALLOWED),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: {
            email: ""
        }
    });
    const { data_forgot_password, status_forgot_password, error_forgot_password, loading_forgot_password } = useSelector((state: any) => state.AdminForgotPasswordState);
    const onSubmit = async (payload: any) => {
        dispatch(AdminForgotPasswordAction(payload));
    };
    useEffect(() => { 
        if (status_forgot_password) {
            toast.success(data_forgot_password?.message);
            reset();
        }
    }, [dispatch, status_forgot_password])
    return (
        <Fragment>
            {loading_forgot_password ? <Spinner />:""}
            <section className="login">
                <div className="wrapper wrapper-login">
                    <div className="container container-login animated fadeIn">
                        <h3 className="text-center">Forget Password</h3>
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group form-floating-label">
                                    <input
                                        type="email"
                                        placeholder="E-mail address"
                                        className="form-control input-border-bottom"
                                        {...register("email")}
                                    />
                                    <p className="text-danger">{errors?.email?.message ?? error_forgot_password?.errors?.email?.msg}</p>
                                </div>
                                <div className="form-action mb-3">
                                    <button type="submit" className="btn btn-primary btn-rounded btn-login">Submit</button>
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
export default ForgotPassword;