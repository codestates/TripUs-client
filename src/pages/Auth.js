import React from "react";
import styled from "styled-components";

import AuthForm from "../components/Auth/AuthForm";
import { Overlay } from "../components/Auth/Overlay";

const AuthWrapper = styled.div`
  position: absolute;
  width: 70%;
  height: 80%;
  display: flex;
  z-index: 1;
  margin-top: 30px;
  margin-bottom: 4rem;
`;

export const AuthPage = ({ isRightActive, togglePanel }) => {
  return (
    <AuthWrapper className="auth-wrapper">
      <AuthForm rightActive={isRightActive} togglePanel={togglePanel} />
      <Overlay isRightActive={isRightActive} togglePanel={togglePanel} />
    </AuthWrapper>
  );
};
