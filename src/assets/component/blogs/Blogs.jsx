import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBookmarks}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 mx-auto">
      {
        blogs.map(blog => <Blog key={blog.id} handleAddToBookmarks={handleAddToBookmarks} blog ={blog}></Blog>)
      }
    </div>
  );
};

export default Blogs;
