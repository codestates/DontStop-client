import MyPage from "./pages/Mypage";
import "./pages/Mypage.css";
//import "./pages/UserInfo.css";
import React from "react";
import UserInfo from "./pages/UserInfo";
import SignIn from "./pages/SignIn";

function App() {
  // return <UserInfo></UserInfo>;
  return <MyPage></MyPage>;
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import Main from "./pages/Main";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogin: false,
//       accessToken: "",
//     };
//     this.loginHandler = this.loginHandler.bind(this);
//     this.issueAccessToken = this.issueAccessToken.bind(this);
//   }

//   loginHandler(data) {
//     this.setState({ isLogin: true, accessToken: data });
//   }

//   issueAccessToken(token) {
//     this.setState({ accessToken: token });
//   }

//   render() {
//     const { isLogin } = this.state;
//     return (
//       <div className="App">
//         {isLogin ? (
//           <Main
//             accessToken={this.state.accessToken}
//             issueAccessToken={this.issueAccessToken}
//           />
//         ) : (
//           <SignUp loginHandler={this.loginHandler} />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
