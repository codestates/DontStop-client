import React from "react";
import "./Post.css";

function Post({ title, contents }) {
  return (
    <div className="post__card">
      <img src="img/Study.png" alt="" />
      <div className="post__info">
        <h2>{title}</h2>
        <h5>{contents} </h5>
        <button className="post__btn" onClick>
          스터디 가입하기
        </button>
      </div>
    </div>
  );
}

export default Post;
