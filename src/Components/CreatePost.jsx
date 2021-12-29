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
    <div className="post">
      <div className="createPost-row">
        <div>Titre:</div>
        <input type="text" onChange={handleChangeText} value={postText} />
      </div>
      <div className="createPost-row">
        <div>Image</div>
        <input type="img" onChange={handleChangeImg} value={postImg} />
      </div>
      {postText !== "" ? (
        <div className="createPost-row">
          <button onClick={createPostHandler}>Publie</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CreatePost;
