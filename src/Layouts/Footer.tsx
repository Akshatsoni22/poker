import React from "react";
import { ToastContainer } from 'react-toastify';

const Footer = () => {
    return(
        <>
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
        </>
    )
}

export default Footer;
