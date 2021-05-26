import React from "react";
import styled from "styled-components";

import AuthForm from "../components/Auth/AuthForm";
import { Overlay } from "../components/Auth/Overlay";

const AuthWrapper = styled.div`
  position: absolute;
  padding-top: 90px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
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
