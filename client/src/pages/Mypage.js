import React from "react";
import UserInfo from "./UserInfo/UserInfo";

function MyPage({ location, history }) {
  console.log(history);
  console.log(location);
  return (
    <>
      <UserInfo></UserInfo>
      <div className="테스트">테스트 마이페이지</div>
    </>
  );
}

export default MyPage;
