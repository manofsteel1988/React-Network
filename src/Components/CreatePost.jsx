import React, { useState } from "react";

const CreatePost = ({ addPost }) => {
  const [postText, setPostText] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setPostText(value);
  };

  const createPostHandler = () => {
    addPost(postText);
    setPostText("");
  };

  return (
    <>
      <p>Nouveau Post</p>
      <input type="text" onChange={handleChange} value={postText} />
      {<button onClick={createPostHandler}>Publie</button>}
    </>
  );
};

export default CreatePost;
