import axios from "axios";

const getAllPosts = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/post`);
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getAllPosts;
