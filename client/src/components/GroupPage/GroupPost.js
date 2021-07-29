import React from "react";
import "./GroupPost.css";

function GroupPost({ title, contents, username, date }) {
  return (
    <div className="pppost">
      <div className="group_userinfo">
        <img className="userimg" src="../img/DOGE.png" alt="" />
        <div className="user_name">
          <a>By </a>
          {username}
        </div>
      </div>
      <div className="pppost-title">{title}</div>
      <div className="pppost-content">{contents}</div>
      <div className="date">{date.slice(5, 10)}</div>
    </div>
  );
}
export default GroupPost;
