import { Link } from "react-router-dom";

export default function Post({ title, tags, postid }) {
  return (
    <div className="w-full flex items-center">
      <Link
        to={`post?id=${postid}`}
        className="flex-grow min-w-0 truncate hover:underline pr-3 font-bold text-lg text-gray-800 font-notosanskr"
      >
        {title}
      </Link>
      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="font-notosanskr h-[26px] bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="text-xs text-gray-500 font-notosanskr">댓글 [1]</div>
          <span className="text-xs text-gray-500 font-notosans">|</span>
          <div className="text-xs text-gray-500 font-notosans">
            2024-11-03 12:00
          </div>
        </div>
      </div>
    </div>
  );
}
