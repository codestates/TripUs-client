import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import AuthForm from "../components/Auth/AuthForm";
import { Overlay } from "../components/Auth/Overlay";

const AuthWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  word-break: keep-all;

  @media (max-width: 911px) {
    height: 100%;
  }

  @media (max-height: 700px) {
    height: 110%;
  }

  @media (max-height: 600px) {
    height: 120%;
  }

  .inner-wrapper {
    position: relative;
    height: 100%;

    @media (max-width: 911px) {
      width: 90%;
    }

    @media (min-width: 911px) {
      width: 80%;
    }
  }
`;

const AuthPage = ({ isRightActive, togglePanel, setLogin, history }) => {
  return (
    <AuthWrapper className="auth-wrapper">
      <div className="inner-wrapper">
        <AuthForm
          rightActive={isRightActive}
          togglePanel={togglePanel}
          setLogin={setLogin}
          history={history}
        />
        <Overlay isRightActive={isRightActive} togglePanel={togglePanel} />
      </div>
    </AuthWrapper>
  );
};

export default withRouter(AuthPage);
