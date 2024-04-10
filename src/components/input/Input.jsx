import * as S from "./Input.style";

const Input = ({ value, onChange, type, placeholder }) => {
  return (
    <S.InputContainer
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
