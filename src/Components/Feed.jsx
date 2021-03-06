import Post from "./Post";
import { ReactComponent as EmptyImageSvg } from "../assets/empty.svg";

const Feed = ({ posts, deletePost, isLoading }) => {
  posts.sort(
    (post1, post2) =>
      new Date(post2.date).getTime() - new Date(post1.date).getTime()
  ); //trier les posts par ordre décroissant des heures, comme dans les réseaux sociaux

  return isLoading ? (
    <div>Chargement...</div>
  ) : posts.length > 0 ? (
    <>
      <h3>Fil d'actualité:</h3>
      {posts.map((p) => (
        <Post key={p.id} postData={p} deletePost={deletePost} />
      ))}
    </>
  ) : (
    <h3 align="center">
      <EmptyImageSvg width="300" height="300" />
      <div>Aucun post pour le moment</div>
    </h3>
  );
};

export default Feed;
