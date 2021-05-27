import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import AuthForm from "../components/Auth/AuthForm";
import { Overlay } from "../components/Auth/Overlay";

const AuthWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
  margin-top: 1vw;
  margin-bottom: 3vw;

  .inner-wrapper {
    position: relative;
    width: 80%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
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
