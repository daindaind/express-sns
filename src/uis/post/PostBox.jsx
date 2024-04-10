import { useState } from "react";
import Button from "../../components/button/Button";
import TextBox from "../../components/textBox/TextBox";
import * as S from "./PostBox.style";
import uploadsPostImage from "../../api/post/uploadPostImage";

const PostBox = ({ uploadPost }) => {
  const userId = localStorage.getItem("userId");
  const [content, setContent] = useState();
  const [img, setImg] = useState();

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    const formdata = new FormData();
    formdata.append("img", selectedFile);

    const res = await uploadsPostImage(formdata);
    if (res) {
      setImg(res);
    }
  };

  return (
    <S.Container>
      <TextBox
        placeholder={"내용을 입력해주세요."}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <S.ButtonContainer>
        <input type="file" onChange={handleFileChange} />
        <Button
          title={"올리기"}
          onClick={async () => {
            try {
              const res = await uploadPost(content, img, userId);
              if (res) {
                alert("게시글이 작성되었습니다.");
                setContent("");
                setImg("");
              }
            } catch (error) {
              console.error(error);
            }
          }}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default PostBox;
