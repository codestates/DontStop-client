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


//** dispatch오류 */
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory, Link } from "react-router-dom";
// import axios from "axios";
// import { setUserInfo, toggleLoginStatus } from "../../actions";

// import OauthSign from "../../pages/OauthSign";
// import "./Signin.css";

// export default function SignIn() {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [signIn, setSignIn] = useState({
//         email: "",
//         password: "",
//         accessToken: "",
//         loginStatus: true,
//     });

//     const emailHandler = (e) => {
//         setEmail(e.target.value);
//     };

//     const passwordHandler = (e) => {
//         setPassword(e.target.value);
//     };

//     const loginHandler = () => {
//         axios
//             .post(
//                 "http://localhost:4000/users/login",
//                 {
//                     email,
//                     password,
//                 },
//                 {
//                     withCredentials: true,
//                 }

//                 //     }, [isLogin]);

//                 //     const url = new URL(window.location.href);
//                 //     // const authorizationCode = url.searchParams.get("login");

//                 //     const createToken = async () => {
//                 //         const res = await axios
//                 //             .post(
//                 //                 "http://localhost:4000/users/login",
//                 //                 {
//                 //                     email,
//                 //                     password,
//                 //                 },
//                 //                 {
//                 //                     "Content-Type": "application/json",
//                 //                     withCredentials: true,
//                 //                 }
//                 //             )
//                 //             .then((res) => {
//                 //                 dispatch(setUserInfo(res.data.accessToken));
//                 //                 console.log("11", res.data.accessToken);
//                 //                 setSignIn({
//                 //                     ...signIn,
//                 //                     isLogin: true,
//                 //                 });
//                 //             })

//                 //             // this.props.inputHandler(res.data)
//                 //             // console.log("resres", res)

//                 //             .catch((err) => console.log(err));
//                 //     };

//                 //     // const createToken = async () => {
//                 //     //     await fetch(`/login`, {
//                 //     //         method: "POST",
//                 //     //         headers: {
//                 //     //             "Content-Type": "application/json",
//                 //     //         },
//                 //     //         body: JSON.stringify({
//                 //     //             email: email,
//                 //     //             password,
//                 //     //         }),
//                 //     //         credentials: "include",
//                 //     //     });
//                 //     // };

//                 //     const loginClick = async () => {
//                 //         const token = await createToken();
//                 //         console.log("token", token);
//                 //     };

//                 //     console.log("signIn", signIn);

//                 //     //     dispatch(setUserInfo(res.data));
//                 //     // };

//                 //     return (
//                 //         <div className="signinMain">
//                 //             <div className="Signinwrap">
//                 //                 <div class="tab-header">
//                 //                     <div class="inactive">
//                 //                         <Link
//                 //                             to="/signup"
//                 //                             style={{
//                 //                                 textDecoration: "none",
//                 //                                 color: "black",
//                 //                             }}
//                 //                         >
//                 //                             Sign Up
//                 //                         </Link>
//                 //                     </div>

//                 //                     <div class="active">Sign In</div>
//                 //                 </div>
//             )
//             .then((res) => {
//                 const token = res.data.accessToken; //토큰 받아옴 확인
//                 dispatch(setUserInfo(email, password, token));
//                 dispatch(toggleLoginStatus(true));
//             });
//         history.push("/");
//     };
//     //   const loginClick = async () => {
//     //     const token = await createToken();
//     //     console.log("token", token);
//     //   };

//     //   console.log("signIn", signIn);

//     //     dispatch(setUserInfo(res.data));
//     // };

//     return (
//         <div className="signinMain">
//             <div className="Signinwrap">
//                 <div class="tab-header">
//                     <div class="inactive">
//                         <Link
//                             to="/signup"
//                             style={{
//                                 textDecoration: "none",
//                                 color: "black",
//                             }}
//                         >
//                             Sign Up
//                         </Link>
//                     </div>

//                     <div class="active">Sign In</div>
//                 </div>

//                 <div className="OauthsignBtnwrap">
//                     <OauthSign className="OauthsignBtn"></OauthSign>
//                 </div>
//                 <div className="oneline">
//                     <hr
//                         style={{
//                             backgroundColor: "#F2F2F2",
//                             width: 175,
//                             marginBottom: 40,
//                             marginRight: 10,
//                         }}
//                     />
//                     or
//                     <hr
//                         style={{
//                             backgroundColor: "#F2F2F2",
//                             width: 175,
//                             marginBottom: 40,
//                             marginLeft: 10,
//                         }}
//                     />
//                 </div>
//                 <div className="inputField">
//                     <input
//                         type="email"
//                         value={email}
//                         className="Signininput"
//                         placeholder="Email"
//                         onChange={emailHandler}
//                     />
//                 </div>
//                 <div className="inputField">
//                     <input
//                         type="password"
//                         value={password}
//                         className="Signininput"
//                         placeholder="Password"
//                         onChange={passwordHandler}
//                     />
//                 </div>
//                 <div className="SigninBtnwrap">
//                     <button className="SigninBtn" onClick={loginHandler}>
//                         SIGN IN
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
