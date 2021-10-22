import React from "react";
import { useState } from "react";

const Post = (props) => {
  const [nblikes, setNbLikes] = useState((props.postData.likes = 0));

  const likePost = () => {
    setNbLikes(nblikes + 1);
  };
  return (
    <>
      <p>
        {props.postData.author}
        <br />
        {props.postData.text}
        <br />
        {props.postData.likes} likes
        <br />
        <button onClick={likePost}>J'aime</button>
      </p>
    </>
  );
};

export default Post;
