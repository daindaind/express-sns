import { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import * as S from "./Signup.style";
import { useNavigate } from "react-router-dom";

const Signup = ({ signup }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nickname, setNickname] = useState();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.InputContainer>
        <div>
          <p>이메일</p>
          <Input
            placeholder={"이메일 입력"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>닉네임</p>
          <Input
            placeholder={"닉네임 입력"}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <p>비밀번호</p>
          <Input
            type={"password"}
            placeholder={"비밀번호 입력"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </S.InputContainer>
      <Button
        title={"회원가입"}
        onClick={() => {
          const res = signup(email, nickname, password);
          if (res) {
            setEmail("");
            setNickname("");
            setPassword("");
            alert("회원가입 되었음");
            navigate("/");
          }
        }}
      />
    </S.Container>
  );
};

export default Signup;
