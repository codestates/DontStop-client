// fakeData로 해서 그 부분을 mypage에서 받아오려고 했으나
// 그렇게 하지말고 서버로 get요청을 해서 직접 데이터를 받아오자!

// 내가 랜더해야할것 title, contents, create_at
// mypage에서 정보들을 post해서 서버로 보내면 그걸 get해서 랜더하는것이다.

import React from "react";
import axios from "axios";
import StudyHeader from "../components/StudySearch/StudyHeader";
import Footer from "../components/Main/Footer";
// import "./GroupPost.css";
import "../components/GroupPage/GroupPost.css";

const Grouppage = (props) => {
    // console.log("props", props);
    //수정해야할건 없어
    //정보를 받자.

    let posts = axios
        .get("http://localhost:4000/groups/list", {
            headers: { Authorization: `Bearer ${props.token}` },
        })
        .then((res) => {
            // console.log("res", res.data);
            // console.log("title", res.data.title);
            // console.log("content", res.data.contents);
            // console.log("create", res.data.create_at);
            // console.log("1posts", posts);
            return res;
        });

    //header에 토큰을 담아야해 ..

    console.log(
        "posts",
        posts
    ); /* =>Promise {<pending>} & [[PromiseResult]]: Object data로 데이터들어옴 */
    console.log("contents", posts.data); /* =>일단지금은 undefined */
    return (
        <>
            {/* <div>{res}</div> */}
            {/* <div>{res.data}</div>  => 밖에있는 Res를 안에서 쓸수가 없는데 어떻게 랜더를 해야하는거지? 상태로 만들어줘야하는건가? */}
            <StudyHeader style={{ backgroundColor: "#F8E7E7" }} />
            <div className="space">
                {props.post ? (
                    <div>게시글이 없습니다.</div>
                ) : (
                    <>
                        <div className="pppost">
                            {/* {
                                <div>
                                    <h1>{props.posts}hello</h1>
                                </div>
                            } */}
                            <input
                                className="title"
                                type="text"
                                readOnly
                                value="{props.posts.title}밤새서라도 다 만들자! "
                            ></input>
                            <div className="content">
                                {/* {res.data} */}
                                아니 이렇게 하면 받아올수있는거 확실한가?
                                props.posts하면 unde뜨는데..? 일단 GET요청은
                                200ok를 받았는데 데이터베이스가 없어서
                                안들어오는거일수도있는거지 코드에는 문제가 없지
                                아니 이렇게 하면 받아올수있는거 확실한가?
                                props.posts하면 unde뜨는데..? 일단 GET요청은
                                200ok를 받았는데 데이터베이스가 없어서
                                안들어오는거일수도있는거지 코드에는 문제가 없지
                            </div>
                            <input
                                className="publishedAt"
                                type="text"
                                readOnly
                                value={props.post}
                            ></input>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Grouppage;
