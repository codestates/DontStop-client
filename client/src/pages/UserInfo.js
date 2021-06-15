import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./UserInfo.css";
//import Footer from "../components/Main/Footer";
import InfoHeader from "../components/Main/InfoHeader";
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
  1. CSS => 못해먹겠다...
  
 */

    const history = useHistory();

    // 비밀번호만 수정 가능하게 만들어야 함!!
    // 초기 비밀번호 input = ""
    const [password, setPassword] = useState("");

    // 비밀번호 확인을 위한 훅
    const [validatePassword, setValidatePassword] = useState("");

    //   const redirect = () => {
    //     history.push("/MyPage");
    //   };

    // 일단 정보를 서버로부터 받아서 띄워주기
    let userInfo = axios.get("http://localhost:4000/users/info").then((res) => {
        console.log("와디즈 레스: ", res); // 그룹이름, 이름, 이메일이 받아와져야 함
        return res;
    });

    console.log("userInfo머니: ", userInfo);

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
                        "content-type": "application/json",
                        withCredentials: true,
                    },
                }
            );

            history.push("/MyPage");
        } else {
            history.push("/MyPage");
        }
    };

    // src 에 저장시에는 import를 이용해야 함
    // public에 저장 시 경로 이용

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
                        value="{props.userInfo.name}"
                        readOnly
                    ></input>
                </label>
                <label>
                    이메일
                    <input
                        className="email2"
                        type="text"
                        value="{props.userInfo.email}"
                        readOnly
                    ></input>
                </label>
                <label>
                    비밀번호
                    <input
                        className="password2"
                        type="password"
                        onChange={handlePassword}
                        value={password}
                    ></input>
                </label>
                <label>
                    비밀번호 확인
                    <input
                        className="checkPassword2"
                        type="password"
                        onChange={handleValidatePassword}
                        value={validatePassword}
                    ></input>
                </label>

                <button
                    className="save2"
                    type="submit"
                    // onClick={() => history.push("/MyPage")}
                >
                    저장하기
                </button>
            </form>
            {/* <Footer /> */}
            <footer id="footer">
                <img src="./img/FooterLogo.png" alt="" />
                <img src="./img/GitLogo.png" alt="" />
                <span
                    onClick={() =>
                        (window.location.href = "https://github.com/wonbeenna")
                    }
                >
                    나원빈
                </span>
                <span
                    onClick={() =>
                        (window.location.href = "https://github.com/baymaxxxxx")
                    }
                >
                    김지은
                </span>
                <span
                    onClick={() =>
                        (window.location.href =
                            "https://github.com/Lee-SangRyeol")
                    }
                >
                    이상렬
                </span>
                <span
                    onClick={() =>
                        (window.location.href = "https://github.com/yoolee741")
                    }
                >
                    이유림
                </span>
            </footer>
        </div>
    );
};

export default UserInfo;
