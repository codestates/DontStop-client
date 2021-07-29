import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { setUserInfo, toggleLoginStatus } from "../../actions";

import OauthSign from "../../pages/OauthSign";
import "./Signin.css";

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = () => {
    axios
      .post(
        "http://localhost:4000/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const token = res.data.accessToken;
        dispatch(setUserInfo(email, password, token));
        dispatch(toggleLoginStatus(true));
      });
    history.push("/");
  };

  return (
    <div className="signinMain">
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
              Sign Up
            </Link>
          </div>

          <div class="active">Sign In</div>
        </div>

        <div className="OauthsignBtnwrap">
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
        <div className="Signin_inputwrap">
          <div className="inputField">
            <input
              type="email"
              value={email}
              className="Signininput"
              placeholder="Email"
              onChange={emailHandler}
            />
          </div>
          <div className="inputField">
            <input
              type="password"
              value={password}
              className="Signininput"
              placeholder="Password"
              onChange={passwordHandler}
            />
          </div>
        </div>
        <div className="SigninBtnwrap">
          <button className="SigninBtn" onClick={loginHandler}>
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}
