import React from "react";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import StudySearch from "./pages/StudySearch";
import UserInfo from "./pages/UserInfo";
import Grouppage from "./pages/Grouppage";

const App = () => {
    return (
        <>
            <Route component={Main} path={["/@:username", "/"]} exact />
            <Route component={SignInPage} path="/login" />
            <Route component={SignUpPage} path="/signup" />
            <Route component={StudySearch} path="/search" />
            <Route component={UserInfo} path="/info" />
            <Route component={Grouppage} path="/list" />
        </>
    );
};

export default App;
