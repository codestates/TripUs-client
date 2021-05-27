import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import AuthForm from "../components/Auth/AuthForm";
import { Overlay } from "../components/Auth/Overlay";

const AuthWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 300px;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  word-break: keep-all;

  .inner-wrapper {
    position: relative;
    width: 80%;
    height: 90%;
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
