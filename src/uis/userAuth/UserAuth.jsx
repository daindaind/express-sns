import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import * as S from "./UserAuth.style";
import { useEffect, useState } from "react";

const UserAuth = ({ userLogin, isLoggedIn, userLogout }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userNickname, setUserNickname] = useState();
  const [isUser, setIsUser] = useState(false);

  const resetText = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    const res = userLogout();
    if (res) {
      setEmail("");
      setPassword("");
      setUserNickname("");
      setIsUser(false);
      localStorage.removeItem("nickname");
      localStorage.removeItem("userId");
    }
  };

  useEffect(() => {
    const nickname = localStorage.getItem("nickname");
    setUserNickname(nickname);
  }, [isUser]);

  useEffect(() => {
    const nickname = localStorage.getItem("nickname");
    setUserNickname(nickname);
    setIsUser(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <S.Container>
      <S.LinkButton to="/">
        🥨 <p>EXPRESS SNS</p>
      </S.LinkButton>
      {userNickname ? (
        <>
          <p>반갑습니다, {userNickname}님!</p>
          <S.ButtonLayout>
            <Button title={"로그아웃"} onClick={handleLogout} />
          </S.ButtonLayout>
        </>
      ) : (
        <>
          <S.InputContainer>
            <p>이메일</p>
            <Input
              placeholder={"이메일 입력"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.InputContainer>
          <S.InputContainer>
            <p>비밀번호</p>
            <Input
              type="password"
              placeholder={"비밀번호 입력"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <S.ButtonLayout>
              <Button
                title={"로그인"}
                onClick={() => {
                  userLogin(email, password);
                }}
              />
              <Link to="http://localhost:8001/auth/kakao/callback">
                <Button title={"카카오톡"} />
              </Link>
            </S.ButtonLayout>
            <S.ButtonLayout>
              <Link to="/signup">
                <Button title={"회원가입"} onClick={resetText} />
              </Link>
            </S.ButtonLayout>
          </S.ButtonContainer>
        </>
      )}
    </S.Container>
  );
};

export default UserAuth;
