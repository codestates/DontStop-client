import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Post.css";

function Post({ title, contents }) {
  const [join, setJoin] = useState([]);
  const joinUrl = "http://localhost:4000/groups/join";

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .post(
          joinUrl,
          {
            Headers: {
              /* 인증? */
            },
          },
          {
            // 그룹아이디 보내야되는데?????????
            group_id: "",
          }
        )
        .then((response) => console.log(response));
      return response;
    }
    fetchData();
  }, [join]);

  //글자 너무 길면 뒤에 '...' 처리
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="post__card">
      <img className="post__img" src="img/Study.png" alt="" />
      <h2 className="post__title">{title}</h2>
      <h5 className="post__contents">{truncate(contents, 70)}</h5>
      <button className="post__btn" onClick={setJoin}>
        스터디 가입하기
      </button>
    </div>
  );
}

export default Post;
