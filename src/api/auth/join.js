import axios from "axios";

const join = async (email, nickname, password) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/join`,
      {
        email: email,
        nick: nickname,
        password: password,
      }
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default join;
