export default function LoginCard() {
  return (
    <div className="font-notosanskr flex flex-col bg-white p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">로그인</h2>
      <form className="grow flex flex-col gap-2 font-notos">
        <input
          className="focus:outline-none rounded-t-lg pl-3 p-2 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-300 transition"
          placeholder="ID"
        />
        <input
          type="password"
          className="focus:outline-none pl-3 p-2 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-300 transition"
          placeholder="Password"
        />
        <div className="flex w-full gap-[6px]">
          <button className="p-2 w-1/2 bg-blue-400 rounded-bl-lg text-white font-medium hover:bg-blue-500 ">
            Login
          </button>
          <button className="p-2 w-1/2 bg-blue-400 rounded-br-lg text-white font-medium hover:bg-blue-500">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
