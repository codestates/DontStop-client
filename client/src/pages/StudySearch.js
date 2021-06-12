import React, { useEffect, useState } from "react";
import StudyHeader from "../components/StudySearch/StudyHeader";
import Post from "../components/StudySearch/Post";
import "./StudySearch.css";
import Footer from "../components/Main/Footer";
import Button from "../components/StudySearch/Button";
import axios from "axios";

function StudySearch() {
  const [posts, setPosts] = useState([]);
  const searchUrl = "http://localhost:4000/groups/search";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(searchUrl, {
        withCredentials: true,
      });
      setPosts(response);
      console.log(response);
      return response;
    }
    fetchData();
  }, []);

  return (
    <>
      <StudyHeader />
      <Button />
      <div className="studySearch">
        {/* {posts.map((post, idx) => (
          <Post key={idx} title={post?.title} contents={post?.contents} />
        ))} */}
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Footer />
    </>
  );
}

export default StudySearch;
