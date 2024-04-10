import { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import * as S from "./Search.style";

const Search = ({ searchByHashtag }) => {
  const [hashtag, setHashtag] = useState();

  return (
    <S.Container>
      <Input
        placeholder={"태그 검색"}
        value={hashtag}
        onChange={(e) => setHashtag(e.target.value)}
      />
      <Button title={"검색"} onClick={() => searchByHashtag(hashtag)} />
    </S.Container>
  );
};

export default Search;
