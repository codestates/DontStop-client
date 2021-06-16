import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UserInfo.css";
import InfoHeader from "../components/Main/InfoHeader";
import axios from "axios";

axios.defaults.withCredentials = true;

const UserInfo = (props) => {

  // console.log("프롭: ", props);
  const token = useSelector(
    (state) => state.userInfoReducer.userInfo.accessToken
  );
  console.log(token);
  const history = useHistory();
  const [password, setPassword] = useState("");

  // 비밀번호 확인을 위한 훅
  const [validatePassword, setValidatePassword] = useState("");
  const [infors, setInfors] = useState([]);

  // 일단 정보를 서버로부터 받아서 띄워주기
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:4000/users/info", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setInfors(res.data);
      console.log(res);
    }
    fetchData();
  }, []);

  const handlePassword = (e) => {
    //  console.log("타겟: ", e.target);
    //  console.log("타겟벨류", e.target.value);
    setPassword(e.target.value);
  };

  const handleValidatePassword = (e) => {
    //  console.log("타겟1: ", e.target);
    //  console.log("타겟벨류1", e.target.value);
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
      axios.post(
        "http://localhost:4000/users/info",
        {
          password: password,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      history.push("/MyPage");
    } else {
      history.push("/MyPage");
    }
  };

  return (
    <div id="container2">
      <InfoHeader />

      <form onSubmit={handleClickSave}>
        <label className="information2">회원정보</label>

        <label>
          이름
          <input
            className="userName2"
            type="text"
            value={infors.name}
            readOnly
          ></input>
        </label>
        <label>
          이메일
          <input
            className="email2"
            type="text"
            value={infors.email}
            readOnly
          ></input>
        </label>
        <label>
          비밀번호
          <input
            className="password2"
            type="password"
            onChange={handlePassword}
          ></input>
        </label>
        <label>
          비밀번호 확인
          <input
            className="checkPassword2"
            type="password"
            onChange={handleValidatePassword}
          ></input>
        </label>

        <button className="save2" type="submit">
          저장하기
        </button>
      </form>
      <footer id="footer1">
        <img className="logo1" src="./img/FooterLogo.png" alt="" />
        <img className="logo2" src="./img/GitLogo.png" alt="" />
        <div className="names1">
          <span
            className="span1"
            onClick={() =>
              (window.location.href = "https://github.com/wonbeenna")
            }
          >
            나원빈
          </span>
          <span
            className="span1"
            onClick={() =>
              (window.location.href = "https://github.com/baymaxxxxx")
            }
          >
            김지은
          </span>
          <span
            className="span1"
            onClick={() =>
              (window.location.href = "https://github.com/Lee-SangRyeol")
            }
          >
            이상렬
          </span>
          <span
            className="span1"
            onClick={() =>
              (window.location.href = "https://github.com/yoolee741")
            }
          >
            이유림
          </span>

        </div>
    );
};

export default UserInfo;
