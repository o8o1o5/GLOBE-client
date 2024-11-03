import Post from "./Post";

export default function Postcard({ posts }) {
  if (posts.length === 0) return null;

  return (
    <div className="w-full flex flex-col bg-white p-4 border rounded-lg shadow-md">
      {posts.map((post, i) => (
        <div key={post._id}>
          <Post
            postid={post._id}
            title={post.title}
            tags={["JavaScript", "React"]}
          />
          {i < posts.length - 1 && (
            <hr className="border-t border-gray-300 my-2" />
          )}
        </div>
      ))}
    </div>
  );
}
