import { PiBookmarkSimple } from "react-icons/pi";

const Blog = ({ blog , handleAddToBookmarks, handleMarkAsRead}) => {
    
  const {
    cover,
    id,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="my-10">
      <img src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center mt-5">
          <img className="size-11" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="font-extrabold text-xl">{author}</h3>
            <p>
              <span className="text-sm text-gray-500">{posted_date}</span>
            </p>
          </div>
        </div>
        <div className="flex item-center gap-3">
          <span className="text-gray-600">{reading_time} min ago </span>
          <button onClick={()=> handleAddToBookmarks(blog)} className="text-2xl}"><PiBookmarkSimple></PiBookmarkSimple></button>
        </div>
      </div>
        <div className="mt-3">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-400">
                {
                    hashtags.map(hash => <span><a className="mr-2" href="">{hash}</a></span>)
                }
            </p>
            <button className="font-bold text-purple-600 underline" onClick={()=>handleMarkAsRead(reading_time,id)}>Mark As Read</button>
        </div>
    </div>
  );
};

export default Blog;