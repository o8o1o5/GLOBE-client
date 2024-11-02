import logo from "../assets/logo.png";

export default function Topbar() {
  return (
    <div className="h-16 bg-slate-500 w-screen flex items-center justify-center gap-5 shadow-md mb-10">
      <div className="flex flex-row items-center gap-5 w-1/2">
        <img src={logo} alt="logo" className="w-16"></img>
        <div className="text-5xl font-bebasneue mt-[5px] text-slate-900">
          GLOBE
        </div>
      </div>
    </div>
  );
}
