import { useEffect, useState } from "react";
import Postcard from "./Postcard";

export default function Home() {
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
    <div className=" w-10/12 md:w-8/12 lg:w-1/2 mx-auto flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4">
        {posts.map((post) => (
          <Postcard
            key={post._id}
            title={post.title}
            tags={["#ddd", "React"]}
          />
        ))}
      </div>

      <form
        className="flex flex-col gap-4 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg shadow-md"
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
          className="bg-white text-blue-600 p-2 rounded hover:bg-blue-100 transition duration-300"
        >
          게시글 등록
        </button>
      </form>
    </div>
  );
}
