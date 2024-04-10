import { Outlet } from "react-router-dom";
import UserAuth from "../uis/userAuth/UserAuth";
import styled from "styled-components";
import login from "../api/auth/login";
import { useState } from "react";
import logout from "../api/auth/logout";

const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100vw;
  height: 100vh;
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const userLogin = async (email, password) => {
    const res = await login(email, password);
    if (res.id) {
      setIsLoggedIn(true);
    }
  };

  const userLogout = async () => {
    const res = await logout();
    if (res) {
      setIsLoggedIn(false);
    }
  };

  return (
    <AppLayoutContainer>
      <div>
        <UserAuth
          userLogin={userLogin}
          isLoggedIn={isLoggedIn}
          userLogout={userLogout}
        />
      </div>
      <ContentsContainer>
        <Outlet />
      </ContentsContainer>
    </AppLayoutContainer>
  );
};

export default AppLayout;
