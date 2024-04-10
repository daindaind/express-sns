import axios from "axios";

const logout = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/auth/logout`,
      { withCredentials: true }
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default logout;
