import { useEffect, useState } from "react";
import PostPrev from "./PostPrev/PostPrev.jsx";
import Search from "./Search/Search.jsx";
import LoginCard from "./LoginCard/LoginCard.jsx";
import DOMAIN from "../../assets/resources/domain.js";

export default function PageHome() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleContentInput = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${DOMAIN}/posts`, {
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
    const response = await fetch(`${DOMAIN}/posts`);
    const postList = await response.json();
    setPosts(postList);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const debounceTimeout = setTimeout(async () => {
      const filteredPosts = await fetch(
        `${DOMAIN}/posts?search=${searchInputValue}`
      );
      const filteredPostsArray = await filteredPosts.json();
      setSearchedPosts(filteredPostsArray);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchInputValue]);

  return (
    <div className="lg:w-2/3 md:w-2/3 w-10/12 mx-auto flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5 grow">
          <Search
            value={searchInputValue}
            setSearchInputValue={setSearchInputValue}
          ></Search>
          <PostPrev posts={searchedPosts} fetchPosts={fetchPosts}></PostPrev>
        </div>
        <div className="w-full lg:w-1/4">
          <LoginCard></LoginCard>
        </div>
      </div>

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
