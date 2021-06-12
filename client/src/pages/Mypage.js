import React from "react";

const MyPage = (props) => {
  const check = () => {
    console.log("클릭");
  };
  return (
    <div>
      <header>
        <span className="userInfo">회원정보</span>
        <span className="logout">로그아웃</span>
      </header>
      <div className="banner">
        <img src="../img/Logo.png" alt=""></img>
        <button className="go" onClick={check}>
          그룹일지
        </button>
      </div>
      <div id="container">
        <div className="name">명언이 나을까 이름이 나을까?뭐가뭐가</div>
        <div id="timer">
          <span className="week">이번주 나의 스터디</span>
          <div className="acc_time">365분</div>
          <span className="today">오늘 나의 스터디</span>
          <div className="time">00:00:00</div>
          <div className="buttons">
            <button className="start" onClick={check}>
              시작
            </button>
            {/* <button className="stop">일시정지</button> */}
          </div>
          <div className="aloneBtn">
            <button className="end" onClick={check}>
              종료
            </button>
          </div>
        </div>
        <div id="text">
          <input type="text" placeholder="제목을 입력하세요"></input>
          <textarea placeholder="#오늘의 일기"></textarea>
        </div>
        <div className="saveBtn">
          <button className="save">일기 저장</button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
