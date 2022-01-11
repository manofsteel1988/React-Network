import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const AboutPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>A propos</h1>
      <p>Bienvenue sur React Network</p>
      <p>Application dévelopée en React.JS</p>
      <p>Vous etes connecté en tant que {user.author}.</p>
    </div>
  );
};

export default AboutPage;
