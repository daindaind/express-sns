import axios from "axios";

const getHashtagPost = async (hashtag) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/post/hashtag?hashtag=${hashtag}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getHashtagPost;
