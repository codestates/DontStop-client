import React, { Component } from "react";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Main from "./pages/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      accessToken: "",
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.issueAccessToken = this.issueAccessToken.bind(this);
  }

  loginHandler(data) {
    this.setState({ isLogin: true, accessToken: data });
  }

  // ****Token-reference****
  // loginHandler(data) {
  //     this.setState({ isLogin: true });
  //     this.issueAccessToken(data.data.accessToken);
  // }
  //11
  issueAccessToken(token) {
    this.setState({ accessToken: token });
    console.log();
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div className="App">
        {isLogin ? (
          <Main
            accessToken={this.state.accessToken}
            issueAccessToken={this.issueAccessToken}
          />
        ) : (
          <SignInPage loginHandler={this.loginHandler} />
        )}
      </div>
    );
  }
}

export default App;
