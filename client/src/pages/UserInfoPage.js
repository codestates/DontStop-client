import React from "react";
import UserInfo from "./UserInfo";
import "./UserInfo.css";
import StudyHeader from "../components/StudySearch/StudyHeader";
import Footer from "../components/Main/Footer";

//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function UserInfoPage() {
  return (
    <>
      {/* <StudyHeader /> */}
      <UserInfo />
      {/* <Footer /> */}
    </>

    // <UserInfo>
    //   <Router>
    //     <Route path="/myPage" component={MyPage}></Route>
    //     <Switch>
    //       <Route path="/userInfo" component={UserInfo}></Route>
    //     </Switch>
    //   </Router>
    // </UserInfo>
  );
}

export default UserInfoPage;
