import React from "react";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Main from "./pages/Main";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Mypage from "./pages/Mypage";
import StudySearch from "./pages/StudySearch";
import UserInfo from "./pages/UserInfo";
import Grouppage1 from "./pages/Grouppage";

const App = () => {
    const isLogin = useSelector(
        (state) => state.loginStatusReducer.loginStatus.loginStatus
    );

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Main isLogin={isLogin} />
                    </Route>
                    <Route component={Mypage} path="/mypage" />
                    <Route component={SignInPage} path="/login" />
                    <Route component={SignUpPage} path="/signup" />
                    <Route component={StudySearch} path="/search" />
                    <Route component={UserInfo} path="/info" />
                    <Route component={Grouppage1} path="/list" />
                </Switch>
            </Router>
        </>
    );
};
export default App;
