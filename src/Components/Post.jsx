import React from "react";
import { useState } from "react";

const Post = (props) => {
  const [nblikes, setNbLikes] = useState(props.postData.likes);
  const [isLiked, setIsLiked] = useState(false);

  const likePost = () => {
    const increment = isLiked ? -1 : 1;
    setNbLikes(nblikes + increment);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <p>
        {props.postData.author}
        <br />
        {props.postData.text}
        <br />
        {nblikes} likes
        <br />
        <button onClick={likePost}>
          {isLiked ? `Vous aimez ce post` : `J'aime`}
        </button>
        <button onClick={() => props.deletePost(props.postData.id)}>
          Supprimer un post
        </button>
      </p>
    </>
  );
};

export default Post;
