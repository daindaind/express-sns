import axios from "axios";

const uploadsPostImage = async (formdata) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/post/img`,
      formdata
    );
    console.log(res);
    return res.data.url;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default uploadsPostImage;
