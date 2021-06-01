import React from "react";
import styled from "styled-components";

import {
  Page,
  OuterWrapper,
  InnerWrapper,
} from "../../styles/DefaultPageSetUp";

import verified from "../../images/verified.png";
import question from "../../images/question.png";

const Contents = {
  first: {
    title: "낯선 이와 안전한 여행을?",
    text: {
      first:
        "낯선 이들과 함께 여행을 하며 멋진 추억을 만드는 것은 여행의 큰 즐거움 중 하나입니다.",
      second:
        "하지만 낯선 이와 함께 여행을 한다는 것은 분명 어느 정도 위험을 감수해야 하는 일이기도 합니다.",
    },
    image: question,
  },
  second: {
    title: "트립어스로 믿을 수 있는 사람과 함께 여행을!",
    text: {
      first:
        "트립어스는 모바일, 이메일 본인인증을 통해 동행 시 일어날 수 있는 위험을 최소화 해줍니다.",
      second:
        "신원 인증이 된 트립어스 유저들과 함께 안전한 여행을 계획해보시길 바랍니다!",
    },
    image: verified,
  },
};

const ExplainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 911px) {
    justify-content: space-between;
    min-height: 23rem;
  }

  @media (max-width: 911px) {
    flex-direction: column;
    justify-content: center;
    min-height: 30rem;
  }
`;

const IllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 911px) {
    width: calc(40% - 2rem);
  }

  @media (max-width: 911px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  img {
    width: 85%;

    @media (max-width: 911px) {
      width: 65%;
    }
  }
`;

const TextWrapper = styled.div`
  width: calc(60% - 2rem);
  word-break: keep-all;

  @media (max-width: 911px) {
    width: 80%;
  }

  h3 {
    color: #333;
    font-size: calc(1rem + 1vw);
  }

  p {
    color: #707070;
    font-size: cacl(1rem + 0.5vw);
  }
`;

const Story = ({ type }) => {
  return (
    <Page color={"#fff"}>
      <OuterWrapper>
        <InnerWrapper>
          <ExplainWrapper>
            <IllustrationWrapper>
              <img src={Contents[type].image} alt={Contents[type].title} />
            </IllustrationWrapper>
            <TextWrapper>
              <h3>{Contents[type].title}</h3>
              <p>{Contents[type].text.first}</p>
              <p>{Contents[type].text.second}</p>
            </TextWrapper>
          </ExplainWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </Page>
  );
};

export default Story;
