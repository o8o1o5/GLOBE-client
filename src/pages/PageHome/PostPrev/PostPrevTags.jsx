export default function PostPrevTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="font-notosanskr bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
