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
      const response = await axios.get(
        searchUrl,
        {
          headers: {},
        },
        {
          withCredentials: true,
        }
      );
      setPosts(response.data.data);
      console.log(response);
    }
    fetchData();
  }, [searchUrl]);
  console.log(posts);

  return (
    <>
      <StudyHeader />
      <Button />
      <div className="studySearch__main">
        <div className="studySearch">
          {posts &&
            posts.map((post, idx) => (
              <Post key={idx} title={post?.title} contents={post?.contents} />
            ))}
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StudySearch;
