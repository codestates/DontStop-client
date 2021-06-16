import React from "react";
import "./StudyHeader.css";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserInfo, toggleLoginStatus } from "../../actions";

function StudyHeader() {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLogin = useSelector(
    (state) => state.loginStatusReducer.loginStatus.loginStatus
  );

  const logoutHandler = () => {
    dispatch(toggleLoginStatus(false));
    dispatch(setUserInfo(""));
  };

  return (
    <div className="container">
      <div className="logo" onClick={() => history.push("/")}>
        <img src="img/Logo.png" alt="" />
      </div>
      {isLogin ? (
        <div className="right__menu">
          <Link
            to="./mypage"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: 5,
            }}
          >
            <p>마이페이지</p>
          </Link>
          <Link
            to="/"
            onClick={logoutHandler}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <p>로그아웃</p>
          </Link>
        </div>
      ) : (
        <div className="right__menu">
          <Link
            to="./login"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: 5,
            }}
          >
            <p>로그인</p>
          </Link>
          <Link
            to="./signup"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <p>회원가입</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default StudyHeader;
