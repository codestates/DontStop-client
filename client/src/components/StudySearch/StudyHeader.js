import React from "react";
import "./StudyHeader.css";
import { useHistory } from "react-router";

function StudyHeader() {
  const history = useHistory();

  return (
    <div className="container">
      <div className="logo" onClick={() => history.push("/")}>
        <img src="img/Logo.png" alt="" />
      </div>
      <div className="right__menu">
        <p>마이페이지</p>
        <p>로그아웃</p>
      </div>
    </div>
  );
}

export default StudyHeader;
