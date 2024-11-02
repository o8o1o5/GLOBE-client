import { useEffect } from "react";
import { useState } from "react";
import Postcard from "./Postcard";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handleTitleInput = (e) => {
    setTitle(e.target?.value);
  };

  const handleContentInput = (e) => {
    setContent(e.target?.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5001/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
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

  // 더 연구 필요.. 왜 useEffect를 쓰는거지?
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        {posts.map((post) => {
          return (
            <Postcard
              key={post._id}
              title={post.title}
              content={post.content}
            ></Postcard>
          );
        })}
      </div>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          onChange={handleTitleInput}
          type="text"
          value={title}
          id="title"
          placeholder="title"
          required
        ></input>
        <input
          onChange={handleContentInput}
          type="text"
          id="content"
          value={content}
          placeholder="content"
          required
        ></input>
        <button type="submit" className="bg-white">
          submit
        </button>
      </form>
    </div>
  );
}
