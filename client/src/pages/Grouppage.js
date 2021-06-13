// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// import StudyHeader from "../components/StudySearch/StudyHeader";
// import GroupPost from "../components/GroupPage/GroupPost";
// import Header from "../components/Main/Header";
// import Footer from "../components/Main/Footer";
// import "./Grouppage.css";

// function Grouppage() {
//     return (
//         <>
//             <StudyHeader style={{ backgroundColor: "#F8E7E7" }} />
//             <div className="main">
//                 <GroupPost />
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Grouppage;

import React from "react";
import GroupPost from "../components/GroupPage/GroupPost";
import Footer from "../components/Main/Footer";
import HeaderGroup from "../components/GroupPage/HeaderGroup";
import styled from "styled-components";

const Grouppage = ({ posts }) => (
    <>
        <HeaderGroup style={{ backgroundColor: "#F8E7E7" }} />
        {/* <Warp> */}
        {posts.map((el) => (
            <GroupPost key={el.id.postId} post={el} />
            // user createdAt title content GET
        ))}
        {/* </Warp> */}
        <Footer />
    </>
);

export default Grouppage;

const Warp = styled.div`
    position: absolute;
    min-height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 200px;
    left: 0;
    right: 0;
    z-index: 1;
    flex-wrap: wrap;
`;

// export default function Grouppage() {
//     const state = useSelector((state) => state.itemReducer);
//     const { posts, post } = state;

//     const renderPosts = post.filter(
//         (el) => posts.map((el) => el.itemId).indexOf(el.id) > -1
//     );

//     return (
//         <div id="post-list-container">
//             <div id="post-list-body">
//                 <div id="addpost-list-constainer">
//                     {!post.length ? (
//                         <div id="post-list-text">게시글이 없습니다.</div>
//                     ) : (
//                         <div id="add-post-list">
//                             {renderPosts.map((post, idx) => {
//                                 return <GroupPost key={idx} post={post} />;
//                             })}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// import React from "react";
// import Grouppage from "./pages/Grouppage";
// import { fakeData } from "./fakeData";

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             posts: fakeData,
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <div className="parent">
//                     <Grouppage posts={this.state.posts} />
//                 </div>
//             </div>
//         );
//     }
// }

// export default App;

// // 마이페이지 -> 저장하기 -> 서버로 post요청 -> 서버
// // 그룹페이지 get으로 서버에서 받아와

// // groupId랑 같이 받아와
