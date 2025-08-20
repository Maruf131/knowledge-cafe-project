import "./App.css";
import Blogs from "./assets/component/blogs/Blogs";
import Bookmarks from "./assets/component/bookmarks/Bookmarks";
import Header from "./assets/component/header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex p-4 gap-5 md:w-4/5 mx-auto">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
