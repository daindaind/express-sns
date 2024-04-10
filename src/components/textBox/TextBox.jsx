import * as S from "./TextBox.style";

const TextBox = ({ placeholder, value, onChange }) => {
  return (
    <S.TextBoxContainer onChange={onChange} rows={1} placeholder={placeholder}>
      {value}
    </S.TextBoxContainer>
  );
};
export default TextBox;
