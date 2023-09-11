import React from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };
  return (
    <>
      <BlogForm addPost={addPost} />
      <BlogList posts={posts} />
    </>
  );
};

export default App;
