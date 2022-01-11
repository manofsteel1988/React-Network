import { useState, useEffect } from "react";

const getValueFromStorage = (key) => JSON.parse(localStorage.getItem(key));

const setValueInStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const useLocalStorage = (initialPosts) => {
  const [posts, setPosts] = useState(
    getValueFromStorage("react_network_posts") || initialPosts
  );

  useEffect(() => {
    setValueInStorage("react_network_posts", posts);
  }, [posts]);

  return [posts, setPosts];
};

export default useLocalStorage;
