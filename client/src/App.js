import Main from "./pages/Main";
import "./pages/Mypage.css";
import React from "react";
import StudySearch from "./pages/StudySearch";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/studySearch">
            <StudySearch />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
