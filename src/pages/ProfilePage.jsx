import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const [userNameText, setUserNameText] = useState(user.author);
  const [userProfilPhoto, setUserProfilPhoto] = useState(user.authorPicture);

  const updateProfile = (e) => {
    e.preventDefault();
    setUser({
      author: userNameText,
      authorPicture: userProfilPhoto,
    });
  };

  const nameHandler = (e) => {
    setUserNameText(e.target.value);
  };
  const photoHandler = (e) => {
    setUserProfilPhoto(e.target.value);
  };
  return (
    <>
      <h1>Modifier mon profil</h1>
      <form className="update_profil_form" onSubmit={updateProfile}>
        <h3>Votre nom:</h3>
        <input type="text" value={userNameText} onChange={nameHandler} />
        <h3>Votre photo de profil:</h3>
        <input type="text" value={userProfilPhoto} onChange={photoHandler} />
        <input className="btn" type="submit" value="Valider" />
      </form>
    </>
  );
};

export default ProfilePage;
