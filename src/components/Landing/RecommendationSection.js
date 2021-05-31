import React from "react";
import styled from "styled-components";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

const cardSectionImgs = {
  HANOI:
    "https://images.unsplash.com/photo-1555921015-5532091f6026?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

  NY: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",

  LONDON:
    "https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",

  JEJU: "https://images.unsplash.com/photo-1581398644564-c46e97d9418a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amVqdXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

  NOW: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",

  PART: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJpcHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

  FULL: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZW5kc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
};

const cardContents = {
  travelCategory: {
    title: "새 친구와 설레는 여행!",
    contents: [
      { tag: "바로동행", img_src: cardSectionImgs.NOW },
      { tag: "부분동행", img_src: cardSectionImgs.PART },
      { tag: "전체동행", img_src: cardSectionImgs.FULL },
    ],
  },
  recommendation: {
    title: "트립어스 사용자가 사랑하는 여행지",
    contents: [
      { tag: "하노이", img_src: cardSectionImgs.HANOI },
      { tag: "뉴욕", img_src: cardSectionImgs.NY },
      { tag: "런던", img_src: cardSectionImgs.LONDON },
      { tag: "제주도", img_src: cardSectionImgs.JEJU },
    ],
  },
};

// section style
const RecommendationSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 6rem;

  .title {
    font-weight: 700;
    margin-bottom: 2rem;
    font-size: calc(1.25rem + 1vw);
    word-break: keep-all;
    color: #333;
  }

  .cards {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 911px) {
      flex-direction: column;
    }
  }
`;

// card component style
const CardContainer = styled.div`
  min-height: 17rem;
  position: relative;
  background-image: ${(props) =>
    props.background
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${props.background})`
      : null};

  &:hover {
    background-image: ${(props) =>
      props.background
        ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)),
    url(${props.background})`
        : null};
  }

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 911px) {
    width: calc(100% - 2rem);
    margin-top: 1rem;
  }

  @media (min-width: 911px) {
    width: ${(props) =>
      props.size === "4" ? "calc(25% - 1rem)" : "calc(33% - 1rem)"};
  }

  .title {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    color: #f5f5f5;
    margin: 0;
    padding: 1.5rem;

    @media (max-width: 911px) {
      font-size: calc(1.25rem + 1vw);
    }

    @media (min-width: 911px) {
      font-size: calc(0.8rem + 1vw);
    }
  }
`;

// card component
const Card = ({ tag, background, size }) => {
  return (
    <CardContainer background={background} size={size}>
      <h2 className="title">{tag}</h2>
    </CardContainer>
  );
};

// section
const RecommendationSection = ({ type, size }) => {
  const cards = cardContents[type].contents.map((content) => {
    return (
      <Card
        key={content.tag}
        tag={content.tag}
        background={content.img_src}
        size={size}
      />
    );
  });

  return (
    <Page color={"#ffffff"}>
      <OuterWrapper>
        <InnerWrapper>
          <RecommendationSectionWrapper>
            <div className="title">{cardContents[type].title}</div>
            <div className="cards">{cards}</div>
          </RecommendationSectionWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default RecommendationSection;
