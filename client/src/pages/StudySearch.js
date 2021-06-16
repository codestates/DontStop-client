import React, { useEffect, useState } from "react";
import StudyHeader from "../components/StudySearch/StudyHeader";
import Post from "../components/StudySearch/Post";
import "./StudySearch.css";
import Footer from "../components/Main/Footer";
import Button from "../components/StudySearch/Button";
import axios from "axios";
import { useSelector } from "react-redux";
axios.defaults.withCredentials = true;
function StudySearch() {
  const [posts, setPosts] = useState([]);
  const searchUrl = "http://localhost:4000/groups/search";
  const token = useSelector(
    (state) => state.userInfoReducer.userInfo.accessToken
  );
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(searchUrl, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <StudyHeader />
      <Button token={token} />
      <div className="studySearch__main">
        <div className="studySearch">
          {Object.values(posts).map((post, idx) => (
            <Post
              key={idx}
              title={post?.title}
              contents={post?.contents}
              id={post?.id}
              count={post?.count}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StudySearch;
