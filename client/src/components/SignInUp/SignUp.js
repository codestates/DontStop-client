import React, { Component } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            email: "",
            password: "",
            name: "",
        };
    }

    render() {
        return (
            <div className="signupMain">
                <div className="Signupwarp">
                    <div class="tab-header">
                        <div class="active">Sign Up</div>
                        <div class="inactive">
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                    <div className="OauthsignupBtnwrap">
                        <button className="OauthsignupBtn">
                            <img
                                src="img/googleLogo.png"
                                alt="logo"
                                className="google"
                            />
                            Google
                        </button>
                    </div>
                    <div className="oneline">
                        <hr
                            style={{
                                backgroundColor: "#F2F2F2",
                                width: 175,
                                marginBottom: 40,
                                marginRight: 10,
                            }}
                        />
                        or
                        <hr
                            style={{
                                backgroundColor: "#F2F2F2",
                                width: 175,
                                marginBottom: 40,
                                marginLeft: 10,
                            }}
                        />
                    </div>
                    <div className="signupinputField">
                        {/* <div className='col-25'>이메일</div> */}
                        <input
                            name="emailSignup"
                            type="email"
                            className="Signupinput"
                            placeholder="Email"
                        />
                    </div>
                    <div className="signupinputField">
                        {/* <div className='col-25'>비밀번호</div> */}
                        <input
                            name="password"
                            type="password"
                            className="Signupinput"
                            minlength="8"
                            maxLength="16"
                            placeholder="Password"
                        />
                    </div>
                    <div className="signupinputField">
                        {/* <div className='col-25'>이름</div> */}
                        <input
                            name="name"
                            type="text"
                            className="Signupinput"
                            // className="col-75"
                            placeholder="Username"
                        />
                    </div>
                    <div className="SignupBtnwrap">
                        <input
                            type="submit"
                            className="SignupBtn"
                            value="가입하기"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
