import { useState } from "react";
import "./App.css";
import Blogs from "./assets/component/blogs/Blogs";
import Bookmarks from "./assets/component/bookmarks/Bookmarks";
import Header from "./assets/component/header/Header";

function App() {
  const [bookMarks, setBookMarks]= useState([]);

  const handleAddToBookmarks = blogs =>{
    const newBlog = [...bookMarks, blogs];
    setBookMarks(newBlog);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex p-4 gap-5 md:w-4/5 mx-auto">
        <Blogs handleAddToBookmarks = {handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks ={bookMarks}></Bookmarks>
        
      </div>
    </>
  );
}

export default App;
