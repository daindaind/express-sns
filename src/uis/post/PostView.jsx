import * as S from "./PostView.style";

const PostView = ({ posts }) => {
  return (
    <>
      {posts.map((item) => (
        <S.Container key={item.id}>
          <h3>{item.content}</h3>
          {item.img && <img src={import.meta.env.VITE_SERVER_URL + item.img} />}
          <p>작성자: {item.User.nick}</p>
          <p>작성일 : {item.createdAt}</p>
        </S.Container>
      ))}
    </>
  );
};

export default PostView;
