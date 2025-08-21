import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
  return (
    <div className="md:w-1/3 mx-auto my-10 bg-gray-100">
      <div className="border-2 border-purple-700 text-purple-950 text-xl font-bold rounded-xl text-center p-4 m-4">
        <h3>Spent Time On Read: {readingTime}</h3>
      </div>
      <p className="bg-zinc-500 text-white text-xl font-bold rounded-xl text-center p-4 m-4">
        Bookmarked Blogs: {bookmarks.length}
      </p>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
