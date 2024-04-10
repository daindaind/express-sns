import axios from "axios";

const login = async (email, password) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/login`,
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
    if (res) {
      console.log(res.data);
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("nickname", res.data.nickname);
    }
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default login;
