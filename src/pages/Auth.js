import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { Page, OuterWrapper, InnerWrapper } from "../styles/DefaultPageSetUp";

import AuthForm from "../components/Auth/AuthForm";
import { Overlay } from "../components/Auth/Overlay";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const AuthPage = ({ isRightActive, togglePanel, setLogin, history }) => {
  return (
    <Page height={100}>
      <OuterWrapper>
        <InnerWrapper>
          <Wrapper>
            <AuthForm
              rightActive={isRightActive}
              togglePanel={togglePanel}
              setLogin={setLogin}
              history={history}
            />
            <Overlay isRightActive={isRightActive} togglePanel={togglePanel} />
          </Wrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default withRouter(AuthPage);
