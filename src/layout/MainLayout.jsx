import React, { useState } from "react";
import Header from "../Components/Header";

const MainLayout = (props) => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div id="mainlayout">
      <Header />
      <div style={{ display: "flex", height: "100vh" }}>
        <div className="container">{props.children}</div>
        <div className="sidebar">
          <p>{`Vous etes actuellement ${
            isConnected ? "connecté au" : "déconnecté du"
          } chat`}</p>
          <button className="btn" onClick={() => setIsConnected(!isConnected)}>
            {isConnected ? "Se déconnecter" : "Se connecter"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
