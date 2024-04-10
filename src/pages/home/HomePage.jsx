import * as S from "./HomePage.style";
import { useEffect, useState } from "react";
import Search from "../../uis/search/Search";
import getAllPosts from "../../api/post/getAllPosts";
import createPost from "../../api/post/createPost";
import PostBox from "../../uis/post/PostBox";
import PostView from "../../uis/post/PostView";
import getHashtagPost from "../../api/post/getHashtagPost";

const HomePage = () => {
  const [posts, setPosts] = useState();

  const uploadPost = async (content, img, userId) => {
    if (!userId) {
      alert("로그인을 먼저 해주세요.");
    } else {
      const res = await createPost(content, img, userId);
      if (res) {
        console.log(res);
        return res;
      }
    }
  };

  const searchByHashtag = async (hashtag) => {
    if (!hashtag) {
      alert("태그를 입력해주세요.");
    } else {
      const res = await getHashtagPost(hashtag);
      if (res) {
        setPosts(res);
        return res;
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllPosts();
      if (res) {
        console.log(res);
        setPosts(res);
      }
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <Search searchByHashtag={searchByHashtag} />
      <PostBox uploadPost={uploadPost} />
      {posts && posts.length >= 1 ? (
        <PostView posts={posts} />
      ) : (
        <p>게시물이 없습니다.</p>
      )}
    </S.Container>
  );
};

export default HomePage;
