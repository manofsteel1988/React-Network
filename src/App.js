import "./Components/Post";
import "./App.css";
import { useState } from "react";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import CreatePost from "./Components/CreatePost";

const initialPosts = [
  {
    id: 12,
    text: "Bonjour tout le monde!",
    author: "Vincent",
    authorPicture: "https://picsum.photos/seed/profile11/50/50",
    likes: 42,
    postPicture: "https://picsum.photos/seed/postpicture-12/500/300",
    date: new Date(),
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

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const currentUser = {
    author: "Nouvel utilisateur",
    authorPicture: "https://picsum.photos/seed/profile53/50/50",
  };
  const addPost = (postText, postImg) => {
    const newPost = {
      id: Math.floor(1000 * Math.random()),
      text: postText,
      author: "Nouvel utilisateur",
      authorPicture: currentUser.authorPicture,
      postPicture: postImg,
      date: new Date(),
      likes: 0,
    };
    setPosts([...posts, newPost]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <CreatePost addPost={addPost} />
        <Feed posts={posts} deletePost={deletePost} />
      </div>
    </>
  );
}
export default App;
