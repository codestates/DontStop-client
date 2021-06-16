import React, { useEffect, useState } from "react";
import axios from "axios";
import StudyHeader from "../components/StudySearch/StudyHeader";
import Footer from "../components/Main/Footer";
import GroupPost from "../components/GroupPage/GroupPost";
import "../components/GroupPage/GroupPost.css";
import { useSelector } from "react-redux";

const Grouppage1 = () => {
    const [groupposts, setGroupposts] = useState([]);

    const token = useSelector(
        (state) => state.userInfoReducer.userInfo.accessToken
    );

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://localhost:4000/groups/list", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setGroupposts(res.data);
            console.log("res", res.data);
        }
        fetchData();
    }, []);
    console.log("groupposts잘들어옴", groupposts);

    return (
        <>
            <StudyHeader></StudyHeader>
            <div className="grouppost-main">
                <div className="space">
                    {groupposts.map((el) => {
                        return (
                            <GroupPost
                                title={el.title}
                                contents={el.contents}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="group_footer">
                <Footer></Footer>
            </div>
        </>
    );
};

export default Grouppage1;
