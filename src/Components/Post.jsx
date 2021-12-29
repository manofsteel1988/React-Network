import React from "react";
import { useState } from "react";
import moment from "moment";

const Post = ({ postData, deletePost }) => {
  const [nblikes, setNbLikes] = useState(postData.likes);
  const [isLiked, setIsLiked] = useState(false);

  const likePost = () => {
    const increment = isLiked ? -1 : 1;
    setNbLikes(nblikes + increment);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <p>
        <img src={postData.authorPicture} alt="author_img" />
        <br />
        {postData.author}
        <br />
        {moment(postData.date).format("HH:mm")}
        <br />
        💬{postData.text}
        <br />
        <img src={postData.postPicture} alt="post_img" />
        <br />
        {nblikes} likes
        <br />
        <button onClick={likePost}>
          {isLiked ? `Vous aimez ce post` : `J'aime`}
        </button>
        <button onClick={() => deletePost(postData.id)}>
          Supprimer un post
        </button>
      </p>
    </>
  );
};

export default Post;
