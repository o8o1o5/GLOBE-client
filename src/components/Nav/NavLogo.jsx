import logo from "../../assets/images/logo.png";

export default function NavLogo() {
  return (
    <div className="flex items-center gap-3 grow">
      <img
        src={logo}
        alt="logo"
        className="w-14 h-14 transform hover:scale-110 transition duration-300"
      />
      <div className="text-4xl font-bold font-notosans tracking-tighter bg-gradient-to-r from-blue-200 to-purple-300 text-transparent bg-clip-text drop-shadow-md">
        GLOBE
      </div>

      <div className="border-white border-2 p-[2px] pr-3 pl-3 opacity-70 rounded-full">
        <div className="text-2xl font-bold font-notosans tracking-tighter bg-gradient-to-r from-blue-200 to-purple-300 text-transparent bg-clip-text drop-shadow-md">
          EarlyAccess
        </div>
      </div>
    </div>
  );
}
