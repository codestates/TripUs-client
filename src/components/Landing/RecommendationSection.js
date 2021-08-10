import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

const cardSectionImgs = {
  JAPAN:
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

  SPAIN:
    "https://images.unsplash.com/photo-1587789202069-f57c846b85db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcmNlbG9uYXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

  FRANCE:
    "https://images.unsplash.com/photo-1584266337361-679ae80c8519?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcmlzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

  THAILAND:
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

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
      { tag: "일본", img_src: cardSectionImgs.JAPAN },
      { tag: "스페인", img_src: cardSectionImgs.SPAIN },
      { tag: "프랑스", img_src: cardSectionImgs.FRANCE },
      { tag: "태국", img_src: cardSectionImgs.THAILAND },
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
    font-size: calc(1rem + 1vw);
    word-break: keep-all;
    color: #333;

    @media (max-width: 911px) {
      text-align: center;
    }
  }

  .cards {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 911px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

// card component style
const CardContainer = styled.div`
  min-height: 14rem;
  max-height: 250px;
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
    padding: 1.7rem;

    @media (max-width: 911px) {
      font-size: calc(1.25rem + 1vw);
    }

    @media (min-width: 911px) {
      font-size: calc(0.8rem + 1vw);
    }
  }
`;

// card component
const Card = ({ tag, background, size, handleClick }) => {
  const history = useHistory();

  return (
    <CardContainer
      background={background}
      size={size}
      onClick={() => {
        handleClick(tag);
        history.push("/search");
      }}
    >
      <h2 className="title">{tag}</h2>
    </CardContainer>
  );
};

// section
const RecommendationSection = ({
  type,
  size,
  setDestination,
  setReturnDate,
  setDepartureDate,
  setTravelType,
}) => {
  const handleClick = (tag) => {
    if (type === "travelCategory") {
      setTravelType(tag);
      setReturnDate(null);
      setDepartureDate(null);
      setDestination("");
    } else {
      setTravelType("");
      setReturnDate(null);
      setDepartureDate(null);
      setDestination(tag);
    }
  };
  const cards = cardContents[type].contents.map((content) => {
    return (
      <Card
        key={content.tag}
        tag={content.tag}
        background={content.img_src}
        size={size}
        handleClick={handleClick}
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
