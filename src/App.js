import "./Components/Post";
import { useState } from "react";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import CreatePost from "./Components/CreatePost";

const initialPosts = [
  { id: 12, text: "💬Bonjour tout le monde!", author: "Vincent", likes: 42 },
  { id: 22, text: "💬Comment allez-vous?", author: "Thomas", likes: 32 },
  { id: 32, text: "💬Vive ReactJS!", author: "Samuel", likes: 22 },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const addPost = (postText) => {
    const newPost = {
      id: Math.floor(1000 * Math.random()),
      text: postText,
      author: "Nouvel utilisateur",
      likes: 0,
    };
    setPosts([...posts, newPost]);
  };
  return (
    <>
      <Header />
      <CreatePost addPost={addPost} />
      <Feed posts={posts} deletePost={deletePost} />
    </>
  );
}
export default App;
