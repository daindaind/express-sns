import * as S from "./Button.style";

const Button = ({ title, onClick }) => {
  return <S.ButtonContainer onClick={onClick}>{title}</S.ButtonContainer>;
};

export default Button;
