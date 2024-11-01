import { useEffect } from "react";
import { useState } from "react";

export default function App() {
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
    <div>
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
        <button type="submit">submit</button>
      </form>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post._id}>
              <div>{post.title}</div>
              <div>{post.content}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
