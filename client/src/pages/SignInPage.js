import React from "react";
import SignIn from "../components/SignInUp/SignIn";
import HeaderSignin from "../components/SignInUp/HeaderSignin";
import Footer from "../components/Main/Footer";
import { Component } from "react";

class SignInPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <HeaderSignin />
                <SignIn loginHandler={this.loginHandler} />
                <Footer />
            </>
        );
    }
}

export default SignInPage;
