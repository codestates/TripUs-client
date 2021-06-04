import React, { useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { Page, OuterWrapper, InnerWrapper } from "../styles/DefaultPageSetUp";

import AuthForm from "../components/Auth/AuthForm";
import { Overlay } from "../components/Auth/Overlay";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-center;
  position: relative;
`;

const Auth = styled(Page)`
  min-height: 80%;
  display: flex;
  align-items: center;
`;

const LogInPage = ({ isRightActive, setIsRightActive, setLogin, history }) => {
  useEffect(() => {
    return () => {
      setIsRightActive(false);
    };
  }, []);

  return (
    <Auth>
      <OuterWrapper>
        <InnerWrapper>
          <Wrapper>
            <AuthForm
              rightActive={isRightActive}
              setIsRightActive={setIsRightActive}
              setLogin={setLogin}
              history={history}
            />
            <Overlay
              isRightActive={isRightActive}
              setIsRightActive={setIsRightActive}
            />
          </Wrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Auth>
  );
};

export default withRouter(LogInPage);
