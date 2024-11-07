import { useState } from "react";
import DOMAIN from "../../../assets/resources/domain";
import { useNavigate } from "react-router-dom";

export default function RegisterCard() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordRe, setUserPasswordRe] = useState("");
  const [nonValidId, setNonValidId] = useState("");
  const [nonValidPassword, setNonValidPassword] = useState("");
  const [nonValidPasswordRe, setNonValidPasswordRe] = useState("");

  const onIdInputChange = (e) => {
    setUserId(e.target.value);
  };
  const onPasswordInputChange = (e) => {
    setUserPassword(e.target.value);
  };
  const onPasswordReInputChange = (e) => {
    setUserPasswordRe(e.target.value);
  };

  const validTestId = (userId) => {
    const validId = /^[A-Za-z0-9]{6,20}$/;
    const isValid = validId.test(userId);
    return isValid;
  };
  const validTestPassword = (userPassword) => {
    const validPassword = /^[A-Za-z0-9]{8,20}$/;
    const isValid = validPassword.test(userPassword);
    return isValid;
  };
  const validTestPasswordRe = (userPasswordRe) => {
    const validPasswordRe = userPassword;
    const isValid = validPasswordRe === userPasswordRe;
    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const nonValid =
      !userId ||
      !userPassword ||
      !userPasswordRe ||
      !validTestId(userId) ||
      !validTestPassword(userPassword) ||
      !validTestPasswordRe(userPasswordRe);

    if (nonValid) {
      if (!userPasswordRe) {
        setNonValidPasswordRe("비밀번호를 재입력해주세요");
      }
      if (!validTestId(userId)) {
        setNonValidId(
          userId
            ? "아이디는 6자 ~ 20자 영문이어야 합니다"
            : "아이디를 입력해주세요"
        );
      }
      if (!validTestPassword(userPassword)) {
        setNonValidPassword(
          userPassword
            ? "비밀번호는 영문, 숫자 포함 8자 ~ 20자여야 합니다"
            : "비밀번호를 입력해주세요"
        );
      }
      if (!validTestPasswordRe(userPasswordRe)) {
        setNonValidPasswordRe("비밀번호가 맞지 않습니다");
      }
      return;
    } else {
      setNonValidId("");
      setNonValidPassword("");
      setNonValidPasswordRe("");

      const response = await fetch(`${DOMAIN}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, userPassword }),
      });

      if (response.ok) {
        setUserId("");
        setUserPassword("");
        setUserPasswordRe("");

        alert("회원가입 성공!");

        navigate("/");
      }
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="gap-10 font-notosanskr max-w-5xl w-3/4 flex flex-col bg-white p-14 border rounded-lg shadow-md"
    >
      <div>
        <div className="text-4xl font-semibold mb-2">회원가입</div>
        <div className="text-gray-500 text-xl">
          회원이 되어 게시글 & 댓글을 작성하세요!
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div>
            <label className="text-lg ml-2 font-semibold">아이디</label>
            <span className="ml-3 text-red-500">{nonValidId}</span>
          </div>
          <input
            onChange={onIdInputChange}
            value={userId}
            className="text-lg p-2 pl-4 pr-4 border-4 rounded-xl"
            placeholder="아이디 입력 (6 ~ 20자 영문)"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <label className="text-lg ml-2 font-semibold">비밀번호</label>
            <span className="ml-3 text-red-500">{nonValidPassword}</span>
          </div>
          <input
            onChange={onPasswordInputChange}
            value={userPassword}
            type="password"
            className="text-lg p-2 pl-4 pr-4 border-4 rounded-xl"
            placeholder="비밀번호 입력 (영문, 숫자 포함 8 ~ 20자)"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <label className="text-lg ml-2 font-semibold">비밀번호 확인</label>
            <span className="ml-3 text-red-500">{nonValidPasswordRe}</span>
          </div>
          <input
            onChange={onPasswordReInputChange}
            value={userPasswordRe}
            type="password"
            className="text-lg p-2 pl-4 pr-4 border-4 rounded-xl"
            placeholder="비밀번호 재입력"
          ></input>
        </div>
      </div>
      <div className="mt-8 p-1 w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl">
        <button className="font-semibold text-xl p-2 w-full bg-gradient-to-r from-blue-50 to-purple-100 rounded-lg text-transparent bg-clip-text">
          가입하기
        </button>
      </div>
    </form>
  );
}
