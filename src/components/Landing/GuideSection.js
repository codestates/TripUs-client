import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiMagnifyingGlass } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

// section style
const GuideSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #f5f5f5;
  word-break: keep-all;

  .section-title {
    font-size: calc(1rem + 1.5vw);
    font-weight: 700;
  }

  .content-area {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;

    @media (max-width: 911px) {
      flex-direction: column;
    }
  }
`;

// guide style
const StyledGuide = styled(Link)`
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #f5f5f5;
  text-decoration: none;
  border: ridge;

  @media (max-width: 911px) {
    width: 80%;
  }

  & + & {
    @media (min-width: 911px) {
      margin-left: 2rem;
    }

    @media (max-width: 911px) {
      margin-top: 2rem;
    }
  }

  .icon-wrapper {
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    border-right: 1px solid #f5f5f5;

    @media (max-width: 911px) {
      font-size: 2rem;
    }
  }

  .text-wrapper {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .guide-title {
      font-size: calc(0.9rem + 1vw);
    }
  }

  &:hover {
    background-color: #495c72;
  }
`;

// guide contents
const GuideContents = {
  find: {
    title: "모임 탐색하기",
    icon: <GiMagnifyingGlass />,
  },
  recruit: {
    title: "여행 시작하기",
    icon: <AiOutlinePlus />,
  },
};

// guide component
const Guide = ({ type, to }) => {
  return (
    <StyledGuide to={to}>
      <div className="icon-wrapper">{GuideContents[type].icon}</div>
      <div className="text-wrapper">
        <h3 className="guide-title">{GuideContents[type].title}</h3>
      </div>
    </StyledGuide>
  );
};

// section
const GuideSection = () => {
  return (
    <Page height={40} color={"#1c334f"}>
      <OuterWrapper>
        <InnerWrapper>
          <GuideSectionWrapper>
            <div className="section-title">TripUs를 완벽히 즐기는 방법!</div>
            <div className="content-area">
              <Guide type="find" to="/search" />
              <Guide type="recruit" to="/submit" />
            </div>
          </GuideSectionWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default GuideSection;
