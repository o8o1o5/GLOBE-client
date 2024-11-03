import { FaReact, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import logo from "../assets/logo.png";
import Tag from "../pages/homePage/TagButton";

export default function Topbar() {
  return (
    <div className="mb-10 w-full">
      <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-600 w-full flex items-center justify-center shadow-lg">
        <div className="flex items-center gap-3 w-10/12 md:w-8/12 lg:w-1/2 text-white">
          <img
            src={logo}
            alt="logo"
            className="w-14 h-14 transform hover:scale-110 transition duration-300"
          />
          <div className="text-4xl font-bold font-notosans tracking-tighter bg-gradient-to-r from-blue-200 to-purple-300 text-transparent bg-clip-text drop-shadow-md">
            GLOBE
          </div>
        </div>
      </div>

      <div className="bg-gray-900 w-full h-14 flex items-center justify-center">
        <div className="w-10/12 md:w-8/12 lg:w-1/2 flex gap-5 overflow-x-auto scroll-snap-x scrollbar-hide px-2 text-white">
          <Tag tag="JavaScript" icon={<FaJs className="text-yellow-400" />} />
          <Tag tag="CSS" icon={<FaCss3Alt className="text-blue-500" />} />
          <Tag tag="HTML" icon={<FaHtml5 className="text-orange-500" />} />
          <Tag tag="React" icon={<FaReact className="text-blue-400" />} />
        </div>
      </div>
    </div>
  );
}
