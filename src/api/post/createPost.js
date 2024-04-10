import axios from "axios";

const createPost = async (content, img, userId) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/post`,
      {
        content: content,
        url: img,
        id: userId,
      },
      { withCredentials: true }
    );

    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default createPost;
