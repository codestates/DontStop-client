import axios from "axios";
import React from "react";
import "./Post.css";
import { useSelector } from "react-redux";
import PopupButton from "./PopupButton";

axios.defaults.withCredentials = true;
function Post({ title, contents, id, count }) {
  const token = useSelector(
    (state) => state.userInfoReducer.userInfo.accessToken
  );

  const joinHandler = async () => {
    const joinUrl = "http://localhost:4000/groups/join";
    const res = await axios
      .post(
        joinUrl,
        {
          id: id,
          count: count,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res));
  };

  //글자 너무 길면 뒤에 '...' 처리
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // 카운트 0이면 그룹 랜더안됨
  if (count === 0) {
    return null;
  }

  return (
    <div className="post__card">
      <img className="post__img" src="img/Study.png" alt="" />
      <h2 className="post__title">{title}</h2>
      <h5 className="post__contents">{truncate(contents, 80)}</h5>
      <PopupButton joinHandler={joinHandler} />
      {/* <button className="post__btn" onClick={joinHandler}>
        스터디 가입하기
      </button> */}
    </div>
  );
}

export default Post;
