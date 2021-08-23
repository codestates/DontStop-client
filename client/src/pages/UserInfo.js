import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UserInfo.css";
import InfoHeader from "../components/Main/InfoHeader";
import axios from "axios";

axios.defaults.withCredentials = true;

const UserInfo = (props) => {
  const token = useSelector(
    (state) => state.userInfoReducer.userInfo.accessToken
  );
  const history = useHistory();
  const [password, setPassword] = useState("");

  const [validatePassword, setValidatePassword] = useState("");
  const [infors, setInfors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:4000/users/info", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setInfors(res.data);
    }
    fetchData();
  }, []);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleValidatePassword = (e) => {
    setValidatePassword(e.target.value);
  };

  const handleClickSave = (event) => {
    event.preventDefault();

    if (password !== validatePassword) {
      return alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요!");
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
      </footer>
    </div>
  );
};

export default UserInfo;
