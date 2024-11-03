export default function Tag({ tag, icon }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
      {icon}
      <span className="text-sm font-medium font-notosans leading-5">{tag}</span>
    </div>
  );
}
