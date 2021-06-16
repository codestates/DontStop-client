import React from "react";
import "./GroupPost.css";

function GroupPost({ title, contents, username, date }) {
<<<<<<< HEAD
  // console.log("post", posts);
  console.log("title", title);
  console.log("contents", contents);
  console.log("user_name", username);
  console.log("date", date);

  return (
    // <div className="grouppost-main">
    //     <div className="space">
    <div className="pppost">
      <div className="group_userinfo">
        <img className="userimg" src="img/DOGE.png" alt="" />
        <div className="user_name">
          <a>By </a>
          {username}
=======
    // console.log("post", posts);
    console.log("title", title);
    console.log("contents", contents);
    console.log("user_name", username);
    console.log("date", date);

    return (
        // <div className="grouppost-main">
        //     <div className="space">
        <div className="pppost">
            <div className="group_userinfo">
                <img className="userimg" src="img/DOGE.png" alt="" />
                <div className="user_name">
                    <a>By </a>
                    {username}
                </div>
            </div>
            <div className="pppost-title">{title}</div>
            <div className="pppost-content">{contents}</div>
            <div className="date">{date.slice(5, 10)}</div>
>>>>>>> b98bf865d68878cc22fe00344d5060eb55544b9d
        </div>
      </div>
      <div className="pppost-title">{title}</div>
      <div className="pppost-content">{contents}</div>
      <div className="date">{date.slice(5, 10)}</div>
    </div>
    //     </div>
    // </div>
  );
}
export default GroupPost;
