import React from "react";
import { useState } from "react";

const Header = () => {
  const [title, setTitle] = useState("React Network");
  const changeTitle = () => {
    setTitle("Mon nouveau titre");
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Cliquez ici</button>
    </div>
  );
};

export default Header;
