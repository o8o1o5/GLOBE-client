import { Link } from "react-router-dom";
import PostPrevTags from "./PostPrevTags";
import PostPrevDesc from "./PostPrevDesc";

export default function PostPrevTitle({ postid, title, tags, createdAt }) {
  return (
    <div className="w-full flex items-center">
      <Link
        to={`post?id=${postid}`}
        className="flex-grow min-w-0 truncate hover:underline pr-3 font-bold text-lg text-gray-800 font-notosanskr"
      >
        {title}
      </Link>
      <div className="flex items-center gap-4 flex-shrink-0">
        <PostPrevTags tags={tags}></PostPrevTags>
        <PostPrevDesc createdAt={createdAt}></PostPrevDesc>
      </div>
    </div>
  );
}
