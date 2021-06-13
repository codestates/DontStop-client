import React, { Component } from "react";
import axios from "axios";
import OauthSign from "../../pages/OauthSign";
import "./Signin.css";
import { Link } from "react-router-dom";

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
        console.log(e.target.value);
    }

    // ***with유림님***
    // inputHandler = (key) => (e) => {
    //     this.setState({ [key]: e.target.value });
    //     console.log(e.target.value);
    // };

    loginRequestHandler() {
        const { email, password } = this.state; //+

        axios
            .post(
                "http://localhost:4000/users/login",
                {
                    email,
                    password,
                },
                {
                    "Content-Type": "application/json",
                    withCredentials: true,
                }
            )
            .then((res) =>
                // this.props.inputHandler(res.data)
                console.log(res.data)
            )
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="Main">
                <div className="Signinwrap">
                    <div class="tab-header">
                        <div class="inactive">
                            <Link
                                to="/signup"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                {" "}
                                Sign Up
                            </Link>
                        </div>
                        <div class="active">Sign In</div>
                    </div>

                    <div className="OauthsignBtnwrap">
                        <OauthSign className="OauthsignBtn"></OauthSign>
                        {/* <button className='OauthsignBtn' onClick={this.socialLoginHandler}><img src='img/googleLogo.png' alt='logo' className='google'/></button> */}
                    </div>
                    <div className="oneline">
                        <hr
                            style={{
                                backgroundColor: "#F2F2F2",
                                width: 175,
                                marginBottom: 45,
                                marginRight: 10,
                            }}
                        />
                        or
                        <hr
                            style={{
                                backgroundColor: "#F2F2F2",
                                width: 175,
                                marginBottom: 45,
                                marginLeft: 10,
                            }}
                        />
                    </div>
                    <div className="inputField">
                        {/* <div className='col-25'>이메일</div> */}
                        <input
                            // name="emailSignin"
                            type="email"
                            className="Signininput"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.inputHandler(e)}
                        />
                    </div>
                    <div className="inputField">
                        {/* <div className='col-25'>비밀번호</div> */}
                        <input
                            // name="password"
                            type="password"
                            className="Signininput"
                            minLength="8"
                            maxLength="16"
                            placeholder="Password"
                            value={this.state.password}
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

// asdfasdf
