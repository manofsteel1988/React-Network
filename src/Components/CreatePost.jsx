import React, { useState } from "react";

const CreatePost = ({ addPost }) => {
  const [postText, setPostText] = useState("");
  const [postImg, setPostImg] = useState("");

  const handleChangeText = (e) => {
    let value = e.target.value;
    setPostText(value);
  };

  const handleChangeImg = (e) => {
    let value = e.target.value;
    setPostImg(value);
  };

  const createPostHandler = () => {
    addPost(postText, postImg);
    setPostText("");
    setPostImg("");
  };

  return (
    <>
      <p>Nouveau Post</p>
      <input type="text" onChange={handleChangeText} value={postText} />
      <p>Image</p>
      <input type="img" onChange={handleChangeImg} value={postImg} />
      <br />
      {<button onClick={createPostHandler}>Publie</button>}
    </>
  );
};

export default CreatePost;
