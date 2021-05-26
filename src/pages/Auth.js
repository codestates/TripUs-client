import React from "react";
import styled from "styled-components";

import AuthForm from "../components/Auth/AuthForm";
import { Overlay } from "../components/Auth/Overlay";

const AuthWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .inner-wrapper {
    position: relative;
    width: 80%;
    height: 100%;
    border: 1px solid black;
  }
`;

export const AuthPage = ({ isRightActive, togglePanel, setIsLogIn }) => {
  return (
    <AuthWrapper className="auth-wrapper">
      <div className="inner-wrapper">
        <AuthForm
          rightActive={isRightActive}
          togglePanel={togglePanel}
          setIsLogIn={setIsLogIn}
        />
        <Overlay isRightActive={isRightActive} togglePanel={togglePanel} />
      </div>
    </AuthWrapper>
  );
};
