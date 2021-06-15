import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mypage.css";
import Footer from "../components/Main/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, toggleLoginStatus } from "../actions";

const MyPage = (props) => {
    const dispatch = useDispatch();

    console.log("프롭: ", props);
    /*
  ToDos
  1. .name 에 명언 API 적용시킴 (무료인거 찾아보고 get해오기) V
  2. timer 만들기 (난이도: 최상) 
  2-1. 시작 버튼을 누르면 버튼이 '일시정지'로 바뀜 V
  2-2. 시작할 경우 타이머 시작 V
  2-3. 일시 정지할 경우 타이머 일시 정지 V
  2-4. 종료 버튼 누르면 타이머 초기화 + 서버로 최종 시간 post V
  2-5. 이번주 나의 스터디 누적 시간
  3. 일기 저장 버튼 누르면 타이틀과 일기 post (* 해결해야 할 문제: input box 비우기)
  4. header에 회원정보 (Link to 적용) 누르면 회원정보 페이지로 이동
  5. header에 로그아웃 누르면 메인페이지로 이동 (기본 메인)
  6. 그룹 일지 누르면 그룹페이지로 이동 
  7. 로고 클릭 시 메인페이지로 이동 (로그인 이후의 메인)
   */

    // -------------- Stop Watch + 공부한 시간 post!!!-------------------------------------------------------------------------
    const [time, setTime] = useState(0);
    const [startBtn, setStartBtn] = useState(false);

    // 이번주 공부량 서버에서 받아오기! (에러뜨네으아아ㅓ란어리ㅏ넝란어리ㅓㅏ니얼)
    let acc_time = axios
        .get("http://localhost:4000/users/time")
        .then((res) => {
            console.log("레스: ", res);
            return res;
        })
        .catch((err) => {
            console.log("에러: ", err);
        });
    console.log("너는 누구십니까", acc_time);

    const handleStartBtn = () => {
        // 2-1. 시작버튼 누르면 일시정지로 바뀜; 일시정지 -> 시작
        setStartBtn(!startBtn);
    };

    // useEffect 함수는 컴포넌트가 레더링 될 때 실행; 시간을 초, 분, 시 단위로 만들어주기
    useEffect(() => {
        // 일시정지 시 숫자를 리셋시키지 않기 위한 용도!
        let stopWatch = null;

        // setInterval: 일정 간격으로 작업 수행하기 위해 사용; 작업이 시간 간격보다 오래걸리면 에러 발생 가능!
        // clearInterval: 실행 중인 작업을 중지시키는 것이 아닌, 지정된 작업이 모두 실행되고 그 다음 작업스케쥴이 중지 되는 것

        // 시작버튼을 눌렀을 경우, setInterval 효과를 줌으로써 1초씩 시간 시작!
        if (startBtn === true) {
            stopWatch = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        } else {
            // 정지 버튼을 눌렀을 경우, clearInterval로 setInterval로 반복하고 있는 것을 멈춤
            clearInterval(stopWatch);
        }
        // 페이지를 이동하면, 저절로 타임 정지시켜줌!
        return () => clearInterval(stopWatch);
    });

    const handleEndBtn = () => {
        // 종료 버튼을 누르면 시간을 서버로 post.. 어떻게?
        // 1초에 1000 으로 뜸
        setTime(0);
        setStartBtn(false);
        console.log("타임: ", time);
        axios.post(
            "http://localhost:4000/users/time",
            {
                time: time / 1000,
            },
            {
                headers: {
                    "content-type": "application/json",
                    withCredentials: true,
                },
            }
        );
    };

    // ------------------------------------------------------------------------------------------------------

    // 3. 일기 제목과 오늘의 일기의 길이가 0보다 크고, 일기 저장 버튼을 누르면 post!
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleContents = (e) => {
        setContents(e.target.value);
    };

    const handleClickSave = () => {
        //  e.preventDefault();

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
                        withCredentials: true,
                    },
                }
            );
        }
    };

    // -------------------------------------------------------------------

    // API 받아와보자
    const [quote, setQuote] = useState("");
    const getQuotes = () => {
        const randomQuotes = `http://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        let allQuotes = axios
            .get(randomQuotes)
            .then((data) => {
                // console.log("명언:", data);
                let quoteData = data.data.quotes;
                let randomNum = Math.floor(Math.random() * quoteData.length);
                let randomQuote = data.data.quotes[randomNum];

                setQuote(randomQuote.quote);
            })
            .catch((err) => console.log("명언에러: ", err));
    };

    // const [quote, setQuote] = useState("");
    // const getQuotes = () => {
    //   const randomQuotes = "https://type.fit/api/quotes";
    //   let allQuotes = axios.get(randomQuotes).then((data) => {
    //     console.log("명언: ", data);
    //   });
    // };

    // ----------------------------------------------------------------------

    const logoutHandler = () => {
        dispatch(toggleLoginStatus(false));
        dispatch(setUserInfo(""));
    };

    return (
        <div id="wrapper">
            <header className="header">
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
            </header>

            <div className="banner1">
                <Link to="./">
                    <img src="../img/Logo.png" alt=""></img>
                </Link>
                <Link to="./list">
                    <button className="go1" onClick={getQuotes}>
                        그룹일지
                    </button>
                </Link>
            </div>
            <div id="container1">
                <button className="name1" onClick={getQuotes}>
                    {quote}
                </button>
                <div id="timer1">
                    <span className="week1">이번주 나의 스터디</span>

                    <div className="acc_time1">{time / 1000}</div>

                    <span className="today1">오늘 나의 스터디</span>
                    <div className="time1">
                        {/* slice(0, 1) 안먹힘.. => 10초 미만인 경우 숫자가 0 포함 2개밖에 안되서 그런것인가?! */}
                        <span>
                            {("0" + Math.floor((time / 3600000) % 24)).slice(
                                -2
                            )}
                        </span>
                        <span>
                            :{("0" + Math.floor((time / 60000) % 60)).slice(-2)}
                        </span>
                        <span>
                            :{("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                        </span>
                    </div>
                    <div className="buttons1">
                        <button className="start1" onClick={handleStartBtn}>
                            {startBtn ? "일시정지" : "시작"}
                        </button>
                    </div>
                    <div className="aloneBtn1">
                        <button className="end1" onClick={handleEndBtn}>
                            종료
                        </button>
                    </div>
                </div>
                <div id="text1">
                    <input
                        type="text"
                        placeholder="제목을 입력하세요"
                        onChange={handleTitle}
                        value={title}
                    ></input>
                    <textarea
                        placeholder="#오늘의 일기"
                        onChange={handleContents}
                        value={contents}
                    ></textarea>
                </div>
                <div className="saveBtn1">
                    <button className="save1" onClick={handleClickSave}>
                        일기 저장
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyPage;
