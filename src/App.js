import React from "react";
import "./Components/Post";
import Post from "./Components/Post";
import Header from "./Components/Header";

const posts = [
  { id: 12, text: "Bonjour tout le monde!", author: "Vincent", likes: 42 },
  { id: 22, text: "Comment allez-vous?", author: "Thomas", likes: 32 },
  { id: 32, text: "Vive ReactJS!", author: "Samuel", likes: 22 },
];

function App() {
  //idee1:problème, code trop lourd
  // const postComponents = [];
  // for (const p of posts) {
  //   postComponents.push(<Post key={p.id} postData={p} />);
  // }

  //idee2:soucis d'amélioration
  // const postComponents = posts.map((p) => <Post key={p.id} postData={p} />);
  return (
    <>
      <Header />

      <h3>Fil d'actualité:</h3>
      {/* idee3 */}
      {posts.map((p) => (
        <Post key={p.id} postData={p} />
      ))}
    </>
  );
}
export default App;
