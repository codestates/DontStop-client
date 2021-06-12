


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

