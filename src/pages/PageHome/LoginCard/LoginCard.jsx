import { Link, useParams } from "react-router-dom";
import DOMAIN from "../../../assets/resources/domain";
import { useState } from "react";

export default function LoginCard({ setUser }) {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onFindClick = () => {
    alert("미구현인뎅.. 관리자에게 연락하세여 아디비번 알려드림");
  };

  const onIdChange = (e) => {
    setIdValue(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("userId:", idValue);
    console.log("userPassword:", passwordValue);

    const response = await fetch(`${DOMAIN}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: idValue, userPassword: passwordValue }),
    });

    if (response.ok) {
      const result = await response.json();
      alert(`${result.userId}로 로그인 되었습니다!`);
      setUser(result);
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className="font-notosanskr flex flex-col bg-white p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">로그인</h2>
      <form onSubmit={onSubmit} className="grow flex flex-col gap-2 font-notos">
        <input
          onChange={onIdChange}
          value={idValue}
          className="focus:outline-none rounded-t-lg pl-3 p-2 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-300 transition"
          placeholder="ID"
        />
        <input
          onChange={onPasswordChange}
          value={passwordValue}
          type="password"
          className="focus:outline-none pl-3 p-2 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-300 transition"
          placeholder="Password"
        />
        <button className="p-2 bg-blue-400 rounded-b-lg text-white font-medium hover:bg-blue-500 ">
          Login
        </button>
        <div className="text-blue-400 text-sm flex justify-between mt-[-4px]">
          <Link onClick={onFindClick} className="hover:underline">
            아이디 & 비밀번호 찾기
          </Link>
          <Link to={"/register"} className="hover:underline">
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}
