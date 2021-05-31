import React from "react";
import styled from "styled-components";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

const IMG_URL =
  "https://images.pexels.com/photos/1624561/pexels-photo-1624561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const SloganWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f6f6f6;
  word-break: keep-all;

  .title {
    font-weight: 700;
    margin-bottom: 2rem;

    @media (min-width: 911px) {
      letter-spacing: 0.25rem;
      font-size: calc(2rem + 1vw);
    }

    @media (max-width: 911px) {
      letter-spacing: 0.2rem;
      font-size: calc(1.5rem + 1vw);
    }
  }

  .text {
    width: 60%;

    p {
      font-size: calc(0.8rem + 1vw);
    }
  }
`;

const Slogan = () => {
  return (
    <Page background={IMG_URL} height={60} overlay={0.3}>
      <OuterWrapper>
        <InnerWrapper>
          <SloganWrapper>
            <div className="title">모두의 안전한 동행을 위해!</div>
          </SloganWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default Slogan;
