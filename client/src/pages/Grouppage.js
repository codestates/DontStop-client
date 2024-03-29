import React, { useEffect, useState } from "react";
import axios from "axios";
import StudyHeader from "../components/StudySearch/StudyHeader";
import Footer from "../components/Main/Footer";
import GroupPost from "../components/GroupPage/GroupPost";
import "../components/GroupPage/GroupPost.css";
import { useSelector } from "react-redux";

const Grouppage = () => {
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
    }
    fetchData();
  }, []);

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
                username={el.user_name}
                date={el.createdAt}
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

export default Grouppage;
