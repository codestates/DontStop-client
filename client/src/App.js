// import React from "react";
// import "./App.css";
// import Header from "./components/Main/Header";
// import Main from "./pages/Main";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Main />
//     </div>
//   );
// }

// import UserInfo from "./pages/UserInfo";
// import "./pages/UserInfo.css";
// import MyPage from "./pages/Mypage";
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// function App() {
//   return (
//     <UserInfo>
//       <Router>
//         <Route path="/myPage" component={MyPage}></Route>
//         <Switch>
//           <Route path="/userInfo" component={UserInfo}></Route>
//         </Switch>
//       </Router>
//     </UserInfo>
//   );
// }

import MyPage from "./pages/Mypage";
import "./pages/Mypage.css";
import React from "react";
function App() {
  return <MyPage></MyPage>;
}

export default App;
