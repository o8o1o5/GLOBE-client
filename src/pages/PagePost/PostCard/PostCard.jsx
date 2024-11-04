import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PostCardTitle from "./PostCardTitle";
import PostCardContent from "./PostCardContent";

export default function PostCard() {
  const [post, setPost] = useState();
  const location = useLocation();
  const queryString = location.search;

  const fetchPosts = async () => {
    const response = await fetch(`http://localhost:5001/posts${queryString}`);
    const post = await response.json();
    setPost(post);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleTrashClick = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5001/posts${queryString}`, {
      method: "DELETE",
    });
    if (response.ok) {
      window.location.href = "/";
    }
  };

  return (
    <div className="lg:w-2/3 md:w-2/3 w-10/12 mx-auto flex flex-col gap-10">
      {post ? ( // post가 존재하는지 확인
        <div className="p-6 bg-white rounded-lg shadow-md text-gray-800">
          <PostCardTitle post={post}></PostCardTitle>
          <hr></hr>
          <PostCardContent post={post}></PostCardContent>
        </div>
      ) : (
        <div className="text-center text-gray-500">post not found</div>
      )}

      <div className="flex justify-between">
        <Link to="/" className="text-blue-500 hover:underline">
          홈페이지로
        </Link>
        <Link
          to="/"
          onClick={handleTrashClick}
          className="text-red-500 hover:underline"
        >
          지우기
        </Link>
      </div>
    </div>
  );
}
