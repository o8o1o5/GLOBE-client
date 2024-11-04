import { useEffect, useState } from "react";
import PostPrev from "./PostPrev/PostPrev.jsx";
import Search from "./Search/Search.jsx";

export default function PageHome() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleContentInput = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      setTitle("");
      setContent("");
      fetchPosts();
    }
  };

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:5001/posts");
    const postList = await response.json();
    setPosts(postList);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="lg:w-2/3 md:w-2/3 w-10/12 mx-auto flex flex-col gap-5">
      <Search></Search>
      <PostPrev posts={posts} fetchPosts={fetchPosts}></PostPrev>
      <form
        className="font-notosanskr flex flex-col gap-4 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleTitleInput}
          type="text"
          value={title}
          placeholder="게시글 제목 입력"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
        <input
          onChange={handleContentInput}
          type="text"
          value={content}
          placeholder="게시글 내용 입력"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="relative overflow-hidden p-2 rounded bg-white text-blue-600 transition duration-300 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 transition duration-300 opacity-0 group-hover:opacity-100"></span>
          <span className="relative z-10">Submit</span>
        </button>
      </form>
    </div>
  );
}
