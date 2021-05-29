import React from "react";
import styled from "styled-components";

import { cardContents } from "./LandingPageCardSectionUtils";

const CardComponent = styled.div`
  padding: 0;
  margin: 0;
  border-radius: 5px;
  position: relative;
  flex-grow: 1;

  @media (max-width: 910px) {
    width: 100%;
    max-height: 240px;

    & + & {
      margin-top: 16px;
    }

    &:last-of-type {
      margin-bottom: 16px;
    }
  }

  @media (min-width: 910px) {
    margin-top: 0px;
    min-height: 11rem;

    & + & {
      margin-left: 16px;
    }
  }

  .img-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      display: block;
      height: 100%;
      width: 100%;
    }

    .tag-wrapper {
      font-weight: 700;
      margin: 0;
      padding: 0;

      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 30%
      );

      background-size: cover;
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;

      p {
        padding-left: 2rem;
        color: rgba(255, 255, 255, 0.96);
        font-size: calc(0.4rem + 1.4vw);

        @media (max-width: 910px) {
          font-size: calc(0.4rem + 2.5vw);
        }
      }
    }
  }
`;

const Card = ({ tag, img_src }) => {
  return (
    <CardComponent>
      <div className="img-wrapper">
        <img src={img_src} alt="" />
        <div className="tag-wrapper">
          <p>{tag}</p>
        </div>
      </div>
    </CardComponent>
  );
};

const LandingCardSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  transition: width 0.3s ease;
  margin-top: 3rem;

  @media (min-width: 911px) {
    max-height: 230px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 911px) {
      width: 90%;
    }

    @media (min-width: 911px) {
      width: 75%;
    }
  }

  h2 {
    width: 90%;
    text-align: left;
    word-break: keep-all;
    font-size: calc(0.5rem + 1vw);

    @media (max-width: 910px) {
      font-size: calc(0.8rem + 2vw);
    }
  }

  .cards {
    position: relative;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 911px) {
      flex-direction: row;
      max-height: 20rem;
    }
  }
`;

const LandingPageCardSection = ({ type }) => {
  const cards = cardContents[type].contents.map((content) => {
    return (
      <Card key={content.tag} tag={content.tag} img_src={content.img_src} />
    );
  });

  return (
    <LandingCardSection>
      <div className="wrapper">
        <h2>{cardContents[type].title}</h2>
        <div className="cards">{cards}</div>
      </div>
    </LandingCardSection>
  );
};

export default LandingPageCardSection;
