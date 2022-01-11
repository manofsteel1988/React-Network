import React, { useContext } from "react";

import "../Components/Post";
import Feed from "../Components/Feed";
import CreatePost from "../Components/CreatePost";
import useLocalStorage from "../hooks/useLocalStorage";
import UserContext from "../contexts/UserContext";

const initialPosts = [
  {
    id: 12,
    text: "Bonjour tout le monde!",
    author: "Vincent",
    authorPicture: "https://picsum.photos/seed/profile11/50/50",
    likes: 42,
    postPicture: "https://picsum.photos/seed/postpicture-12/500/300",
  },
  {
    id: 22,
    text: "Comment allez-vous?",
    author: "Thomas",
    authorPicture: "https://picsum.photos/seed/profile16/50/50",
    likes: 32,
    postPicture: "https://picsum.photos/seed/postpicture-13/500/300",
    date: new Date(),
  },
  {
    id: 32,
    text: "Vive ReactJS!",
    author: "Samuel",
    authorPicture: "https://picsum.photos/seed/profile17/50/50",
    likes: 22,
    postPicture: "https://picsum.photos/seed/postpicture-14/500/300",
    date: new Date(),
  },
];

const HomePage = () => {
  const [posts, setPosts] = useLocalStorage(initialPosts);
  const isLoading = false;

  const { user } = useContext(UserContext);

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

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
