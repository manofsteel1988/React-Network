import Post from "./Post";

const Feed = ({ posts, deletePost }) => {
  return posts.length > 0 ? (
    <>
      <h3>Fil d'actualité:</h3>
      {posts.map((p) => (
        <Post key={p.id} postData={p} deletePost={deletePost} />
      ))}
    </>
  ) : (
    <h3 align="center">
      {/* <EmptyImageSvg width="300" height="300"> */}
      Aucun post pour le moment
    </h3>
  );
};

export default Feed;
