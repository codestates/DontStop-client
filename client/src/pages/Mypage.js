import React from "react";

const MyPage = (props) => {
  return (
    <div>
      <header>
        <span className="userInfo">회원정보</span>
        <span className="logout">로그아웃</span>
      </header>
      <div className="banner">
        <img src="../img/Logo.png" alt=""></img>
        <button className="go">그룹일지</button>
      </div>
      <div className="name">명언이 나을까 이름이 나을까?</div>
      <div id="timer">
        <div className="this_week"></div>
      </div>
    </div>
  );
};

export default MyPage;
