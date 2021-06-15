import React, { useState, useEffect } from "react";
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
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
    accessToken: "",
    loginStatus: true,
  });

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
        const token = res.data.accessToken; //토큰 받아옴 확인
        dispatch(setUserInfo(email, password, token));
        dispatch(toggleLoginStatus(true));
      });
    history.push("/");
  };
  //   const loginClick = async () => {
  //     const token = await createToken();
  //     console.log("token", token);
  //   };

  //   console.log("signIn", signIn);

  //     dispatch(setUserInfo(res.data));
  // };

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
        <div className="SigninBtnwrap">
          <button className="SigninBtn" onClick={loginHandler}>
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}

// export default SignIn;

// *****정상작동되는 코드 기반으로 짰는데 createToken에서 걸린다*****
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import OauthSign from "../../pages/OauthSign";
// import "./Signin.css";

// export default function SignIn(props) {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

//     // const storedJwt = localStorage.getItem("token");
//     // const [jwt, setJwt] = useState(storedJwt || null);

// const createToken = async (user, pw) => {
//     const res = await fetch("http://localhost:4000/users/login", {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             email: user,
//             password: pw,
//         }),
//     });
//     return await res.json();
// };

// const loginClick = async () => {
//     const token = await createToken(email, password);
//     console.log(token);
//     // const { data } = await axios.get(`http://localhost:4000/users/login`);
//     // localStorage.setItem("token", data.token);
//     // setJwt(data.token);
//     // console.log(data);
//     // console.log(res);
// };

//     return (
// <div className="signinMain">
//     <div className="Signinwrap">
//         <div class="tab-header">
//             <div class="inactive">
//                 <Link
//                     to="/signup"
//                     style={{
//                         textDecoration: "none",
//                         color: "black",
//                     }}
//                 >
//                     Sign Up
//                 </Link>
//             </div>

//             <div class="active">Sign In</div>
//         </div>

//         <div className="OauthsignBtnwrap">
//             <OauthSign className="OauthsignBtn"></OauthSign>
//             {/* <button className='OauthsignBtn' onClick={this.socialLoginHandler}><img src='img/googleLogo.png' alt='logo' className='google'/></button> */}
//         </div>
//         <div className="oneline">
//             <hr
//                 style={{
//                     backgroundColor: "#F2F2F2",
//                     width: 175,
//                     marginBottom: 40,
//                     marginRight: 10,
//                 }}
//             />
//             or
//             <hr
//                 style={{
//                     backgroundColor: "#F2F2F2",
//                     width: 175,
//                     marginBottom: 40,
//                     marginLeft: 10,
//                 }}
//             />
//         </div>
//         <div className="inputField">
//             {/* <div className='col-25'>이메일</div> */}
//             <input
//                 // name="emailSignin"
//                 type="text"
//                 className="Signininput"
//                 placeholder="Email"
//                 // value={this.state.email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//         </div>
//         <div className="inputField">
//             {/* <div className='col-25'>비밀번호</div> */}
//             <input
//                 // name="password"
//                 type="password"
//                 className="Signininput"
//                 placeholder="Password"
//                 // value={this.state.password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//         </div>
//         <div className="SigninBtnwrap">
//             <button className="SigninBtn" onClick={loginClick}>
//                 SIGN IN
//             </button>
//         </div>
//     </div>
// </div>
//     );
// }

// **********토큰 스프린트 기반으로 만든 코드**********
// import React, { Component } from "react";
// import axios from "axios";
// import OauthSign from "../../pages/OauthSign";
// import "./Signin.css";
// import { Link } from "react-router-dom";

// class SignIn extends Component {
//     constructor(props) {
//         console.log("props", props);
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//         };
//         this.inputHandler = this.inputHandler.bind(this);
//         this.loginRequestHandler = this.loginRequestHandler.bind(this);
//     }

//     socialLoginHandler() {
//         window.location.assign("http://localhost");
//     }

//     inputHandler(e) {
//         this.setState({ [e.target.name]: e.target.value });
//         console.log(e.target.value);
//     }

//     // ***with유림님***
//     // inputHandler = (key) => (e) => {
//     //     this.setState({ [key]: e.target.value });
//     //     console.log(e.target.value);
//     // };

//     loginRequestHandler() {
//         const { email, password } = this.state;

//         axios
//             .post(
//                 "http://localhost:4000/users/login",
//                 {
//                     email,
//                     password,
//                 },
//                 {
//                     "Content-Type": "application/json",
//                     withCredentials: true,
//                 }
//             )
//             .then(
//                 (res) => this.props.loginHandler(res.data)
//                 // console.log(res.data)
//             )
//             // .then((body) => {
//             //     if(body.accessToken) {
//             //         dispatch
//             //     }
//             // })
//             .catch((err) => console.log(err));
//     }

//     render() {
//         return (
//             <div className="Main">
//                 <div className="Signinwrap">
//                     <div class="tab-header">
//                         <div class="inactive">
//                             <Link
//                                 to="/signup"
//                                 style={{
//                                     textDecoration: "none",
//                                     color: "black",
//                                 }}
//                             >
//                                 {" "}
//                                 Sign Up
//                             </Link>
//                         </div>
//                         <div class="active">Sign In</div>
//                     </div>

//                     <div className="OauthsignBtnwrap">
//                         <OauthSign className="OauthsignBtn"></OauthSign>
//                         {/* <button className='OauthsignBtn' onClick={this.socialLoginHandler}><img src='img/googleLogo.png' alt='logo' className='google'/></button> */}
//                     </div>
//                     <div className="oneline">
//                         <hr
//                             style={{
//                                 backgroundColor: "#F2F2F2",
//                                 width: 175,
//                                 marginBottom: 40,
//                                 marginRight: 10,
//                             }}
//                         />
//                         or
//                         <hr
//                             style={{
//                                 backgroundColor: "#F2F2F2",
//                                 width: 175,
//                                 marginBottom: 40,
//                                 marginLeft: 10,
//                             }}
//                         />
//                     </div>
//                     <div className="inputField">
//                         {/* <div className='col-25'>이메일</div> */}
//                         <input
//                             // name="emailSignin"
//                             type="email"
//                             className="Signininput"
//                             placeholder="Email"
//                             value={this.state.email}
//                             onChange={(e) => this.inputHandler(e)}
//                         />
//                     </div>
//                     <div className="inputField">
//                         {/* <div className='col-25'>비밀번호</div> */}
//                         <input
//                             // name="password"
//                             type="password"
//                             className="Signininput"
//                             placeholder="Password"
//                             value={this.state.password}
//                             onChange={(e) => this.inputHandler(e)}
//                         />
//                     </div>
//                     <div className="SigninBtnwrap">
//                         <button
//                             className="SigninBtn"
//                             onClick={this.loginRequestHandler}
//                         >
//                             SIGN IN
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default SignIn;
