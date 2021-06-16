import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUp.css";
import { Link } from "react-router-dom";
import OauthSign from "../../pages/OauthSign";
import axios from "axios";

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    axios.post(
      "http://localhost:4000/users/signup",
      {
        email: email,
        password: password,
        name: name,
      },
      {
        headers: {
          "content-type": "application/json",
          withCredentials: true,
        },
      }
    );
    history.push("/login");
  };

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
          {/* <button className="OauthsignupBtn">
                            <img
                                src="img/googleLogo.png"
                                alt="logo"
                                className="google"
                            />
                            Google
                        </button> */}
          <OauthSign className="OauthsignBtn"></OauthSign>
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
            onChange={handleEmail}
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
            onChange={handlePassword}
          />
        </div>
        <div className="signupinputField">
          {/* <div className='col-25'>이름</div> */}
          <input
            name="name"
            type="text"
            className="Signupnameinput"
            // className="col-75"
            placeholder="Username"
            onChange={handleName}
          />
        </div>
        <div className="SignupBtnwrap">
          <input
            type="submit"
            className="SignupBtn"
            value="가입하기"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
