import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserInfo from "./UserInfo/UserInfo";
//import "./UserInfo/Info.css";
import MyPage from "./Mypage";

function App() {
  return (
    <>
      <Router>
        <Route path="/myPage" component={Mypage}></Route>
        <Switch>
          <Route path="/userInfo" component={UserInfo}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
