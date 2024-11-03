import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PagePost() {
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
    const response = await fetch(`http://localhost:5001/posts${queryString}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchPosts();
    }
  };

  return (
    <div>
      {post ? (
        <div>
          <div>제목: {post.title}</div>
          <div>내용: {post.content}</div>
          <div>만들어짐: {post.createdAt}</div>
          <div>수정됨: {post.updatedAt}</div>
        </div>
      ) : (
        <div>post not found</div>
      )}
      <Link to="/">홈페이지로</Link>
      <Link to="/" onClick={handleTrashClick}>
        지우기
      </Link>
    </div>
  );
}
