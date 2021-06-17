import React from "react";
import SignUp from "../components/SignInUp/SignUp";
import HeaderSignin from "../components/SignInUp/HeaderSignin";
import Footer from "../components/Main/Footer";

const SignUpPage = () => {
    return (
        <>
            <HeaderSignin />
            <SignUp />
            <Footer />
        </>
    );
};

export default SignUpPage;
