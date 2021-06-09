import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

const UserInfo = (props) => {
  // ToDos
  // 그룹이름, 이름, 이메일은 바꿀 수 없게 만들어 놓아야 하므로 고정!
  // 그룹이름을 어디서 가져오지?
  // 비밀번호와 비밀번호 확인 칸만 수정 가능하게 만들어 놓아야 함
  // 비밀번호와 비밀번호 확인은 조건문을 달아서 매칭시켜줌 (동일하지 않을 경우 알람창 띄우기!)
  // 헤더에 마이페이지와 로그아웃 버튼 생성
  // 각 버튼을 누르면 경로를 해당 페이지로 설정 (로그아웃 버튼 클릭 시, 로그아웃에 성공했다는 알림창과 함께 메인페이지로 이동)
  // 저장하기 버튼을 누르면 서버에 바뀐 회원정보 post로 보내기!
  // 저장하기 버튼 누르면 알림창 ('비밀번호가 수정되었습니다!') 띄우기 + 알림창 닫으면 Mypage로 이동
  // 회원가입 시 서버에 보내는 정보를 바탕으로 회원정보를 띄워줌!

  /* 확인해야 할 것!!! 
  1. 다른 페이지로 이동하는 경로!!
  2. 서버에 데이터가 있어야 내정보를 가져올 수 있는지 확인 가능@

  * 해야할 일!
  1. CSS
  
 */

  // 비밀번호만 수정 가능하게 만들어야 함!!
  // 초기 비밀번호 input = ""
  const [password, setPassword] = useState("");

  // 비밀번호 확인을 위한 훅
  const [validatePassword, setValidatePassword] = useState("");
  const history = useHistory();
  //   const redirect = () => {
  //     history.push("/MyPage");
  //   };

  // 일단 정보를 서버로부터 받아서 띄워주기
  let userInfo = axios
    .get("http://18.217.112.87:4000/users/info")
    .then((res) => {
      console.log("유저: ", res); // 그룹이름, 이름, 이메일이 받아와져야 함
      return res;
    });

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleValidatePassword = (e) => {
    setValidatePassword(e.target.value);
  };

  const handleClickSave = (event) => {
    // 버튼을 그냥 눌러도 페이지가 리프레쉬 되는걸 막아줌
    event.preventDefault();

    // 비밀번호 유효성 조건 여기서 쓰기!
    // 비밀번호와 비밀번호확인이 일치하지 않으면 알림창
    // 두 빈칸에 다 입력을 했고, 일치한다면 => 알림창 + 서버에 바뀐 정보 post

    if (password !== validatePassword) {
      return alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
    } else if (
      password.length > 0 &&
      validatePassword.length > 0 &&
      password === validatePassword
    ) {
      alert("비밀번호가 성공적으로 변경되었습니다.");
      //   axios.post("http://18.217.112.87:4000/users/info", {
      //     password: props.handlePassword(),
      //   });
      history.push("/myPage");
    } else {
      history.push("/myPage");
    }
  };

  // src 에 저장시에는 import를 이용해야 함
  // public에 저장 시 경로 이용

  return (
    <div id="wrap">
      <header>
        <span className="backToMyPage">마이페이지</span>
        <span className="logout">로그아웃</span>
        <img className="banner" src="/img/Logo.png"></img>
      </header>

      <div id="container">
        <div className="information">회원정보</div>
        <form onSubmit={handleClickSave}>
          <label className="groupName">
            그룹 이름
            <input type="text" value="{props.userInfo.groupName}"></input>
          </label>
          <label className="userName">
            이름
            <input type="text" value="{props.userInfo.name}"></input>
          </label>
          <label className="email">
            이메일
            <input type="text" value="{props.userInfo.email}"></input>
          </label>
          <label className="password">
            비밀번호
            <input type="password" onChange={handlePassword}></input>
          </label>
          <label className="checkPassword">
            비밀번호 확인
            <input type="password" onChange={handleValidatePassword}></input>
          </label>
          <button className="save" type="submit" onChange={handleClickSave}>
            저장하기
          </button>
        </form>
      </div>
      <footer>Don't stop!!!! /*로고 이미지 넣고 팀원 이름 나열하기*/</footer>
    </div>
  );
};

export default UserInfo;
