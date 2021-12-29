import React from "react";
import { useState } from "react";
import moment from "moment";

const Post = ({ postData, deletePost }) => {
  const [nblikes, setNbLikes] = useState(postData.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const likePost = () => {
    const increment = isLiked ? -1 : 1;
    setNbLikes(nblikes + increment);
    setIsLiked(!isLiked);
  };

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header_left">
          <img
            className="post-profilePic"
            src={postData.authorPicture}
            alt="author_img"
          />
          <div>
            <div className="post-author">{postData.author}</div>
            <div className="post-date">
              {moment(postData.date).format("HH:mm")}
            </div>
          </div>
        </div>
        <div className="post-menu" onClick={toggleMenu}>
          ...
          <div
            className={`post-popup ${showMenu ? "" : "hidden"}`}
            onClick={() => deletePost(postData.id)}
          >
            Supprimer
          </div>
        </div>
      </div>
      <div className="post-text">{postData.text}</div>
      <div className="post-picture">
        <img src={postData.postPicture} alt="post_img" />
      </div>
      <div className="post-footer">
        <span
          onClick={likePost}
          className={`post-likes ${isLiked ? "liked" : ""}`}
        >
          <span style={{ marginRight: "5px" }}>👍</span>
          <span>{nblikes}</span>
        </span>
      </div>
    </div>
  );
};

export default Post;
