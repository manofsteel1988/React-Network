import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

const CreatePost = ({ addPost }) => {
  const { user } = useContext(UserContext);
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
        <img
          className="post-profilePic"
          src={user.authorPicture}
          alt="profil_picture"
        />
        <input
          type="text"
          onChange={handleChangeText}
          value={postText}
          placeholder="quoi de neuf aujourd'hui"
        />
      </div>
      <div className="createPost-row">
        <div>Image</div>
        <input
          type="text"
          onChange={handleChangeImg}
          value={postImg}
          placeholder="url photo"
        />
      </div>
      {postText !== "" ? (
        <div className="createPost-row">
          <button className="btn" onClick={createPostHandler}>
            Publie
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CreatePost;
