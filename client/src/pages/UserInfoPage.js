import UserInfo from "./pages/UserInfo";
import "./pages/UserInfo.css";
import MyPage from "./pages/Mypage";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <UserInfo>
            <Router>
                <Route path="/myPage" component={MyPage}></Route>
                <Switch>
                    <Route path="/userInfo" component={UserInfo}></Route>
                </Switch>
            </Router>
        </UserInfo>
    );
}

export default App;
