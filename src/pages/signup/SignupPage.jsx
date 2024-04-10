import join from "../../api/auth/join";
import Signup from "../../uis/signup/Signup";

const SignupPage = () => {
  const signup = async (email, password, nickname) => {
    const res = await join(email, password, nickname);
    if (res) {
      console.log(res);
    }
  };

  return (
    <>
      <Signup signup={signup} />
    </>
  );
};

export default SignupPage;
