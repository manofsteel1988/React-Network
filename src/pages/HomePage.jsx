import React, { useContext, useState, useEffect } from "react";

import "../Components/Post";
import Feed from "../Components/Feed";
import CreatePost from "../Components/CreatePost";
import UserContext from "../contexts/UserContext";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useContext(UserContext);

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  useEffect(() => {
    fetch("https://run.mocky.io/v3/eb97ebc6-f2a5-4c49-8504-a5752f9292cf")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((postData) => {
        setPosts(postData);
        setIsLoading(false);
      });
  }, []);

  const addPost = (postText, postImg) => {
    const newPost = {
      id: Math.floor(1000 * Math.random()),
      text: postText,
      author: user.author,
      authorPicture: user.authorPicture,
      postPicture: postImg,
      date: new Date(),
      likes: 0,
    };
    setPosts([...posts, newPost]);
  };
  return (
    <>
      <div className="container">
        <CreatePost addPost={addPost} />
        <Feed posts={posts} deletePost={deletePost} isLoading={isLoading} />
      </div>
    </>
  );
};

export default HomePage;
