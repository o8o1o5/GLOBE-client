import PostPrevTitle from "./PostPrevTitle";

export default function PostPrev({ posts }) {
  if (posts.length === 0) return null;

  return (
    <div className="w-full lg:w-9/12 flex flex-col bg-white p-4 border rounded-lg shadow-md">
      {posts.map((post, i) => (
        <div key={post._id}>
          <PostPrevTitle
            postid={post._id}
            title={post.title}
            tags={["예시"]}
            createdAt={post.createdAt}
          />
          {i < posts.length - 1 && (
            <hr className="border-t border-gray-300 my-[7.5px]" />
          )}
        </div>
      ))}
    </div>
  );
}
