import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

const IMG_URL =
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRvZ2V0aGVyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const LeaderSectionWrapper = styled.div`
  font-family: "Nanum Gothic";
  width: 100%;
  height: 100%;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: keep-all;

  .title {
    font-weight: 700;
    font-size: calc(1.5rem + 0.75vw);
    margin-bottom: 2rem;
  }

  .text {
    font-size: calc(1rem + 0.75vw);
    width: 40%;
    line-height: 1.5;

    @media (max-width: 911px) {
      width: 70%;
    }
  }

  button {
    outline: none;
    display: block;
    padding: 1rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    border: none;
    color: #fff;
    background: rgb(24, 51, 79);
    width: 20%;
    margin-top: 2rem;

    &:hover {
      background: #495c72;
    }

    @media (max-width: 911px) {
      width: 50%;
    }
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.95);
  }
`;

const LeaderSection = () => {
  return (
    <Page background={IMG_URL} height={100} position={"bottom"} overlay={0.4}>
      <OuterWrapper>
        <InnerWrapper>
          <LeaderSectionWrapper>
            <div className="title">여행원을 모집해보세요!</div>
            <div className="text">
              새로운 사람과 새로운 장소에서 특별한 추억을 만들어 보시길
              바랍니다.
            </div>
            <button type="button">
              <Link to="/submit">시작하기</Link>
            </button>
          </LeaderSectionWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default LeaderSection;
