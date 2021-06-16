import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mypage.css";
import Footer from "../components/Main/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, toggleLoginStatus } from "../actions";
import { Saying } from "../components/Main/Saying";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(
    (state) => state.userInfoReducer.userInfo.accessToken
  );

  const [time, setTime] = useState(0);
  const [startBtn, setStartBtn] = useState(false);

  const handleStartBtn = () => {
    setStartBtn(!startBtn);
  };

  useEffect(() => {
    let stopWatch = null;

    if (startBtn === true) {
      stopWatch = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(stopWatch);
    }

    return () => clearInterval(stopWatch);
  });

  const [accTime, setAccTime] = useState(0);

  const handleEndBtn = async () => {
    setTime(0);
    setStartBtn(false);

    const res = await axios
      .post(
        "http://localhost:4000/users/time",
        {
          time: time / 1000,
        },
        {
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
    setAccTime(res);
  };

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContents = (e) => {
    setContents(e.target.value);
  };

  const handleClickSave = () => {
    if (title.length === 0) {
      return alert("일기의 제목을 입력해 주세요.");
    } else if (contents.length === 0) {
      return alert("내용을 입력해 주세요.");
    } else {
      alert("일기가 저장되었습니다.");

      axios.post(
        "http://localhost:4000/users/diary",
        {
          title: title,
          contents: contents,
        },
        {
          headers: {
            "content-type": "application/json",
            // withCredentials: true,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setContents("");
    }
  };

  const logoutHandler = () => {
    dispatch(toggleLoginStatus(false));
    dispatch(setUserInfo(""));
  };

  return (
    <div id="wrapper">
      <header className="header">
        <div className="right_header">
          <span className="userInfo1">
            <Link
              to="/info"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: 5,
              }}
            >
              {" "}
              회원정보
            </Link>
          </span>
          <span className="logout1">
            <Link
              to="/"
              onClick={logoutHandler}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              로그아웃
            </Link>
          </span>
        </div>
      </header>

      <div className="banner1">
        <Link to="./">
          <img className="headerLogo" src="../img/Logo.png" alt=""></img>
        </Link>
        <Link to="./list">
          <span className="group1">
            <button className="go1">그룹일지</button>
          </span>
        </Link>
      </div>
      <div id="container1">
        <div className="name1">Life begins at the end of your comfort zone</div>
        <div id="timer1">
          <div className="this_week">
            <span className="week1">이번주 나의 스터디</span>

            <div className="acc_time1">{accTime}분</div>
          </div>

          <div className="today1">
            <span className="today2">오늘 나의 스터디</span>
            <div className="time1">
              <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}</span>
              <span>:{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
              <span>:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            </div>
          </div>

          <div className="buttons1">
            <button className="start1" onClick={handleStartBtn}>
              {startBtn ? "일시정지" : "시작"}
            </button>
            <button className="end1" onClick={handleEndBtn}>
              종료
            </button>
          </div>
        </div>
        <div id="text1">
          <input
            className="input2"
            type="text"
            placeholder="제목을 입력하세요"
            onChange={handleTitle}
            value={title}
          ></input>
          <textarea
            className="textarea1"
            placeholder="#오늘의 일기"
            onChange={handleContents}
            value={contents}
          ></textarea>
          <div className="saveBtn1">
            <button className="save1" onClick={handleClickSave}>
              일기 저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
