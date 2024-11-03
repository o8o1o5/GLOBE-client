import { FaShareAlt, FaTrash } from "react-icons/fa"; // 아이콘 임포트

export default function Postcard({ title, tags }) {
  return (
    <div className="w-full relative flex justify-between items-start bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <div className="flex flex-col">
        <div className="font-bold text-lg text-gray-800 font-notosanskr">
          {title}
        </div>
        <div className="flex flex-wrap gap-2 mt-2 font-notosans">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-500 mt-2 font-notosans">
          2024-11-03 12:00
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <FaShareAlt className="text-gray-500 cursor-pointer hover:text-blue-600 transition duration-200" />
        <FaTrash className="text-gray-500 cursor-pointer hover:text-red-600 transition duration-200" />
      </div>
    </div>
  );
}
