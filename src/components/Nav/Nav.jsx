import icons from "../../assets/resources/icons";
import NavLogo from "./NavLogo";
import NavUserInfo from "./NavUserInfo";
import NavCommunityTag from "./NavCommunityTag";

export default function Nav() {
  return (
    <div className="mb-10 w-full">
      <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
        <div className="flex items-center w-10/12 md:w-2/3 lg:w-2/3">
          <NavLogo></NavLogo>

          {/*<NavUserInfo></NavUserInfo>*/}
        </div>
      </div>
      <div className="bg-gradient-to-tr from-gray-900 to-gray-800 h-14 flex items-center justify-center">
        <div className="w-10/12 md:w-2/3 lg:w-2/3 flex gap-5 overflow-x-auto scroll-snap-x scrollbar-hide px-2 text-white">
          <NavCommunityTag
            tag="dcinside"
            icon={<img src={icons.dcinside} className="w-5 h-5"></img>}
          />
          <NavCommunityTag
            tag="reddit"
            icon={<img src={icons.reddit} className="w-5 h-5"></img>}
          />
        </div>
      </div>
    </div>
  );
}
