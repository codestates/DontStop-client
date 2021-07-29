import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import OauthSign from "../../pages/OauthSign";
import axios from "axios";
import "./SignUp.css";

axios.defaults.withCredentials = true;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignup = () => {
    const { email, password, name } = this.state;
    axios
      .post(
        "http://localhost:4000/users/signup",
        {
          email,
          password,
          name,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => this.props.history.push("/login"));
  };

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
            <input
              type="email"
              className="Signupinput"
              placeholder="Email"
              onChange={this.handleInputValue("email")}
            />
          </div>
          <div className="signupinputField">
            <input
              type="password"
              className="Signupinput"
              placeholder="Password"
              onChange={this.handleInputValue("password")}
            />
          </div>
          <div className="signupinputField">
            <input
              type="text"
              className="Signupnameinput"
              placeholder="Username"
              onChange={this.handleInputValue("name")}
            />
          </div>
          <div className="SignupBtnwrap">
            <button
              className="SignupBtn"
              type="submit"
              onClick={this.handleSignup}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
