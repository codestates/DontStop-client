import React, { Component } from "react";
import axios from "axios";
import OauthSign from "./OauthSign";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.inputHandler = this.inputHandler.bind(this);
        this.loginRequestHandler = this.loginRequestHandler.bind(this);
    }

    socialLoginHandler() {
        window.location.assign("http://localhost");
    }

    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    loginRequestHandler() {
        axios
            .post(
                "http://localhost:4000/users/login",
                {
                    email: this.state.email,
                    password: this.state.password,
                },
                {
                    "content-type": "application/json",
                    withCredentials: true,
                }
            )
            .then(
                (res) => this.props.loginHandler(res.data)
                // console.log(res.data)
            );
    }

    render() {
        return (
            <div className="Main">
                <div className="Signinwrap">
                    <div className="OauthsignBtnwrap">
                        <OauthSign></OauthSign>
                        {/* <button className='OauthsignBtn' onClick={this.socialLoginHandler}><img src='img/googleLogo.png' alt='logo' className='google'/>Sign in with Goggle</button> */}
                    </div>
                    <div className="inputField">
                        {/* <div className='col-25'>이메일</div> */}
                        <input
                            name="emailSignin"
                            type="email"
                            className="col-75"
                            placeholder="Email"
                            onChange={(e) => this.inputHandler(e)}
                        />
                    </div>
                    <div className="inputField">
                        {/* <div className='col-25'>비밀번호</div> */}
                        <input
                            name="password"
                            type="password"
                            className="col-75"
                            minlength="8"
                            maxLength="16"
                            placeholder="Password"
                            onChange={(e) => this.inputHandler(e)}
                        />
                    </div>
                    <div className="SigninBtnwrap">
                        <button
                            className="SigninBtn"
                            onClick={this.loginRequestHandler}
                        >
                            SIGN IN
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
