import { Link } from "react-router-dom";

export default function LoginCard() {
  const onLoginClick = () => {
    alert("미구현임ㅋㅋ");
  };

  const onFindClick = () => {
    alert("미구현인뎅.. 관리자에게 연락하세여 아디비번 알려드림");
  };

  const onSignUpClick = () => {
    alert("되겠냐? ㅋㅋ");
  };

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
        <button
          onClick={onLoginClick}
          className="p-2 bg-blue-400 rounded-b-lg text-white font-medium hover:bg-blue-500 "
        >
          Login
        </button>
        <div className="text-blue-400 text-sm flex justify-between mt-[-4px]">
          <Link onClick={onFindClick} className="hover:underline">
            아이디 & 비밀번호 찾기
          </Link>
          <Link onClick={onSignUpClick} className="hover:underline">
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}
