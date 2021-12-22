import { useState } from "react";
import Post from "./Post";

const initialPosts = [
  { id: 12, text: "💬Bonjour tout le monde!", author: "Vincent", likes: 42 },
  { id: 22, text: "💬Comment allez-vous?", author: "Thomas", likes: 32 },
  { id: 32, text: "💬Vive ReactJS!", author: "Samuel", likes: 22 },
];

const Feed = () => {
  const [posts, setPosts] = useState(initialPosts);

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };
  return (
    <>
      <h3>Fil d'actualité:</h3>
      {posts.map((p) => (
        <Post key={p.id} postData={p} deletePost={deletePost} />
      ))}
    </>
  );
};

export default Feed;
